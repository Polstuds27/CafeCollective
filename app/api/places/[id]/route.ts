import { createClient } from "@supabase/supabase-js";
import { bundleResponse } from "@/lib/bundleResponse";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_SUPABASE_SERVICE_KEY!
)


export const revalidate = 3600;
export async function GET(request: Request,
    { params }: { params: Promise<{id:string}> }
){

    const { id } = await params;  
    const key = process.env.NEXT_FOURSQUARE_SERVICE_KEY;

    const fetchUrl = new URL(`https://places-api.foursquare.com/places/${id}`);
    
    const { data, error } = await supabase
    .from("coffee_shops")
    .select("*")
    .eq("fsq_place_id", id)
    .single();

    if(error) console.error("Cache error: ", error.message);

    if(data){
        return Response.json({result: data, source: "cache"});
    }

    fetchUrl.searchParams.set( 
        "fields",
        "fsq_place_id,name,location,latitude,longitude,categories,tel,social_media,date_refreshed,related_places"
    );

    const res = await fetch(
        fetchUrl,
        {
            headers:{
                Accept: "application/json",
                Authorization: `Bearer ${key}`,
                "X-Places-Api-Version": "2025-06-17"
            },           
        }
    );

    const apiData = await res.json();

    if(!apiData){
        return Response.json({result:{}, source: "api"});
    }

    const rows = data.results.map((place: any) => ({
        fsq_place_id: place.fsq_place_id,
        name: place.name,
        address: place.location?.formatted_address,
        city: place.location?.locality || null,
        region: place.location?.region,
        lat: place.latitude,
        lng: place.longitude,
        categories: place.categories,
        tel: place.tel || null,
        social_media: place.social_media || null,
        date_refreshed: place.date_refreshed || null,
        related_places: place.related_places || null,
      }));

    const { error: upsertError } = await supabase
    .from("coffee_shops")
    .upsert(rows, { onConflict: "fsq_place_id" });

    if (upsertError) {
    console.error("Supabase upsert error:", upsertError);
    }

    return Response.json({result: bundleResponse(apiData), source: "api"});
    
}
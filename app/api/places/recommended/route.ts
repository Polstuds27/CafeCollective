import { createClient } from "@supabase/supabase-js";
import { bundleResponse } from "@/lib/bundleResponse";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_SUPABASE_SERVICE_KEY!
);

export const revalidate = 3600;
export async function GET(request: Request){
    const key = process.env.NEXT_FOURSQUARE_SERVICE_KEY;

    const fetchUrl = new URL("https://places-api.foursquare.com/places/search");
    const city = "Manila";
    const keyword = "coffee";

    const {data: cached, error} = await supabase
    .from("coffee_shops")
    .select("*")
    .or("city.ilike.%Manila%,city.ilike.%Maynila%")
    .limit(30);

    console.log("Cached count:", cached?.length);
    console.log("Cached sample:", cached?.[0]?.city); 
    console.log("Cache error:", error);

    if (error) console.error("Cache error:", error.message);

    if (cached && cached.length > 0) {
        return Response.json({ results: cached.map(bundleResponse), source: "cache" });
    }

    fetchUrl.searchParams.set("query", keyword);
    fetchUrl.searchParams.set(`near`, `${city}, Philippines`);
    fetchUrl.searchParams.set("categories", "13032,13035");
    fetchUrl.searchParams.set("limit", "30");
    fetchUrl.searchParams.set(
        "fields",
        "fsq_place_id,name,location,latitude,longitude,categories,tel,social_media,date_refreshed,related_places"
    );

    const res = await fetch(
        fetchUrl,
        {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${key}`,
            "X-Places-Api-Version": "2025-06-17"
        },
        }
    );

    const data = await res.json();

    if(!data.results || data.results.length === 0){
        return Response.json({result: [],  source: "api"});
    };

    const rows = data.results.map((place: any) => ({
        fsq_place_id: place.fsq_place_id,
        name: place.name,
        address: place.location?.formatted_address,
        city: place.location?.locality || city,
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

  return Response.json({results: rows.map(bundleResponse), source: "api"});
}
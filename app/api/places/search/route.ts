
import { parseSearchQuery } from "@/lib/parseSearchQuery";


export async function GET(request: Request) {
  const key = process.env.NEXT_FOURSQUARE_SERVICE_KEY;
  const {searchParams} = new URL(request.url);
  const raw = searchParams.get("q") || "coffee manila";

  const {city, keyword} = parseSearchQuery(raw);

  const fetchUrl = new URL("https://places-api.foursquare.com/places/search");

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
  return Response.json(data);
}
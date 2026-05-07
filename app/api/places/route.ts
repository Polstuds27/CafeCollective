type FoursquarePlace = {
  fsq_place_id: string;
  name: string;
  latitude: number;
  longitude: number;

  categories: {
    fsq_category_id: string;
    name: string;
    short_name: string;
    plural_name: string;
    icon?: {
      prefix: string;
      suffix: string;
    };
  }[];

  location?: {
    address?: string;
    locality?: string;
    region?: string;
    postcode?: string;
    country?: string;
    formatted_address?: string;
  };

  distance?: number;
  link?: string;
  tel?: string;
  website?: string;

  date_created?: string;
  date_refreshed?: string;

  social_media?: Record<string, string>;
  related_places?: unknown;
};

export async function GET(request: Request) {
  const key = process.env.NEXT_FOURSQUARE_SERVICE_KEY;
  console.log("Key loaded:", key ? `${key.substring(0, 8)}...` : "UNDEFINED");
  console.log("KEY:", JSON.stringify(process.env.NEXT_FOURSQUARE_SERVICE_KEY));

  const res = await fetch(
    "https://places-api.foursquare.com/places/search" +
    "?query=coffee" +
    "&near=Manila,Philippines" +
    "&limit=1"+
    "&fields=fsq_place_id,name,location,latitude,longitude,categories,tel,social_media,date_refreshed,related_places",

    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${key}`,
        "X-Places-Api-Version": "2025-06-17"
      },
    }
  );

  const data = await res.json();
  console.log("Status:", res.status);
  console.log("Raw FSQ:", JSON.stringify(data, null, 2));

  return Response.json(data);
}
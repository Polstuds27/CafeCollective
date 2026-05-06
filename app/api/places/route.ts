// app/api/places/route.ts
export async function GET(request: Request) {
  const key = process.env.NEXT_FOURSQUARE_SERVICE_KEY;
  console.log("Key loaded:", key ? `${key.substring(0, 8)}...` : "UNDEFINED");
  console.log("KEY:", JSON.stringify(process.env.NEXT_FOURSQUARE_SERVICE_KEY));

  const res = await fetch(
    "https://api.foursquare.com/v3/places/search?query=coffee&near=Manila,Philippines&limit=5",
    {
      headers: {
        Accept: "application/json",
        Authorization: key ?? "",
      },
    }
  );

  const data = await res.json();
  console.log("Status:", res.status);
  console.log("Raw FSQ:", JSON.stringify(data, null, 2));

  return Response.json({ status: res.status, data });
}
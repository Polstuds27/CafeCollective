// app/api/cafes/osm/route.ts
import { NextRequest } from "next/server"

type OSMElement = {
  id: number
  lat: number
  lon: number
  tags?: {
    name?: string
    "addr:street"?: string
    "addr:city"?: string
    "addr:suburb"?: string
    opening_hours?: string
    website?: string
    phone?: string
  }
}

type OverpassResponse = {
  elements: OSMElement[]
}

const MIRRORS = [
  "https://overpass.nchc.org.tw/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.openstreetmap.ru/api/interpreter",
  "https://overpass-api.de/api/interpreter",
]

async function fetchOverpass(query: string): Promise<OverpassResponse> {
  for (const mirror of MIRRORS) {
    try {
      const res = await fetch(mirror, {
        method: "POST",
        body: query,
        signal: AbortSignal.timeout(30000),
      })

      if (!res.ok) continue

      const data = await res.json()
      if (data.elements?.length > 0) return data

    } catch {
      continue  // try next mirror
    }
  }
  throw new Error("All Overpass mirrors failed")
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const place = searchParams.get("place") || "Metro Manila"

    const query = `
      [out:json][timeout:60];
      area["name"="${place}"]->.searchArea;
      (
        node["amenity"="cafe"](area.searchArea);
        node["shop"="coffee"](area.searchArea);
      );
      out body;
    `

    const data = await fetchOverpass(query)

    const cafes = data.elements
      .filter(el => el.tags?.name)  // skip unnamed cafes
      .map(el => ({
        osm_id:        el.id,
        name:          el.tags?.name ?? "Unnamed Cafe",
        lat:           el.lat,
        lng:           el.lon,  // renamed from lon → lng to match your DB
        address:       el.tags?.["addr:street"] ?? null,
        area:          el.tags?.["addr:city"] ??
                       el.tags?.["addr:suburb"] ?? null,
        opening_hours: el.tags?.opening_hours ?? null,
        website:       el.tags?.website ?? null,
        phone:         el.tags?.phone ?? null,
      }))

    return Response.json({
      success: true,
      count: cafes.length,
      place,
      cafes,
    })

  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to fetch cafe data" },
      { status: 500 }
    )
  }
}
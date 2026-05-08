
const ncrCities = [
  "Caloocan",
  "Las Piñas",
  "Makati",
  "Malabon",
  "Mandaluyong",
  "Manila",
  "Marikina",
  "Muntinlupa",
  "Navotas",
  "Parañaque",
  "Pasay",
  "Pasig",
  "Quezon City",
  "San Juan",
  "Taguig",
  "Valenzuela",
  "Pateros"
];

const noiseWords = ["coffee", "shops", "cafe", "cafes", "on", "in", "near", "at", "the"];

export function parseSearchQuery(raw:string){

    const cleanedQuery = raw
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .toLowerCase()
        .substring(0,100)
        .trim();

    const detectedCity = ncrCities.find((city) => cleanedQuery.includes(city));
    
    let keyword = cleanedQuery;
    if(detectedCity){
        keyword = keyword.replace(detectedCity, "");
    }

    noiseWords.forEach((word) => {
        keyword = keyword.replace(new RegExp(`\\b${word}\\b`, "g"), "");
    });
    keyword = keyword.trim();

    return {
        city: detectedCity ? 
            detectedCity.replace(/\b\w/g, (c) => c.toUpperCase())
            : "Manila",
            keyword: keyword || "coffee"
    };

}


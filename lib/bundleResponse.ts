

export function bundleResponse(row: any){
    return {
        id: row.fsq_place_id,
        name: row.name,
        location: {
            address: row.address,
            city: row.city,
            region: row.region,
        },
        coordinates: {
            lat: row.lat,
            lng: row.lng,
        },
        tel: row.tel,
        categories: row.categories,       
        social_media: row.social_media,   
        related_places: row.related_places,
        date_refreshed: row.date_refreshed,
    };
}
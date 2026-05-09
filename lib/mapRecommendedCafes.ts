import {Cafe, CafeCardProps} from "@/types/Cafe";

export function mapCafeToCard(cafe: Cafe): CafeCardProps {
    return{
        id: cafe.id,
        name: cafe.name,
        area: cafe.location?.locality
        ?? cafe.location?.region
        ?? cafe.location?.formatted_address
        ??"Unknown area",
        tags: cafe.categories.map((cat) => cat.name), 
    }
}
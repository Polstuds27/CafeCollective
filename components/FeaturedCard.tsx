
import { Star } from "lucide-react";

type featuredCardProps = {
    name: string,
    area: string,
    rating: number,
    reviewsCount: number
    tags: string[]

}

export default function FeaturedCard({name, area, rating, tags, reviewsCount}: featuredCardProps){
    return(
        <>
            <div className="w-[200px] h-[200px] flex flex-col p-4 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl gap-2">
                <span className="flex justify-between">
                    <h1 className="text-xl text-[#c08b4b] pt-1.5 pb-1.5 pl-3.5 pr-3.5 bg-[#70473f8a] rounded-xl">{name.charAt(0).toUpperCase()}</h1>
                    <span className="flex items-center gap-1.5">
                        <Star
                        fill="#c08b4b"
                        color="#c08b4b"
                        size={12}
                        />
                        <p className="text-sm text-[#c08b4b]">{rating}</p>
                    </span>
                </span>

                <span className="gap-1">
                    <h1 className="text-white font-medium text-md">{name}</h1>
                    <h3 className="text-[#77746c] text-xs">{area}</h3>
                </span>

                <span className="flex flex-wrap w-full gap-1">
                    {tags.map(tag => (
                        <p className="text-[10px]  p-1 bg-[#7a4c418a] rounded-xl">{tag}</p>   
                    ))}
                </span>

                <h1 className="text-[#77746c] text-xs mt-3">{reviewsCount} reviews</h1>
            </div>
        </>
    );
}
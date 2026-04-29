
import { Star, Search, MapPin, Heart, Users, MessageSquare } from "lucide-react";


type informatinCardPorps = {
    type: string,
    title: string,
    description: string
}


export default function InformationCard({type, title, description}: informatinCardPorps){


    function renderIcon(){
        if(type === "star") return <Star/>
        if(type === "search") return <Search/>
        if(type === "mapPin") return <MapPin/>
        if(type === "heart") return <Heart/>
        if(type === "users") return <Users/>
        if(type === "messageSquare") return <MessageSquare/>
    }

    return(
        <>
        <div className="w-[200px] h-[180px]  gap-5 flex flex-col p-4 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl gap-2">
                <span className="flex justify-between">
                    <span className=" text-[#c08b4b] p-3 bg-[#70473f8a] rounded-xl">
                        {renderIcon()} 
                    </span>
                </span>

                <span className="gap-2">
                    <h2 className="text-white font-medium text-md">{title}</h2>
                    <p className="text-[#77746c] text-xs">{description}</p>
                </span>
              
            </div>
        </>
    );
}
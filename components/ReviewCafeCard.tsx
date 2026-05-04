
import StarRating from "./StarRating";

type reviewCafeCardProps = {
    id: number,
    idx: number,
    arraySize: number
    username: string,
    rating: number,
    review: string,
    postedAt: string

}
export default function ReviewCafeCard({id, idx, arraySize, username, rating, review, postedAt}: reviewCafeCardProps){
    
    
    return(
        <div
        className="w-full flex flex-col gap-1">
        <span className="flex justify-between items-center">
            <span className="flex  gap-1.5 items-center">
                <div className="w-8 h-8 flex items-center justify-center text-[#c08b4b] bg-[#70473f8a] rounded-full">
                    <span className="text-md ">{username.charAt(0).toUpperCase()}</span>
                </div>

                <h1 className="text-sm mr-1.5 text-white font-medium">{username}</h1>

                <StarRating
                    size={12}
                    rating={rating}
                />
            </span>
            

            <p className="text-xs">{postedAt}</p>
        </span>

        <p className="text-sm">
            {review}
        </p>
        
        {idx < arraySize - 1 && (
            <div className="w-full h-px bg-[#c08b4b94] mt-1" />
        )}
        
    </div>
    );
    
}
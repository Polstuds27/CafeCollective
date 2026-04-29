
type reviewCardProps = {
    name: string,
    reviewTitle: string,
    email: string
    repliesCount: number
    time: string
}
export default function ReviewCard({name, reviewTitle, email, repliesCount, time}:reviewCardProps ){
    return(
        <>
            <div className="w-full flex  p-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl gap-2">
                <span>
                      <div className="w-10 h-10 flex items-center justify-center text-[#c08b4b] bg-[#70473f8a] rounded-full">
                        <span className="text-xl ">{name.charAt(0).toUpperCase()}</span>
                      </div>
                </span>
                <div className="w-full flex justify-between items-center">
                    <span className="gap-1">
                        <h2 className="text-white text-sm">{reviewTitle}</h2>
                        <h3 className="text-[#77746c] text-xs">{email}</h3>
                    </span>

                    <span className="gap-2">
                        <h2 className="text-[#c08b4b] text-xs">{repliesCount} replies</h2>
                        <h3 className="text-[#77746c] text-xs text-end">{time} ago</h3>
                    </span>
                </div>
                

            </div>
        </>
    )
}
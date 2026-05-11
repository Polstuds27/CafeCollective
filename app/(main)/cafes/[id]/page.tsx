import ReviewCafeCard from "@/components/ReviewCafeCard";
import StarRating from "@/components/StarRating";
import { MapPin, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import CafeMapWrapper from "@/components/CafeMapWrapper";

export default async function CafeInfoPage({ params }: {params: {id: string}}){
    

    const openingHours = null;

    const rating = 0

    const reviews: any = []

    const { id } = await params;
    const res = await fetch (
        `http://localhost:3000/api/places/${id}`,
        {next: {revalidate: 3600}}
    );

    const response = await res.json();
    const cafeInformation = response?.result || {};

    


    return(
        <div className="w-full flex justify-center px-5">
             <main className="w-full max-w-[800px] h-full p-5 flex flex-col items-center gap-3 ">
                <section className="w-full rounded-2xl h-40 bg-[#c08b4bfb] border-1 border-[#b97a2cfb]" > 
                    <span>

                    </span>
                </section>

                <section className="w-full flex flex-col gap-1 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                    <span className="flex items-center justify-between">
                        <h1 className="text-xl text-white font-medium">{cafeInformation.name}</h1>
                        
                        <p className="text-[10px] p-1 text-[#86efac] bg-[#14532d] rounded-2xl font-light">Open Now</p>

                    </span>
                    <span className="flex items-center gap-1 mb-3">
                            <MapPin
                                size={14} className="text-[#c08b4b]"
                            />
                            <h3 className="text-sm">{cafeInformation.address} </h3>
                        </span>
                    
                    <div className="flex gap-3 mb-3">
                        {cafeInformation.categories.map((tag:any, idx:any)=>(
                            <p
                                key={idx}
                                className="text-xs px-2 py-1 bg-[#7a4c418a] rounded-xl border-1 border-[#a8695a8a]"
                            >
                                {tag.name}
                            </p>
                        ))}
                    </div>
                    
                    <div className="w-full flex gap-2">
                        <button className="text-[14px] w-full py-3 font-medium bg-[#c08b4b] text-black rounded-xl cursor-pointer">
                          Write a review  
                        </button>

                        <button className="text-[14px] px-5 py-3 bg-[#412821d5] border-1 border-[#c08b4b94] rounded-xl gap-2 cursor-pointer flex items-center hover:bg-[#36211bd5]">
                            <Heart
                               size={14} 
                            />
                            Save
                        </button>

                        <button className="text-[14px] px-5 py-3 bg-[#412821d5] border-1 border-[#c08b4b94] rounded-xl gap-2 cursor-pointer flex items-center hover:bg-[#36211bd5]">
                            <Share2
                               size={14} 
                            />
                            Share
                        </button>
                    </div>
                </section>

                <section className="w-full h-full flex gap-3">
                    <div className="w-full flex flex-col gap-1 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                        <h1 className="text-xs mb-2">RATING</h1>
                        <StarRating 
                            rating={rating} 
                            size={14}
                        />
                        <h1 className="text-white text-2xl font-medium">{rating}</h1>
                        <h2 className="text-xs">0 Reviews</h2>

                    </div>     

                    <div className="w-full flex flex-col gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                        <h1 className="text-xs">OPENING HOURS</h1>

                        <span className="flex flex-col">
                            
                            {openingHours ? (
                                <>
                                <span className="flex justify-between">
                                    <h2 className="text-sm font-medium">Mon - Fri</h2>
                                    <h2 className="text-sm font-medium text-white">7am - 9pm</h2>
                                </span>
                                <span className="flex justify-between">
                                    <h2 className="text-sm font-medium">Sat - Sun</h2>
                                    <h2 className="text-sm font-medium text-white">8am - 10pm</h2>
                                </span>
                                </>) : (
                                    <>
                                    <h2 className="text-sm font-medium">No Available data.</h2>
                                    </>
                                )}
                           
                        </span>
                        {openingHours && (<p className="text-xs text-[#5ea178]">● Closses at 9pm today</p>)}
                    </div>                 
                </section>

                <section className="w-full h-full flex flex-col gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                    <h1 className="text-xs">LOCATION</h1>
                    
                    <CafeMapWrapper
                        lat={cafeInformation.lat}
                        lng={cafeInformation.lng}
                        name={cafeInformation.name}
                    />
                    <span className="flex items-center gap-1">
                        <MapPin
                                size={12} className="text-[#c08b4b]"
                            />
                     
                        <h3 className="text-xs">{
                        ` ${cafeInformation.address} 
                          ${cafeInformation.city ? `, ${cafeInformation.city}` : ""} 
                          ${cafeInformation.region ? `,${cafeInformation.region}` : ""}`}</h3>
                    </span>
                </section>

                <section className="w-full h-full flex flex-col gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                    
                    <span className="flex justify-between items-center mb-3">
                        <h1 className="text-xs">REVIEWS</h1>        
                        {reviews.length > 2 && (<Link href="/" className="text-[#c08b4b] text-xs cursor-pointer">See All →</Link>)}
                    </span>
                    
                    {
                    reviews.length === 0 ? 
                    
                    (<h2 className="text-sm font-medium">No reviews.</h2>) :

                    reviews.map((review:any, idx:any)=>(
                        
                        <ReviewCafeCard
                            key={review.id}
                            id={review.id}
                            idx={idx}
                            username={review.username}
                            rating={review.rating}
                            review={review.review}
                            postedAt={review.postedAt}
                            arraySize={reviews.length}                        
                        />
                        
                    ))}
                    
                </section>

            </main>
        </div>
    );
}
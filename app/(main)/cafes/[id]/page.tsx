import ReviewCafeCard from "@/components/ReviewCafeCard";
import StarRating from "@/components/StarRating";
import { MapPin, Heart, Share2 } from "lucide-react";
import Link from "next/link";

export default function CafeInfoPage({ params }: {params: {id: string}}){
    
    const tags = [
        "Specialty",
        "Pour Over",
        "Wi-fi",
        "Co-Working",
        "Quiet"

    ];

    const rating = 4.6

    const reviews = [
        {
            id: 1,
            username: "miko_brews",
            rating: 5,
            review: "Best pour over in Poblacion. The baristas really know their craft — asked about my flavor preference and recommended the perfect single origin.",
            postedAt: "2d ago"
        },
        {
            id: 2,
            username: "ang_coffee",
            rating: 4,
            review: "Great spot to work from. Fast wifi, plenty of outlets, and the staff never rush you. The cold brew is exceptional.",
            postedAt: "5d ago"
        },
    ]

    return(
        <div className="w-full flex justify-center px-5">
             <main className="w-full max-w-[800px] h-full p-5 flex flex-col items-center gap-3 ">
                <section className="w-full rounded-2xl h-40 bg-[#c08b4bfb] border-1 border-[#b97a2cfb]" > 
                    <span>

                    </span>
                </section>

                <section className="w-full flex flex-col gap-1 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                    <span className="flex items-center justify-between">
                        <h1 className="text-xl text-white font-medium">Yardstick Coffee</h1>
                        
                        <p className="text-[10px] p-1 text-[#86efac] bg-[#14532d] rounded-2xl font-light">Open Now</p>

                    </span>
                    <span className="flex items-center gap-1 mb-3">
                            <MapPin
                                size={14} className="text-[#c08b4b]"
                            />
                            <h3 className="text-sm">Poblacion, Makati · 0.8 km away </h3>
                        </span>
                    
                    <div className="flex gap-3 mb-3">
                        {tags.map((tag, idx)=>(
                            <p
                                key={idx}
                                className="text-xs px-2 py-1 bg-[#7a4c418a] rounded-xl border-1 border-[#a8695a8a]"
                            >
                                {tag}
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
                        <h2 className="text-xs">214 Reviews</h2>

                    </div>     

                    <div className="w-full flex flex-col gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                        <h1 className="text-xs">OPENING HOURS</h1>

                        <span className="flex flex-col">
                            <span className="flex justify-between">
                                <h2 className="text-sm font-medium">Mon - Fri</h2>
                                <h2 className="text-sm font-medium text-white">7am - 9pm</h2>
                            </span>
                            <span className="flex justify-between">
                                <h2 className="text-sm font-medium">Sat - Sun</h2>
                                <h2 className="text-sm font-medium text-white">8am - 10pm</h2>
                            </span>
                        </span>

                        <p className="text-xs text-[#5ea178]">● Closses at 9pm today</p>
                    </div>                 
                </section>

                <section className="w-full h-full flex flex-col gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                    <h1 className="text-xs">LOCATION</h1>
                    
                    <iframe 
                        className="rounded-xl border-1 border-[#c08b4b94]"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4786.832923447583!2d121.0479649759607!3d14.562183485919672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c8592c3933b3%3A0x813c569a06dd7712!2s106%20Kalayaan%20Ave%2C%20Makati%20City%2C%201214%20Metro%20Manila!5e1!3m2!1sen!2sph!4v1777876149545!5m2!1sen!2sph" />
                    <span className="flex items-center gap-1">
                        <MapPin
                                size={12} className="text-[#c08b4b]"
                            />
                     
                        <h3 className="text-xs">106 Kalayaan Ave, Poblacion, Makati City, Metro Manila</h3>
                    </span>
                </section>

                <section className="w-full h-full flex flex-col gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-4">
                    
                    <span className="flex justify-between items-center mb-3">
                        <h1 className="text-xs">REVIEWS</h1>        
                        <Link href="/" className="text-[#c08b4b] text-xs cursor-pointer">See All →</Link>
                    </span>
                    

                    {reviews.map((review, idx)=>(
                        
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
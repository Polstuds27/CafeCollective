import { MapPin } from "lucide-react";

export default function CafeInfoPage({ params }: {params: {id: string}}){
    
    return(
        <>
            <main className="w-full h-full p-5 flex flex-col items-center gap-3">
                <section className="w-full rounded-2xl h-40 bg-[#c08b4bfb] border-1 border-[#b97a2cfb]" > 
                    <span>

                    </span>
                </section>

                <section className="w-full gap-3 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-2xl p-3">
                    <div>
                        <h1 className="text-xl text-white">Yardstick Coffee</h1>
                        <span className="flex ">
                            <MapPin
                                className="text-xs"
                            />
                            <h3 className="text-sm">Poblacion, Makati · 0.8 km away </h3>
                        </span>

                    </div>
                </section>
            </main>
        </>
    );
}
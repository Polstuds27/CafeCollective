"use client";

import { Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar(){

    const [query, setQuery] = useState("");
    const router = useRouter();

    function handleSearch(){
        if(!query.trim()) return;
        router.push(`/?q=${encodeURIComponent(query)}`)
    }

    return(
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3 p-1.5 items-center bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl">
              <Search size={20} color="#c08b4b" className="ml-3"/>
              <input
              type="text"
              value={query}
              onChange={(e)=>setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              className="pt-2 pb-2 pl-1 pr-1 outline-none border-none w-[400px] min-w-[200px]"
              placeholder="Search cafes, areas, vibes..."
              />
              <button 
                onClick={handleSearch}
                className="text-[14px] pr-4 pl-4 pt-1.5 pb-1.5 bg-[#c08b4b] text-black rounded-md cursor-pointer">Search</button>
            </div>
            <h3 className="text-xs font-light text-[#77746c]">Try "Poblacion", "cold brew", or "co-working"</h3>
        </div>
    );
}
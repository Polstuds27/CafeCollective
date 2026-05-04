
import { Search } from "lucide-react";

export default function Searchbar(){
    return(
        <div className="flex flex-col items-center gap-4">
            <div className="flex gap-3 p-1.5 items-center bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl">
              <Search size={20} color="#c08b4b" className="ml-3"/>
              <input
              type="text"
              className="pt-2 pb-2 pl-1 pr-1 outline-none border-none w-[400px] min-w-[200px]"
              placeholder="Search cafes, areas, vibes..."
              />
              <button className="text-[14px] pr-4 pl-4 pt-1.5 pb-1.5 bg-[#c08b4b] text-black rounded-md cursor-pointer">Search</button>
            </div>
            <h3 className="text-xs font-light text-[#77746c]">Try "Poblacion", "cold brew", or "co-working"</h3>
        </div>
    );
}
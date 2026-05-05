"use client"

import Searchbar from "@/components/Searchbar";
import CafeCard from "@/components/CafeCard";
import { useEffect } from "react";

export default function CafePage(){

    const cafes = [ //dummy data
  { id: 1, name: "Yardstick Coffee", area: "Poblacion, Makati", rating: 4.9, tags: ["Specialty", "Pour Over"], reviewsCount: 214 },
  { id: 2, name: "The Curator", area: "Legazpi Village, BGC", rating: 4.8, tags: ["Cocktails", "Coffee"], reviewsCount: 189 },
  { id: 3, name: "Craft Coffee", area: "San Juan", rating: 4.7, tags: ["Cold Brew", "Chill Vibe"], reviewsCount: 143 },
  { id: 4, name: "Commune", area: "Pasay", rating: 4.7, tags: ["Co-working", "Espresso"], reviewsCount: 176 },
  { id: 5, name: "Toby's Estate", area: "BGC", rating: 4.8, tags: ["Brunch", "Roastery"], reviewsCount: 231 },
  { id: 6, name: "Habitual Coffee", area: "Kapitolyo, Pasig", rating: 4.6, tags: ["Minimalist", "Filter"], reviewsCount: 98 },
  { id: 7, name: "Magnum Opus", area: "Poblacion, Makati", rating: 4.7, tags: ["Specialty", "Quiet"], reviewsCount: 167 },
  { id: 8, name: "Filho", area: "Salcedo Village, Makati", rating: 4.6, tags: ["Brunch", "Espresso"], reviewsCount: 134 },
  { id: 9, name: "The Coffee Library", area: "Katipunan, QC", rating: 4.8, tags: ["Study-friendly", "Wi-Fi"], reviewsCount: 201 },
  { id: 10, name: "Arabica", area: "BGC", rating: 4.9, tags: ["Specialty", "Matcha"], reviewsCount: 312 },
  { id: 11, name: "Graft Coffee Roasters", area: "Marikina", rating: 4.7, tags: ["Roastery", "Filter"], reviewsCount: 88 },
  { id: 12, name: "Hey Handsome", area: "Poblacion, Makati", rating: 4.6, tags: ["Chill Vibe", "Cocktails"], reviewsCount: 156 },
  { id: 13, name: "Kalye Kafe", area: "Intramuros, Manila", rating: 4.5, tags: ["Heritage", "Local"], reviewsCount: 112 },
  { id: 14, name: "Buna Coffee", area: "Eastwood, QC", rating: 4.6, tags: ["Co-working", "Wi-Fi"], reviewsCount: 143 },
  { id: 15, name: "Single Origin", area: "Taguig", rating: 4.8, tags: ["Specialty", "Pour Over"], reviewsCount: 198 },
  { id: 16, name: "The Farmacy", area: "Antipolo", rating: 4.7, tags: ["Nature", "Outdoor"], reviewsCount: 224 },
  { id: 17, name: "Brew Bar", area: "Kapitolyo, Pasig", rating: 4.5, tags: ["Cold Brew", "Casual"], reviewsCount: 77 },
  { id: 18, name: "Kalsada Coffee", area: "Legazpi Village, Makati", rating: 4.9, tags: ["Local Beans", "Specialty"], reviewsCount: 289 },
  { id: 19, name: "The Ruins Café", area: "San Antonio Village, Makati", rating: 4.6, tags: ["Quiet", "Aesthetic"], reviewsCount: 103 },
  { id: 20, name: "Kape Laya", area: "Quezon City", rating: 4.5, tags: ["Local", "Budget-friendly"], reviewsCount: 91 },
  { id: 21, name: "Hiraya Café", area: "Malate, Manila", rating: 4.7, tags: ["Aesthetic", "Study-friendly"], reviewsCount: 178 },
  { id: 22, name: "Tambai Coffee", area: "Ortigas, Pasig", rating: 4.5, tags: ["Casual", "Quick Grab"], reviewsCount: 65 },
  { id: 23, name: "Sip & Grind", area: "Las Piñas", rating: 4.6, tags: ["Specialty", "Quiet"], reviewsCount: 119 },
  { id: 24, name: "Puno Coffee", area: "Cavite", rating: 4.8, tags: ["Nature", "Local Beans"], reviewsCount: 145 },
  { id: 25, name: "White Noise Coffee", area: "Mandaluyong", rating: 4.7, tags: ["Co-working", "Playlist Vibes"], reviewsCount: 162 },
  { id: 26, name: "The Perch", area: "Antipolo", rating: 4.9, tags: ["View", "Outdoor"], reviewsCount: 334 },
  { id: 27, name: "Moonleaf Tea & Coffee", area: "Multiple branches", rating: 4.4, tags: ["Tea", "Budget-friendly"], reviewsCount: 445 },
  { id: 28, name: "Ground Zero Coffee", area: "Tondo, Manila", rating: 4.6, tags: ["Specialty", "Hidden Gem"], reviewsCount: 87 },
  { id: 29, name: "Café de Lipa", area: "Lipa, Batangas", rating: 4.8, tags: ["Local Beans", "Tagaytay Vibe"], reviewsCount: 211 },
  { id: 30, name: "Silid Coffee", area: "Cubao, QC", rating: 4.7, tags: ["Books", "Study-friendly"], reviewsCount: 139 },
  ];



  useEffect(()=>{
        
  },[])

    return(
        <>
            <div className="flex flex-col w-full h-full items-center p-10 gap-5">

                <span className="flex flex-col items-center">
                    <h1 className="text-3xl font-semibold text-white mb-2">Explore Cafes</h1>
                    <p className="text-sm text-[#C9A98A] mb-6">Discover great coffee spots across the Philippines</p>
                </span>

                <Searchbar/>

                <div className="max-w-[800px] w-full h-full flex flex-wrap gap-5 justify-center">
                    {cafes.map(cafe=>(
                        <CafeCard
                             key={cafe.id}
                            name={cafe.name}
                            area={cafe.area}
                            rating={cafe.rating}
                            tags={cafe.tags}
                            reviewsCount={cafe.reviewsCount}
                        />
                    ))}
                </div>
            </div>        
        </>
    );
}
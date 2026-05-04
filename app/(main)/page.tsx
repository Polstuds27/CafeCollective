"use-client"

import Link from "next/link"
import CafeCard from "@/components/CafeCard";
import InformationCard from "@/components/InformationCard";
import ReviewCard from "@/components/ReviewCard";
import Searchbar from "@/components/Searchbar";
export default function LandingPage() {

  const cafes = [
    {
      id: 1,
      name: "Yardstick Coffee",
      area: "Poblacion, Makati",
      rating: 4.9,
      tags: ["Specialty", "Pour Over"],
      reviewsCount: 214,
    },
    {
      id: 2,
      name: "The Curator",
      area: "Legazpi Village, BGC",
      rating: 4.8,
      tags: ["Cocktails", "Coffee"],
      reviewsCount: 189,
    },
    {
      id: 3,
      name: "Craft Coffee",
      area: "San Juan",
      rating: 4.7,
      tags: ["Cold Brew", "Chill Vibe"],
      reviewsCount: 143,
    },
    {
      id: 4,
      name: "Commune",
      area: "Pasay",
      rating: 4.7,
      tags: ["Co-working", "Espresso"],
      reviewsCount: 176,
    },
    {
      id: 5,
      name: "Toby's Estate",
      area: "BGC",
      rating: 4.8,
      tags: ["Brunch", "Roastery"],
      reviewsCount: 231,
    },
    {
      id: 6,
      name: "Habitual Coffee",
      area: "Kapitolyo, Pasig",
      rating: 4.6,
      tags: ["Minimalist", "Filter"],
      reviewsCount: 98,
    },
  ]

  const information = [
    {
      id: 1,
      type: "search",
      title: "Discover cafes",
      description: "Search by vibe, location, or what you're craving."
    },
    {
      id: 2,
      type: "mapPin",
      title: "Map-based search",
      description: "Find coffee spots near you with OpenStreetMap integration."
    },
    {
      id: 3,
      type: "messageSquare",
      title: "Community discussions",
      description: "Talk coffee, share finds, and connect with locals."
    },
    {
      id: 4,
      type: "star",
      title: "Ratings & reviews",
      description: "Real experiences from real coffee lovers, not algorithms."
    },
    {
      id: 5,
      type: "heart",
      title: "Save favorites",
      description: "Bookmark spots and build your personal cafe list."
    },
    {
      id: 6,
      type: "users",
      title: "Add new spots",
      description: "Contribute cafes to the community database."
    },
  ]

  const reviews = [
    {
      id: 1,
      name: "Miko",
      reviewTitle: "Best expresso in Poblacion?",
      email: "@miko_brews",
      repliesCount: 24,
      time: "2h"
    },
    {
      id: 2,
      name: "Angela",
      reviewTitle: "Hidden gems in Kapitolyo — my list",
      email: "@ang_coffee",
      repliesCount: 41,
      time: "5h"
    },
    {
      id: 3,
      name: "Rae",
      reviewTitle: "Study-friendly cafes with fast wifi",
      email: "@rae_pours",
      repliesCount: 18,
      time: "1d"
    },
  ]




  return (
   <>
    <div className="flex flex-col w-full h-full items-center pt-25">
        <section className="max-w-[700px] flex flex-col items-center gap-12 mb-15">
          <h1 className="text-[#c08b4b] font-light">COMMUNITY-DRIVEN CAFE DISCOVERY</h1>

          <h1 className="text-6xl pl-10 pr-10 text-center font-bold text-white">Your next favorite <span className="text-[#c08b4b]">café</span> is waiting</h1>

          <p className="font-light pl-25 pr-25 text-md text-center">Find hidden gems, read real reviews, and share discoveries with fellow coffee lovers across the Philippines.</p>

          <Searchbar/>

          <div className="flex gap-10 text-white">
            <span className="text-center m-5 gap-1.5 flex flex-col">
              <h1 className="text-2xl font-bold">1,200+</h1>
              <h3 className="text-xs font-medium text-[#77746c]">Cafes listed</h3>
            </span>
            <span className="text-center m-5 gap-1.5 flex flex-col">
              <h1 className="text-2xl font-bold">8,400+</h1>
              <h3 className="text-xs font-medium text-[#77746c]">Real reviews</h3>
            </span>
            <span className="text-center m-5 gap-1.5 flex flex-col">
              <h1 className="text-2xl font-bold">3,100+</h1>
              <h3 className="text-xs font-medium text-[#77746c]">Members</h3>
            </span>
          </div>
        </section>

        <section id="explore" className="w-[750px] flex flex-col items-center gap-3 mb-15">
          <div className="flex justify-between w-full items-center">
            <h1 className="text-xl text-white">Featured cafes</h1>

            <Link href="/cafes" className="text-[#c08b4b] text-sm cursor-pointer">View all →</Link>
          </div>

          <div className="flex flex-wrap gap-5 justify-center">
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
        </section>

        <section className="w-[750px] flex flex-col items-center gap-4 mb-15">
            <h1 className="text-xl text-white ">Everything you need to find great coffee</h1>
        
            <div className="w-full flex flex-wrap gap-5 justify-center">
              {information.map(info => (
                <InformationCard
                  key={info.id}
                  type={info.type}
                  title={info.title}
                  description={info.description}
                />
              ))}
            </div>
        </section>

        <section id="community" className="w-[750px] flex flex-col items-center mb-15 gap-3">
              <div className="flex items-center w-full justify-between">
                  <h1 className="text-xl text-white">Latest from the community</h1>
                  <Link href="/" className="text-[#c08b4b] text-sm cursor-pointer">All discussions →</Link>
              </div>
              <div className="flex w-full flex-col items-center gap-2">
                  {reviews.map(review => (
                    <ReviewCard
                      key={review.id}
                      name={review.name}
                      email={review.email}
                      reviewTitle={review.reviewTitle}
                      repliesCount={review.repliesCount}
                      time={review.time}
                    />
                  ))}
              </div>
        </section>

        <section className="w-[750px] flex flex-col items-center mb-15 gap-3">
                <div className="w-full flex flex-col p-10 bg-[#442721d5] border-1 border-[#c08b4b94] rounded-xl gap-2 items-center">

                    <h1 className="text-white text-2xl">Know a great café we're missing?</h1>
                    <p className="text-sm">Help the community grow — add new spots, write reviews, and join the conversation.</p>

                    <div className="flex gap-2 mt-5">
                      <button className="text-[14px] pr-4 pl-4 pt-3 pb-3 bg-[#c08b4b] text-black rounded-xl cursor-pointer">Join for free</button>
                      <button className="text-[14px] pr-4 pl-4 pt-3 pb-3 bg-[#412821d5] border-1 border-[#c08b4b94] rounded-xl gap-2 cursor-pointer hover:bg-[#36211bd5]">Add a café</button>
                    </div>
                </div>
        </section>

      </div>
   </>
  );
}

"use client" 
import dynamic from "next/dynamic";

const CafeMap = dynamic(() => import("@/components/CafeMap"), {
    ssr: false,
    loading: () => (
        <div className="w-full h-[200px] rounded-xl bg-[#412821d5] animate-pulse" />
    ),
});

interface CafeMapWrapperProps {
    lat: number;
    lng: number;
    name: string;
}

export default function CafeMapWrapper({ lat, lng, name }: CafeMapWrapperProps) {
    return <CafeMap lat={lat} lng={lng} name={name} />;
}
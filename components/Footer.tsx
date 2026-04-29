import Link from "next/link";

export default function Footer(){
    return(
        <>
            <footer className="flex w-full justify-between pt-5 pb-7 pr-5 pl-5 border-t-1 border-[#c08b4b94]">
                <p className="text-[#77746c] text-xs font-light">© 2025 Cafe Collective</p>

                <span className="flex items-center gap-5">
                    <Link href="/" className="text-[#77746c] text-xs font-light">About</Link>
                    <Link href="/" className="text-[#77746c] text-xs font-light">Privacy</Link>
                    <Link href="/" className="text-[#77746c] text-xs font-light">Contact</Link>
                </span>
            </footer>
        </>
    );
}
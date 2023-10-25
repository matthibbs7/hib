import { BookMarked } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
    return (
        <div className="w-full gap-6 bg-[#161616] items-center px-10 flex h-[72px] border-b-[1px] border-[#323232]">
            <BookMarked className="h-5 w-5 p-0" />
            <p className="text-[#757575]">pages</p>
            <p className="text-[#757575]">/</p>

            <p className="text-[white]">
                {pathname === "/" ? "intro" : pathname.slice(1)}
            </p>
            <div className="w-[160px] h-[26px] ml-auto flex bg-[#323232] rounded-md">
                <input
                    className="w-full h-full bg-[#262626] rounded-md opacity-100 placeholder-[#545454] px-3 text-sm"
                    placeholder="Search"
                />
            </div>
        </div>
    );
};

export default Navbar;

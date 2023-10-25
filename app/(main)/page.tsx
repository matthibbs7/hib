import Image from "next/image";

export default function Home() {
    return (
        <main className="flex gap-6 min-h-screen flex-col px-10 py-8 bg-[#161616]">
            <div className="flex">
                <p className="pl-2 font-semibold text-sm">Analytics:&nbsp;</p>
                <p className="font-semibold text-sm text-[#B9EDBC]">Live</p>
            </div>
            <div className="flex-col px-6 py-6 h-[126px] w-[240px] bg-[#E4F4FF] rounded-xl">
                <p className="text-[#161616] text-lg font-semibold">Views</p>
                <div className="mt-2">
                    <p className="text-[#161616] text-4xl font-semibold">343</p>
                </div>
            </div>
        </main>
    );
}

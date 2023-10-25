"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();
    return (
        <main className="flex min-h-[calc(100vh-72px)] flex-col p-10 bg-[#161616]">
            <div className="flex-col w-full h-full">
                <p>Projects</p>
                <div className="flex w-full h-full gap-x-8">
                    <div
                        onClick={() => router.push("/design/rollsolid")}
                        className="flex-col group mt-8 items-center justify-center text-center hover:cursor-pointer hover:scale-[1.04] transition duration-500 w-[80px] h-[80px]">
                        <div className="flex rounded-md ml-auto mr-auto w-[50px] h-[50px]">
                            <Image
                                src="/rollsolid2.png"
                                height={50}
                                width={50}
                                alt="rollsolid"
                                style={{ borderRadius: "6px" }}
                            />
                        </div>
                        <p className="mt-2 group-hover:text-[white] transition duration-300 text-sm text-[#686868]">
                            Rollsolid
                        </p>
                    </div>
                    <div
                        onClick={() => router.push("/design/sherlock")}
                        className="flex-col group mt-8 items-center justify-center text-center hover:cursor-pointer hover:scale-[1.04] transition duration-500 w-[80px] h-[80px]">
                        <div className="flex rounded-md ml-auto mr-auto w-[50px] h-[50px]">
                            <Image
                                src="/quarrel.png"
                                height={50}
                                width={50}
                                alt="quarrel"
                                style={{ borderRadius: "6px" }}
                            />
                        </div>
                        <p className="mt-2 group-hover:text-[white] transition duration-300 text-sm text-[#686868]">
                            Quarrel
                        </p>
                    </div>
                    <div
                        onClick={() => router.push("/design/sherlock")}
                        className="flex-col group mt-8 items-center justify-center text-center hover:cursor-pointer hover:scale-[1.04] transition duration-500 w-[80px] h-[80px]">
                        <div className="flex rounded-md ml-auto mr-auto w-[50px] h-[50px]">
                            <Image
                                src="/sabu.png"
                                height={50}
                                width={50}
                                alt="sabu"
                                style={{ borderRadius: "6px" }}
                            />
                        </div>
                        <p className="mt-2 group-hover:text-[white] transition duration-300 text-sm text-[#686868]">
                            Sabu
                        </p>
                    </div>
                    {/* <div
                        onClick={() => router.push("/design/timeblend")}
                        className="flex-col group mt-8 items-center justify-center text-center hover:cursor-pointer hover:scale-[1.04] transition duration-500 w-[80px] h-[80px]">
                        <div className="flex rounded-md ml-auto mr-auto w-[50px] h-[50px]">
                            <Image
                                src="/timeblend.png"
                                height={50}
                                width={50}
                                alt="timeblend"
                                style={{ borderRadius: "6px" }}
                            />
                        </div>
                        <p className="mt-2 group-hover:text-[white] transition duration-300 text-sm text-[#686868]">
                            Timeblend
                        </p>
                    </div> */}
                </div>
            </div>
        </main>
    );
}

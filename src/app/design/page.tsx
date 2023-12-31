"use client";
import DotRing from "@/components/DotRing/DotRing";
import { Footer } from "@/components/Footer/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Design() {
    const [index, setIndex] = useState(0);

    const [fade, setFade] = useState(true);
    const [hoverArrow, setHoverArrow] = useState<
        null | "work" | "projects" | "research" | "contact"
    >(null);
    const [tv, setTv] = useState<
        "canvas" | "work" | "projects" | "research" | "contact"
    >("canvas");

    useEffect(() => {
        const fadeId = setInterval(() => {
            setFade(!fade);
            if (!fade) {
                setTimeout(() => setIndex(index + 1), 100);
            }
        }, 2900);
        return () => {
            clearTimeout(fadeId);
        };
    }, [fade, index]);

    const lenisRef = useRef();
    const router = useRouter();

    return (
        <ReactLenis
            ref={lenisRef}
            options={{
                duration: 1.2,
                easing: (t: number) =>
                    Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }}
            root>
            <main className="overflow-hidden flex h-full w-full flex-col items-center justify-between md:p-24 md:px-20 lg:px-44 p-4 pt-16">
                <DotRing />
                <div
                    style={{ maxWidth: "1050px" }}
                    className="w-full h-40 flex -mt-10">
                    <div className="w-20 flex-row">
                        <p
                            onClick={() => router.push("/")}
                            style={{
                                fontFamily: "roobertm",
                                fontSize: "21px",
                                letterSpacing: "-1.5px",
                            }}
                            className="hover:cursor-pointer">
                            matthew
                        </p>
                        <p
                            onClick={() => router.push("/")}
                            className="hover:cursor-pointer"
                            style={{
                                fontFamily: "roobertm",
                                fontSize: "18.5px",
                                marginTop: "2px",
                                letterSpacing: "-1.5px",
                            }}>
                            hibbs
                        </p>
                    </div>
                    <div className="w-50 flex ml-auto hidden lg:flex">
                        <p
                            style={{
                                fontFamily: "roobert",
                                fontSize: "12px",
                            }}>
                            |
                        </p>
                        <p
                            className="select-none ml-5"
                            style={{
                                fontFamily: "roobert",
                                fontSize: "12px",
                            }}>
                            EN
                        </p>
                        <p
                            className="transition duration-700 ease-in-out select-none ml-5 hover:cursor-pointer text-unhovered hover:text-white"
                            style={{
                                fontFamily: "roobert",
                                fontSize: "12px",
                            }}>
                            VN
                        </p>
                        <p
                            className="transition duration-700 ease-in-out select-none ml-5 hover:cursor-pointer text-unhovered hover:text-white"
                            style={{
                                fontFamily: "roobert",
                                fontSize: "12px",
                            }}>
                            中文
                        </p>
                    </div>
                    <div className="w-20 flex-col lg:ml-36 ml-auto flex md:hidden">
                        <p>Hello</p>
                    </div>
                    <div className="w-20 flex-col lg:ml-36 ml-auto hidden md:flex">
                        <div
                            onClick={() => setTv("work")}
                            onMouseEnter={() => {
                                setHoverArrow("work");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="group flex items-center">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className=" transition duration-700 ease-in-out select-none mt-4.5 group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}
                                onClick={() => router.push("/work")}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WORK
                            </p>
                        </div>
                        <div
                            onClick={() => router.push("/design")}
                            onMouseEnter={() => {
                                setHoverArrow("projects");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="mt-2 group flex items-center -ml-7">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; PROJECTS
                            </p>
                        </div>
                        <div
                            onClick={() => setTv("research")}
                            onMouseEnter={() => {
                                setHoverArrow("research");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="mt-2 group flex items-center -ml-7">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;RESEARCH
                            </p>
                        </div>
                        <div
                            onClick={() => setTv("contact")}
                            onMouseEnter={() => {
                                setHoverArrow("contact");
                            }}
                            onMouseLeave={() => setHoverArrow(null)}
                            className="mt-2 group flex items-center -ml-7">
                            <p
                                style={{ fontSize: "10.5px" }}
                                className="group-hover:translate-x-2 opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out ml-auto">
                                ➔
                            </p>
                            <p
                                className="transition duration-700 ease-in-out select-none group-hover:cursor-pointer text-unhovered group-hover:text-white"
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "12px",
                                }}>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CONTACT
                            </p>
                        </div>
                    </div>
                </div>
                <div
                    style={{ maxWidth: "1050px" }}
                    className="flex-col border-[#222222] border rounded-lg w-full h-full min-h-[400px] p-4">
                    <div></div>
                    <Footer />
                </div>
            </main>
        </ReactLenis>
    );
}

"use client";
import DotRing from "@/components/DotRing/DotRing";
import { Footer } from "@/components/Footer/Footer";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

enum companies {
    datadog = "datadog",
    amazon = "amazon",
    target = "target",
    uf = "uf",
}

const companyInfo = {
    datadog: "Working on the DataViz team developing intuitive dashboards",
    amazon: "hi",
    target: "hey",
    uf: "nice",
};

export default function Work() {
    const [index, setIndex] = useState(0);
    const [exp, setExp] = useState<companies>(companies.datadog);

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
                    className="flex-col border-[#222222] bg-[linear-gradient(180deg,_rgba(0,0,0,1)_0%,_rgba(36,36,36,1)_50%)] border rounded-lg w-full h-[400px] p-4">
                    <div className="flex w-full h-full bg-[#131313] rounded-md border-[#242424] border p-2">
                        <div className="w-1/3">
                            <div
                                onClick={() => setExp(companies.datadog)}
                                className="hover:bg-[#222] hover:cursor-pointer rounded-md p-2">
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        Datadog
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        software engineer
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}
                                        className="text-[#444]">
                                        feb 2024 - present
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setExp(companies.amazon)}
                                className="opacity-40 hover:bg-[#222] hover:cursor-pointer rounded-md p-2">
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        Amazon
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        software engineer
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}
                                        className="text-[#444]">
                                        may 2023 - aug 2023
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setExp(companies.target)}
                                className="opacity-30 hover:bg-[#222] hover:cursor-pointer rounded-md p-2">
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        Target
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        software engineer
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}
                                        className="text-[#444]">
                                        jun 2022 - aug 2022
                                    </p>
                                </div>
                            </div>
                            <div
                                onClick={() => setExp(companies.uf)}
                                className="opacity-10 hover:bg-[#222] hover:cursor-pointer rounded-md p-2">
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        University of Florida
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}>
                                        research engineer
                                    </p>
                                </div>
                                <div>
                                    <p
                                        style={{
                                            fontFamily: "roobert",
                                            fontSize: "14px",
                                        }}
                                        className="text-[#444]">
                                        oct 2021 - dec 2022
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-[0.3] w-1/2 ml-auto  h-1/2 rounded-md p-2">
                            <p
                                style={{
                                    fontFamily: "roobert",
                                    fontSize: "14px",
                                }}>
                                {companyInfo[exp]}
                            </p>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </ReactLenis>
    );
}

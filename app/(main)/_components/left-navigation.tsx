"use client";

import { cn } from "@/lib/utils";
import {
    Briefcase,
    ChevronsLeft,
    FolderOpen,
    MenuIcon,
    MessagesSquare,
    UserSquare,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";
import { useRouter } from "next/navigation";

export const LeftNavigation = () => {
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);
    const router = useRouter();

    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth();
        }
    }, [isMobile]);

    useEffect(() => {
        if (isMobile) {
            collapse();
        }
    }, [pathname, isMobile]);

    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();

        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizingRef.current) return;
        let newWidth = e.clientX;

        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;

        if (sidebarRef.current && navbarRef.current) {
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.setProperty("left", `${newWidth}px`);
            navbarRef.current.style.setProperty(
                "width",
                `calc(100% - ${newWidth}px)`
            );
        }
    };

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const resetWidth = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sidebarRef.current.style.width = isMobile ? "100%" : "240px";
            navbarRef.current.style.setProperty(
                "width",
                isMobile ? "0" : "calc(100% - 240px)"
            );
            navbarRef.current.style.setProperty(
                "left",
                isMobile ? "100%" : "240px"
            );
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    const collapse = () => {
        if (sidebarRef.current && navbarRef.current) {
            setIsCollapsed(true);
            setIsResetting(true);

            sidebarRef.current.style.width = "0";
            navbarRef.current.style.setProperty("width", "100%");
            navbarRef.current.style.setProperty("left", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    return (
        <div>
            <aside
                ref={sidebarRef}
                className={cn(
                    "group/sidebar bg-[#161616] h-full overflow-y-auto relative flex w-60 flex-col z-[99999]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "w-0"
                )}>
                <div
                    role="button"
                    onClick={collapse}
                    className={cn(
                        "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition)",
                        isMobile && "opacity-100"
                    )}>
                    <ChevronsLeft className="h-6 w-6" />
                </div>
                <div>
                    <UserItem />
                </div>
                <div className="mt-[-10px] flex px-8 pt-4">
                    <p className="text-[0.94rem] text-[#686868]">Favorites</p>
                    <p className="text-[0.94rem] text-[#484848] ml-auto">
                        Recently
                    </p>
                </div>
                <div className="flex-col pt-4 px-8">
                    <div className="flex">
                        <p className="text-[0.94rem] text-[#686868]">•</p>
                        <p className="text-[0.94rem] ml-4">Overview</p>
                    </div>
                    <div className="flex mt-4">
                        <p className="text-[0.94rem] text-[#686868]">•</p>
                        <p className="text-[0.94rem] ml-4">Dashboards</p>
                    </div>
                </div>
                <div className="flex-col px-8 mt-10 mb-auto">
                    <p className="text-[0.94rem] text-[#686868]">Pages</p>
                    <div className="flex-col mt-4">
                        {pathname === "/" ? (
                            <div
                                onClick={() => router.push("/")}
                                className="flex group items-center gap-3 py-[2.5px] hover:cursor-pointer">
                                <div className="flex h-8 items-center bg-[#323232] rounded-md w-full gap-3">
                                    <div className="h-5 w-1 rounded-sm opacity-100 bg-[#C7C6F8]"></div>
                                    <UserSquare className="w-5 h-5 ml-2" />
                                    <p className="text-[#CBCBCB] text-[0.94rem]">
                                        Intro
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                onClick={() => router.push("/")}
                                className="flex group items-center gap-3 py-[2.5px] hover:cursor-pointer">
                                <div className="flex transition duration-200 h-8 items-center group-hover:bg-[#323232] rounded-md w-full gap-3">
                                    <div className="h-5 w-1 transition duration-300 rounded-sm opacity-0 group-hover:opacity-100 bg-[#C7C6F8]"></div>
                                    <UserSquare className="w-5 h-5 ml-2" />
                                    <p className="text-[#CBCBCB] text-[0.94rem]">
                                        Intro
                                    </p>
                                </div>
                            </div>
                        )}
                        {pathname === "/design" ? (
                            <div
                                onClick={() => router.push("/design")}
                                className="flex group items-center gap-3 py-[2.5px] hover:cursor-pointer">
                                <div className="flex h-8 items-center bg-[#323232] rounded-md w-full gap-3">
                                    <div className="h-5 w-1 rounded-sm opacity-100 bg-[#C7C6F8]"></div>
                                    <FolderOpen className="w-5 h-5 ml-2" />
                                    <p className="text-[#CBCBCB] text-[0.94rem]">
                                        Design
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div
                                onClick={() => router.push("/design")}
                                className="flex group items-center gap-3 py-[2.5px] hover:cursor-pointer">
                                <div className="flex h-8 transition duration-200 items-center group-hover:bg-[#323232] rounded-md w-full gap-3">
                                    <div className="h-5 w-1 transition duration-200 rounded-sm opacity-0 group-hover:opacity-100 bg-[#C7C6F8]"></div>
                                    <FolderOpen className="w-5 h-5 ml-2" />
                                    <p className="text-[#CBCBCB] text-[0.94rem]">
                                        Design
                                    </p>
                                </div>
                            </div>
                        )}
                        <div
                            onClick={() => router.push("/")}
                            className="flex group items-center gap-3 py-[2.5px] hover:cursor-pointer ">
                            <div className="flex h-8 items-center group-hover:bg-[#323232] rounded-md w-full gap-3">
                                <div className="h-5 w-1 rounded-sm opacity-0 group-hover:opacity-100 bg-[#C7C6F8]"></div>
                                <Briefcase className="w-5 h-5 ml-2" />
                                <p className="text-[#CBCBCB] text-[0.94rem]">
                                    Work
                                </p>
                            </div>
                        </div>

                        <div
                            onClick={() => router.push("/work")}
                            className="flex items-center gap-3 hover:bg-[#323232] px-5 py-1.5 rounded-md hover:cursor-pointer border-l-4 border-[#161616] hover:border-[#C7C6F8]">
                            <Briefcase className="w-5 h-5" />
                            <p className="text-[#CBCBCB] text-[0.94rem]">
                                Work
                            </p>
                        </div>
                        <div
                            onClick={() => router.push("/social")}
                            className="flex items-center gap-3 hover:bg-[#323232] px-5 py-1.5 rounded-md hover:cursor-pointer border-l-4 border-[#161616] hover:border-[#C7C6F8]">
                            <MessagesSquare className="w-5 h-5" />
                            <p className="text-[#CBCBCB] text-[0.94rem]">
                                Social
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex mb-[90px] px-6">
                    <p className="text-[#484848] text-[10px] ">
                        © hib.biz [2023].
                    </p>
                </div>
                <div
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
                    className="opacity-100 bg-[#323232] group-hover/sidebar:bg-primary/10 transition cursor-ew-resize absolute h-full w-[1px] right-0 top-0"
                />
            </aside>
            <div
                ref={navbarRef}
                className={cn(
                    "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "left-0 w-full"
                )}>
                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && (
                        <MenuIcon
                            onClick={resetWidth}
                            className="h-6 w-6 text-muted-foreground"
                            role="button"
                        />
                    )}
                </nav>
            </div>
        </div>
    );
};

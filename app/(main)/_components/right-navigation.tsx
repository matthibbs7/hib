"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, Forward, MenuIcon, Send } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";
import { Separator } from "@radix-ui/react-dropdown-menu";

export const RightNavigation = () => {
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isResizingRef2 = useRef(false);
    const sidebarRef2 = useRef<ElementRef<"aside">>(null);
    const navbarRef2 = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);

    useEffect(() => {
        if (isMobile) {
            collapse();
        } else {
            resetWidth(true);
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

        isResizingRef2.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isResizingRef2.current) return;
        let newWidth = window.innerWidth - e.clientX;
        if (newWidth < 240) newWidth = 240;
        if (newWidth > 480) newWidth = 480;

        if (sidebarRef2.current && navbarRef2.current) {
            sidebarRef2.current.style.width = `${newWidth}px`;
            navbarRef2.current.style.setProperty("right", `${newWidth}px`);
            navbarRef2.current.style.setProperty("width", `${newWidth}px)`);
        }
    };

    const handleMouseUp = () => {
        isResizingRef2.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    const resetWidth = (trigger: boolean) => {
        if (sidebarRef2.current && navbarRef2.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            if (trigger)
                sidebarRef2.current.style.width = isMobile ? "100%" : "240px";
            navbarRef2.current.style.setProperty(
                "width",
                isMobile ? "0" : "calc(100% - calc(100% - 240px))"
            );
            navbarRef2.current.style.setProperty(
                "right",
                isMobile ? "100%" : "240px"
            );
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    const collapse = () => {
        if (sidebarRef2.current && navbarRef2.current) {
            setIsCollapsed(true);
            setIsResetting(true);

            sidebarRef2.current.style.width = "0";
            navbarRef2.current.style.setProperty("width", "100%");
            navbarRef2.current.style.setProperty("right", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    return (
        <div>
            <aside
                ref={sidebarRef2}
                className={cn(
                    "group/sidebar bg-[#161616] h-full overflow-y-auto relative flex w-60 px-4 flex-col z-[99999]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "w-0"
                )}>
                <div
                    onMouseDown={handleMouseDown}
                    onClick={() => resetWidth(false)}
                    className="opacity-100 bg-[#323232] group-hover/sidebar:bg-primary/10 transition cursor-ew-resize absolute h-full w-[1px] left-0 top-0"
                />
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
                <div className="mt-4 mb-auto">
                    <p>Documents</p>
                </div>
                <div className="flex items-center h-9 gap-x-2 mb-[80px]">
                    <input
                        className="w-full rounded-lg h-full text-sm placeholder-[#545454] px-4 bg-[#262626]"
                        placeholder="Contribute to the conversation!"
                    />
                    <div className="flex items-center justify-center hover:cursor-pointer hover:opacity-80 w-16 h-8 rounded-md bg-[#E4F4FF]">
                        <Forward className="h-6 w-6 text-[#161616]" />
                    </div>
                </div>
            </aside>
            <div
                ref={navbarRef2}
                className={cn(
                    "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "left-0 w-full"
                )}>
                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && (
                        <MenuIcon
                            onClick={() => resetWidth(true)}
                            className="h-6 w-6 text-muted-foreground"
                            role="button"
                        />
                    )}
                </nav>
            </div>
        </div>
    );
};

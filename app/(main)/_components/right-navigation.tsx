"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { UserItem } from "./user-item";

export const RightNavigation = () => {
    const pathname = usePathname();
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isResizingRef = useRef(false);
    const sidebarRef2 = useRef<ElementRef<"aside">>(null);
    const navbarRef2 = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);

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

        if (sidebarRef2.current && navbarRef2.current) {
            sidebarRef2.current.style.width = `${newWidth}px`;
            navbarRef2.current.style.setProperty("left", `${newWidth}px`);
            navbarRef2.current.style.setProperty(
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
        if (sidebarRef2.current && navbarRef2.current) {
            setIsCollapsed(false);
            setIsResetting(true);

            sidebarRef2.current.style.width = isMobile ? "100%" : "240px";
            navbarRef2.current.style.setProperty(
                "width",
                isMobile ? "0" : "calc(100% - calc(100% - 240px))"
            );
            navbarRef2.current.style.setProperty(
                "left",
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
            navbarRef2.current.style.setProperty("left", "0");
            setTimeout(() => setIsResetting(false), 300);
        }
    };

    return (
        <div>
            <aside
                ref={sidebarRef2}
                className={cn(
                    "group/sidebar bg-[#1c1c1c] h-full overflow-y-auto relative flex w-60 flex-col z-[99999]",
                    isResetting && "transition-all ease-in-out duration-300",
                    isMobile && "w-0"
                )}>
                <div
                    onMouseDown={handleMouseDown}
                    onClick={resetWidth}
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
                <div className="mt-4">
                    <p>Documents</p>
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

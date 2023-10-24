"use client";

import { LeftNavigation } from "./_components/left-navigation";
import Navbar from "./_components/navbar";
import { RightNavigation } from "./_components/right-navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full flex dark:bg-[#1f1f1f]">
            <LeftNavigation />
            <div className="h-full flex-col w-full">
                <Navbar />
                <main className="flex-1 h-full overflow-y-auto">
                    {children}
                </main>
            </div>
            <RightNavigation />
        </div>
    );
};

export default MainLayout;

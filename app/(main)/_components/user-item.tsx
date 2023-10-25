"use client";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsLeftRight } from "lucide-react";
export const UserItem = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div
                    role="button"
                    className="flex items-center h-[72px] text-sm p-3 w-full hover:bg-primary/5">
                    <div className="gap-x-4 px-4 flex items-center max-w-[200px]">
                        <Avatar className="h-7 w-7">
                            <AvatarImage src={"/me.png"} />
                        </Avatar>
                        <span className="text-start line-clamp-1">
                            Matthew Hibbs
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 ml-2 text-[#686868] h-5 w-5" />
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-80"
                align="start"
                alignOffset={11}
                forceMount>
                <div className="flex flex-col space-y-4 p-2">
                    <p className="text-xs font-medium leading-none text-muted-foreground">
                        matt@gmail.com
                    </p>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-md bg-secondary p-1">
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={""} />
                            </Avatar>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm line-clamp-1">
                                Matts&apos;s Jotion
                            </p>
                        </div>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    asChild
                    className="w-full cursor-pointer text-muted-foreground"></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

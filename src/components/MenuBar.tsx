"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { HamburgerMenuIcon, HomeIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom"; // or next/link

export default function MenuBar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 bg-zinc-950 md:bg-transparent border-b md:border-transparent border-white">
      <div className="flex items-center py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center justify-center hover:cursor-pointer"
          aria-label="Scroll to top"
        >
          <HomeIcon className="w-6 h-6" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <MenuBarDesktop />
        <MenuBarMobile />
      </div>
    </nav>
  );
}

function MenuBarDesktop() {
  return (
    <div className="hidden md:flex">
      <div className="space-x-4 rounded-lg p-2 flex items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#projects"
                className="flex items-center py-2 transition-colors"
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#about"
                className="flex items-center py-2 transition-colors"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}

function MenuBarMobile() {
  return (
    <div className="md:hidden relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="flex items-center justify-center"
          >
            <HamburgerMenuIcon className="w-6 h-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={8}
          className="mt-2 w-40 rounded-lg shadow-md p-2 dark:bg-zinc-950 border border-gray-300"
        >
          <DropdownMenuItem asChild>
            <Link
              to="/"
              className="block w-full px-2 py-2 rounded transition-colors"
            >
              Projects
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link
              to="/about"
              className="block w-full px-2 py-2 rounded transition-colors"
            >
              About
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

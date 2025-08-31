"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dash" },
];

const menu = "/images/menu.png";

const DropDown = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src={menu} width={25} height={32} alt="menu" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-[200px] z-50 absolute"
        align="start"
      >
        {navLinks.map((item) => (
          <DropdownMenuItem asChild key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuItem asChild>
          {user ? (
            <LogoutLink className="w-full text-left">Sign out</LogoutLink>
          ) : null}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;

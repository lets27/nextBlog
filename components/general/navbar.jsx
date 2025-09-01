"use client";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import DropDown from "./dropDown";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  const { getUser } = useKindeBrowserClient();
  const user = getUser();

  const pathname = usePathname(); // 👈 get current path

  return (
    <nav className="mb-4 flex gap-56 justify-center items-center w-full relative pr-4 py-4 bg-gradient-to-r from-red-600 to-red-700 shadow shadow-gray-300">
      {/* Logo + tagline */}
      <div className="flex items-center gap-5 md:gap-3">
        <div className="h-16 w-22 md:h-20 md:w-22 relative overflow-hidden">
          <Image
            src="https://1000logos.net/wp-content/uploads/2023/05/EA-Sports-Logo.png"
            alt="logo"
            fill
            className="object-cover "
          />
        </div>
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
          World <span className="text-yellow-300">Sports</span>
        </span>
      </div>

      {/* Nav links */}
      <ul className="hidden md:flex flex-1 gap-16 justify-center items-center">
        {user
          ? navLinks.map((item) => {
              const isActive = pathname === item.href; // 👈 check active
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`text-xl font-bold tracking-tight transition-transform duration-200 hover:-translate-y-1 ${
                    isActive
                      ? "text-yellow-300 underline underline-offset-4"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })
          : null}
      </ul>

      {/* Mobile dropdown or login */}
      {user ? (
        <div className="block md:hidden cursor-pointer">
          <DropDown />
        </div>
      ) : (
        <LoginLink
          className={`${buttonVariants()} bg-black text-white rounded-lg transform transition-transform duration-200 hover:-translate-y-1 md:hidden`}
        >
          Sign in
        </LoginLink>
      )}

      {/* Right side: user info or login/register */}
      <div className="hidden md:block">
        {user ? (
          <div className="flex items-center gap-3 bg-white p-2 rounded-lg shadow-sm">
            <span className="text-gray-700 font-medium">Welcome,</span>
            <span className="font-semibold px-3 py-1 bg-orange-400 text-white rounded-full">
              {user.given_name}
            </span>
            <LogoutLink className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transform hover:-translate-y-1 transition">
              Logout
            </LogoutLink>
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <LoginLink className={buttonVariants()}>Sign in</LoginLink>
            <RegisterLink className={buttonVariants({ variant: "secondary" })}>
              Sign up
            </RegisterLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

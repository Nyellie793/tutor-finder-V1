import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LinkButton from "./LinkButton";
import Logo from "./Logo";
import UserButton from "./GigsDashboard/UserButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userDataString = localStorage.getItem("user");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userType = userData?.user_type;
  console.log("u type: ", userType);

  console.log("user: ", userData);
  console.log("userData.id: ", userData?.id);

  const baseNavItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/find-tutor", label: "Find Tutor" },
    { href: "/gigs", label: "Gigs" },
  ];

  const navItems =
    userType === "learner"
      ? [
          ...baseNavItems,
          { href: "/learner-dashboard", label: "Learner Dashboard" },
        ]
      : baseNavItems;

  console.log("nav");

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(199,184,234,0.2)]">
      <nav className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        {/* logo */}
        <Logo />
        {/* <img src="/Tutor Finder.png" alt="Tutor Finder Logo" className="h-10" /> */}

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                `px-3 py-2 font-medium cursor-pointer transition-all duration-300 ease-in-out relative
                ${
                  isActive
                    ? "text-[var(--teal)] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--gradient-accent)]"
                    : "text-[var(--grey-dark)] hover:text-[var(--teal)]"
                }`
              }
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Conditional rendering of UserButton or Auth buttons */}
          {userData ? (
            <UserButton />
          ) : (
            <div className="flex items-center gap-3 ml-2">
              <LinkButton route="/login" label="Login" />
              <LinkButton route="/signup" label="Sign Up" />
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  className={({ isActive }) =>
                    `px-3 py-2 font-medium cursor-pointer transition-all duration-300 ease-in-out relative
                    ${
                      isActive
                        ? "text-[var(--teal)]"
                        : "text-[var(--grey-dark)] hover:text-[var(--teal)]"
                    }`
                  }
                  to={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Conditional rendering of UserButton or Auth buttons for mobile */}
              {userData ? (
                <UserButton />
              ) : (
                <div className="flex flex-col gap-3 mt-4">
                  <LinkButton route="/login" label="Login" />
                  <LinkButton route="/signup" label="Sign Up" />
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;

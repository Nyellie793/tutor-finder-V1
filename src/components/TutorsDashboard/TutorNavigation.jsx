import { cn } from "@/lib/utils";
import {  SettingsIcon, UsersIcon, FileIcon } from "lucide-react";
import {

  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

const routes = [
  {
    label: "Overview",
    href: "/tutor-dashboard",
    icon: GoHome,
    activeIcon: GoHomeFill,
    exact: true,
  },
  {
    label: "Profile",
    href: "/tutor-dashboard/profile",
    icon: UsersIcon,
    activeIcon: UsersIcon,
    exact: true,
  },
  {
    label: "TutorGigs",
    href: "/tutor-dashboard/tutor-gigs",
    icon: FileIcon,
    activeIcon: FileIcon,
    exact: true,
  },
  {
    label: "Settings",
    href: "/tutor-dashboard/tutor-settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
    exact: true,
  },
];

const TutorNavigation = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        let isActive;

        if (item.exact) {
          isActive = pathname === item.href;
        } else {
          isActive =
            pathname === item.href ||
            (item.href !== "/tutor-dashboard" &&
              pathname.startsWith(item.href));
        }

        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link key={item.href} to={item.href}>
            <div
              className={cn(
                "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                isActive && "bg-white shadow-sm hover:opacity-100 text-primary"
              )}
            >
              <Icon className="size-5 text-neutral-500" />
              {item.label}
            </div>
          </Link>
        );
      })}
    </ul>
  );
};

export default TutorNavigation;

/* eslint-disable no-unused-vars */
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Loader, LogOut } from "lucide-react";
import DashedSeparator from "../DashedSeparator";
import { useState } from "react";
import { useApi } from "@/utils/fetcher";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const UserButton = () => {
  const { API } = useApi();
  const userDataString = localStorage.getItem("user");
  const user = JSON.parse(userDataString);
  const [isLoading, setLoading] = useState();
  const token = localStorage.getItem("auth_token");
  const navigate = useNavigate();

  console.log("u", user);

  if (isLoading)
    return (
      <div className="size-10 rounded-full flex items-center justify-center bg-neutral-200 border border-neutral-300">
        <Loader className="size-4 animate-spin text-muted-foreground" />
      </div>
    );

  if (!user || !token) {
    return null;
  }

  const handleLogout = async () => {
    try {
      setLoading(true);
      await API.logout(token);

      toast.success("You have been logged out Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const { name, email } = user;

  const getAvatarFallback = () => {
    if (name && name.length > 0) {
      return name.charAt(0).toUpperCase();
    }
    if (email && email.length > 0) {
      return email.charAt(0).toUpperCase();
    }
    return "U";
  };

  const avatarFallback = getAvatarFallback();

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition border border-neutral-300">
          <AvatarImage src={user.profile_image} alt={name} />
          <AvatarFallback className="bg-neutral-200 font-medium  text-neutral-500 flex items-center justify-center">
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        side="bottom"
        className="w-60"
        sideOffset={10}
      >
        <div className="flex flex-col items-center justify-center gap-2 px-2.5 py-4">
          <div className="flex items-center justify-center flex-col ">
            <p className="text-sm font-medium text-neutral-900">
              {name || "User"}
            </p>
            <p className="text-xs text-neutral-500">{email}</p>
          </div>
        </div>
        <DashedSeparator className="mb-1" />
        <DropdownMenuItem
          onClick={handleLogout}
          className="h-10 flex items-center justify-center text-red-500 font-medium cursor-pointer"
        >
          {isLoading && <Loader className="animate-spin size-7" />}
          {!isLoading && (
            <>
              <LogOut className="size-4 mr-2" />
              Log out
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;

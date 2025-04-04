/* eslint-disable react/prop-types */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


export const UserAvatar = ({ imageUrl, name, className = "w-32 h-32" }) => {
  // Extract the first 2 letters of the name (or 1 if name is only 1 character)
  const initials = name
    ? name
        .split(" ")
        .map((part) => part[0])
        .slice(0, 2)
        .join("")
        .toUpperCase()
    : "?";

  // Generate a consistent background color based on the name
  const getAvatarColor = (name) => {
    const colors = [
      "bg-teal-600",
      "bg-teal-400",
      "bg-teal-300",
      "bg-teal-250",
      "bg-teal-500",
      
    ];

    // Simple hash function to get consistent color for a name
    let hash = 0;
    if (name) {
      for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
      }
    }

    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
  };

  return (
    <Avatar className={`rounded-lg ${className}`}>
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback
        className={`${getAvatarColor(name)} text-white text-xl font-semibold`}
      >
        {initials}
      </AvatarFallback>
    </Avatar>
  );
};

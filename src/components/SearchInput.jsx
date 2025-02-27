import { useState } from "react";
import { Input } from "@/components/ui/input";

const SearchInput = ({
  onSearch,
  buttonText = "Find Tutors",
  placeholder = "What would you like to learn?",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (typeof onSearch === "function") {
      onSearch(searchTerm);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex gap-4 mb-8 bg-[var(--white)] p-2 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] w-full">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 py-4 px-6 border-none rounded-lg text-base bg-[var(--grey-light)]"
      />
      <button
        onClick={handleSearch}
        className="py-4 px-8 rounded-lg text-[var(--white)] font-medium cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
        style={{
          background: "var(--gradient-accent)",
          backgroundImage:
            "linear-gradient(to right, var(--lilac) 0%, var(--teal) 100%)",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SearchInput;

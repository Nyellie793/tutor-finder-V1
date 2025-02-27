import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LinkButton = ({ route, label }) => {
  return (
    <Button
      asChild
      className="relative text-[var(--white)] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
      style={{
        background: "var(--gradient-accent)",
        backgroundImage:
          "linear-gradient(to right, var(--lilac) 0%, var(--teal) 100%)",
      }}
    >
      <Link to={route}>{label}</Link>
    </Button>
  );
};

export default LinkButton;

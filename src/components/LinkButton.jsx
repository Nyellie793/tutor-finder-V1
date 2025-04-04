import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LinkButton = ({ route, label }) => {
  return (
    <Button
      asChild
      className="relative bg-[#0097a7] hover:bg-[#0097a7] text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
    >
      <Link to={route}>{label}</Link>
    </Button>
  );
};

export default LinkButton;

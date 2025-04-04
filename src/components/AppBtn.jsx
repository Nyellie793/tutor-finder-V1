import { Button } from "./ui/button";

const AppBtn = ({ onClick , children}) => {
  return (
    <Button
      onClick={onClick}
      className="relative bg-[#0097a7] text-white font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
    >
      {children}
    </Button>
  );
};

export default AppBtn;

import { Button } from "./ui/button";

const AppBtn = ({ onClick , children}) => {
  return (
    <Button
      onClick={onClick}
      className="relative text-[var(--white)] font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
      style={{
        background: "var(--gradient-accent)",
        backgroundImage:
          "linear-gradient(to right, var(--lilac) 0%, var(--teal) 100%)",
      }}
    >
      {children}
    </Button>
  );
};

export default AppBtn;

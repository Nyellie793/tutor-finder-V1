import MobileSidebar from "./MobileSidebar";
import UserButton from "./UserButton";

const user = {
  name: "Nyellie",
  email: "nyelliembu@gmail.com",
};

console.log('gig nav');

const Navbar = () => {
  return (
    <nav className="pt-4 px-7 flex items-center justify-between">
      <div className="flex-col hidden lg:flex w-full">
        <h1 className="text-2xl font-semibold"></h1>
        <p className="text-muted-foreground ">
        </p>
      </div>

      <MobileSidebar />
      <UserButton user={user} />
    </nav>
  );
};

export default Navbar;

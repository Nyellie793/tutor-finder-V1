
import DashedSeparator from "../DashedSeparator";
import Logo from "../Logo";
import TutorNavigation from "./TutorNavigation";

const TutorSidebar = () => {
  return (
    <aside className="h-full bg-neutral-50 p-4 w-full">
      <Logo />
      <DashedSeparator className="my-4" />
      <TutorNavigation />
    </aside>
  );
};

export default TutorSidebar;

import GigsEditPage from "@/components/GigsDashboard/GigsEditPage";
import { useParams } from "react-router-dom";

const GigEdit = () => {
  const { id } = useParams();

  return <GigsEditPage id={id}/>;
};

export default GigEdit;

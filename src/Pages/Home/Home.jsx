import Index from "../../Components/Layout/Main/Index";
import { useUsers } from "../../Hooks";
import ErrorMessage from "../../Components/Error/ErrorMessage";

const Home = () => {
  const { error } = useUsers();

  return <div>{error ? <ErrorMessage /> : <Index />}</div>;
};

export default Home;

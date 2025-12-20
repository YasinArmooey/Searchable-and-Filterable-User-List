import Index from "../../Components/Layout/Main/Index";
import { UserProvider } from "../../context/UsersContext";

const Home = () => {
  return (
    <div>
      <UserProvider>
        <Index />
      </UserProvider>
    </div>
  );
};

export default Home;

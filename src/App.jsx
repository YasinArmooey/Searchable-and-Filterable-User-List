import { lazy, Suspense} from "react";
import Loading from "./Components/Loading/Loading";
import { UsersProvider } from "./context";
const Home = lazy(() => import("./Pages/Home/Home"));

const App = () => {
  return (
    <UsersProvider>
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
    </UsersProvider>
  );
};

export default App;

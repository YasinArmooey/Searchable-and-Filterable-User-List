import { lazy, Suspense} from "react";
import Loading from "./Components/Loading/Loading";
const Home = lazy(() => import("./Pages/Home/Home"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  );
};

export default App;

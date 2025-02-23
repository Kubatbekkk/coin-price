import { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, Loading } from "./components";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const CoinDetails = lazy(() => import("./pages/CoinDetails"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Suspense fallback={<Loading fullPage />}>
          <Home />
        </Suspense>
      </Layout>
    ),
  },
  {
    path: "/:ticker",
    element: (
      <Layout>
        <Suspense fallback={<Loading fullPage />}>
          <CoinDetails />
        </Suspense>
      </Layout>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

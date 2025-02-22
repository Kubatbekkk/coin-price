import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Loading } from "./components";
import "./App.css";

const Home = React.lazy(() => import("./pages/Home"));
const CoinDetails = React.lazy(() => import("./pages/CoinDetails"));
const Layout = React.lazy(() => import("./components"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading fullPage />}>
        <Layout>
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/:ticker" element={<CoinDetails />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;

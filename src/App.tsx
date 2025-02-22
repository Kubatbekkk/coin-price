import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, CoinDetails } from "./pages";
import { Layout } from "./components";
import "./App.css";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/:ticker" element={<CoinDetails />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
});

export default App;

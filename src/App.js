import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./hoc/Layout";
import { MainPage } from "./pages/MainPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { ContactsPage } from "./pages/ContactsPage";
import { LoginPage } from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={"portfolio"} element={<PortfolioPage />} />
          <Route path={"contacts"} element={<ContactsPage />} />
        </Route>
        <Route path={"login"} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

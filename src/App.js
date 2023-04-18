import { Routes, Route } from "react-router-dom";
import "./App.scss";
import { Details } from "./components/details/details";
import { Header } from "./components/header/header";
import { Main } from "./components/main/main";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<Main />} />
        <Route path="/:number" element={<Details />} />
        <Route path="/category/:id/:number" element={<Details />} />
        <Route path="/category" element={<Main />} />
        <Route path="/search" element={<Main />} />
        <Route path="/search/:tit" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;

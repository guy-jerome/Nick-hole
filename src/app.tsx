import "./app.css";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";
import MyMission from "./components/MyMission";
import About from "./components/About";
import { useState } from "preact/hooks";

export default function App() {
  const [page, setPage] = useState("main");
  function handleChange(page: string): void {
    setPage(page);
  }
  function displayPage() {
    switch (page) {
      case "main":
        return <MainPage />;
        break;
      case "about":
        return <About />;
        break;
      case "mission":
        return <MyMission />;
        break;
      default:
        return <MainPage />;
    }
  }
  return (
    <>
      <Nav handleChange={handleChange} />
      {displayPage()}
    </>
  );
}

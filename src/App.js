import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./views/Home";

function App() {
  return (
    <>

      <Sidebar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>


    </>
  );
}

export default App;

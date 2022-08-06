import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";

export const AplicationRouters = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/movie/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

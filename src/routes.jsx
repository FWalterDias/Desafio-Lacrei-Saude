import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PessoaUsuaria from "./pages/PessoaUsuaria";
import Profissional from "./pages/Profissional";
import App from "./pages/App";

export function MyRoutes() {
  return (
    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/home" element={<App />}>
        <Route path="" element={<Home />} />
      </Route>

      <Route path="/pessoaUsuaria" element={<App />}>
        <Route path="" element={<PessoaUsuaria />} />
      </Route>

      <Route path="/profissional" element={<App />}>
        <Route path="" element={<Profissional />} />
      </Route>
    </Routes>
  )
}

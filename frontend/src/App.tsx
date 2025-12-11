import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import Sponsors from "./pages/Sponsors";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

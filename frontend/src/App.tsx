import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ImagesVideos from "./pages/ImagesVideos";
import Sponsors from "./pages/Sponsors";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/images-videos" element={<ImagesVideos />} />
      <Route path="/sponsors" element={<Sponsors />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

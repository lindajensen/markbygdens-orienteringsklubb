import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ImagesVideos from "./pages/ImagesVideos";
import EventGallery from "./pages/EventGallery";
import Sponsors from "./pages/Sponsors";
import Board from "./pages/Board";
import "./App.css";
import Startorienteering from "./pages/Startorienteering";
import OrienteeringMap from "./pages/OrienteeringMap";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/images-videos" element={<ImagesVideos />} />
      <Route path="/images-videos/:slug" element={<EventGallery />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/about/board" element={<Board />} />
      <Route path="/about/start-orienteering" element={<Startorienteering />} />
      <Route path="/about/orienteering-map" element={<OrienteeringMap />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

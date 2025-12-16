import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import NewsArticle from "./pages/NewsArticle";
import ImagesVideos from "./pages/ImagesVideos";
import EventGallery from "./pages/EventGallery";
import Sponsors from "./pages/Sponsors";
import Board from "./pages/Board";
import "./App.css";
import Startorienteering from "./pages/Startorienteering";
import OrienteeringMap from "./pages/OrienteeringMap";
import Trainings from "./pages/Trainings";
import Competitions from "./pages/Competitions";
import OrienteeringLinks from "./pages/OrienteeringLinks";
import CoursesOfTheMonth from "./pages/CoursesOfTheMonth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/news" element={<News />} />
      <Route path="/news/:slug" element={<NewsArticle />} />
      <Route path="/images-videos" element={<ImagesVideos />} />
      <Route path="/images-videos/:slug" element={<EventGallery />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/about/board" element={<Board />} />
      <Route path="/about/start-orienteering" element={<Startorienteering />} />
      <Route path="/about/orienteering-map" element={<OrienteeringMap />} />
      <Route path="/events/trainings" element={<Trainings />} />
      <Route path="/events/competitions" element={<Competitions />} />
      <Route
        path="/events/orienteering-links"
        element={<OrienteeringLinks />}
      />
      <Route
        path="/events/courses-of-the-month-2024"
        element={<CoursesOfTheMonth />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

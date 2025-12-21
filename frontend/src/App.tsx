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
import TrainingsYear from "./pages/TrainingsYear";
import Competitions from "./pages/Competitions";
import OrienteeringLinks from "./pages/OrienteeringLinks";
import CoursesOfTheMonth from "./pages/CoursesOfTheMonth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/nyheter" element={<News />} />
      <Route path="/nyheter/:slug" element={<NewsArticle />} />
      <Route path="/bilder-videos" element={<ImagesVideos />} />
      <Route path="/bilder-videos/:slug" element={<EventGallery />} />
      <Route path="/sponsorer" element={<Sponsors />} />
      <Route path="/om/styrelsen" element={<Board />} />
      <Route path="/om/borja-orientera" element={<Startorienteering />} />
      <Route path="/om/orienteringskartan" element={<OrienteeringMap />} />
      <Route path="/arrangemang/traningar" element={<Trainings />} />
      <Route path="/arrangemang/traningar/:year" element={<TrainingsYear />} />
      <Route path="/arrangemang/tavlingar" element={<Competitions />} />
      <Route
        path="/arrangemang/orienteringslankar"
        element={<OrienteeringLinks />}
      />
      <Route
        path="/arrangemang/manadens-banor-2024"
        element={<CoursesOfTheMonth />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

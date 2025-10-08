import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./styles/index";
import Layout from "./layouts/Layout";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import Episodes from "./pages/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";
import NotFound from "./pages/NotFound";
import fetchCharacters from "./api/fetchCharacters";
import fetchEpisodes from "./api/fetchEpisodes";
import fetchLocation from "./api/fetchLocation";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Characters />,
          loader: fetchCharacters,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "character/:characterId",
          element: <CharacterDetails />,
        },
        {
          path: "episodes",
          element: <Episodes />,
          loader: fetchEpisodes,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "episode/:episodeId",
          element: <EpisodeDetails />,
        },
        {
          path: "locations",
          element: <Locations />,
          loader: fetchLocation,
          errorElement: <ErrorBoundary />,
        },
        {
          path: "location/:locationId",
          element: <LocationDetails />,
        },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

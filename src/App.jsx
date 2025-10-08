import "./styles/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { fetchCharacters, fetchEpisodes, fetchLocations } from "./api";
import Layout from "./layouts/Layout";
import ErrorBoundary from "./components/ErrorBoundary";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import Episodes from "./pages/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";
import NotFound from "./pages/NotFound";

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
          loader: fetchLocations,
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

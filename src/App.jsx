import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index";
import Layout from "./layouts/Layout";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import Episodes from "./pages/Episodes";
import EpisodeDetails from "./pages/EpisodeDetails";
import Locations from "./pages/Locations";
import LocationDetails from "./pages/LocationDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Characters /> },
        { path: "character/:characterId", element: <CharacterDetails /> },
        { path: "episodes", element: <Episodes /> },
        { path: "episode/:episodeId", element: <EpisodeDetails /> },
        { path: "locations", element: <Locations /> },
        { path: "location/:locationId", element: <LocationDetails /> },
        { path: "*", element: <Characters /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

import { useLocation } from "react-router-dom";
import { getEntitysByIds } from "./../api";
import SectionDetails from "../sections/SectionDetails";
import { useEffect, useState } from "react";

export default function CharacterDetails() {
  const location = useLocation();

  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    async function getCast() {
      const data = await getEntitysByIds("episode", location.state.episode);

      setEpisode(data);
    }
    getCast();
  }, []);

  console.log(location);

  return (
    <>
      <SectionDetails
        image={location.state.image}
        title={location.state.name}
        details={[
          { name: "Gender", value: location.state.gender },
          { name: "Status", value: location.state.status },
          { name: "Specie", value: location.state.species },
          { name: "Origin", value: location.state.origin.name },
          { name: "Type", value: location.state.type },
        ]}
        episode={episode}
      />
    </>
  );
}

import { useLocation } from "react-router-dom";
import { getEntitysByIds } from "./../api";
import { useEffect, useState } from "react";
import CardSection from "./../sections/CardSection";
import Loader from "../components/Loader/Loader";

export default function EpisodeDetails() {
  const location = useLocation();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log(location);

  useEffect(() => {
    async function getCast() {
      setIsLoading(true);
      try {
        const data = await getEntitysByIds(
          "character",
          location.state.characters
        );

        setCasts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, []);

  return (
    <>
      {casts.length > 0 || casts["info"] ? (
        <CardSection
          sectionsData={casts}
          linkTo="character"
          title="Residents"
        />
      ) : (
        ""
      )}
      {isLoading && <Loader/>}
    </>
  );
}

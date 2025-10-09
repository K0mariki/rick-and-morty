import { useLocation } from "react-router-dom";
import { getEntitysByIds } from "./../api";
import { useEffect, useState } from "react";
import CardSection from "./../sections/CardSection";
import Loader from "./../components/Loader/Loader";
import SectionDetails from "../sections/SectionDetails/SectionDetails";
import { useDocumentTitle } from "../utils/useDocumentTitle";

export default function EpisodeDetails() {
  const location = useLocation();
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useDocumentTitle(`${location.state.name} | Rick and Morty`);

  useEffect(() => {
    async function getCast() {
      setIsLoading(true);
      try {
        const data = await getEntitysByIds(
          "character",
          location.state.characters
        );

        setCasts(data);
      }  finally {
        setIsLoading(false);
      }
    }
    getCast();
  }, []);

  return (
    <>
      <SectionDetails
        title={location?.state?.name}
        details={[
          { name: "Episode", value: location.state?.episode },
          { name: "Date", value: location.state?.air_date },
        ]}
      />
      {casts.length > 0 || casts["info"] ? (
        <CardSection sectionsData={casts} linkTo="character" title="Cast" />
      ) : (
        ""
      )}
      {isLoading && <Loader />}
    </>
  );
}

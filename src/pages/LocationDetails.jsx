import { useLocation } from "react-router-dom";
import { getEntitysByIds } from "./../api";
import { useEffect, useState } from "react";
import CardSection from "./../sections/CardSection";
import Loader from "../components/Loader/Loader";
import SectionDetails from "../sections/SectionDetails/SectionDetails";

export default function LocationDetails() {
  const location = useLocation();
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getResidents() {
      setIsLoading(true);
      try {
        const data = await getEntitysByIds(
          "character",
          location.state.residents
        );
        setResidents(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    getResidents();
  }, []);

  return (
    <>
      <SectionDetails
        title={location.state.name}
        details={[
          { name: "Type", value: location.state.type },
          { name: "Dimension", value: location.state.dimension },
        ]}
      />
      {residents.length > 0 || residents["info"] ? (
        <CardSection
          sectionsData={residents}
          linkTo="character"
          title="Residents"
        />
      ) : (
        ""
      )}
      {isLoading && <Loader />}
    </>
  );
}

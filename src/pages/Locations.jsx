import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";
import { useEffect, useState } from "react";
import { getEntitysByName } from "../api";
import Loader from "./../components/Loader";

export default function Locations() {
  const locations = useLoaderData();
  const [searchInput, setSearchInput] = useState("");
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchLocation() {
      setIsLoading(true);

      try {
        const res = await getEntitysByName("location", searchInput);
        setArr(res);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
    searchLocation();
  }, [searchInput]);

  return (
    <>
      <Hero image="rickAndMortyPortal">
        <SearchInput
          searchInput={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SelectsMenu>
          <Select defaultValue="Type" />
          <Select defaultValue="Dimension" />
        </SelectsMenu>
      </Hero>
      {isLoading ? (
        <Loader />
      ) : arr.length == 0 || searchInput === "" ? (
        <CardSection
          title="All locations on Rick and Morty"
          hiddenTitle
          linkTo="location"
          sectionsData={locations}
          key={searchInput}
        />
      ) : (
        <CardSection
          title="All locations on Rick and Morty"
          hiddenTitle
          linkTo="location"
          sectionsData={arr}
          key={searchInput}
        />
      )}
    </>
  );
}

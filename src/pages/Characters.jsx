import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getEntitysByName } from "./../api";
import Loader from "./../components/Loader";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";

export default function Characters() {
  const locations = useLoaderData();

  const [searchInput, setSearchInput] = useState("");
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchLocation() {
      setIsLoading(true);

      try {
        const res = await getEntitysByName("character", searchInput);
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
      <Hero image="rickAndMortyLogo">
        <SearchInput
          searchInput={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></SearchInput>
        <SelectsMenu>
          <Select defaultValue="Species"></Select>
          <Select defaultValue="Gender"></Select>
          <Select defaultValue="Status"></Select>
        </SelectsMenu>
      </Hero>
      {isLoading ? (
        <Loader />
      ) : arr.length == 0 || searchInput === "" ? (
        <CardSection
          title="All characters on Rick and Morty"
          hiddenTitle
          linkTo="character"
          sectionsData={locations}
          key={searchInput}
        />
      ) : (
        <CardSection
          title="All characters on Rick and Morty"
          hiddenTitle
          linkTo="character"
          sectionsData={arr}
          key={searchInput}
        />
      )}
    </>
  );
}

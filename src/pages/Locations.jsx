import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";
import { useEffect, useState } from "react";
import { getEntitysByName } from "../api";
import Loader from "./../components/Loader";
import { useDocumentTitle } from './../utils/useDocumentTitle';

export default function Locations() {
  const locations = useLoaderData();
  const [searchInput, setSearchInput] = useState("");
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useDocumentTitle(`Locations | Rick and Morty`)
  
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function searchLocation() {
      setIsLoading(true);
      try {
        const res = await getEntitysByName("location", searchInput, signal);
        setArr(res);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setIsLoading(false);
      }
    }
    searchLocation();

    return () => {
      controller.abort();
    };
  }, [searchInput]);

  return (
    <>
      <h1 className="visually-hidden">Locations on Rick and Morty</h1>
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

import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";
import { getEntitysByName } from "../api";
import { useEffect, useState } from "react";
import Loader from "./../components/Loader";
import { useDocumentTitle } from './../utils/useDocumentTitle';

export default function Episodes() {
  const locations = useLoaderData();

  const [searchInput, setSearchInput] = useState("");
  const [arr, setArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useDocumentTitle(`Episodes | Rick and Morty`);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function searchLocation() {
      setIsLoading(true);

      try {
        const res = await getEntitysByName("episode", searchInput, signal);
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
      <h1 className="visually-hidden">Episodes on Rick and Morty</h1>
      <Hero image="rickAndMorty">
        <SearchInput
          searchInput={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </Hero>
      {isLoading ? (
        <Loader />
      ) : arr.length == 0 || searchInput === "" ? (
        <CardSection
          title="All episodes on Rick and Morty"
          hiddenTitle
          linkTo="episode"
          sectionsData={locations}
          key={searchInput}
        />
      ) : (
        <CardSection
          title="All episodes on Rick and Morty"
          hiddenTitle
          linkTo="episode"
          sectionsData={arr}
          key={searchInput}
        />
      )}
    </>
  );
}

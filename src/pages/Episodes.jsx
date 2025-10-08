import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";

export default function Episodes() {
  const episodes = useLoaderData();
  return (
    <>
      <Hero image="rickAndMorty">
        <SearchInput></SearchInput>
      </Hero>
      <CardSection title="All episodes on Rick and Morty" hiddenTitle linkTo="episode" sectionsData={episodes}/>
    </>
  );
}

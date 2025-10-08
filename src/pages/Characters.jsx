import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";

export default function Characters() {
  const characters = useLoaderData();

  return (
    <>
      <Hero image="rickAndMortyLogo">
        <SearchInput></SearchInput>
        <SelectsMenu>
          <Select defaultValue="Species"></Select>
          <Select defaultValue="Gender"></Select>
          <Select defaultValue="Status"></Select>
        </SelectsMenu>
      </Hero>
      <CardSection
        title="All characters on Rick and Morty"
        hiddenTitle
        linkTo="character"
        sectionsData={characters}
      />
    </>
  );
}

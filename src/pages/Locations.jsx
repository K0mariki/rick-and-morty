import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import CardSection from "../sections/CardSection";

export default function Locations() {
  const locations = useLoaderData();

  return (
    <>
      <Hero image="rickAndMortyPortal">
        <SearchInput></SearchInput>
        <SelectsMenu>
          <Select defaultValue="Type"></Select>
          <Select defaultValue="Dimension"></Select>
        </SelectsMenu>
      </Hero>
      <CardSection title="All locations on Rick and Morty" hiddenTitle linkTo="location" sectionsData={locations}/>
    </>
  );
}

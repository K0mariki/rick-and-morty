import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import Section from "../sections/Section";
import BaseCard from "../components/BaseCard";

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
      <Section title="All episodes on Rick and Morty" hiddenTitle>
        <ul className="section__cards-list">
          {locations.results.map((location) => (
            <li key={location.id} className="section__cards-list-item">
              <BaseCard
                title={location.name}
                type={location.type}
              />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

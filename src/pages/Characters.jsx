import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import SelectsMenu from "../components/SelectsMenu";
import Select from "../components/Select";
import Hero from "../sections/Hero";
import Section from "../sections/Section";
import CharacterCard from "../components/CharacterCard/CharacterCard";

export default function Characters() {
  const characters = useLoaderData();
  return (
    <>
      <Hero image="rick-and-morty-logo.svg">
        <SearchInput></SearchInput>
        <SelectsMenu>
          <Select defaultValue="Species"></Select>
          <Select defaultValue="Gender"></Select>
          <Select defaultValue="Status"></Select>
        </SelectsMenu>
      </Hero>
      <Section title="All episodes on Rick and Morty" hiddenTitle>
        <ul className="section__cards-list">
          {characters.results.map((character) => (
            <li key={character.id} className="section__cards-list-item">
              <CharacterCard
                image={character.image}
                name={character.name}
                species={character.species}
              />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

import { useLoaderData } from "react-router-dom";
import SearchInput from "../components/SearchInput";
import Hero from "../sections/Hero";
import BaseCard from "../components/BaseCard";
import Section from "../sections/Section";

export default function Episodes() {
  const episodes = useLoaderData();
  return (
    <>
      <Hero image="rick-and-morty.png">
        <SearchInput></SearchInput>
      </Hero>
      <Section title="All episodes on Rick and Morty" hiddenTitle>
        <ul className="section__cards-list">
          {episodes.results.map((episode) => (
            <li key={episode.id} className="section__cards-list-item">
              <BaseCard
                title={episode.name}
                date={episode.air_date}
                episode={episode.episode}
              />
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}

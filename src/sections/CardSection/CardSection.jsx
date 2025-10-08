import "./CardSection.scss";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMore } from "../../api";
import CharacterCard from "../../components/CharacterCard";
import BaseCard from "../../components/BaseCard";
import Button from "../../components/Button";

export default function CardSection(props) {
  const { sectionsData, linkTo, title, hiddenTitle = false } = props;
  const [characterArr, setCharacterArr] = useState(sectionsData.results);
  const nextPageUrl = useRef(sectionsData.info.next);

  async function loadMore() {
    const nextPageData = await fetchMore(nextPageUrl.current);

    setCharacterArr([...characterArr, ...nextPageData.results]);
    nextPageUrl.current = nextPageData.info.next;
  }

  return (
    <section className="section container">
      <h2 className={`section__title ${hiddenTitle ? "visually-hidden" : ""}`}>
        {title}
      </h2>
      <ul className="section__cards-list">
        {characterArr.map((item) => (
          <li key={item.id} className="section__cards-list-item">
            <Link to={`/${linkTo}/${item.id}`} state={sectionsData}>
              {linkTo == "character" ? (
                <CharacterCard
                  image={item.image}
                  name={item.name}
                  species={item.species}
                />
              ) : (
                <BaseCard
                  title={item.name}
                  date={item.air_date}
                  episode={item.episode}
                  type={item.type}
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
      {nextPageUrl.current ? (
        <Button className="section__button" onClick={loadMore}>
          LOAD MORE
        </Button>
      ) : (
        ""
      )}
    </section>
  );
}

import "./CardSection.scss";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMore } from "../../api";
import CharacterCard from "../../components/CharacterCard";
import BaseCard from "../../components/BaseCard";
import Button from "../../components/Button";

export default function CardSection(props) {
  const { sectionsData, linkTo, title, hiddenTitle = false } = props;
  const nextPageUrl = useRef(sectionsData?.info?.next);

  const [data, setData] = useState(() => {
    if (sectionsData["info"]) {
      return sectionsData.results;
    } else {
      return sectionsData;
    }
  });

  async function loadMore() {
    const nextPageData = await fetchMore(nextPageUrl?.current);

    setData([...data, ...nextPageData.results]);
    nextPageUrl.current = nextPageData.info.next;
  }

  return (
    <section className="section-card container">
      <h2 className={`section-card__title h3${hiddenTitle ? " visually-hidden" : ""}`}>
        {title}
      </h2>
      <ul className="section-card__cards-list">
        {data.map((item) => (
          <li key={item.id} className="section-card__cards-list-item">
            <Link to={`/${linkTo}/${item.id}`} state={item}>
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
      {nextPageUrl?.current ? (
        <Button className="section-card__button" onClick={loadMore}>
          LOAD MORE
        </Button>
      ) : (
        ""
      )}
    </section>
  );
}

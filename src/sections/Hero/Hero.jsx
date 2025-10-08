import "./Hero.scss";
import rickAndMortyLogo from "./../../assets/images/rick-and-morty-logo.svg";
import rickAndMortyPortal from "./../../assets/images/rick-and-morty-portal.png";
import rickAndMorty from "./../../assets/images/rick-and-morty.png";

const imgHeroMap = {
  rickAndMortyLogo,
  rickAndMortyPortal,
  rickAndMorty,
};

export default function Hero(props) {
  const { children, image } = props;
  const imageSrc = imgHeroMap[image];

  return (
    <section className="hero">
      <div className="hero__inner container">
        {image && <img src={imageSrc} className="hero__image" alt={image} />}
        <div className="hero__grid">{children}</div>
      </div>
    </section>
  );
}

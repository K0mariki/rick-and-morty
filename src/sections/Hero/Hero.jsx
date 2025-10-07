import "./Hero.scss";

export default function Hero(props) {
  const { children, image } = props;

  return (
    <section className="hero">
      <div className="hero__inner container">
        {image && <img src={`./../src/assets/images/${image}`} className="hero__image" alt={image}/>}
        <div className="hero__grid">{children}</div>
      </div>
    </section>
  );
}

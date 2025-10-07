import "./CharacterCard.scss";

export default function CharacterCard(props) {
  const { image, name, species } = props;
  return (
    <article className="character-card">
      <img
        src={image}
        alt={name}
        className="character-card__image"
        loading="lazy"
        width="240"
        height="224"
      />
      <div className="character-card__body">
        <h3 className="character-card__title">{name}</h3>
        <p className="character-card__species">{species}</p>
      </div>
    </article>
  );
}

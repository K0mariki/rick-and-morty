import "./BaseCard.scss";

export default function BaseCard(props) {
  const { title, date, episode, type } = props;
  return (
    <article className="card">
      <h3 className="card__title">{title}</h3>
      {date && (
        <time className="card__date" dateTime={"///////////"}>
          {date}
        </time>
      )}
      {episode && <p className="card__episode">{episode}</p>}
      {type && <p className="card__type">{type}</p>}
    </article>
  );
}

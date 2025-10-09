import "./SectionDetails.scss";
import BackButton from "../../components/BackButton";

export default function SectionDetails(props) {
  const { title, details, episode, image } = props;

  return (
    <section className="section-details container">
      <BackButton />
      {image ? (
        <>
          <header className="section-details__header">
            <img src={image} alt={image} className="section-details__image" />
            <h1 className="section-details__title">{title}</h1>
          </header>
          <div className="section-details__body--character">
            <div>
              <h2 className="section-details__list-title h3">Informations</h2>
              <ul className="section-details__list">
                {details.map((detail, index) => (
                  <li key={index} className="section-details__item">
                    <div className="section-details__item-inner">
                      <p className="section-details__item-title h4">
                        {detail.name}
                      </p>
                      <p className="section-details__item-subtitle">
                        {detail.value ? detail.value : "-"}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="section-details__list-title h3">Episodes</h2>
              <ul className="section-details__list">
                {episode.map((item, index) => (
                  <li key={index} className="section-details__item">
                    <div className="section-details__item-inner">
                      <h3 className="section-details__item-title h4">
                        {item.episode}
                      </h3>
                      <p className="section-details__item-subtitle">
                        {item.name}
                      </p>
                      <time className="section-details__item-date">
                        {item.air_date.toUpperCase()}
                      </time>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <div className="section-details__body">
          <h1 className="section-details__title">{title}</h1>
          <ul className="section-details__list">
            {details.map((detail, index) => (
              <li key={index} className="section-details__item">
                <div className="section-details__item-inner">
                  <p className="section-details__item-title h4">
                    {detail.name}
                  </p>
                  <p className="section-details__item-subtitle">
                    {detail.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

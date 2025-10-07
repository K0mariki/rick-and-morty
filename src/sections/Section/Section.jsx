import "./Section.scss";

export default function Section(props) {
  const { children, title, hiddenTitle = false } = props;
  return (
    <section className="section container">
      <h2 className={`section__title ${hiddenTitle ? "visually-hidden" : ""}`}>{title}</h2>
      {children}
    </section>
  );
}

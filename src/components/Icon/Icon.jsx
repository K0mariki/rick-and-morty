export default function Icon(props) {
  const { name = "filter", className } = props;
  return <img src={`src/assets/icons/${name}`} alt={name} className={className}></img>;
}

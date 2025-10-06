export default function Icon(props) {
  const { name = "filter", className } = props;
  return <img src={`src/assets/icons/${name}.svg`} alt={name} className={className}></img>;
}

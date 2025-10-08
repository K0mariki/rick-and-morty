import search from "./../../assets/icons/search.svg";
import arrowBack from "./../../assets/icons/arrow-back.svg";
import arrowDropDown from "./../../assets/icons/arrow-drop-down.svg";
import arrowRight from "./../../assets/icons/arrow-right.svg";
import close from "./../../assets/icons/close.svg";
import filter from "./../../assets/icons/filter.svg";

const iconMap = {
  search: search,
  arrowBack: arrowBack,
  arrowDropDown: arrowDropDown,
  arrowRight: arrowRight,
  close: close,
  filter: filter
}

export default function Icon(props) {
  const { name = "filter", className } = props;
  const iconSrc = iconMap[name];

  return <img src={iconSrc} alt={name} className={className}></img>;
}

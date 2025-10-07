import "./Select.scss";
import Icon from "../Icon";

export default function Select(props) {
  const { defaultValue } = props;
  return (
    <label className="select">
      <select defaultValue={defaultValue} className="select__menu-list">
        <option>{defaultValue}</option>
        <option value="t1">Чебурашка</option>
        <option value="t2">Крокодил Гена</option>
        <option value="t3">Шапокляк</option>
        <option value="t4">Крыса Лариса</option>
      </select>
      <Icon className="select__icon" name="arrow-drop-down.svg" />
    </label>
  );
}

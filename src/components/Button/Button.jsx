import Icon from "../Icon/Icon";
import "./Button.scss";

export default function Button(props) {
  const { children, icon, fullWidth = false, size = "small", className, onClick } = props;

  return (
    <button
      type="button"
      className={`button ${
        fullWidth ? "button--full-width" : "button--inline"
      } ${size == "big" ? "button--big" : ""}  ${
        !children ? "button--transparent" : ""
      } ${className}`}
      onClick={onClick}
    >
      {icon && <Icon name={icon} className="button__icon" />}
      {children}
    </button>
  );
}

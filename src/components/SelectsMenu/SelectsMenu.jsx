import "./SelectsMenu.scss";
import { useState } from "react";
import Button from "./../Button";

export default function SelectsMenu(props) {
  const { children } = props;
  const [isOpenFilterMenu, setIsOpenFilterMenu] = useState(false);

  function toggleFilterMenu() {
    setIsOpenFilterMenu(!isOpenFilterMenu);
  }

  return (
    <div className="selects-menu">
      <dialog
        className="selects-menu__overlay-menu-dialog"
        open={isOpenFilterMenu}
      >
        <div className="selects-menu__inner">
          <header className="selects-menu__header visible-tablet">
            <p>Filter</p>
            <Button icon="close.svg" onClick={toggleFilterMenu}/>
          </header>
          {children}
          <Button
            className="selects-menu__button visible-tablet"
            fullWidth
            onClick={toggleFilterMenu}
          >
            APPLY
          </Button>
        </div>
      </dialog>
      <Button
        className="visible-tablet"
        icon="filter.svg"
        size="big"
        fullWidth
        onClick={toggleFilterMenu}
      >
        ADVANCED FILTERS
      </Button>
    </div>
  );
}

import React, { useRef, useState, useEffect } from "react";
import Switch from "react-switch";
import "../scss/Menu.scss";
// import DetectOutsideClick from "../utils/detectOutsideClick"

export interface MenuProps {
  pokedexStyle: string;
  setPokedexStyle: React.Dispatch<React.SetStateAction<string>>
  livingDex: boolean;
  setLivingDex: React.Dispatch<React.SetStateAction<boolean>>;
}

// there is a bug where if you click the toggle, the radio buttons reset
export default function Menu({pokedexStyle, setPokedexStyle, livingDex, setLivingDex}: MenuProps) {
  const dropdownRef: React.MutableRefObject<any> = useRef(null);
  // const [menu, setMenu] = DetectOutsideClick(dropdownRef, false); // menu pops or not

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const onClick = (e: any) => {
      // If the active element exists and is clicked outside of
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setMenu(!menu);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (menu) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [menu]);

  const handleMenu = () => setMenu(!menu);

  const onChangeStyle = (event: React.FormEvent<HTMLDivElement>) => {
    setPokedexStyle(event.currentTarget.innerText);
    console.log("event text is ", event.currentTarget.innerText);
  };

  const handleSwitchChange = () => setLivingDex(!livingDex);

  return (
    <div className="menu-container">
      <button onClick={handleMenu} className="drop-down">
        Menu
      </button>
      <div
        ref={dropdownRef}
        className={`menu-contents ${menu ? "active" : "inactive"}`}
      >
        <form id="scroll-grid" onChange={(e) => onChangeStyle}>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              id="scroll"
              name="style"
              value="scroll"
              checked
            />
            Scroll
          </label>
          <label className="radio-label">
            <input
              className="radio-button"
              type="radio"
              id="grid"
              name="style"
              value="grid"
            />
            Grid
          </label>
        </form>
        <div id="livingdex-switch">
          <Switch
            className="toggle-switch"
            onChange={handleSwitchChange}
            checked={livingDex}
          />
          <span className="switch-label">Living Dex</span>
        </div>
      </div>
    </div>
  );
}

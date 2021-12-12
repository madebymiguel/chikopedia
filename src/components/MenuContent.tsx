import React from "react";
import Switch from "react-switch";
import "../scss/Menu.scss";
import { LIVING_DEX_STATUS_KEY } from "../variables/globalVariables";

export interface MenuContentProps {
  pokedexStyle: string;
  setPokedexStyle: React.Dispatch<React.SetStateAction<string>>;
  livingDex: boolean;
  onToggleLivingDex: () => void;
  menu: boolean;
  dropdownRef: React.MutableRefObject<any>;
}

export default function MenuContent({
  pokedexStyle,
  setPokedexStyle,
  livingDex,
  onToggleLivingDex,
  menu,
  dropdownRef,
}: MenuContentProps) {
  return (
    <div
      ref={dropdownRef}
      className={`menu-contents ${menu ? "active" : "inactive"}`}
    >
      <div id="scroll-grid">
        <label className="radio-label">
          <input
            className="radio-button"
            type="radio"
            id="grid"
            name="viewStyle"
            value="grid"
            onChange={() => setPokedexStyle("grid")}
            checked={pokedexStyle === "grid"}
          />
          Grid
        </label>

        <label className="radio-label">
          <input
            className="radio-button"
            type="radio"
            id="scroll"
            name="viewStyle"
            value="scroll"
            onChange={() => setPokedexStyle("scroll")}
          />
          Scroll
        </label>

        <div id="livingdex-switch">
          <Switch
            className="toggle-switch"
            onChange={onToggleLivingDex}
            checked={livingDex}
          />
          <span className="switch-label">Living Dex</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import "../scss/Menu.scss";

export interface MenuContentProps {
  pokedexStyle: string;
  handlePokedexStyle: (style: string) => void;
  livingDex: boolean;
  onToggleLivingDex: () => void;
  menu: boolean;
  dropdownRef: React.MutableRefObject<any>;
}

export default function MenuContent({
  pokedexStyle,
  handlePokedexStyle,
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
            onChange={() => handlePokedexStyle("grid")}
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
            onChange={() => handlePokedexStyle("scroll")}
            checked={pokedexStyle === "scroll"}
          />
          Scroll
        </label>

        <div id="livingdex-switch">
          <ToggleSwitch
            isToggled={livingDex}
            handleToggle={onToggleLivingDex}
          />
          <span className="switch-label">Living Dex</span>
        </div>
      </div>
    </div>
  );
}

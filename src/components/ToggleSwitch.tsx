import React from "react";
import "../scss/ToggleSwitch.scss";

export interface ToggleSwitchProps {
  isToggled: boolean;
  handleToggle: () => void;
}

export default function ToggleSwitch({
  isToggled,
  handleToggle,
}: ToggleSwitchProps) {
  return (
    <>
      <div className="toggle-switch-container">
        <input
          className="switch-checkbox"
          checked={isToggled}
          onChange={handleToggle}
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          className="switch-label"
          style={{ background: isToggled ? "#008800" : "#808080" }}
          htmlFor={`react-switch-new`}
        >
          <span className={`switch-button`} />
        </label>
      </div>
    </>
  );
}

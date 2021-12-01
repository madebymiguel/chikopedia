import React from "react";
import Switch from "react-switch";
import "../scss/Menu.scss";
import { getLivingDexStatus } from "../utils/getLivingDexStatus";
import { LIVING_DEX_STATUS_KEY } from "../Variables/globalVariables";

export interface MenuContentProps {
    pokedexStyle: string;
    setPokedexStyle: React.Dispatch<React.SetStateAction<string>>
    livingDex: boolean;
    setLivingDex: React.Dispatch<React.SetStateAction<boolean>>;
    menu: boolean;
    dropdownRef: React.MutableRefObject<any>
}

export default function MenuContent({pokedexStyle, setPokedexStyle, livingDex, setLivingDex, menu, dropdownRef}: MenuContentProps) { 
    function handleLivingDexStatus() {
        const swap = !livingDex;
        sessionStorage.setItem(LIVING_DEX_STATUS_KEY, JSON.stringify(swap));
        setLivingDex(swap);

    }
    return(
        <div
            ref={dropdownRef}
            className={`menu-contents ${menu ? "active" : "inactive"}`}
        >
            <div id="scroll-grid">
                <div className="radio-button" onClick={(e) => setPokedexStyle("grid")}>
                    <input type="radio" value={pokedexStyle} name="pokedexStyle" checked={pokedexStyle === "grid"} /> 
                    grid
                </div>
                <div className="radio-button" onClick={(e) => setPokedexStyle("scroll")}>
                    <input type="radio" value={pokedexStyle} name="pokedexStyle" checked={pokedexStyle === "scroll"} />
                    scroll
                </div>
            </div>

            <div id="livingdex-switch">
                <Switch
                    className="toggle-switch"
                    onChange={handleLivingDexStatus}
                    checked={livingDex}
                />
                <span className="switch-label">Living Dex</span>
            </div>
        </div>
    )
}
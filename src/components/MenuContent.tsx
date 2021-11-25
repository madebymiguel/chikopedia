import React from "react";
import Switch from "react-switch";
import "../scss/Menu.scss";

export interface MenuContentProps {
    pokedexStyle: string;
    setPokedexStyle: React.Dispatch<React.SetStateAction<string>>
    livingDex: boolean;
    setLivingDex: React.Dispatch<React.SetStateAction<boolean>>;
    menu: boolean;
    dropdownRef: React.MutableRefObject<any>
}

export default function MenuContent({pokedexStyle, setPokedexStyle, livingDex, setLivingDex, menu, dropdownRef}: MenuContentProps) { 
    
    // for debugging
    // useEffect(() => {
    //     console.log(livingDex);
    // }, [livingDex]);
    // useEffect(() => {
    //     console.log(pokedexStyle);
    // }, [pokedexStyle]);

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
                    onChange={() => {setLivingDex(!livingDex)}}
                    checked={livingDex}
                />
                <span className="switch-label">Living Dex</span>
            </div>
        </div>
    )
}
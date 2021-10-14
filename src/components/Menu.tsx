import React, { useState, useEffect } from "react";
import Switch from "react-switch";

export default function Menu() {
    
    const [menu, setMenu] = useState(); // menu pops or not

    const [pokedexMenu, setPokedexMenu] = useState(); // scroll or grid

    const [livingdex, setLivingdex] = useState(); // living dex on or off

    // use library for both drop down menu and toggle switch
    function popup() {
        // pop up the option window
        
        // Then, window "pops up" -- the window has two toggle switches for scroll vs grid and for living dex.
    }

    return (
        <div>
            <button id = "settings" onClick = {() => popup()}>
                Option
            </button>
        </div>
        // scroll
        // grid

        // living dex (hmm)
        // on
        // off
    );
}
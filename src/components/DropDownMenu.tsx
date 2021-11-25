import React  from "react";
import "../scss/Menu.scss";

export interface DropDownMenuProps {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropDownMenu({menu, setMenu}: DropDownMenuProps) {    
    return(
        <button onClick={() => setMenu(!menu)} 
                className="drop-down">
            Menu
        </button>
    )
}


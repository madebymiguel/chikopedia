import React  from "react";
import "../scss/Menu.scss";

export interface DropDownMenuProps {
    menu: boolean;
    setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DropDownMenu({menu, setMenu}: DropDownMenuProps) {
    const handleMenu = () => setMenu(!menu);
    
    return(
        <button onClick={handleMenu} 
                className="drop-down">
            Menu
        </button>
    )
}


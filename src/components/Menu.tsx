import React, { useRef, useState, useEffect } from "react";
import DropDownMenu from "./DropDownMenu";
import MenuContent from "./MenuContent";
import "../scss/Menu.scss";

export interface MenuProps {
  pokedexStyle: string;
  handlePokedexStyle: (style: string) => void;
  livingDex: boolean;
  onToggleLivingDex: () => void;
}

export default function Menu({
  pokedexStyle,
  handlePokedexStyle,
  livingDex,
  onToggleLivingDex,
}: MenuProps) {
  const dropdownRef: React.MutableRefObject<any> = useRef(null);
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

  return (
    <div className="menu-container">
      <DropDownMenu menu={menu} setMenu={setMenu} />
      <MenuContent
        pokedexStyle={pokedexStyle}
        handlePokedexStyle={handlePokedexStyle}
        livingDex={livingDex}
        onToggleLivingDex={onToggleLivingDex}
        menu={menu}
        dropdownRef={dropdownRef}
      />
    </div>
  );
}

import React, { useRef, useState, useEffect } from "react";
import "../scss/Menu.scss";
import DropDownMenu from "./DropDownMenu";
import MenuContent from "./MenuContent";

export interface MenuProps {
  pokedexStyle: string;
  setPokedexStyle: React.Dispatch<React.SetStateAction<string>>;
  livingDex: boolean;
  setLivingDex: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Menu({
  pokedexStyle,
  setPokedexStyle,
  livingDex,
  setLivingDex,
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
        setPokedexStyle={setPokedexStyle}
        livingDex={livingDex}
        setLivingDex={setLivingDex}
        menu={menu}
        dropdownRef={dropdownRef}
      />
    </div>
  );
}

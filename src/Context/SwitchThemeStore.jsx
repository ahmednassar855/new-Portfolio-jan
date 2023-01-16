import { createContext, useEffect, useState } from "react";

export let SwitchThemeContext = createContext(false);

function SwitchThemeContextProvide(props) {
  const [switchTheme, setSwitchTheme] = useState(false);

  const [width, setWidth] = useState("");

  const updateWindowWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
    console.log('updating width' , newWidth);   
};
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    console.log("give width", width);
  }, [width]);


  const changeTheme = () => {
    setSwitchTheme(!switchTheme);
  };

  return (
    <SwitchThemeContext.Provider value={{ switchTheme, changeTheme ,width }}>
      {props.children}
    </SwitchThemeContext.Provider>
  );
}

export default SwitchThemeContextProvide;

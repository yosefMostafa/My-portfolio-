import "../styles/header.scss";
import Intro from "../assets/intro.json";
import { setTheme, getSavedTheme } from "../styles/themes.ts";
import { useEffect, useState } from 'react';



export default function Header() {
  const headerText: string = Intro.text;
  const words = headerText.trim().split(" ");
  const [theme, _] = useState<'light' | 'dark'>(() => getSavedTheme() || 'light');

  useEffect(() => {
    setTheme(theme);
  }, [theme]);
  return (
    <>
      <header className="site-header">
           {/* <button
         onClick={() => setThemeState(theme === 'light' ? 'dark' : 'light')}
        >
          light theme
        </button> */}
        <div className="content">
          <h1>Welcome.</h1>
          {words.map((word, i) => (
            <span key={i} style={{ animationDelay: `${i * 0.03}s` }}>
              {word}&nbsp;
            </span>
          ))}
        </div>
        <div className="header-image">
          <img src={"coding.png"} alt="Laptop with code and coffee" />
        </div>

        <div className="header-curve">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,100 C480,0 960,0 1440,100 L1440,0 L0,0 Z" />
          </svg>
        </div>
     
      </header>
    </>
  );
}

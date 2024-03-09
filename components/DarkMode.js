import { useEffect } from 'react';
import { posthog } from 'posthog-js'

const setDarkMode = (active = false) => {
  const wrapper = document.querySelector(":root");
  const modeName = active ? "dark" : "light";
  wrapper.setAttribute("data-theme", modeName);
  localStorage.setItem("theme", modeName);
};

const toggleDarkMode = () => {
  const theme = document.querySelector(":root").getAttribute("data-theme");
  setDarkMode(theme === "light");
  posthog.capture('WA - Toggled Dark Theme', { isDark: theme === "light"});
};

const toggleOnMatchMediaChange = e => {
  setDarkMode(e.matches);
  posthog.capture('WA - Toggled Dark Theme On System Change', { isDark: theme === "light"});
}

const initDarkMode = () => {
  const themePreference = localStorage.getItem("theme");
  const query = window.matchMedia("(prefers-color-scheme: dark)");
  setDarkMode(themePreference ? themePreference === "dark" : query.matches);
  query.addEventListener("change", toggleOnMatchMediaChange);
  return query;
};


const DarkMode = ({ children }) => {
  useEffect(() => {
    const query = initDarkMode();
    return () => {
      query.removeEventListener("change", toggleOnMatchMediaChange);
    }
  }, []);
  return (
    <>
      <span onClick={toggleDarkMode} style={{ position: "fixed", top: 16, right: 16, backdropFilter: 'blur(4px)' }}>
        <img className="moon" src="icons/moon.png" alt="Turn on dark mode" title="Turn on dark mode" role="button" tabIndex="0" />
        <img className="sun" src="icons/sun.png" alt="Turn off dark mode" title="Turn off dark mode" role="button" tabIndex="0" />
      </span>
      {children}
    </>
  );
}

export default DarkMode;
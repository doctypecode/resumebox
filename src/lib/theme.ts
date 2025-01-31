// utils/theme.ts
export const setTheme = (theme: "light" | "dark") => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  export const getCurrentTheme = (): "light" | "dark" => {
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  };
  
  export const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
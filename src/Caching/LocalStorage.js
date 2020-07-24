const getThemePreference = () => localStorage.getItem('theme');

const setThemePreference = theme => {
    localStorage.setItem('theme', theme);
    return theme;
}

export {
    getThemePreference,
    setThemePreference
}
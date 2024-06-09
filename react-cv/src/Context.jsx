import React from 'react';
const ThemeContext = React.createContext({
  theme: 'teal',
  setTheme: () => {},
});
const { Provider: ThemeContextProvider, Consumer: ThemeContextConsumer } =
  ThemeContext;
export { ThemeContextProvider, ThemeContextConsumer, ThemeContext };

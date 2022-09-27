import 'react-native-gesture-handler';
import * as React from "react";
import Router from "./src/navigation/Router";
import { NativeBaseProvider, extendTheme } from "native-base";

const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#FFFFFF",
        100: "#FFFFFF",

      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
    fontConfig: {
      Roboto: {
        100: {
          normal: "Poppins-Light",
          italic: "Poppins-LightItalic",
        },
        200: {
          normal: "Poppins-Light",
          italic: "Poppins-LightItalic",
        },
        300: {
          normal: "Poppins-Light",
          italic: "Poppins-LightItalic",
        },
        400: {
          normal: "Poppins-Regular",
          italic: "Poppins-Italic",
        },
        500: {
          normal: "Poppins-Medium",
        },
        600: {
          normal: "Poppins-Medium",
          italic: "Poppins-MediumItalic",
        },
        700: {
          normal: "Poppins-Bold",
        },
        800: {
          normal: "Poppins-Bold",
          italic: "Poppins-BoldItalic",
        },
        900: {
          normal: "Poppins-Bold",
          italic: "Poppins-BoldItalic",
        },
      },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
      heading: "Roboto",
      body: "Roboto",
      mono: "Roboto",
    },
  });
  return (
    <>
      <NativeBaseProvider theme={theme}>
        <Router />
      </NativeBaseProvider>
    </>
  );
};

export default App;

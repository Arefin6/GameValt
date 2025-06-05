import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    //DarkMode
  },
  //   globalCss: {
  //     html: {
  //       colorPalette: "blue", // Change this to any color palette you prefer
  //     },
  //   },
  //   theme: {
  //     ColorPate: "light",
  //     // fonts: {
  //     //   heading: "Arial, sans-serif",
  //     //   body: "Arial, sans-serif",
  //     // },
  //   },
});

export const system = createSystem(defaultConfig, config);

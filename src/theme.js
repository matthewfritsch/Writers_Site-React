import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";
import "@fontsource/rowdies";
import "@fontsource/jost";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Rowdies, Open Sans, sans-serif",
    text: "Jost, Open Sans, sans-serif",
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Rowdies, Open Sans, sans-serif",
        fontWeight: "500",
      },
      defaultProps: {
        size: "lg",
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "Jost, Open Sans, sans-serif",
      },
    },
    Link: {
      baseStyle: {
        fontFamily: "Jost, Open Sans, sans-serif",
        color: "blue.400",
      },
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#EEEDDE", "#141E27")(props),
      },
    }),
  },
});

export default customTheme;

import { extendTheme } from '@chakra-ui/react'
import "@fontsource/rowdies"
import "@fontsource/jost"

const customTheme = extendTheme({
  fonts: {
    heading: 'Rowdies, Open Sans, sans-serif',
    text: 'Jost, Open Sans, sans-serif',
  },
  components: {
    Tab: {
      baseStyle: {
        width: 200,
      }
    } 
  },
})

export default customTheme
import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-jodie/src/gatsby-plugin-theme-ui"

const theme = merge(originalTheme, {
  fonts: {
    body: `"Work Sans", -apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`
  },
  colors: {
    text: '#fff',
    background: '#000',
<<<<<<< HEAD
    primary: '#000',
=======
    primary: '#33e',
>>>>>>> b29ea3eafd5d9c7e2a607fef9867aeba22d0f1f2
  },
})

export default theme

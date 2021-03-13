import { createMuiTheme } from '@material-ui/core/styles'
export const theme = createMuiTheme({

  "palette": {
    "common": {
      "black":"#000",
      "white":"#fff"
    },

    "background": {
      "default": "#E4FDE1", //Green
      "paper": "#54878D"
    },
    "primary": {
      "main": "#54878D",
    },
    "secondary": {
        "main": "#114B5F", //Blue
    },
    "text": {
        "primary": "#114B5F", //Blue
        "secondary":  "#fff"
    }
  }
});
export default theme;
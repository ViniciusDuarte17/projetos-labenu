import { createTheme } from '@mui/material/styles';
import {primary, secondary} from "./colors"

const theme = createTheme({
    palette: {
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
  });

  export default theme;
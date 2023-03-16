import { createTheme } from '@mui/material/styles'
import { useSelector } from 'react-redux'

function MyThemeProvider () {
  const { ui } = useSelector((state: any) => state)
  const { themeMode: mode } = ui

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            text: {
              primary: grey[900],
              secondary: grey[800]
            }
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: "#000000",
              paper: deepOrange[900]
            },
            text: {
              primary: '#fff',
              secondary: grey[500]
            }
          })
    }
  })

  return theme
}

export default MyThemeProvider

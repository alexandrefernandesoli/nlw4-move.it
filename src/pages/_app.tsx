import { GoogleFonts } from 'next-google-fonts'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

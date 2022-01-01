import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/layouts/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

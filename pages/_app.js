import Footer from '@/components/Footerzetagroup-280323'
import Navbar from '@/components/Navbarzetagroup-280323'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
  </> 
}

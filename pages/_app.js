import '../styles/globals.css'
import Navbar from './components/navbar'
import ParticlesOzadje from './particles/ParticlesO'

function MyApp({ Component, pageProps }) {
  return (
  <div>
    <Navbar/>
    <ParticlesOzadje/>
    <Component {...pageProps} />
  </div>
    )
}

export default MyApp
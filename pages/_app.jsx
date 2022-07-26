import '../styles/globals.css'
import Navbar from '../components/Navbar'


/* 
npm i @sanity/client @sanity/image-url groq mapbox-gl next-sanity

@portabletext/react

*/
function MyApp({ Component, pageProps }) {
  return (
  
  <div className='min-w-full'>
    <Navbar/>
    <Component {...pageProps} />
  </div>
  )
}

export default MyApp

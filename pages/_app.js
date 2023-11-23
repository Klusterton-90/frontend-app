import '@/styles/globals.scss'
import { poppins } from '@/constants/fonts';


export default function App({ Component, pageProps }) {
  return( 
  <div className={poppins.className}>

  <Component {...pageProps} />
  </div>
  );
}

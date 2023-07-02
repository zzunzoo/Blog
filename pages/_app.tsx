import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
      <div className='bg-gradient-to-br from-black to-[#121286]'>
        <Component {...pageProps} />
      </div>

    )
}

export default MyApp

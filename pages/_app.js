import { Provider } from 'next-auth/client'
import EditorContextProvider from '../context/EditorContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider session = {pageProps.session}>
    <EditorContextProvider>
      <Component {...pageProps} />
    </EditorContextProvider>
  </Provider> 
}

export default MyApp

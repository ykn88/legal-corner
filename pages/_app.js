import { Provider } from 'next-auth/client'
import NavBar from '../components/NavBar'
import EditorContextProvider from '../context/EditorContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps, category }) {
  return <Provider session = {pageProps.session}>
    <EditorContextProvider>
      {/* <NavBar category = {category}/> */}
      <Component {...pageProps} />
    </EditorContextProvider>
  </Provider> 
}


export default MyApp

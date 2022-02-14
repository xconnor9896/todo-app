import '../styles/globals.css';
import 'semantic-ui-css/semantic.min.css';
import Layout from './components/layout/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}


export default MyApp

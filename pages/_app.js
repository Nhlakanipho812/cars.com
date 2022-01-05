/** @format */

import '../styles/globals.css';
import Nav from '../components/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Nav />
      <div style={{ paddingLeft: 128, paddingRight: 128 }}>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

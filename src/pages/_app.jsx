import Footer from 'src/components/Layout/Footer/Footer';
import Header from 'src/components/Layout/Header/Header';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

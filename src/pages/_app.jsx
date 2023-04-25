import { useRouter } from 'next/router';
import Footer from 'src/components/Layout/Footer/Footer';
import Header from 'src/components/Layout/Header/Header';
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const isLoginPage = router.pathname === '/login';

	return (
		<>
			{!isLoginPage && <Header />}
			<Component {...pageProps} />
			{!isLoginPage && <Footer />}
		</>
	);
}

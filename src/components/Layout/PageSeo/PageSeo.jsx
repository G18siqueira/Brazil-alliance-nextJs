import Head from 'next/head';

const PageSeo = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="robots" content="index,follow" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{children}
		</>
	);
};

export default PageSeo;

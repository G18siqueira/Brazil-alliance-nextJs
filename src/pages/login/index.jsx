import PageSeo from 'src/components/Layout/PageSeo/PageSeo';
import React from 'react';

import Image from 'next/image';

import styles from './login.module.scss';
import Link from 'next/link';

const Login = () => {
	return (
		<PageSeo title={'Brazil Alliance | Login'} description={''}>
			<main className={styles['login']}>
				<section className={styles['login-content']}>
					<div className={styles['login-content_infos']}>
						<div
							className={`container ${styles['login-container']}`}
						>
							<h1 className={`tit`}>
								Acompanhe sua trajetória na Brazil Alliance.
							</h1>

							<ul>
								<li>Visualize seu progresso; </li>
								<li>Acompanhe sua classificação; </li>
								<li>Lorem ipsum.</li>
							</ul>
						</div>
					</div>
					<div className={styles['login-content_account']}>
						<div
							className={`container ${styles['login-container']}`}
						>
							<div className={styles['logo']}>
								<Link href="/" aria-label="link home">
									<Image
										src="/assets/images/logo-big.svg"
										width="342"
										height="251"
										alt="logo bza"
									/>
								</Link>
							</div>

							<div className={styles['options']}>
								<p>Vincule uma conta para iniciar</p>
								<Link
									href="/usuario/Maypew"
									aria-label="link crowdin"
								>
									Teste User 1
								</Link>
								<Link
									href="/usuario/TesteUser"
									aria-label="link discord"
								>
									Teste User 2
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

Login.getLayout = function getLayout(page) {
	return <>{page}</>;
};

export default Login;

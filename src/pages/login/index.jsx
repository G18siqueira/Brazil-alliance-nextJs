import PageSeo from '@/components/Layout/PageSeo/PageSeo';
import React from 'react';

import Image from 'next/image';

import styles from './login.module.scss';
import Link from 'next/link';

const Login = () => {
	return (
		<PageSeo title={'Brazil Alliance | Login'} description={''}>
			<main>
				<section className={styles['login']}>
					<div className={styles['login-content']}>
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
									<Image
										src="/assets/images/logo-big.svg"
										width="342"
										height="251"
										alt="logo bza"
									/>
								</div>

								<div className={styles['options']}>
									<p>Vincule uma conta para iniciar</p>
									<Link href="" aria-label="link crowdin">
										Crowdin
									</Link>
									<Link href="" aria-label="link discord">
										Discord
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

export default Login;

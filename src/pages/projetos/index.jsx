import PageSeo from '@/components/Layout/PageSeo/PageSeo';

import styles from './projetos.module.scss';

const index = () => {
	return (
		<PageSeo title={'Brazil Alliance | Projetos'} description={''}>
			<main className={styles['projects']}>
				{/* EQUIPE BZA */}
				<section className={styles['projects-bza']}>
					<div
						className={`container ${styles['projects-bza-container']}`}
					>
						<div className={styles['projects-bza-content']}>
							<h1 className={`tit`}>Equipe BZA</h1>
						</div>
					</div>
				</section>

				{/* EQUIPE BZA */}
				<section className={styles['projects-partners']}>
					<div
						className={`container ${styles['projects-partners-container']}`}
					>
						<div className={styles['projects-partners-content']}>
							<h1 className={`tit`}>Parceiros</h1>
						</div>
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

export default index;

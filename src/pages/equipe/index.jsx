import PageSeo from '@/components/Layout/PageSeo/PageSeo';

import styles from './equipe.module.scss';

const index = () => {
	return (
		<PageSeo title={'Brazil Alliance | Equipe'} description={''}>
			<main className={styles['team']}>
				{/* EQUIPE BZA */}
				<section className={styles['team-users']}>
					<div
						className={`container ${styles['team-users-container']}`}
					>
						<div className={styles['team-users-content']}>
							<h1 className={`tit`}>Usuários</h1>
						</div>
					</div>
				</section>

				{/* EQUIPE BZA */}
				<section className={styles['team-classification']}>
					<div
						className={`container ${styles['team-classification-container']}`}
					>
						<div className={styles['team-classification-content']}>
							<h1 className={`tit`}>Classificação</h1>
						</div>
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

export default index;

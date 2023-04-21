import PageSeo from 'src/components/Layout/PageSeo/PageSeo';

import styles from './projetos.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const index = () => {
	const [teamBza, setTeamBza] = useState([]);
	const [partners, setPartners] = useState([]);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const res = await axios.get('data/projects.json');
				const data = res.data;
				setTeamBza(data.projectsBza);
				setPartners(data.projectsPartners);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProjects();
	}, []);

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

							<div
								className={styles['projects-bza-content_grid']}
							>
								{teamBza.map(
									({ id, imageSrc, alt, width, height }) => (
										<div
											key={id}
											className={styles['project']}
										>
											<Image
												src={imageSrc}
												width={width}
												height={height}
												alt={alt}
											/>
										</div>
									),
								)}
							</div>
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

							<div
								className={
									styles['projects-partners-content_grid']
								}
							>
								{partners.map(
									({ id, imageSrc, alt, width, height }) => (
										<div
											key={id}
											className={styles['project']}
										>
											<Image
												src={imageSrc}
												width={width}
												height={height}
												alt={alt}
											/>
										</div>
									),
								)}
							</div>
						</div>
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

export default index;

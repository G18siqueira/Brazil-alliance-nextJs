import styles from './tabs.module.scss';

const TabProjetos = ({ projects }) => {
	return (
		<div className={styles['tabProjects']}>
			{projects.map(
				({ id, title, translated, approved, voted, tags }) => (
					<div key={id} className={styles['tabProjects-card']}>
						<h3>{title}</h3>
						<p>
							Textos Traduzidos: <span>{translated}</span>
						</p>
						<p>
							Textos Aprovados: <span>{approved}</span>
						</p>
						<p>
							Textos Votados: <span>{voted}</span>
						</p>
						<div className={styles['tabProjects-card_tags']}>
							{tags.map((tag) => (
								<span key={tag} className={styles[`${tag}`]}>
									{tag}
								</span>
							))}
						</div>
					</div>
				),
			)}
		</div>
	);
};

export default TabProjetos;

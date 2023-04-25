import styles from './tabs.module.scss';

const TabResumo = ({ resume }) => {
	console.log('resumo: ', resume);
	return (
		<div className={styles['tabResume']}>
			<h2>Estatísticas</h2>

			<div className={styles['tabResume-projects']}>
				<select name="" id="">
					<option value="">Todos os projetos</option>
				</select>
				<div className={styles['tabResume-projects_classification']}>
					<p>
						Classificação <span>#59</span>
					</p>
				</div>
			</div>

			<div className={styles['tabResume-average']}>
				<h3>Aprovação</h3>
				<div className={styles['range']}>
					<div className={styles['range-content']}>
						<span
							className={`${styles['range-content_bg']} ${styles['green']}`}
							style={{ width: `${resume && resume.approved}%` }}
						></span>
					</div>
					<span className={styles['range-content_percent']}>
						{resume && resume.approved}%
					</span>
				</div>
				<span className={styles['words']}>20.000 palavras</span>
			</div>

			<div className={styles['tabResume-average']}>
				<h3>Total traduzido</h3>
				<div className={styles['range']}>
					<div className={styles['range-content']}>
						<span
							className={`${styles['range-content_bg']} ${styles['blue']}`}
							style={{
								width: `${resume && resume.totalTranslated}%`,
							}}
						></span>
					</div>
					<span className={styles['range-content_percent']}>
						{resume && resume.totalTranslated}%
					</span>
				</div>
				<span className={styles['words']}>20.000 palavras</span>
			</div>

			<div className={styles['tabResume-average']}>
				<h3>Total aprovado</h3>
				<div className={styles['range']}>
					<div className={styles['range-content']}>
						<span
							className={`${styles['range-content_bg']} ${styles['green']}`}
							style={{
								width: `${resume && resume.totalApproved}%`,
							}}
						></span>
					</div>
					<span className={styles['range-content_percent']}>
						{resume && resume.totalApproved}%
					</span>
				</div>
				<span className={styles['words']}>
					{resume && resume.words} palavras
				</span>
			</div>
		</div>
	);
};

export default TabResumo;

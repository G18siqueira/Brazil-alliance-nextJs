import styles from './tabs.module.scss';

const TabConfig = () => {
	return (
		<div className={styles['tabConfig']}>
			<div className={styles['tabConfig-integrations']}>
				<h2>Integrações</h2>

				<div className={styles['tabConfig-integrations_btn']}>
					<span className={styles['purple']}></span>
					<button className={styles['connect']}>Conectar</button>
				</div>
				<div className={styles['tabConfig-integrations_btn']}>
					<span className={styles['green']}></span>
					<button className={styles['desconnect']}>
						Desconectar
					</button>
				</div>
			</div>
			<div className={styles['tabConfig-privacy']}>
				<h2>Privacidade</h2>
				<div className={styles['tabConfig-privacy_inputGroup']}>
					<input id="check" type="checkbox" />
					<label htmlFor="check">Exibir meu usuário no ranque</label>
				</div>
			</div>
		</div>
	);
};

export default TabConfig;

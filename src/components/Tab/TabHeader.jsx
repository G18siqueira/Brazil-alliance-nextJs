import styles from './tab.module.scss';

const TabHeader = ({ user, twords, rwords, position }) => {
	return (
		<div className={styles['tab-header']}>
			<div className={styles['tab-header-image']}></div>
			<div className={styles['tab-header-user']}>
				<p>{user}</p>
			</div>
			<div className={styles['tab-header-words']}>
				<p>{twords}</p>
			</div>
			<div className={styles['tab-header-words']}>
				<p>{rwords}</p>
			</div>
			<div className={styles['tab-header-position']}>
				<p>{position}</p>
			</div>
		</div>
	);
};

export default TabHeader;

import styles from './footer.module.scss';
const Footer = () => {
	return (
		<footer className={styles['footer']}>
			<div className={`container ${styles['footer-container']}`}>
				<div className={styles['footer-content']}></div>
			</div>
		</footer>
	);
};

export default Footer;

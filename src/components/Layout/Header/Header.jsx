import { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';

import Link from 'next/link';
import Image from 'next/image';

import Navbar from 'src/components/Ui/NavBar/Navbar';

import styles from './header.module.scss';

const Header = () => {
	const [toggle, setToggle] = useState(false);

	const handleClick = () => {
		setToggle(!toggle);
	};

	const navShow = toggle
		? styles['header-navbar--show']
		: styles['header-navbar--hide'];

	return (
		<header className={`${styles['header']}`}>
			<div className={`container ${styles['header-container']}`}>
				<div className={styles['header-logo']}>
					<Link
						href="/"
						aria-label="link home"
						onClick={() => setToggle(false)}
					>
						<Image
							src="/assets/images/logo.svg"
							width="275"
							height="25"
							alt="logo"
						/>
					</Link>
				</div>

				<nav className={`${styles['header-navbar']} ${navShow}`}>
					<div className={styles['header-navbar_logo']}>
						<Link
							href="/"
							aria-label="link home"
							onClick={() => setToggle(false)}
						>
							<Image
								src="/assets/images/logo.svg"
								width="275"
								height="25"
								alt="logo"
							/>
						</Link>
					</div>

					<Navbar
						className={styles['link']}
						onClick={() => setToggle(false)}
					/>

					<button
						className={styles['header-btn']}
						onClick={handleClick}
					>
						<div className={styles['header-btn_icon']}>
							<IoClose />
						</div>
					</button>
				</nav>

				<button className={styles['header-btn']} onClick={handleClick}>
					<div className={styles['header-btn_bars']}></div>
				</button>
			</div>
		</header>
	);
};

export default Header;

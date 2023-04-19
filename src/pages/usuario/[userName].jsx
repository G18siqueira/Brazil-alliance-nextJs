import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import axios from 'axios';

import PageSeo from '@/components/Layout/PageSeo/PageSeo';

import styles from './usuario.module.scss';
import Tabs from '@/components/Ui/Tabs/Tabs';

const User = ({ users }) => {
	const router = useRouter();
	const { userName } = router.query;
	console.log('userName: ', userName);
	const [userInfos, setUserInfos] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const res = await axios.get('/data/users.json');
				const data = res.data;
				const users = data.user.find((p) => p.name === userName);
				setUserInfos(users);
			} catch (error) {
				console.log(error);
			}
		};

		fetchUsers();
	}, [userName]);

	return (
		<PageSeo title={''} description={''}>
			<main>
				<section className={styles['users']}>
					<div className={`container ${styles['users-container']}`}>
						{userInfos && (
							<div className={styles['users-content']}>
								<aside
									className={styles['users-content_aside']}
								>
									<div className={styles['image']}></div>
									<div className={styles['name']}>
										<h2>{userInfos.name}</h2>
									</div>
									<div className={styles['discord']}>
										<p>Discord: {userInfos.discord}</p>
									</div>
									<div className={styles['rank']}>
										<p>Ranque</p>
										<span>{userInfos.rank}</span>
									</div>
									<div className={styles['date']}>
										<div
											className={styles['date-entredIn']}
										>
											<p>Entrou em</p>
											<span>{userInfos.enteredIn}</span>
										</div>

										<div
											className={styles['date-lastTime']}
										>
											<p>Entrou em</p>
											<span>{userInfos.lastTime}</span>
										</div>
									</div>
								</aside>

								<div className={''}>
									<Tabs
										user={userInfos}
										classTab={''}
										classActive={''}
										classContent={''}
									/>
								</div>
							</div>
						)}
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

export default User;

import { useState, useEffect } from 'react';

import axios from 'axios';

import PageSeo from 'src/components/Layout/PageSeo/PageSeo';
import Users from 'src/components/Users/Users';
import TabHeader from 'src/components/Tab/TabHeader';
import TabBody from 'src/components/Tab/TabBody';

import styles from './equipe.module.scss';

const index = () => {
	const [users, setUsers] = useState([]);
	const [classification, setClassification] = useState([]);

	useEffect(() => {
		const fetchTeam = async () => {
			try {
				const res = await axios.get('data/team.json');
				const data = res.data;
				setUsers(data.teamUsers);
				setClassification(data.teamClassfication);
			} catch (error) {
				console.log(error);
			}
		};

		fetchTeam();
	}, []);

	return (
		<PageSeo title={'Brazil Alliance | Equipe'} description={''}>
			<main className={styles['team']}>
				{/* EQUIPE BZA */}
				<section className={styles['team-users']}>
					<div
						className={`container ${styles['team-users-container']}`}
					>
						<div className={styles['team-users-content']}>
							{users.map(
								({
									id,
									imageSrc,
									alt,
									width,
									height,
									name,
									offices,
									text,
								}) => (
									<Users
										key={id}
										imageSrc={imageSrc}
										src={imageSrc}
										alt={alt}
										width={width}
										height={height}
										spanName={name.charAt(0)}
										name={name}
										offices={offices
											.map((office) => (
												<span key={office}>
													{office}
												</span>
											))
											.reduce((prev, curr) => [
												prev,
												', ',
												curr,
											])}
										text={text}
									/>
								),
							)}
						</div>
					</div>
				</section>

				{/* EQUIPE BZA */}
				<section className={styles['team-classification']}>
					<div
						className={`container ${styles['team-classification-container']}`}
					>
						<div className={styles['team-classification-content']}>
							<div
								className={
									styles['team-classification-content_intro']
								}
							>
								<h1 className={`tit`}>Classificação</h1>
								<p>
									Esta classificação é baseada com base na
									quantidade de sugestões enviadas aos
									projetos e é atualizada automaticamente.
								</p>
							</div>

							<div
								className={
									styles['team-classification-content_tab']
								}
							>
								<h2>
									Todos os projetos
									<span>
										(arraste o dedo para ver a tabela
										completa!)
									</span>
								</h2>

								<div className={styles['tab-content']}>
									<TabHeader
										user={'Usuário'}
										twords={'Traduzido (Palavras)'}
										rwords={'Revisado (Palavras)'}
										position={'Posição'}
									/>

									{classification.map(
										({
											id,
											imageSrc,
											alt,
											width,
											height,
											name,
											translatingWords,
											revisedWords,
											position,
										}) => (
											<TabBody
												key={id}
												imageSrc={imageSrc}
												src={imageSrc}
												alt={alt}
												width={width}
												height={height}
												spanName={name.charAt(0)}
												name={name}
												translatingWords={
													translatingWords
												}
												revisedWords={revisedWords}
												position={position}
											/>
										),
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</PageSeo>
	);
};

export default index;

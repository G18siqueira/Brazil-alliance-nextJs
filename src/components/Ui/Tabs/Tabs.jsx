import { useState, useEffect } from 'react';
import TabResumo from './TabResumo';
import TabProjetos from './TabProjetos';
import TabConfig from './TabConfig';

import styles from './tabs.module.scss';

const Tabs = ({ user }) => {
	const tabs = [
		{
			label: 'Resumo',
			content: <TabResumo />,
		},
		{
			label: 'Projetos',
			content: <TabProjetos projects={user.projects} />,
		},
		{
			label: 'Configurações',
			content: <TabConfig />,
		},
	];

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	const [isTabContentVisible, setIsTabContentVisible] = useState(false);

	useEffect(() => {
		setIsTabContentVisible(true);
	}, [activeTabIndex]);

	const handleClick = (tabIndex) => {
		setIsTabContentVisible(false);
		setTimeout(() => {
			setActiveTabIndex(tabIndex);
		}, 200);
	};

	return (
		<div className={styles['tab']}>
			<div className={styles['tab-buttons']}>
				{tabs.map((tab, index) => (
					<button
						key={tab.label}
						onClick={() => handleClick(index)}
						className={`${styles['tab-buttons-button']} ${
							activeTabIndex === index
								? `${styles['tab-buttons-button_active']}`
								: ''
						}`}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div
				className={`${styles['tab-content']} ${
					isTabContentVisible ? styles['tab-content_visible'] : ''
				}`}
			>
				{tabs[activeTabIndex].content}
			</div>
		</div>
	);
};

export default Tabs;

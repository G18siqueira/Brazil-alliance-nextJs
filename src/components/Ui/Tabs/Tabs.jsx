import { useState } from 'react';
import TabResumo from './TabResumo';
import TabProjetos from './TabProjetos';
import TabConfig from './TabConfig';

const Tabs = ({ classTab, classActive, classContent, user }) => {
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

	const [activeTab, setActiveTab] = useState(tabs[0]);

	const handleClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div>
			<div className={classTab}>
				{tabs.map((tab) => (
					<button
						key={tab.label}
						onClick={() => handleClick(tab)}
						className={tab === activeTab ? `${classActive}` : ''}
					>
						{tab.label}
					</button>
				))}
			</div>
			<div className={classContent}>{activeTab.content}</div>
		</div>
	);
};

export default Tabs;

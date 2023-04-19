import { useEffect, useState } from 'react';

import axios from 'axios';

const TabResumo = () => {
	return (
		<div>
			<h2>Estatísticas</h2>

			<div className={''}>
				<select name="" id="">
					<option value="">Todos os projetos</option>
				</select>
				<div className={''}>
					<p>
						Classificação <span>#59</span>
					</p>
				</div>
			</div>

			<div className={''}>
				<h3>Aprovação</h3>
				<div className={''}></div>
				<span>20.000 palavras</span>
			</div>

			<div className={''}>
				<h3>Total traduzido</h3>
				<div className={''}></div>
				<span>20.000 palavras</span>
			</div>

			<div className={''}>
				<h3>Total aprovado</h3>
				<div className={''}></div>
				<span>20.000 palavras</span>
			</div>
		</div>
	);
};

export default TabResumo;

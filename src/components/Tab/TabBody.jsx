import Image from 'next/image';

import styles from './tab.module.scss';

const TabBody = ({
	imageSrc,
	src,
	alt,
	width,
	height,
	spanName,
	name,
	translatingWords,
	revisedWords,
	position,
}) => {
	return (
		<div className={styles['tab-body']}>
			<div className={styles['tab-body-image']}>
				{imageSrc ? (
					<Image src={src} alt={alt} width={width} height={height} />
				) : (
					<span>{spanName}</span>
				)}
			</div>
			<div className={styles['tab-body-user']}>
				<p>{name}</p>
			</div>
			<div className={styles['tab-body-words']}>
				<p>{translatingWords}</p>
			</div>
			<div className={styles['tab-body-words']}>
				<p>{revisedWords}</p>
			</div>
			<div className={styles['tab-body-position']}>
				<p>#{position}</p>
			</div>
		</div>
	);
};

export default TabBody;

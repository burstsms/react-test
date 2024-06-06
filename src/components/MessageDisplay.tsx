import styles from '@/styles/MessagePage.module.css';
import React from 'react';

interface Props {}

const MessageDisplay: React.FC<Props> = () => {
	return (
		<div className={styles.MessageDisplay}>
			<header>Sent SMS</header>
		</div>
	);
};

export default MessageDisplay;

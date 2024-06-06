import styles from '@/styles/MessagePage.module.css';
import React from 'react';

interface Props {}

const MessageForm: React.FC<Props> = () => {
	return (
		<div className={styles.MessageForm}>
			<header>Send SMS</header>
		</div>
	);
};

export default MessageForm;

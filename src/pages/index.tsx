import MessageDisplay from '@/components/MessageDisplay';
import MessageForm from '@/components/MessageForm';
import styles from '@/styles/MessagePage.module.css';

export default function MessagePage() {
	return (
		<div className={styles.MessagePage}>
			<MessageForm />
			<MessageDisplay />
		</div>
	);
}

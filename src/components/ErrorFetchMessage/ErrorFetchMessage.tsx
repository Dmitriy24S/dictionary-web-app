import styles from './ErrorFetchMessage.module.scss';

interface IProps {
  error: any;
}

function ErrorFetchMessage({ error }: IProps) {
  const errorData = error?.response?.data;

  if (!errorData) {
    return (
      <div className={styles.errorMessageContainer}>
        <h4 className={styles.errorTitle}>
          Error fetching word data. Please try again later.
        </h4>
      </div>
    );
  }

  return (
    <div className={styles.errorMessageContainer}>
      <h4 className={styles.errorTitle}>{errorData.title}</h4>
      <p className={styles.errorMessage}>{errorData.message}</p>
      <p className={styles.errorResolution}>{errorData.resolution}</p>
    </div>
  );
}

export default ErrorFetchMessage;

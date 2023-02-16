import styles from './ErrorFetchMessage.module.scss';

interface IProps {
  error: any;
}

function ErrorFetchMessage({ error }: IProps) {
  // error={error?.response?.data} ?
  if (!error) {
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
      <h4 className={styles.errorTitle}>{error.title}</h4>
      <p className={styles.errorMessage}>{error.message}</p>
      <p className={styles.errorResolution}>{error.resolution}</p>
    </div>
  );
}

export default ErrorFetchMessage;

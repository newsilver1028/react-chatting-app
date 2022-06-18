import styles from './app.module.scss';

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <h1 className={styles.title}>Chatting app</h1>
        <main className={styles.scrollArea} />
      </div>
    </div>
  );
};

export default App;

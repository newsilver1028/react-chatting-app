import { Outlet } from 'react-router-dom';
import styles from './layout.module.scss';

const Layout = () => {
  return (
    <div>
      <div className={styles.appWrapper}>
        <div className={styles.app}>
          <h1 className={styles.title}>Chatting app</h1>
          <main className={styles.scrollArea}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;

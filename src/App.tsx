import React from 'react';
import styles from './App.module.css';
import { Footer, Header } from './components'
function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;

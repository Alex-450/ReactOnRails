import React from "react";
import CountDowntimer from "./CountdownTimer";
import styles from "../components/css/app.module.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.home_background}>
          <div className={styles.container}>
            <div className={styles.countdown}>
              <CountDowntimer />
              <div className={styles.row}>
                <a href="/riders" className={styles.home_link}>
                  Who's competing →
                </a>
              </div>
              <div className={styles.row}>
                <a href="/locations" className={styles.home_link}>
                  Where are they →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

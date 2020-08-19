import React from "react";
import styles from "./css/app.module.css";
import { Card, Button } from "react-bootstrap";

const ContestCard = () => {
  return (
    <Card className="text-center">
      <div className={styles.contest_image}>
        <h3 className={styles.contest_title}>Contest</h3>
      </div>
      <Card.Body>
        <Card.Title>Slogan Contest</Card.Title>
        <Card.Text>
          Submit your idea for the race slogan for a chance to leave your mark
          on this year's competition.
        </Card.Text>
        <Button className={styles.image_button} href="/contest">
          Submit →
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContestCard;

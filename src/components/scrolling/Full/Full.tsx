import React from 'react';
import styles from './Full.module.scss';
import { nanoid } from 'nanoid';

const sections = new Array(5).fill('').map(() => nanoid());

const Full: React.FC = () => {
  return (
    <div className={styles.full}>
      {sections.map((key) => (
        <section key={key}>
          <div className={styles.content}>
            <h2>Section Title</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, exercitationem nulla. Culpa ratione incidunt eveniet
              cum non! Vero quis placeat nemo, omnis ducimus commodi impedit
              tenetur a doloribus iusto quidem ut voluptate nesciunt sed! Iure
              similique quod temporibus nostrum quam?
            </p>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Full;

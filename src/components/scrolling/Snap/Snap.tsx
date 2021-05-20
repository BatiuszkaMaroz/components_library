import React from 'react';
import styles from './Snap.module.scss';

const Snap: React.FC = () => {
  return (
    <div className={styles.snap}>
      <nav>
        <h2>Navigation</h2>
      </nav>
      <section>
        <h1>Hello there!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dignissimos voluptatum illo animi iste exercitationem. Consectetur
          modi necessitatibus distinctio accusantium.
        </p>
      </section>
      <section>
        <h1>Hello there!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dignissimos voluptatum illo animi iste exercitationem. Consectetur
          modi necessitatibus distinctio accusantium.
        </p>
      </section>
      <section>
        <h1>Hello there!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dignissimos voluptatum illo animi iste exercitationem. Consectetur
          modi necessitatibus distinctio accusantium.
        </p>
      </section>
    </div>
  );
};

export default Snap;

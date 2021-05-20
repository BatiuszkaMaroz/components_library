import React from 'react';
import styles from './Horizontal.module.scss';
import { nanoid } from 'nanoid';

const sections = new Array(4).fill('').map(() => nanoid());

const Horizontal: React.FC = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        {sections.map((key, idx) => (
          <section id={`s${idx}`} key={key}>
            <div className={styles.content}>
              <h1>Section {idx}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, exercitationem perferendis delectus commodi cupiditate
                velit accusantium temporibus itaque eos ducimus laboriosam
                libero voluptas animi asperiores debitis molestiae sed similique
                suscipit eligendi est? Consequatur dolorum, ducimus doloremque
                laudantium quas maiores consequuntur magnam deleniti impedit
                non? Nam aspernatur minus dolor qui quasi beatae eaque facere
                quam aliquid sit perspiciatis ab numquam nisi voluptatem,
                explicabo animi ullam repudiandae harum reprehenderit expedita
                atque sed!
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Horizontal;

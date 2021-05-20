import { nanoid } from 'nanoid';
import React from 'react';
import styles from './Scrollbar.module.scss';

const posts = new Array(20).fill('').map(() => ({
  id: nanoid(),
  title: 'Heading',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus temporibus facere ipsa? Minus, quidem laborum. Distinctio dolores quia corrupti quod!',
}));

const Scrollbar: React.FC = () => {
  return (
    <div className={styles.scrollbar}>
      <ul>
        {posts.map(({ id, title, content }) => (
          <li key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Scrollbar;

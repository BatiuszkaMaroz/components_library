import React, { useEffect, useState } from 'react';
import styles from './Progress.module.scss';
import { nanoid } from 'nanoid';

const posts = new Array(30).fill('').map(() => ({
  id: nanoid(),
  title: 'Heading',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus temporibus facere ipsa? Minus, quidem laborum. Distinctio dolores quia corrupti quod!',
}));

const Progress: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollableArea = document.body.scrollHeight - window.innerHeight;
      const scroll = window.scrollY;

      const progress = scroll / scrollableArea;
      setProgress(progress);
    };

    window.addEventListener('scroll', scrollHandler);

    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <div className={styles.progress}>
      <div style={{ height: progress * 100 + '%' }} className={styles.bar} />
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

export default Progress;

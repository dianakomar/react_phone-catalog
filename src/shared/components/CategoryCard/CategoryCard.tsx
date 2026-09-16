import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types/Category';
import styles from './CategoryCard.module.scss';

interface Props {
  category: Category;
}

export const CategoryCard: React.FC<Props> = ({ category }) => {
  const { image, title, count, link } = category;
  const imageSrc =
    image.startsWith('http') || image.startsWith(import.meta.env.BASE_URL)
      ? image
      : `${import.meta.env.BASE_URL}${image.replace(/^\//, '')}`;

  return (
    <div className={styles.card}>
      <Link to={link} className={styles.imageLink}>
        <img src={imageSrc} alt={title} className={styles.image} />
      </Link>

      <h3 className={styles.title}>
        <Link to={link} className={styles.titleLink}>
          {title}
        </Link>
      </h3>

      <p className={styles.count}>{`${count} models`}</p>
    </div>
  );
};

import { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';

import styles from './Title.module.scss';

interface ITitle {
  children: React.ReactNode;
}

const Title = ({ children = [] }: ITitle) => {
  const itemRef = createRef<HTMLHeadingElement>();

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={250}
      classNames={styles}
      nodeRef={itemRef}
    >
      <div className={styles.container}>
        <h1 className={styles.title} ref={itemRef}>
          {children}
        </h1>
      </div>
    </CSSTransition>
  );
};

export default Title;

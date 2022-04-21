import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

type TLoader = () => JSX.Element;

const Loader: TLoader = () => {
  return (
    <div className={styles.loader}>
      <Template type="TailSpin" color="#cf735b" height={198} width={198} />
    </div>
  );
};

export default Loader;

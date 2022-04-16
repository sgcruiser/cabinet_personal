import Template from 'react-loader-spinner';

import styles from './Loader.module.scss';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Template type="TailSpin" color="#cf735b" height={198} width={198} />
    </div>
  );
}

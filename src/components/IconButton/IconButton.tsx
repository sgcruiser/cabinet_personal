import styles from './IconButton.module.scss';

// Компонент кнопки-иконки
type TonClick = () => void;

interface IIconButton {
  children?: React.ReactNode;
  onClick?: TonClick;
  'aria-label': string;
}

const IconButton = ({
  children = null,
  onClick,
  ...allyProps
}: IIconButton) => {
  return (
    <button
      type="button"
      className={styles.IconButton}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

export default IconButton;

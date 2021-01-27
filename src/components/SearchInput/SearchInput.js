import SearchRounded from '@material-ui/icons/SearchRounded';
import styles from './SearchInput.module.css';
const SearchInput = ({ ...res }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...res} />
    </div>
  );
};

export default SearchInput;

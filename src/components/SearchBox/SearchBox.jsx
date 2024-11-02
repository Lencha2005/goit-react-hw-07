import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

import styles from './SearchBox.module.css'

const SearchBox = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = (e) => {
    dispatch(changeFilter(e.target.value));
};
       
return (
  <div className={styles.wrap}>
  <p className={styles.text}>Find contacts by name</p>
  <input className={styles.input} type="text" value={filter} onChange={onFilter}/>
  </div>
)
}

export default SearchBox
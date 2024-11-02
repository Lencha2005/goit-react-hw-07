import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';

import styles from './SearchBox.module.css'

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const onFilter = (e) => {
    const action = changeFilter(e.target.value);
    dispatch(action);
};
       
return (
  <div className={styles.wrap}>
  <p className={styles.text}>Find contacts by name</p>
  <input className={styles.input} type="text" value={filter} onChange={onFilter}/>
  </div>
)
}

export default SearchBox
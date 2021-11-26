import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { Form } from 'react-bootstrap';
import { filterCRYPTOS, fetchCryptos } from '../../redux/action/CryptoAction';

const SearchCrypto = () => {
  const dispatch = useDispatch();
  const [character, setCharacter] = useState('');
  const filterData = (character) => {
    if (character) {
      dispatch(filterCRYPTOS(character));
    } else {
      dispatch(fetchCryptos());
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCharacter((prev) => (prev === value ? prev : value));
    filterData(value);
  };
  useEffect(() => {
    dispatch(fetchCryptos());
  }, []);
  return (

    <input
      type="text"
      placeholder="Enter crpto name"
      onChange={handleChange}
      value={character}
    />
  );
};

export default SearchCrypto;

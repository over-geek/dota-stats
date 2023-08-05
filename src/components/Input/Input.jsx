import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchHeroes } from '../../redux/hero_stats';

const Input = () => {
  const [heroName, setHeroName] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchHeroes(heroName));
  }, [dispatch, heroName]);

  return (
    <form>
      <div style={{ width: '250px', marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Find Hero"
          value={heroName}
          onChange={(e) => {
            setHeroName(e.target.value);
          }}
          style={{
            width: '100%',
            padding: '10px',
            borderRadius: '5px',
            border: 'none',
          }}
        />
      </div>
    </form>
  );
};

export default Input;

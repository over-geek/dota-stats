import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card/Card';
import Input from '../components/Input/Input';
import { fetchStats } from '../redux/hero_stats';
import './Home.css';

const Home = () => {
  const { heroStats, loading } = useSelector((state) => state.heroStats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStats());
  }, [dispatch]);

  if (loading === true) {
    return <p>Loading</p>;
  }

  return (
    <div className="heroes-section">
      <Input />
      <div className="heroes">
        {heroStats.map((stat) => (
          <Card
            key={stat.id}
            name={stat.localized_name}
            picks={stat.turbo_picks}
            image={stat.img}
            details
          />
        ))}
      </div>

    </div>
  );
};

export default Home;

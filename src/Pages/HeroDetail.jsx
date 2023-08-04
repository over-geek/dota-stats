import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Card from '../components/Card/Card';

const HeroDetail = () => {
  const { heroStats } = useSelector((state) => state.heroStats);
  const { heroName } = useParams();
  const heroStat = heroStats.find((stat) => stat.localized_name === heroName);

  if (!heroStats) {
    return <p>Loading</p>;
  }
  return (
    <div style={{ marginTop: '100px' }}>
      <Card
        name={heroStat?.localized_name}
        picks={heroStat?.turbo_picks}
        image={heroStat?.img}
        roles={heroStat?.roles}
        wins={heroStat?.turbo_wins}
        type={heroStat?.attack_type}
        details={false}
      />
    </div>
  );
};

export default HeroDetail;

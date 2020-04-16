import React from 'react';
import useStats from '../utils/useStats';
import styled from 'styled-components';
import confirmedIcon from '../assets/confirmed_icon.png';
import recoveredIcon from '../assets/recovered_icon.png';
import deathIcon from '../assets/death_icon.png';

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(33, 140, 173, 0.05);
  border-radius: 20px;
  padding: 10px 15px;
  margin-top: 20px;
`;

const BoxStats = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 80% !important;
    color: #99a6c0;
  }

  h3 {
    color: ${(props) => props.color};
    font-size: 120% !important;
    margin: 3px 0;
  }

  img {
    width: 40px;
  }
`;

const Stats = ({ url }) => {
  const stats = useStats(url);

  if (!stats) return <p>Loading...</p>;

  return (
    <StatsWrapper>
      <BoxStats color="#FF9E6B">
        <img src={confirmedIcon} alt="confirmed" />
        <h3>{stats !== 'N/A' ? stats.confirmed.value : 'N/A'}</h3>
        <p>Confirmed</p>
      </BoxStats>
      <BoxStats color="#45D07C">
        <img src={recoveredIcon} alt="recovered" />
        <h3>{stats !== 'N/A' ? stats.recovered.value : 'N/A'}</h3>
        <p>Recovered</p>
      </BoxStats>
      <BoxStats color="#F34B4B">
        <img src={deathIcon} alt="death" />
        <h3>{stats !== 'N/A' ? stats.deaths.value : 'N/A'}</h3>
        <p>Deaths</p>
      </BoxStats>
    </StatsWrapper>
  );
};

export default Stats;

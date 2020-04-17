import React from 'react';
import useStats from '../utils/useStats';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

const ProvWrapper = styled.div`
  height: 300px;
  margin-top: 20px;
  overflow: auto;

  h3 {
    font-size: 100%;
  }
`;

const THead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-size: 70%;
  }
`;

const TBody = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  margin-bottom: 5px;
  padding: 5px 0;
  border-radius: 5px;

  p {
    font-size: 50%;
  }
`;

const ProvName = styled.p`
  width: 50px;
`;

const StatsProvince = () => {
  const stats = useStats(
    'provinsi',
    'https://cors-anywhere.herokuapp.com/https://api.kawalcorona.com/indonesia'
  );

  if (!stats)
    return (
      <Loader
        type="Oval"
        color="#00BFFF"
        height={40}
        width={40}
        style={{ marginTop: '10px', textAlign: 'center' }}
      />
    );
  // console.log(stats);

  return (
    <ProvWrapper>
      <h3>Province Cases (Indonesia Only)</h3>
      <THead>
        <p>Province</p>
        <p>Confirmed</p>
        <p>Recovered</p>
        <p>Deaths</p>
      </THead>
      {stats.map(({ attributes }) => {
        return (
          <TBody key={attributes.Kode_Provi}>
            <ProvName>{attributes.Provinsi}</ProvName>
            <p>{attributes.Kasus_Posi}</p>
            <p>{attributes.Kasus_Semb}</p>
            <p>{attributes.Kasus_Meni}</p>
          </TBody>
        );
        // console.log(attributes.Provinsi);
      })}
    </ProvWrapper>
  );
};

export default StatsProvince;

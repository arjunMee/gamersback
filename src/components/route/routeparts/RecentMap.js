import React from 'react'
import styled from 'styled-components'

const StageOverlay = styled.div`
  width: 250px;
  height: 141px;
  background-color: pink;
  border-radius: 10px;
  margin-right: 10px;
  position: relative;

  img {
    width: 250px;
    border-radius: 10px;
  }

  &:hover:after {
    content: 'View Details';
    text-align:center;
    line-height: 140px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    background-color: #0007;
    position: absolute;
    top:0;
    left:0;
    }
  }
`

function RecentMap({ mapImage, mapName }) {
  return (
    <div
      style={{
        textAlign: 'center',
        width: '250px',
        marginRight: '10px',
      }}
    >
      <StageOverlay>
        <img src={mapImage} alt='pubg map' />
      </StageOverlay>

      <p style={{ fontSize: '13px', marginTop: '5px' }}>Classic (TPP)</p>
      <p style={{ fontSize: '13px' }}>Squad-{mapName}</p>
    </div>
  )
}

export default RecentMap

import React from 'react'

import logo from '../../../assets/logo/webscript.png'
import Stats from './Stats'
import RecentMap from './RecentMap'

// map images
import erangle from '../../../assets/map/erangle.png'
import miramar from '../../../assets/map/miramar.png'
import sanhok from '../../../assets/map/sanhok.png'

// styles
import { ProfileSection } from '../../../styles/ProfilesSection'
import { GameName } from '../../../styles/GameName'
import { SvgCenter } from '../../../styles/SvgCenter'
import { MainSection } from '../../../styles/MainSection'
import { RecentGame } from '../../../styles/RecentGame'

const mainContainer = {
  height: `calc(100vh - 50px)`,
  backgroundColor: 'rgb(45, 70, 84)',
}

const SecNav = {
  height: '50px',
  backgroundColor: '#1D2333',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
}

function Main() {
  return (
    <div style={mainContainer}>
      <div style={SecNav}>
        <GameName>
          <p>Gamer Name</p>
          <button>Add Game</button>
        </GameName>

        <SvgCenter>
          <i
            style={{ fontSize: '28px', margin: '0 14px', color: '#DD3131' }}
            className='bi bi-house-door-fill'
          ></i>
          <i
            style={{ fontSize: '30px', margin: '0 14px', color: 'white' }}
            className='bi bi-controller'
          ></i>
        </SvgCenter>
      </div>
      <MainSection>
        {/* main upper section start */}
        <div className='upperpart'>
          {/* casual button start */}
          <div className='upperHeader'>
            <button className='active'>Casual</button>
            <button>Competitive</button>
          </div>
          {/* casual button end */}
          <section className='profileStage'>
            {/* profile section start */}
            <ProfileSection>
              <>
                <div className='profileName'>
                  <h2>GB$Arvinth</h2>
                  <button className='editButton'>Edit</button>
                </div>
                <p>Assaulter</p>
                <div className='logo'>
                  <img style={{ width: '60px' }} src={logo} alt='logo' />
                  <span className='logoName'>GAMERSBACK</span>
                </div>
              </>
            </ProfileSection>
            {/* profile section end */}

            {/* recent game section start */}
            <RecentGame>
              <p style={{ marginBottom: '15px' }}>Recent Games</p>

              <div className='stages'>
                <RecentMap mapImage={erangle} mapName='Erangle' />

                <RecentMap mapImage={miramar} mapName='Miramar' />

                <RecentMap mapImage={sanhok} mapName='Sanhok' />
              </div>
            </RecentGame>
            {/* recent game section end */}
          </section>
        </div>
        {/* main upper section end */}

        <div className='lowerpart'>
          <div className='lowerMain'>
            <div
              style={{
                // backgroundColor: 'red',
                width: '50%',
                padding: '25px 0 0 90px',
              }}
            >
              <Stats defaultData='Matchs played' data='320' />
              <Stats defaultData='Wins' data='220' />
              <Stats defaultData='Finishers' data='98' />
              <Stats defaultData='K/D Ratio' data='320' />
            </div>
            <div
              style={{
                // backgroundColor: 'pink',
                width: '50%',
                padding: '25px 0 0 140px',
              }}
            >
              <Stats defaultData='Avg Damage' data='320' />
              <Stats defaultData='Accuracy' data='220' />
              <Stats defaultData='Avg Survival Time' data='98' />
              <Stats defaultData='Headshot Percentage' data='320' />
            </div>
          </div>
        </div>
      </MainSection>
    </div>
  )
}

export default Main

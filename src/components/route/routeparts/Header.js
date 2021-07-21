import React from 'react'
import logo from '../../../assets/logo/webscript.png'
import profile from '../../../assets/user.jpg'
import { StyleHeader } from '../../../styles/StyleHeader'

const Header = ({ search }) => {
  return (
    <StyleHeader>
      <div className='logoSection'>
        <img style={{ width: '60px' }} src={logo} alt='logo' />
        <span className='logoName'>GAMERSBACK</span>
        <label className='labelSearch' htmlFor='search'>
          <span>
            <i
              style={{ fontSize: '15px', margin: '0 8px', color: 'white' }}
              className='bi bi-search'
            ></i>
          </span>
          <input
            type='search'
            name='search'
            id='search'
            placeholder='Search...'
            onChange={(e) => search(e.target.value)}
          />
        </label>
      </div>
      <div className='profileHeader'>
        <ul className='linkList'>
          <li>
            <span style={{ fontSize: '12px' }}>Streams</span>
          </li>
          <li>
            <i className='bi bi-house-door-fill'></i>
          </li>
          <li>
            <i className='bi bi-chat-left-fill'></i>
          </li>
          <li>
            <i className='bi bi-bell'></i>
          </li>
        </ul>

        <div className='profileNav'>
          <img src={profile} alt='' />
          <div className='profileName'>
            <p>James Spigel</p>
            <span>space CORBOY</span>
          </div>
          <span>
            <i className='bi bi-caret-down'></i>
          </span>
        </div>
      </div>
    </StyleHeader>
  )
}

export default Header

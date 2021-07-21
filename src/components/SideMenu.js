import React, { useEffect, useState } from 'react'

import MenuItem from './MenuItem'

export const menuItems = [
  {
    name: 'Dashboard',
    exact: 'true',
    to: '/',
    iconClassName: 'bi bi-house-door-fill',
  },
  {
    name: 'Content',
    exact: 'true',
    to: `/content`,
    iconClassName: 'bi bi-chat-left-fill',
    subMenus: [
      { name: 'Courses', to: '/content/courses' },
      { name: 'Videos', to: '/content/videos' },
    ],
  },
  { name: 'Design', to: `/design`, iconClassName: 'bi bi-front' },
  {
    name: 'Content 2',
    exact: 'true',
    to: `/content-2`,
    iconClassName: 'bi bi-camera-video-fill',
    subMenus: [
      { name: 'Courses', to: '/content-2/courses' },
      { name: 'Videos', to: '/content-2/videos' },
    ],
  },
  { name: 'Design 2', to: `/design-2`, iconClassName: 'bi bi-people-fill' },
  { name: 'Design 3', to: `/design-3`, iconClassName: 'bi bi-clock-fill' },
  { name: 'Design 4', to: `/design-4`, iconClassName: 'bi bi-briefcase-fill' },
]

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(true)

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu()
    }

    props.onCollapse(inactive)
  }, [inactive])

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll('.sub-menu').forEach((el) => {
      el.classList.remove('active')
    })
  }

  useEffect(() => {
    let menuItems = document.querySelectorAll('.menu-item')
    menuItems.forEach((el) => {
      el.addEventListener('click', (e) => {
        const next = el.nextElementSibling
        removeActiveClassFromSubMenu()
        menuItems.forEach((el) => el.classList.remove('active'))
        el.classList.toggle('active')
        if (next !== null) {
          next.classList.toggle('active')
        }
      })
    })
  }, [])

  return (
    <div className={`side-menu ${inactive ? 'inactive' : ''}`}>
      <div className='top-section'>
        <div onClick={() => setInactive(!inactive)} className='toggle-menu-btn'>
          {inactive ? (
            <i className='bi bi-list' style={{ fontSize: '33px' }}></i>
          ) : (
            <i className='bi bi-list' style={{ fontSize: '33px' }}></i>
          )}
        </div>
      </div>

      <div className='main-menu'>
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false)
                }
              }}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideMenu

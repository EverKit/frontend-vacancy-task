import React from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../../menu'
import { Logo } from '../../assets/Icon'
import './SidebarMune.css'
export default function SideBarMenu() {
  const [active, setActive] = React.useState<number | null>(0)

  /** ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ КЛААСОВ КНОПОК В МЕНЮ*/
  const selectItem = (index: number) => {
    setActive(index)
  }

  return (
    <div className="menu">
      <div className="menuContent">
        <div className="logo-text">
          <div>{Logo}</div>
          <div className="under-text-logo">project subheading</div>
        </div>
        <div className="item">
          {menu.map((item, index) => {
            return (
              <div
                key={`${item}_${index}`}
                onClick={() => selectItem(index)}
                className={active === index ? 'item-active' : 'menu-item'}
              >
                <Link
                  className="item-content"
                  to={item.title === 'Токены' ? '/tokensContent ' : '/search'}
                >
                  {item.icon}
                  <div className="menu-title-item">{item.title}</div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

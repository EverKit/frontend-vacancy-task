import React from 'react'
import { menu } from './menu'

export default function SideBarMenu() {
  const [lol, setLol] = React.useState<number | null>(0)

  const selectItem = (index: number) => {
    setLol(index)
  }
  console.log(lol)
  return (
    <div className="menu">
      <div>
        ever<span>BOARD</span>project subheading{' '}
      </div>
      <div className="item">
        {menu.map((item, index) => {
          return (
            <div
              key={`${item}_${index}`}
              onClick={() => selectItem(index)}
              className={lol === index ? 'item-active' : 'menu-item'}
            >
              <div key={`${item}_${index}`} className="item-content">
                {item.icon}
                <div key={`${item}_${index}`} className="menu-title-item">
                  {item.title}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

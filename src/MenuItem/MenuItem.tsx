import { useState } from 'react'
import './MenuItem.css'

interface props{
    id: string,
    title: string,
    icon: any
}

export function MenuItem(props: props) {
  const [active, setActive] = useState(false)

  function changeActive(){
    setActive(!active)
  }

  return (
    <div className={active ? "menu-item" : "menu-item menu-item-active"} key={props.id} onClick={changeActive}>
      {props.icon}
      <span className={active ? "menu-item-title" : "menu-item-title menu-item-title-active"}>{props.title}</span>
    </div>
  )
}
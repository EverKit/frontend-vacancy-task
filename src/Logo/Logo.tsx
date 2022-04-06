import { ReactComponent as LogoImage } from '../assets/ever-board-logo.svg';
import './Logo.css'

const logoSubheading = 'project subheading'

export function Logo() {
  return (
    <div className="logo">
        <LogoImage/>
        <p className="logo-subheading">{logoSubheading}</p>
    </div>
  )
}
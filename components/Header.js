import { useRef } from 'react'
import styles from './Header.module.css'
import Tab from '../components/Tab'
import ActiveLink from './ActiveLink'

export default function Header({ children }) {
  return (
    <div className={styles.tabs}>
      <Tab>
        <ActiveLink href="/">
          <a>Home</a>
        </ActiveLink>
      </Tab>
      <Tab>
        <ActiveLink href="/features">
          <a>Features</a>
        </ActiveLink>
      </Tab>
      <Tab>
        <ActiveLink href="/about">
          <a>About</a>
        </ActiveLink>
      </Tab>
    </div>
  )
}

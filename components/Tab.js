import { useState } from 'react'
import styles from './Tab.module.css'

export default function Tab({ children, isActive }) {
  const [tabHighlightStyle, setTabHighlightStyle] = useState({
    left: 0,
    display: 'none'
  })

  function moveHighlight(e) {
    setTabHighlightStyle({
      left: e.nativeEvent.layerX - 150
    })
  }

  function hideHighlight(e) {
    setTabHighlightStyle({
      left: e.nativeEvent.layerX - 150,
      display: 'none'
    })
  }
  
  return (
    <div className={`${styles.tab} ${isActive? styles.activeTab:""}`} onMouseMove={moveHighlight} onMouseLeave={hideHighlight}>
      <div className={styles.tabHighlight} style={tabHighlightStyle} />
      {children}
    </div>
  )
}

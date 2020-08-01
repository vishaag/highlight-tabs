import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    color: router.pathname === href ? '#eee' : '#e1daf5',
    background: router.pathname === href ? '#5131a9' : '',
    display: 'block',
    padding: '12px 25px',
    textDecoration: 'none'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} style={style}>
      {children}
    </a>
  )
}

export default ActiveLink
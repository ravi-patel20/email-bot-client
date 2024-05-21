import './styles.css'

export default function Layout({ children }) {
  return (
    <div className='quotes-body'>
      {children}
    </div>
  )
}
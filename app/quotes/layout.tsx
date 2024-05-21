import './styles.css'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='quotes-body'>
      {children}
    </div>
  )
}
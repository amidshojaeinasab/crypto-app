import styles from "./Layout.module.css"
function Layout({children}) {
  return (
    <>
    <header className={styles.header}>
      <h1>Crypto App</h1>
      <p>
        <a href="https://shojaeinasab.ir">Shojaei Nasab</a>
      </p>
    </header>
    {children}
    <footer className={styles.footer}>
      <p>Developed by Shojaei Nasab</p>
    </footer>
    </>
  )
}

export default Layout

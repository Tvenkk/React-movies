function Footer() {
    return <footer className="page-footer">
    <div className="footer-copyright">
      <div className="container">
      © {new Date().getFullYear()}
      <a className="grey-text text-lighten-4 right" href="https://github.com/Tvenkk">Tvenkk</a>
      </div>
    </div>
  </footer>
}

export {Footer}
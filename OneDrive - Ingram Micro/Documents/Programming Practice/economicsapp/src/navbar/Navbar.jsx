import React from 'react'

function Navbar() {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
        <div className="container-fluid">
        <a className="navbar-brand">Econofriend</a>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page">Learn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Quiz</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Extras</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar
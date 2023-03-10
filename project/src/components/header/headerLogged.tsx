import { Route, Link, Routes } from 'react-router-dom';

function HeaderLogged(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={'/'} className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <Routes>
            <Route path="/" element={
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <div className="header__nav-profile">
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </div>
                  </li>
                  <li className="header__nav-item">
                    <Link to={'/login'} className="header__nav-link" >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav>
            }
            />
          </Routes>
        </div>
      </div>
    </header>
  );
}

export default HeaderLogged;

// Для незалогиненных
/* <header className="header">
<div className="container">
  <div className="header__wrapper">
    <div className="header__left">
      <a className="header__logo-link" href="main.html">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </a>
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__login">Sign in</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</div>
</header> */

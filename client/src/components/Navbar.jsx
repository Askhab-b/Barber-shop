import Link from 'next/link';
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { selectIsAuth } from "../redux/slice/auth";
import { useSelector } from 'react-redux'

const Navbar = () => {
  const isAuth = useSelector(selectIsAuth)
  const router = useRouter()

  useEffect(() => {
    if (isAuth) {
      router.push('/')
    }
  }, [])

  return (
    <header className="header" data-page="about">
      <div className="container-fluid container-lg d-flex flex-wrap align-items-center justify-content-between">
      <Link href={'/'}><a className="brand-logo d-flex align-items-center header_logo">
          <svg
            className="brand-logo_icon"
            width="40"
            height="34"
            viewBox="0 0 40 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.9052 0.3026C38.2043 1.3906 37.0306 2.04 35.7668 2.04H34.8331C34.8403 1.9312 34.8495 1.8224 34.8495 1.71224C34.8495 0.76636 34.1085 0 33.1938 0C32.5922 0 32.0385 0.33728 31.7466 0.8806C31.5539 1.23964 31.3435 1.58848 31.1443 1.94412L27.5357 1.11452C26.2785 0.82552 24.9943 0.68 23.7062 0.68C22.8074 0.68 21.9105 0.75072 21.0221 0.89216L21.0149 0.89352C16.2175 1.65648 11.3708 2.04 6.51686 2.04H0V4.08H0.657538V6.8C0.657538 7.5514 1.24603 8.16 1.97261 8.16H5.03542C10.8652 8.16 16.6758 7.47592 22.3563 6.12V6.8L23.4294 6.43008C23.9666 6.24512 24.3289 5.72492 24.3289 5.13944V2.72C26.0779 2.72 27.8231 2.89884 29.5379 3.25312L30.2467 3.4L30.3112 3.41428C28.7877 5.9738 27.0965 8.42452 25.2475 10.7467C21.5758 15.3571 17.4649 19.5738 12.9759 23.3315L7.02579 28.3125C6.32486 28.8993 5.91784 29.782 5.91784 30.7142V30.9101C5.91784 32.6169 7.25527 34 8.90569 34C9.52838 34 10.1353 33.7987 10.6422 33.4247L13.6603 31.195C17.2544 28.5403 20.5494 25.4769 23.484 22.0626C27.5298 17.3556 30.8477 12.0306 33.3214 6.27572L34.4537 3.64072C34.4872 3.56184 34.5135 3.48024 34.5431 3.4H35.7668C37.4718 3.4 39.0538 2.52416 40 1.0574L38.9052 0.3026ZM9.20553 31.96C8.48027 31.96 7.89045 31.35 7.89045 30.6C7.89045 29.85 8.48027 29.24 9.20553 29.24C9.93079 29.24 10.5206 29.85 10.5206 30.6C10.5206 31.35 9.93079 31.96 9.20553 31.96ZM32.8769 3.4C32.5139 3.4 32.2194 3.09536 32.2194 2.72C32.2194 2.34464 32.5139 2.04 32.8769 2.04C33.2399 2.04 33.5344 2.34464 33.5344 2.72C33.5344 3.09536 33.2399 3.4 32.8769 3.4Z"
              fill="currentColor"
            />
          </svg>

          <span className="brand-logo_name">eddy cuts</span>
        </a></Link>
        <nav className="header_nav">
          <ul className="header_nav-list">
            <li className="header_nav-list_item nav-item" data-page="home">
              <Link href={'/'}>
                <a className="nav-link">Главная</a>
              </Link>
            </li>
            <li className="header_nav-list_item nav-item" data-page="about">
              <Link href={'/about'}>
                <a className="nav-link">О нас</a>
              </Link>
            </li>
            <li className="header_nav-list_item nav-item" data-page="services">
              <Link href={'/services'}>
                <a className="nav-link">Услуги</a>
              </Link>
            </li>
            <li className="header_nav-list_item nav-item" data-page="blog">
              <Link href={'/blog'}>
                <a className="nav-link">Новости</a>
              </Link>
            </li>
            <li className="header_nav-list_item nav-item" data-page="contacts">
              <Link href={'/contacts'}>
                <a className="nav-link">Контакты</a>
              </Link>
            </li>
            <li className="header_nav-list_item nav-item" data-page="gallery">
              <Link href={'/gallery'}>
                <a className="nav-link">Галерея</a>
              </Link>
            </li>
            <li className="header_nav-list_item nav-item" data-page="shop">
              <Link href={'/shop'}>
                <a className="nav-link">Магазин</a>
              </Link>
            </li>
          </ul>
        </nav>
        <Link href={'/contacts'}><a className="mx-10 header_btn btn theme-element">
          Записаться
        </a></Link>
        {isAuth ? (<Link href={'/admin'}><a className="header_btn btn theme-element">
          Личный кабинет
        </a></Link>) : (<Link href={'/login'}><a className="header_btn btn theme-element">
          Личный кабинет
        </a></Link>)}
        <span className="header_trigger d-inline-flex d-lg-none flex-column justify-content-between">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </span>
      </div>
    </header>
  );
};

export default Navbar;

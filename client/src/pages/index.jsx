import Cropservice from '@/components/Cropservice';
import Stats from '@/components/Stats';

export default function Home() {
// todo
  // title
  return (
    <>
      <main>
        <section className="hero d-flex">
          <div className="hero_slider">
            <div className="hero_slider-wrapper swiper-wrapper">
              <div className="hero_slider-slide swiper-slide" data-bg="img/hero01.webp"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/hero01.webp"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/hero01.webp"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/hero01.webp"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/hero01.webp"></div>
              <div className="hero_slider-slide swiper-slide" data-bg="img/hero01.webp"></div>
            </div>
            <div className="hero_slider-pagination swiper-pagination"></div>
            <div className="hero_slider-controls d-none d-md-flex justify-content-between">
              <span className="hero_slider-control hero_slider-control--prev">
                <i className="icon-arrow_left"></i>
              </span>
              <span className="hero_slider-control hero_slider-control--next">
                <i className="icon-arrow_right"></i>
              </span>
            </div>
          </div>
          <div
            className="
                        container
                        d-flex
                        flex-column
                        justify-content-center
                        align-items-center align-items-md-start align-items-lg-center align-items-xl-start
                    "
          >
            <div className="hero_content col-xl-7 col-xxl-6">
              <h1 className="hero_content-header">
                Стиль — это способ сказать кто вы, не говоря ни слова.
              </h1>
              <p className="hero_content-text text">
                просп. Кадырова 34,
                <span className="linebreak">Грозный</span>
              </p>
              <span className="hero_content-tel d-inline-flex align-items-center">
                <span className="icon d-flex justify-content-center align-items-center">
                  <i className="icon-phone"></i>
                </span>
                <a className="link" href="tel:+1234567890">
                  +7 938 906 36 36
                </a>
              </span>
            </div>
          </div>
          <span className="hero_overlay"></span>
        </section>

        <Stats />

        <Cropservice />

        <section className="schedule section">
          <span className="overlay"></span>
          <div className="schedule_container container d-xl-flex flex-wrap">
            <div className="schedule_content col-xl-6">
              <h2 className="schedule_content-header" data-aos="fade-right">
                Команда профессионалов ждет вас
              </h2>
              <p className="schedule_content-text text" data-aos="fade-right">
              ВЫ НЕ УСПЕЕТЕ ЗАМЕТИТЬ, КАК СНОВА ЗАХОТИТЕ ВЕРНУТЬСЯ В НАШ БАРБЕРШОП.
              </p>
            </div>
            <div className="schedule_hours col-xl-6">
              <h2 className="schedule_hours-header" data-aos="fade-left">
                Мы работаем:
              </h2>
              <div className="schedule_hours-list d-md-flex">
                <div className="schedule_hours-list_group">
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Понедельник:</span>
                    10:00 до – 22:00
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Вторник:</span>
                    10:00 до – 22:00
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Среда:</span>
                    10:00 до – 22:00
                  </span>
                </div>
                <div className="schedule_hours-list_group">
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Четверг:</span>
                    10:00 до – 22:00
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Пятница:</span>
                    10:00 до – 22:00
                  </span>
                  <span className="list-item" data-aos="fade-up">
                    <span className="weekday">Выходные:</span>
                    10:00 до – 22:00
                  </span>
                </div>
              </div>
            </div>
            <div className="wrapper schedule_wrapper" data-aos="fade-up">
              <a className="schedule_btn btn theme-element" href="#">
                записаться
              </a>
            </div>
          </div>
        </section>

        <section className="blog section">
          <div className="container">
            <div className="blog_header section_header">
              <h2 className="blog_header-title section_header-title">наш блог</h2>
              <span
                className="blog_header-subtitle section_header-subtitle"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-once="false"
              >
                Последние посты
              </span>
            </div>
            <ul className="blog_recent d-md-flex flex-wrap">
              <li className="blog_recent-post col-md-6 col-xl-4" data-aos="fade-up">
                <a className="blog_recent-post_wrapper d-md-flex flex-column" href="post.html">
                  <div className="media">
                    <picture>
                      <source
                        data-srcset="img/blog01.webp"
                        srcSet="img/blog01.webp"
                        type="image/webp"
                      />
                      <img
                        className="lazy thumbnail"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="5 advantages why you should visit barbershop"
                      />
                    </picture>
                  </div>
                  <div className="main d-md-flex flex-column justify-content-between">
                    <h4 className="title">5 ПРЕИМУЩЕСТВ, ПОЧЕМУ СТОИТ ПОСЕТИТЬ БАРБЕРШОП</h4>
                    <span className="date highlight">26 Июль, 2022</span>
                  </div>
                </a>
              </li>
              <li
                className="blog_recent-post col-md-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a className="blog_recent-post_wrapper d-md-flex flex-column" href="post.html">
                  <div className="media">
                    <picture>
                      <source
                        data-srcset="img/blog02.webp"
                        srcSet="img/blog02.webp"
                        type="image/webp"
                      />
                      <img
                        className="lazy thumbnail"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Popular cosmetics for hair styling"
                      />
                    </picture>
                  </div>
                  <div className="main d-md-flex flex-column justify-content-between">
                    <h4 className="title">
                      Топ-10 популярных косметических средств для укладки волос
                    </h4>
                    <span className="date highlight">02 Июль, 2022</span>
                  </div>
                </a>
              </li>
              <li
                className="blog_recent-post col-md-6 col-xl-4"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <a className="blog_recent-post_wrapper d-md-flex flex-column" href="post.html">
                  <div className="media">
                    <picture>
                      <source
                        data-srcset="img/blog03.webp"
                        srcSet="img/blog03.webp"
                        type="image/webp"
                      />
                      <img
                        className="lazy thumbnail"
                        data-src="img/placeholder.jpg"
                        src="img/placeholder.jpg"
                        alt="Features of beard and mustache care"
                      />
                    </picture>
                  </div>
                  <div className="main d-md-flex flex-column justify-content-between">
                    <h4 className="title">НЕКОТОРЫЕ ОСОБЕННОСТИ УХОДА ЗА БОРОДОЙ И УСАМИ</h4>
                    <span className="date highlight">12 Июль, 2022</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

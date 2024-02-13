import React from "react";
import phoneImg from "./assets/Group 329.png";
import peple from "./assets/comonents.png";
import news1 from "./assets/photoNews.png";
import news2 from "./assets/photoNews2.png";
import news3 from "./assets/photoNews3.png";
const About = () => {
  return (
    <>
      <div className="conteiner">
        <div className="aboutContact">
          <div className="aboutContact__content">
            <div className="aboutContact-content__title">
              <h3>
                Рассчитать <br /> стоимость
              </h3>
              <span>
                Если вам не удалось найти то, что искали, вы всегда можете{" "}
                <br /> воспользоваться автоматическим расчетом стоимость заказа
                на <br /> маркетплейсе <b> Poizon</b>, включая комиссию сервиса
                и доставку.
              </span>
            </div>
            <div className="numbering">
              <div className="aboutContent-content__numbering">
                <div className="numbering__num">1</div>
                <span>
                  Подробная, пошаговая <br /> статья о том, как установить{" "}
                  <br /> приложение Poizon
                </span>
              </div>
              <div className="aboutContent-content__numbering">
                <div className="numbering__num">2</div>
                <span>
                  Подробная, пошаговая <br /> статья о том, как установить{" "}
                  <br /> приложение Poizon
                </span>
              </div>
            </div>
            <button>Рассчитать стоимость</button>
          </div>
          <div className="background-phone">
            <img src={phoneImg} alt="" />
          </div>
        </div>
      </div>
      <div className="different-stuff">
        <div className="different-stuff__container">
          <div className="different-stuff__title">
            <h4>
              О интернет- <br />
              магазине xwear
            </h4>
            <p>
              Команда XWEAR предоставляет услугу доставки только оригинальных
              товаров c <br />
              крупнейшего китайского маркетплейса Poizon, чтобы наши клиенты
              экономили более 40% на <br />
              каждой покупке.
            </p>
            <p>
              Работаем без посредников, благодаря чему можем предоставлять
              лучшую цену. Быстрая, <br /> бесплатная доставка.
            </p>
            <p>
              Сайт, на котором можно будет удобно оформить покупку, не скачивая
              китайское <br />
              мобильное приложение Poizon, с удобной фильтрацией огромного
              количества товаров, а так <br />
              же с возможностью сразу увидеть окончательную цену товара.
            </p>
          </div>
          <div className="different-stuff__socie">
            <img src={peple} alt="" />
          </div>
        </div>
      </div>
      <div className="conteiner2">
        <div className="title">
          <h5>Наш блог</h5>
        </div>
        <div className="news-components">
          <div className="news-components__block">
            <img style={{ width: 350 }} src={news1} alt="" />
            <p>
              Делаем скидки на всю женскую <br /> одежду осеннего сезона
            </p>
            <span>
              Мы запускаем акцию. Готовься к осени с лета. На <br /> протяжении
              всего лета покупайте женские осенние <br /> вещи со скидками.
            </span>
            <a>Узнать подробнее</a>
          </div>
          <div className="news-components__block">
            <img style={{ width: 350 }} src={news2} alt="" />
            <p>
              Делаем скидки на всю женскую <br /> одежду осеннего сезона
            </p>
            <span>
              Мы запускаем акцию. Готовься к осени с лета. На <br /> протяжении
              всего лета покупайте женские осенние <br /> вещи со скидками.
            </span>
            <a>Узнать подробнее</a>
          </div>
          <div className="news-components__block">
            <img style={{ width: 350 }} src={news3} alt="" />
            <p>
              Джинсы для всех друзей. Скидки <br /> на большие покупки
            </p>
            <span>
              Мы запускаем акцию. Готовься к осени с лета. На <br /> протяжении
              всего лета покупайте женские осенние <br /> вещи со скидками.
            </span>
            <a>Узнать подробнее</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

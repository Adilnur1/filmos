import React from "react";

const Questions = () => {
  return (
    <div>
      <div className="con">
        <div className="title">FAQ</div>
        <div className="subtitle">ОБЩИЕ ВОПРОСЫ</div>
        <div className="interes">
          ЧЕМ ЗАНИМАЕТСЯ ВАШ ИНТЕРНЕТ-МАГАЗИН?
          <button>+</button>
        </div>
        <hr className="hr" />
        <div className="bezopasno">
          ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?
          <button>-</button>
        </div>
        <hr className="hr" />
        <div className="th">
          Мы гарантируем полную безопасность ваших персональных данных. Если у
          вас есть вопросы, пожалуйста, ознакомьтесь с нашей Политикой
          конфиденциальности.
        </div>
        <br />
        <div className="bezopasno2">
          ГАРАНТИРОВАНА ЛИ БЕЗОПАСНОСТЬ МОИХ ДАННЫХ?
          <button>+</button>
        </div>
        <hr className="hr" />
        <div className="tovar">ТОВАРЫ</div>
        <br />
        <div className="origin-tovar">
          ВЫ РЕАЛИЗУЕТЕ ОРИГИНАЛЬНЫЕ ТОВАРЫ? <button>+</button>
        </div>
        <hr className="hr" />
        <div className="new-tovar">
          В ВАШЕМ МАГАЗИНЕ ПРЕДСТАВЛЕНЫ НОВЫЕ ТОВАРЫ? <button>+</button>
        </div>
        <hr className="hr" />
        <div className="subprice">
          ПОЧЕМУ ЦЕНА ЗАВИСИТ ОТ РАЗМЕРА? <button>+</button>
        </div>
        <hr className="hr" />
        <div className="TotalPrice">
          СТОИМОСТЬ ТОВАРОВ ОКОНЧАТЕЛЬНАЯ? <button>+</button>
        </div>
        <hr className="hr" />
        <div className="dostavka">ДОСТАВКА</div>
        <br />
        <div className="price-dostavka">
          СКОЛЬКО ИДЕТ ДОСТАВКА? <button>+</button>
        </div>
        <hr className="hr" />
        <div className="kub">
          <div className="back-tovar">
            МОЖНО ЛИ ВЕРНУТЬ ТОВАР? <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;

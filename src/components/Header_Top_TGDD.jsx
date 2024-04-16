import React from "react";

const Header_Top_TGDD = () => {
  return (
    <div>
      <div className="header__top">
        <div>
          <a href="/" className="header__logo">
            <i className="iconnewglobal-logo"></i>
          </a>

          <a className="header__address">
            Xem giá, tồn kho tại:
            <span data-province="3" data-district="0" data-ward="0">
              Hồ Chí Minh
            </span>
          </a>

          <a href="/lich-su-mua-hang" className="name-order">
            Đơn hàng <br /> A.Khánh
          </a>
          <a href="/cart" className="header__cart menu-info">
            <div className="box-cart">
              <i className="iconnewglobal-cart"></i>
              <span className="cart-number"></span>
            </div>
            <span>Giỏ hàng</span>
          </a>
          <div className="header__listtop">
            <div className="divitem active">
              <a href="/tin-tuc">
                24h
                <br />
                Công nghệ
              </a>
            </div>
            <div className="bordercol"></div>
            <div className="divitem">
              <a href="/hoi-dap">Hỏi Đáp</a>
            </div>
            <div className="bordercol"></div>
            <div className="divitem">
              <a href="/game-app">Game App</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_Top_TGDD;

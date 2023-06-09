import { Fragment } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import { isMobile } from "react-device-detect";

function Contact() {
  return (
    <div className="contacts">
      <div className="contacts-bg" />
      <div className="wrapper">
        <Sidebar />
        {isMobile ? (
          <Fragment>
            {" "}
            <div className="contacts-main">
              <div className="contacts-content">
                <div className="contacts-contents">
                  <div className="contacts-contacts">
                    <div className="contacts-left">
                      {" "}
                      <div className="contacts-place">
                        <div className="contacts-name">Почта</div>
                        <div className="contacts-data">info@retaily.online</div>
                      </div>
                      <div className="contacts-place">
                        <div className="contacts-name">Почтовый адрес</div>
                        <div className="contacts-data">
                          677000, г. Якутск,
                          <br /> ул. Крупской 13, офис 505
                        </div>
                      </div>
                    </div>
                    <div className="contacts-right">
                      {" "}
                      <div className="contacts-place">
                        <div className="contacts-name">Фактический адрес</div>
                        <div className="contacts-data">
                          677000, г. Якутск,
                          <br /> ул. Крупской 13, офис 505
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contacts-map">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A64479069d182672f6b4222d0b165b19af5b687cff8ef2008a82dcee32b58f8ad&amp;source=constructor"
                      width="800"
                      height="500"
                      frameBorder="0"
                    ></iframe>
                  </div>
                  <div className="contacts-mapm">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A64479069d182672f6b4222d0b165b19af5b687cff8ef2008a82dcee32b58f8ad&amp;source=constructor"
                      width="300"
                      height="300"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {" "}
            <div className="contacts-main">
              <div className="contacts-content">
                <div className="contacts-title">Контакты</div>
                <div className="contacts-contents">
                  <div className="contacts-contacts">
                    <div className="contacts-place">
                      <div className="contacts-name">Почта</div>
                      <div className="contacts-data">info@retaily.online</div>
                    </div>
                    <div className="contacts-place">
                      <div className="contacts-name">Адрес</div>
                      <div className="contacts-data">
                        677000, г. Якутск,
                        <br /> ул. Крупской 13, офис 505
                      </div>
                    </div>
                  </div>
                  <div className="contacts-map">
                    <iframe
                      src="https://yandex.ru/map-widget/v1/?um=constructor%3A64479069d182672f6b4222d0b165b19af5b687cff8ef2008a82dcee32b58f8ad&amp;source=constructor"
                      width="800"
                      height="500"
                      frameBorder="0"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}

export default Contact;

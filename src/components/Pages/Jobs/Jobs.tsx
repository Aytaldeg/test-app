function Jobs() {
  return (
    <div className="jobs">
      <div className="jobs-bg" />
      <div className="wrapper">
        <div className="jobs-main">
          <div className="jobs-sidepanel">
            <div>О компании</div>
            <div>Документы</div>
            <div className="jobs-active">Вакансии</div>
            <div>Контакты</div>
          </div>
          <div className="jobs-content">
            <div className="jobs-title">Вакансии</div>
            <div className="jobs-contents">
              <div className="jobs-salary">
                <div className="jobs-name">Региональный представитель</div>
                <div className="jobs-price">100 000 руб./месяц и выше</div>
              </div>
              <div className="jobs-xp">
                Требуемый опыт работы: 3–6 лет <br />
                Частичная занятость, удаленная работа <br />
                Возможно временное оформление: договор услуг, подряда, ГПХ,
                самозанятые, ИП
              </div>
              <div className="jobs-info">
                <div className="jobs-sections">
                  <div className="jobs-text">
                    <span className="jobs-black">Обязанности:</span>
                    <div className="jobs-text">
                      работа по подключению новых контрагентов к системе
                      автоматизированной обработки заявок (Retaily)
                      сопровождение сделок по подключению новых контрагентов
                      (организация встреч с ТОП-менеджментом крупных
                      региональных производителей продуктов питания, оптовых
                      поставщиков, доведение до первых продаж поставщика через
                      систему Retaily).
                    </div>
                  </div>
                </div>
                <div className="jobs-sections">
                  <div className="jobs-text">
                    <span className="jobs-black">Требования:</span>
                    <div className="jobs-text">
                      Большой опыт работы в коммерческих подразделениях
                      хлебопекарен, молокозаводов, мясных комбинатов и др.
                      производствах продуктов питания. Сильные коммуникационные
                      навыки и навыки ведения деловых переговоров.
                    </div>
                  </div>
                </div>
                <div className="jobs-sections">
                  <div className="jobs-text">
                    <span className="jobs-black">Условия:</span>
                    <div className="jobs-text">
                      •&emsp;совмещение с основной работой (дополнительный
                      заработок)
                      <br />
                      •&emsp;свободный график <br />
                      •&emsp;удаленная работа <br />
                      •&emsp;высокий % от сделок
                    </div>
                  </div>
                </div>
              </div>
              <div className="jobs-resume">
                Резюме направлять на info@retaily.online
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
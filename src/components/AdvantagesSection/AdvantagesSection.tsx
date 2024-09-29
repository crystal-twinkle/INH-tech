import '../../css/blocks/advantages.scss'

const AdvantagesSection = () => {
  return (
    <section className="section advantages">
      <div className="section__body">
        <div className="section__content">
          <h2 className="section__heading section__heading--with-pre-content">
            Почему выбирают INH TECH
          </h2>
          <div className="advantages__list">
            <AdvantageItem
              title="Доступные цены"
              description="Предлагаем разумные цены на разработку и поддержку цифровых решений для бизнеса."
              moreText="Подробнее"
            />
            <AdvantageItem
              title="Профессионализм"
              description="Наши специалисты имеют многолетний опыт в разработке и знают, как создать эффективные решения."
              moreText="Узнать больше"
            />
            <AdvantageItem
              title="Поддержка 24/7"
              description="Мы готовы оказать техническую поддержку в любое время, чтобы ваш бизнес не останавливался."
              moreText="Читать далее"
            />
            <AdvantageItem
              title="Быстрая реализация"
              description="Скорость разработки и внедрения позволяет оперативно адаптироваться к изменениям на рынке."
              moreText="Подробнее"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AdvantageItem = ({title, description, moreText}) => {
  return (
    <div className="advantages__item">
      <div className="advantages__card" data-advantage-id="#advantage-modal-1">
        <div className="advantages__description">
          <div className="advantages__title">{title}</div>
          <p className="advantages__text">{description}</p>
        </div>
        <div className="advantages__more">
          {moreText}
          <svg className="advantages__more-icon">
            <use href="#arrow-long"></use>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;

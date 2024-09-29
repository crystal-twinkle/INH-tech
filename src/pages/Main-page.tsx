import {useEffect} from 'react';
import '../css/blocks/about.scss';
import '../css/blocks/quote.scss';
import '../css/blocks/section.scss'
import AdvantagesSection from '../components/AdvantagesSection/AdvantagesSection';

function MainPage() {

  useEffect(() => {
  }, []);


  return (
    <div className="main-page">
      <section id="about" className="section about about-home">
        <div className="section__body">
          <h2 className="section__h section__h_with-pre-content">Добро пожаловать в INH TECH — Ваш партнёр в мире
            цифровых решений</h2>
          <div className="about__block">
            <b>INH TECH —</b>
            эМы — молодая и амбициозная студия, которая стремится сделать ваш бизнес успешнее с помощью современных
            технологий.
            Собрав команду специалистов с многолетним опытом, мы предоставляем комплексные IT-услуги для стартапов и
            компаний любого масштаба.
            Наш подход базируется на создании продуктов, которые помогают развиваться и достигать новых высот.
          </div>
          <div className="about__body">


          </div>
        </div>
      </section>


      <section id="quote" className="section quote">
        <div className="section__body">
          <div className="quote__body">
            <div className="quote__row">
              <h3 className="quote__title">
                «INH tech — прагматик»
              </h3>
              <div className="quote__photo">
                <picture className="quote__img">
                  {/*<source srcSet="img/quote.avif" type="image/avif" />*/}
                  {/*<img*/}
                  {/*  loading="lazy"*/}
                  {/*  onLoad={() => this.classList.remove('is-no-loaded')}*/}
                  {/*  className="is-no-loaded"*/}
                  {/*  src="img/quote.png"*/}
                  {/*  alt="Фото , СЕО INH TECH"*/}
                  {/*  width="120"*/}
                  {/*  height="120"*/}
                  {/*/>*/}
                </picture>
                <div className="quote__name">Kristina</div>
                <div className="quote__position">Software developer</div>
              </div>
            </div>
            <p className="quote__text">
              Создание сайта для предпринимателя решает сразу несколько ключевых потребностей.
              Во-первых, это способ заявить о своем бизнесе в цифровом пространстве, что крайне важно в условиях
              возрастающей онлайн-конкуренции.
              Сайт позволяет привлечь клиентов, предоставив информацию о товарах и услугах в удобном для них формате.
              Это помогает повысить доверие к бренду, особенно если сайт выполнен профессионально, с хорошим дизайном и
              легкой навигацией. Кроме того, предприниматели получают возможность автоматизировать многие процессы,
              такие как приём заказов, обработка запросов и консультирование клиентов.

              За созданием сайтов обращайтесь к нам!
            </p>

          </div>
        </div>
      </section>

      <AdvantagesSection/>


    </div>
  );
}

export default MainPage;

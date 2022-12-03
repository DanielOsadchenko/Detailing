import React from 'react';
import logo from '../images/fullLogo.png';
import blackLogo from '../images/blackLogo.png';
import smallLogo from '../images/logo.png';
import { Mail, Tel, Tag, Instagram, Facebook, Whatsapp } from './source/images';
import SimpleSlider from './SimpleSlider/SimpleSlider';
import { Container, HeroBg, HeaderNav, Header, Line, Nav, NavLink, Hero, HeroTitle, HeroButton, Logo } from './App.styled';


export const App = () => {

    return <div>
      <HeroBg>
        
          <Header>
            <Container>
            <HeaderNav>
              <NavLink href="#Home"><Logo src={logo} alt="Detailing by Semenov" /></NavLink>
              <div>
                <Nav>
            <NavLink href="#Price">Послуги</NavLink>
            <NavLink href="#Result">Результат</NavLink>
            <NavLink href="#contacts">Контакти</NavLink>
              </Nav>
              <Line></Line>
              </div>
              </HeaderNav>
            
            </Container>
        </Header>
        <Hero>
          <Container>
            <HeroTitle id='#Home'>Студія детейлінгу</HeroTitle>
            <HeroButton type='button'>Обрати послугу</HeroButton>
            </Container>
        </Hero>
        
      </HeroBg>
    
      <Container>
        <section>
        <h2>Про нас</h2>
        <p>
          Дозвольте представитися, мене звати Микита Семенов. Detailing - (англ.) виконання максимально ретельного і делікатного очищення кузова і салону, полірування кузова автомобіля, нанесення захисних складів на всі його ділянки для надання Вашому автомобілю шоу-якості. У Детейлінг студії "Semenov" всі роботи я виконую сам. У мене немає секретарів, менеджерів і найманого персоналу. Причина цього проста. Я перфекціоніст, і я не можу довірити будь-кому догляд за Вашим автомобілем, з таким досвідом і ентузіазмом. Таким чином, Ви можете бути впевнені в персональному обслуговуванні від Semenov, і неперевершеному рівні робіт. Жодна деталь Вашого автомобіля не залишиться без уваги.
          Наша детейлінг майстерня виконує повний комплекс по догляду за екстер'єром та інтер'єром авто.
        </p>
        <img src={smallLogo} alt="Detailing by Semenov" />
      </section>

      <section>
        <h2>Послуги</h2>
      
        <ul id='Price'>
          <li>
            <h3>Полірування фар</h3>
            <div>
              <p>Полірування фар застосовується у випадках помутніння, пожовтіння або для усунення дефектів і подряпин, отриманих в результаті дрібних ДТП і пригод.</p>
              <p>від 150zl</p>
            </div>
          </li>

          <li>
            <h3>Полірування кузову</h3>
            <div>
              <p>Процедура полірування допоможе повернути поверхні автомобіля дзеркальний блиск і позбутися дрібних дефектів.</p>
              <p>від 150zl</p>
            </div>
          </li>

          <li>
            <h3>Хімчистка комплекс</h3>
            <div>
              <p>Комплекс хімчистки автомобіля зачіпає не тільки килимове покриття, сидіння, а й стелю, двері, приладову панель, пластикові деталі.</p>
              <p>від 300zl</p>
            </div>
          </li>

          <li>
            <h3>Хімчистка елементу</h3>
            <div>
              <p>Хімчистка будь-якого елементу салону. Якщо ви розлили каву, або перевозили в багажнику брудні речі, вам може знадобитися ця послуга.</p>
              <p>від 80zl</p>
            </div>
          </li>
        </ul>
      </section>

      <section>
        <h2 id='Result'>Результат</h2>
        <div style={{width: '200px', marginLeft: 'auto', marginRight: 'auto'
      }}>
          <SimpleSlider/>
        </div>
        
        
        <button type='button'>Обрати послугу</button>
      </section>

      <section>
        <h2>Контакти</h2>

        <div id='contacts'>

          <ul>
            <li>
              <Tag fill='#E89636' />
            <p>78-400, Szczecinek, ul. Słowiańska 15</p>
          </li>
          <li>
            <Tel fill='#E89636' />
            <a href='tel:575138491'>+48 575 138 491</a>
          </li>
          <li>
            <Mail fill='#E89636' />
            <a href='mailto:rudik20011@gmail.com'>rudik20011@gmail.com</a>
          </li>
            <li>
              <a href='https://www.instagram.com/'><Instagram /></a>
              <a href='https://pl-pl.facebook.com/'><Facebook /></a>
              <a href='https://www.whatsapp.com/'><Whatsapp/></a>
            </li>
          </ul>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.5571539267908!2d16.7118121357247!3d53.70317142714334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470185501c149d49%3A0x5d5c3f198abc067e!2sDetailing%20by%20Semenov!5e0!3m2!1sru!2spl!4v1669551711782!5m2!1sru!2spl"  style={{border: '3px solid #E89636', borderRadius: '16px',width: 'calc(100% - 30px)', height: "293px",}} allowFullScreen="" loading="lazy" title='Detailing by Semenov Map' referrerPolicy="no-referrer-when-downgrade"></iframe>


        </div>
      </section>
      </Container>

        <footer>
        <Container><div>
          <img src={blackLogo} alt="Detailing by Semenov" width='193' height='47' />
          <address>
            <a href="#Price">Послуги</a>
            <a href="#Result">Результат</a>
            <a href="#contacts">Контакти</a>
          </address>

          <p>Produced by: <a href='https://www.linkedin.com/in/danylo-osadchenko/'>Danylo Osadchenko</a> | © 2022 Всі права захищені | Designed by: <a href='https://www.behance.net/denionly'>Denys Rudenko</a></p>
          </div></Container>
        </footer>

    </div>
  
  };


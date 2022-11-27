import React from 'react'
import logo from '../images/fullLogo.png';
import blackLogo from '../images/blackLogo.png';
import smallLogo from '../images/logo.png';
import { Container, FooterTag, Footer, Bold, LinkFoot, FooterBox, ContactText, ContactBox, StyledContacts , ContactCard , Hero, Header, Nav, Link, Logo, HeroBg, Title, HeroBtn,ResultBtn, About, AboutTitle, LineStyle, AboutText, Card, CardTitle, CardBox, CardSet, CardText } from './App.styled';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];


  const Mail = ({ fill }) => (
  <svg viewBox="0 0 32 32" fill={ fill }>
      <path d="M29 4h-26c-1.657 0-3 1.343-3 3v18c0 1.656 1.343 3 3 3h26c1.657 0 3-1.344 3-3v-18c0-1.657-1.343-3-3-3zM2.741 25.99l-0.731-0.732 8.249-8.248 0.731 0.732-8.249 8.248zM29.259 25.99l-8.249-8.248 0.731-0.732 8.249 8.248-0.731 0.732zM17 19.325v0.675h-2v-0.675l-12.997-12.050 1.272-1.272 12.725 11.798 12.725-11.798 1.272 1.272-12.997 12.050z"></path>
</svg>
  );
  
  const Tel = ({ fill }) => (
  <svg viewBox="0 0 32 32" fill={ fill }>
      <path d="M23 0h-14c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3zM12 1.5h8v1h-8v-1zM16 30c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM24 24h-16v-20h16v20z"></path>
</svg>
  );

  const Tag = ({ fill }) => (
  <svg viewBox="0 0 32 32" fill={ fill }>
      <path d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"></path>
</svg>
  );

  const Instagram = () => (
  <svg viewBox="0 0 32 32" fill='#e4405f'>
      <path d="M16 0c-4.347 0-4.889 0.020-6.596 0.096-1.704 0.080-2.864 0.348-3.884 0.744-1.052 0.408-1.945 0.956-2.835 1.845s-1.439 1.781-1.845 2.835c-0.396 1.020-0.665 2.18-0.744 3.884-0.080 1.707-0.096 2.249-0.096 6.596s0.020 4.889 0.096 6.596c0.080 1.703 0.348 2.864 0.744 3.884 0.408 1.051 0.956 1.945 1.845 2.835 0.889 0.888 1.781 1.439 2.835 1.845 1.021 0.395 2.181 0.665 3.884 0.744 1.707 0.080 2.249 0.096 6.596 0.096s4.889-0.020 6.596-0.096c1.703-0.080 2.864-0.349 3.884-0.744 1.051-0.408 1.945-0.957 2.835-1.845 0.888-0.889 1.439-1.78 1.845-2.835 0.395-1.020 0.665-2.181 0.744-3.884 0.080-1.707 0.096-2.249 0.096-6.596s-0.020-4.889-0.096-6.596c-0.080-1.703-0.349-2.865-0.744-3.884-0.408-1.052-0.957-1.945-1.845-2.835-0.889-0.889-1.78-1.439-2.835-1.845-1.020-0.396-2.181-0.665-3.884-0.744-1.707-0.080-2.249-0.096-6.596-0.096zM16 2.88c4.271 0 4.78 0.021 6.467 0.095 1.56 0.073 2.407 0.332 2.969 0.553 0.749 0.289 1.28 0.636 1.843 1.195 0.559 0.56 0.905 1.092 1.195 1.841 0.219 0.563 0.48 1.409 0.551 2.969 0.076 1.688 0.093 2.195 0.093 6.467s-0.020 4.78-0.099 6.467c-0.081 1.56-0.341 2.407-0.561 2.969-0.299 0.749-0.639 1.28-1.199 1.843-0.559 0.559-1.099 0.905-1.84 1.195-0.56 0.219-1.42 0.48-2.98 0.551-1.699 0.076-2.199 0.093-6.479 0.093-4.281 0-4.781-0.020-6.479-0.099-1.561-0.081-2.421-0.341-2.981-0.561-0.759-0.299-1.28-0.639-1.839-1.199-0.561-0.559-0.92-1.099-1.2-1.84-0.22-0.56-0.479-1.42-0.56-2.98-0.060-1.68-0.081-2.199-0.081-6.459 0-4.261 0.021-4.781 0.081-6.481 0.081-1.56 0.34-2.419 0.56-2.979 0.28-0.76 0.639-1.28 1.2-1.841 0.559-0.559 1.080-0.919 1.839-1.197 0.56-0.221 1.401-0.481 2.961-0.561 1.7-0.060 2.2-0.080 6.479-0.080zM16 7.784c-4.54 0-8.216 3.68-8.216 8.216 0 4.54 3.68 8.216 8.216 8.216 4.54 0 8.216-3.68 8.216-8.216 0-4.54-3.68-8.216-8.216-8.216zM16 21.333c-2.947 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.461 7.46c0 1.060-0.861 1.92-1.92 1.92-1.060 0-1.92-0.861-1.92-1.92s0.861-1.919 1.92-1.919c1.057-0.001 1.92 0.86 1.92 1.919z"></path>
</svg>
  );

  const Facebook = () => (
  <svg viewBox="0 0 32 32" fill='#1877f2'>
      <path d="M31.997 15.999c0-8.836-7.163-15.999-15.999-15.999s-15.999 7.163-15.999 15.999c0 7.985 5.851 14.604 13.499 15.804v-11.18h-4.062v-4.625h4.062v-3.525c0-4.010 2.389-6.225 6.043-6.225 1.75 0 3.581 0.313 3.581 0.313v3.937h-2.017c-1.987 0-2.607 1.233-2.607 2.498v3.001h4.437l-0.709 4.625h-3.728v11.18c7.649-1.2 13.499-7.819 13.499-15.804z"></path>
</svg>
  );

  const Whatsapp = () => (
  <svg viewBox="0 0 32 32" fill='#25d366'>
      <path d="M23.331 19.176c-0.401-0.2-2.356-1.156-2.72-1.288-0.364-0.135-0.631-0.2-0.897 0.2-0.263 0.393-1.028 1.285-1.259 1.549-0.233 0.26-0.465 0.28-0.861 0.1-0.4-0.2-1.684-0.62-3.204-1.98-1.184-1.060-1.979-2.36-2.213-2.76-0.232-0.4-0.025-0.62 0.173-0.82 0.181-0.18 0.401-0.46 0.601-0.697 0.195-0.241 0.259-0.401 0.396-0.661 0.133-0.28 0.065-0.5-0.033-0.699-0.1-0.2-0.896-2.16-1.229-2.941-0.32-0.779-0.649-0.68-0.896-0.68-0.229-0.020-0.495-0.020-0.761-0.020s-0.697 0.099-1.063 0.479c-0.364 0.4-1.393 1.36-1.393 3.3s1.427 3.82 1.625 4.1c0.199 0.26 2.807 4.26 6.8 5.98 0.952 0.4 1.693 0.64 2.272 0.839 0.952 0.303 1.82 0.26 2.507 0.161 0.765-0.121 2.356-0.961 2.688-1.901 0.34-0.94 0.34-1.72 0.24-1.9-0.099-0.18-0.36-0.28-0.76-0.46zM16.081 29h-0.021c-2.36 0-4.699-0.64-6.74-1.84l-0.48-0.285-5 1.3 1.34-4.86-0.319-0.5c-1.32-2.101-2.021-4.521-2.021-7.013 0-7.26 5.94-13.18 13.256-13.18 3.539 0 6.86 1.38 9.361 3.88 2.5 2.479 3.879 5.8 3.879 9.32-0.005 7.259-5.947 13.18-13.247 13.18zM27.36 4.599c-3.040-2.939-7.040-4.599-11.3-4.599-8.776 0-15.921 7.112-15.925 15.857 0 2.795 0.732 5.52 2.127 7.927l-2.261 8.216 8.447-2.203c2.328 1.257 4.947 1.925 7.613 1.929h0.008c8.78 0 15.928-7.115 15.932-15.861 0-4.235-1.653-8.22-4.66-11.215z"></path>
</svg>
  );

export const App = () => {

    return <div>
      <HeroBg>
        <Header>
          <Nav>
            <Link href="#Price">Послуги</Link>
            <Link href="#Result">Результат</Link>
            <Link href="#contacts">Контакти</Link>
          </Nav>
          <Link href="#Home"><img src={logo} alt="Detailing by Semenov" /></Link>
        </Header>
        <Hero>
          <Container>
            <Title id='#Home'>Студія детейлінгу</Title>
            <HeroBtn type='button'>Обрати послугу</HeroBtn>
          </Container>
        </Hero>
      </HeroBg>
    
      <About>
        <LineStyle><AboutTitle>Про нас</AboutTitle></LineStyle>
        <AboutText>
          Дозвольте представитися, мене звати Микита Семенов. Detailing - (англ.) виконання максимально ретельного і делікатного очищення кузова і салону, полірування кузова автомобіля, нанесення захисних складів на всі його ділянки для надання Вашому автомобілю шоу-якості. У Детейлінг студії "Semenov" всі роботи я виконую сам. У мене немає секретарів, менеджерів і найманого персоналу. Причина цього проста. Я перфекціоніст, і я не можу довірити будь-кому догляд за Вашим автомобілем, з таким досвідом і ентузіазмом. Таким чином, Ви можете бути впевнені в персональному обслуговуванні від Semenov, і неперевершеному рівні робіт. Жодна деталь Вашого автомобіля не залишиться без уваги.
          Наша детейлінг майстерня виконує повний комплекс по догляду за екстер'єром та інтер'єром авто.
        </AboutText>
        <Logo src={smallLogo} alt="Detailing by Semenov" />
      </About>

      <About>
        <LineStyle><AboutTitle>Послуги</AboutTitle></LineStyle>
      
        <CardSet id='Price'>
          <Card>
            <CardTitle>Полірування фар</CardTitle>
            <CardBox>
              <CardText>Полірування фар застосовується у випадках помутніння, пожовтіння або для усунення дефектів і подряпин, отриманих в результаті дрібних ДТП і пригод.</CardText>
              <CardText>150zl</CardText>
            </CardBox>
          </Card>

          <Card>
            <CardTitle>Полірування кузову</CardTitle>
            <CardBox>
              <CardText>Процедура полірування допоможе повернути поверхні автомобіля дзеркальний блиск і позбутися дрібних дефектів.</CardText>
              <CardText>від 200zl</CardText>
            </CardBox>
          </Card>

          <Card>
            <CardTitle>Хімчистка комплекс</CardTitle>
            <CardBox>
              <CardText>Комплекс хімчистки автомобіля зачіпає не тільки килимове покриття, сидіння, а й стелю, двері, приладову панель, пластикові деталі.</CardText>
              <CardText>від 300zl</CardText>
            </CardBox>
          </Card>

          <Card>
            <CardTitle>Хімчистка елементу</CardTitle>
            <CardBox>
              <CardText>Хімчистка будь-якого елементу салону. Якщо ви розлили каву, або перевозили в багажнику брудні речі, вам може знадобитися ця послуга.</CardText>
              <CardText>від 80zl</CardText>
            </CardBox>
          </Card>
        </CardSet>
      </About>

      <About>
        <LineStyle><AboutTitle id='Result'>Результат</AboutTitle></LineStyle>

        <ImageGallery items={images} />;
        <ResultBtn type='button'>Обрати послугу</ResultBtn>
      </About>

      <About>
        <LineStyle><AboutTitle>Контакти</AboutTitle></LineStyle>

        <ContactBox id='contacts'>

          <StyledContacts>
            <ContactCard>
            <Tag fill='#E89636' />
            <ContactText>78-400, Szczecinek, ul. Słowiańska 15</ContactText>
          </ContactCard>
          <ContactCard>
            <Tel fill='#E89636' />
            <ContactText href='tel:575138491'>+48 575 138 491</ContactText>
          </ContactCard>
          <ContactCard>
            <Mail fill='#E89636' />
            <ContactText href='mailto:rudik20011@gmail.com'>rudik20011@gmail.com</ContactText>
          </ContactCard>
            <ContactCard>
              <ContactText href='https://www.instagram.com/'><Instagram /></ContactText>
              <ContactText href='https://pl-pl.facebook.com/'><Facebook /></ContactText>
              <ContactText href='https://www.whatsapp.com/'><Whatsapp/></ContactText>
            
            
            </ContactCard>
          </StyledContacts>

          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d717.5571539267908!2d16.7118121357247!3d53.70317142714334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470185501c149d49%3A0x5d5c3f198abc067e!2sDetailing%20by%20Semenov!5e0!3m2!1sru!2spl!4v1669551711782!5m2!1sru!2spl" width="628" height="460" style={{border: '3px solid #E89636', borderRadius: '16px',}} allowfullscreen="" loading="lazy" title='Detailing by Semenov Map' referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

        </ContactBox>
      </About>

        <Footer>
        <FooterBox>
          <img src={blackLogo} alt="Detailing by Semenov" width='193' height='47' />
          <address>
            <LinkFoot href="#Price">Послуги</LinkFoot>
            <LinkFoot href="#Result">Результат</LinkFoot>
            <LinkFoot href="#contacts">Контакти</LinkFoot>
          </address>

          <div>
            <Bold>Produced by: <a href='https://www.linkedin.com/in/danylo-osadchenko/'>Danylo Osadchenko</a></Bold>
            <Bold>Designed by: <a href='https://www.behance.net/denionly'>Denys Rudenko</a></Bold>
          </div>
          <FooterTag>© 2022 Всі права захищені</FooterTag>
          </FooterBox>
        </Footer>

    </div>
  
  };


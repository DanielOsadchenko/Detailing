import React from 'react'
import logo from '../images/fullLogo.png';
import smallLogo from '../images/logo.png';
import { Container, Hero, Header, Nav, Link, Logo, HeroBg, Title, HeroBtn, About, AboutTitle, LineStyle, AboutText, Card, CardTitle, CardBox, CardSet, CardText } from './App.styled';
export const App = () => {

    return <div>
      <HeroBg>
        <Header>
          <Nav>
            <Link href="/">Послуги</Link>
            <Link href="/">Результат</Link>
            <Link href="/">Контакти</Link>
          </Nav>
          <Link href="/"><img src={logo} alt="Detailing by Semenov" /></Link>
        </Header>
        <Hero>
          <Container>
            <Title>Студія детейлінгу</Title>
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
      
        <CardSet>
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
        <LineStyle><AboutTitle>Результат</AboutTitle></LineStyle>

        

        <button type="button" class="previous">Previous</button>
        <button type="button" class="next">Next</button>

      </About>
    </div>
  
  };


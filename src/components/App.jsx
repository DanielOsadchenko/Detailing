import React, {useState} from 'react';
import logo from '../images/fullLogo.png';
import blackLogo from '../images/blackLogo.png';
// import smallLogo from '../images/logo.png';
import { Mail, Tel, Tag, Instagram, Facebook, Whatsapp } from './source/images';
import SimpleSlider from './SimpleSlider/SimpleSlider';
import { Container, HeroBg, BlackLine, BlackLogo, Address, FooterTag, FooterContainer, MapBox, SvgBox, ContactCard, Card, SliderBox, CardTitle, CardBox, CardText, CardPrice, About, PriceCardSet, Title, TitleBox, HeaderNav, Header, Line, Nav, NavLink, Hero, HeroTitle, HeroButton, Logo, TitleLine, ResultBtn, ContactSet } from './App.styled';
import { Label, Input, Group, Form, ModalTitle, ModalButton } from "./Modal/Modal.styled";
import { Modal } from './Modal/Modal';

export const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  }
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
            <NavLink href="#Contacts">Контакти</NavLink>
              </Nav>
              <Line></Line>
              </div>
              </HeaderNav>
            
            </Container>
        </Header>
        <Hero>
          <Container>
            <HeroTitle id='#Home'>Студія детейлінгу</HeroTitle>
            <HeroButton type='button' onClick={toggleModal} >Обрати послугу</HeroButton>
            </Container>
        </Hero>
        
      </HeroBg>
    
        <section>
        <Container>
          <TitleBox>
            <TitleLine />
            <Title>Про нас</Title>
            <TitleLine />
          </TitleBox>
            
        <About>
          Дозвольте представитися, мене звати Микита Семенов. Detailing - (англ.) виконання максимально ретельного і делікатного очищення кузова і салону, полірування кузова автомобіля, нанесення захисних складів на всі його ділянки для надання Вашому автомобілю шоу-якості. У Детейлінг студії "Semenov" всі роботи я виконую сам. У мене немає секретарів, менеджерів і найманого персоналу. Причина цього проста. Я перфекціоніст, і я не можу довірити будь-кому догляд за Вашим автомобілем, з таким досвідом і ентузіазмом. Таким чином, Ви можете бути впевнені в персональному обслуговуванні від Semenov, і неперевершеному рівні робіт. Жодна деталь Вашого автомобіля не залишиться без уваги.
          Наша детейлінг майстерня виконує повний комплекс по догляду за екстер'єром та інтер'єром авто.
        </About>
        {/* <img src={smallLogo} alt="Detailing by Semenov" /> */}
        </Container>
      </section>

      <section>
        <Container>
          <TitleBox>
            <TitleLine />
            <Title>Послуги</Title>
            <TitleLine />
          </TitleBox>
      
        <PriceCardSet id='Price'>
          <Card>
            <CardTitle>Полірування фар</CardTitle>
            <CardBox>
              <CardText>Полірування фар застосовується у випадках помутніння, пожовтіння або для усунення дефектів і подряпин, отриманих в результаті дрібних ДТП і пригод.</CardText>
              <CardPrice>від 150zl</CardPrice>
            </CardBox>
          </Card>

          <Card>
            <CardTitle>Полірування кузову</CardTitle>
            <CardBox>
              <CardText>Процедура полірування допоможе повернути дзеркальний блиск і позбутися дрібних дефектів. Ми можемо відполірувати як один елемент, так і весь кузов.</CardText>
              <CardPrice>від 150zl</CardPrice>
            </CardBox>
          </Card>

          <Card>
            <CardTitle>Хімчистка комплекс</CardTitle>
            <CardBox>
              <CardText>Комплекс хімчистки автомобіля зачіпає не тільки килимове покриття, сидіння, а й стелю, двері, приладову панель, пластикові деталі.</CardText>
              <CardPrice>від 300zl</CardPrice>
            </CardBox>
          </Card>

          <Card>
            <CardTitle>Хімчистка елементу</CardTitle>
            <CardBox>
              <CardText>Хімчистка будь-якого елементу салону. Якщо ви розлили каву, або перевозили в багажнику брудні речі, вам може знадобитися ця послуга.</CardText>
              <CardPrice>від 80zl</CardPrice>
            </CardBox>
          </Card>
        </PriceCardSet>
        </Container>
      </section>

      <section>
        <Container>
          <TitleBox>
            <TitleLine />
            <Title id='Result'>Роботи</Title>
            <TitleLine />
          </TitleBox>
        <SliderBox>
          <SimpleSlider/>
        </SliderBox>
        
        <ResultBtn type='button' onClick={toggleModal}>Обрати послугу</ResultBtn>
        </Container>
      </section>

      <section>
        <Container>
          <TitleBox>
            <TitleLine />
            <Title>Контакти</Title>
            <TitleLine />
          </TitleBox>

        <div id='Contacts'>

          <ContactSet>
              <ContactCard>
                <SvgBox><Tag fill='#E89636' /></SvgBox>
            <p>78-400, Szczecinek, ul. Słowiańska 15</p>
          </ContactCard>
              <ContactCard>
                <SvgBox><Tel fill='#E89636' /></SvgBox>
            
            <a href='tel:575138491'>+48 575 138 491</a>
          </ContactCard>
              <ContactCard>
                <SvgBox><Mail fill='#E89636' /></SvgBox>
            
            <a href='mailto:rudik20011@gmail.com'>rudik20011@gmail.com</a>
          </ContactCard>
            <ContactCard>
              <div style={{width: '50%', display: 'flex', justifyContent: 'space-between'}}><a href='https://www.instagram.com/'><Instagram /></a>
              <a href='https://pl-pl.facebook.com/'><Facebook /></a>
              <a href='https://www.whatsapp.com/'><Whatsapp/></a></div>
              </ContactCard>
              
            </ContactSet>
            <MapBox>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1756.6413919223196!2d16.7118586483647!3d53.703537406729694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470185501c149d49%3A0x5d5c3f198abc067e!2sDetailing%20by%20Semenov!5e0!3m2!1sru!2spl!4v1670085461774!5m2!1sru!2spl" style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,}} allowFullScreen="" loading="lazy" title='Detailing by Semenov Map' referrerPolicy="no-referrer-when-downgrade"></iframe>
            </MapBox>
            

        </div>
        </Container>
      </section>

        <footer>
        <Container>
          <FooterContainer>
          <BlackLogo src={blackLogo} alt="Detailing by Semenov" width='193' height='47' />
          <Address>
            <a href="#Price">Послуги</a>
            <a href="#Result">Результат</a>
            <a href="#contacts">Контакти</a>
          </Address>
          </FooterContainer>
          <BlackLine></BlackLine>
          <FooterTag>Produced by: <a href='https://www.linkedin.com/in/danylo-osadchenko/'>Danylo Osadchenko</a></FooterTag>
          <FooterTag>© 2022 Всі права захищені</FooterTag>
          <FooterTag>Designed by: <a href='https://www.behance.net/denionly'>Denys Rudenko</a></FooterTag>
        </Container>
      </footer>
      
      {isModalOpen && <Modal onClose={toggleModal}><Form action="">
        <ModalTitle>Залиште нам своє повідомлення і ми вам передзвонимо</ModalTitle>
        <Group>
          <Input type="text" />
          <Label>Ім'я</Label>
        </Group>
        <Group>
          <Input type="tel" />
          <Label>Мобільний номер</Label>
        </Group>
        <Group>
          <Input type="text" />
          <Label>Автомобіль</Label>
        </Group>
        <Group>
          <Input type="text" />
          <Label>Послуга</Label>
        </Group>
        
        <ModalButton type="submit">Відправити</ModalButton>
      </Form></Modal>}
    </div>
  
  };


import styled from '@emotion/styled';
import bgImage from '../images/background.jpg';
import mobileBgImage from '../images/mobileBG.jpg';
import tabletBgImage from '../images/tabletBG.jpg';


export const Container = styled.div`
min-width: 280px;
max-width: 440px;
padding: 20px;
margin-left: auto;
margin-right: auto;
text-align: center;


@media screen and (min-width: 768px) {
min-width: 688px;
max-width: 688px;
padding: 40px;
}

@media screen and (min-width: 1440px) {
min-width: 1280px;
max-width: 1280px;
padding-left: 80px;
padding-right: 80px;
}
`;

export const HeroBg = styled.div`
width: 100vw;
background-image: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)), url(${mobileBgImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
margin-inline: auto;

@media screen and (min-width: 768px) {
background-image: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)), url(${tabletBgImage});
}

@media screen and (min-width: 1440px) {
background-image: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)), url(${bgImage});
}
`;
export const Logo = styled.img`
width:300px;
margin-bottom: 20px;
margin-inline: auto;

@media screen and (min-width: 768px) {
  width: 480px;
}

@media screen and (min-width: 1440px) {
  width: 540px;
  margin: 0;
}
`;
export const Header = styled.header`
`;

export const HeaderNav = styled.div`
@media screen and (min-width: 1440px) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
}

`;

export const Line = styled.span`
display: block;
width:100%;
border-top: 4px solid #E89636;

@media screen and (min-width: 768px) {
  width: 688px;
}

@media screen and (min-width: 1440px) {
  width: 628px;
}
`;
export const Nav = styled.nav`
display: flex;
justify-content: center;
margin-bottom: 10px;
`;
export const NavLink = styled.a`
font-weight: 500;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.03em;

cursor: pointer;
color: #E4D8C9;

& + & {
  margin-left: 12px;
}

:hover {
color: #E89636;
}

@media screen and (min-width: 768px) {
  font-size: 24px;

  & + & {
  margin-left: 18px;
}
}

@media screen and (min-width: 1440px) {
  font-size: 36px;

  & + & {
  margin-left: 24px;
}
}
`;
export const Hero = styled.div`
margin-top: 160px;
@media screen and (min-width: 768px) {
  margin-top: 60px;
}
@media screen and (min-width: 1440px) {
  margin-top: 80px;
}
`;
export const HeroTitle = styled.h1`
font-weight: 700;
font-size: 26px;
line-height: 1.2;
letter-spacing: 0.4em;
color: #E4D8C9;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media screen and (min-width: 768px) {
  font-size: 36px;
}
@media screen and (min-width: 1440px) {
  font-size: 48px;
}
`;
export const HeroButton = styled.button`
border: 3px solid #E89636;
filter: drop-shadow(2px 2px 50px rgba(148, 140, 160, 0.3));
border-radius: 8px;
background-color: transparent;
max-width: 400px;
min-width: 280px;
min-height: 80px;
margin-top: 400px;
margin-bottom: 20px;

cursor: pointer;

font-weight: 700;
font-size: 32px;
line-height: 1.2;
letter-spacing: 0.05em;
color: #E89636;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

:hover {
background: #E89636;
color: #262A30;
}

@media screen and (min-width: 768px) {
  font-size: 36px;
  margin-top: 500px;
}

@media screen and (min-width: 1440px) {
  font-size: 36px;
  margin-top: 300px;
}
`;
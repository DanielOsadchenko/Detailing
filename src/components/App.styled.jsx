import styled from '@emotion/styled';
import bgImage from '../images/background.jpg';
import mobileBgImage from '../images/mobileBG.jpg';
import tabletBgImage from '../images/tabletBG.jpg';


export const Container = styled.div`
min-width: 280px;
max-width: 440px;
padding: 10px 20px;
margin-left: auto;
margin-right: auto;
text-align: center;


@media screen and (min-width: 768px) {
min-width: 688px;
max-width: 688px;
padding: 20px 40px;
}

@media screen and (min-width: 1440px) {
min-width: 1280px;
max-width: 1280px;
padding: 40px 80px;
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

export const BlackLine = styled.span`
display: block;
width:100%;
border-top: 2px solid #262A30;
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

export const Title = styled.h2`
display: block;
text-align: center;
font-weight: 700;
font-size: 16px;
line-height: 1.2;
letter-spacing: 0.15em;
color: #E89636;

@media screen and (min-width: 768px) {
  font-size: 24px;
}

@media screen and (min-width: 1440px) {
  font-size: 56px;
}
`;

export const TitleLine = styled.span`
display: block;
width: 80px;
border-top: 3px solid #E89636;

@media screen and (min-width: 360px) {
  width: 100px;
}
@media screen and (min-width: 390px) {
  width: 120px;
}
@media screen and (min-width: 450px) {
  width: 140px;
}
@media screen and (min-width: 480px) {
  width: 169px;
}
@media screen and (min-width: 768px) {
  width: 250px;
}
@media screen and (min-width: 1440px) {
  width: 450px;
}
`;
export const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;


export const About = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 1.8;
letter-spacing: 0.04em;

margin-top: 10px;

color: #E89636;

@media screen and (min-width: 768px) {
  font-size: 16px;
  margin-top: 20px;
}
@media screen and (min-width: 1440px) {
  font-size: 24px;
  margin-top: 40px;
}

`;

export const PriceCardSet = styled.ul`
max-width: 400px;
margin-inline: auto;
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
margin-top: 20px;

@media screen and (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  margin-top: 40px;
}

@media screen and (min-width: 1440px) {
  grid-gap: 40px;
  margin-top: 80px;
}
`;

export const Card = styled.li`

`;
export const CardTitle = styled.h3`
background: #E89636;
display: block;
border-radius: 8px 8px 0px 0px;

font-weight: 700;
font-size: 14px;
line-height: 1.2;
letter-spacing: 0.04em;
color: #262A30;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 8px 0;
@media screen and (min-width: 768px) {
  font-size: 22px;
}

@media screen and (min-width: 1440px) {
  font-size: 40px;
  padding: 30px 0;
}
`;
export const CardBox = styled.div`

padding: 10px;
border-left: 3px solid #E89636;
border-bottom: 3px solid #E89636;
border-right: 3px solid #E89636;
border-bottom-left-radius: 8px;
border-bottom-right-radius: 8px;
background: transparent;
:hover {
  background-color: #393530;
}
@media screen and (min-width: 1440px) {
  padding: 20px;
}
`;
export const CardText = styled.p`
font-weight: 400;
font-size: 12px;
line-height: 1.8;
color: #E4D8C9;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media screen and (min-width: 768px) {
  font-size: 18px;
}
@media screen and (min-width: 1440px) {
  font-size: 24px;
}
`;
export const CardPrice = styled.p`
font-weight: 700;
font-size: 14px;
line-height: 1.8;
margin-top: 10px;
color: #E89636;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
@media screen and (min-width: 768px) {
  font-size: 20px;
}
@media screen and (min-width: 1440px) {
  font-size: 28px;
}
`;

export const SliderBox = styled.div`
margin-top: 20px;
width: 80%;
margin-inline: auto;
margin-bottom: 20px;

@media screen and (min-width: 1440px) {
margin-top: 40px;
}
`;

export const ResultBtn = styled.button`
border: 3px solid #E89636;
filter: drop-shadow(2px 2px 50px rgba(148, 140, 160, 0.3));
border-radius: 8px;
background-color: transparent;
max-width: 400px;
min-width: 280px;
min-height: 60px;
cursor: pointer;
font-weight: 700;
font-size: 20px;
line-height: 1.2;
letter-spacing: 0.05em;
color: #E89636;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

:hover {
background: #E89636;
color: #262A30;
}

@media screen and (min-width: 768px) {
  font-size: 28px;
}

@media screen and (min-width: 1440px) {
  font-size: 36px;
  min-height: 80px;
}`;


export const ContactSet = styled.ul`
max-width: 440px;
margin-inline: auto;
display: grid;
grid-template-columns: 1fr;
grid-gap: 20px;
margin-top: 20px;

@media screen and (min-width: 768px) {
  grid-template-columns: 1fr 1fr;
  max-width: 100%;
  margin-top: 40px;
}

@media screen and (min-width: 1440px) {
  grid-gap: 40px;
  margin-top: 80px;
}`;

export const ContactCard = styled.li`
position: relative;
display: flex;
justify-content: center;
align-items: center;
border: 3px solid #E89636;
border-radius: 8px;
color: #E89636;
min-height: 64px;
font-size: 12px;
line-height: 1.2;
letter-spacing: 0.03em;
font-feature-settings: 'ss01' on;

:hover {
background-color: #393530;
}



&>a {
  color: #E89636;
  margin-left: 40px;
  cursor: pointer;
}
&>p {
  color: #E89636;
  margin-left: 40px;
}
@media screen and (min-width: 768px) {
  font-size: 15px;
}

@media screen and (min-width: 1440px) {
  font-size: 20px;
}


`;

export const SvgBox = styled.div`
position: absolute;
top: 12px;
left: 5px;`;

export const MapBox = styled.div`

margin-top: 20px;
position: relative;
    overflow: hidden;
    padding-top: 56.25%;
`;



export const FooterContainer = styled.div`
text-align: center;
@media screen and (min-width: 768px) {
  display: flex;
  justify-content: space-between;
}
`;
export const BlackLogo = styled.img`
@media screen and (max-width: 767px) {
  margin-inline: auto;
}

`;

export const Address = styled.address`
font-style: normal;
font-weight: 700;
font-size: 10px;
line-height: 1.2;
letter-spacing: 0.15em;
margin-top: 20px;
margin-bottom: 20px;

display: flex;
justify-content: center;
&>a{color: #262A30;}
& a+a{
margin-left:12px;
}


@media screen and (min-width: 768px) {
  font-size: 16px;
}

@media screen and (min-width: 1440px) {
  font-size: 24px;
}`;

export const FooterTag = styled.p`
font-weight: 400;
font-size: 10px;
line-height: 1.2;
color: #262A30;
margin-top: 4px;
@media screen and (min-width: 768px) {
  font-size: 12px;
}

@media screen and (min-width: 1440px) {
  font-size: 16px;
}`;
import styled from '@emotion/styled';
import bgImage from '../images/background.jpg';


export const Container = styled.div`
width: 1440px;
text-align: center;
margin-top: 110px;`;

export const Hero = styled.section`
display: flex;
justify-content: center;`;

export const Header = styled.header`
display: flex;
justify-content: space-between;
padding-top: 40px;
padding-left: 80px;
padding-right: 80px;`;

export const Nav = styled.nav`
position: relative;
::after {
  content: '';
  display: block;
  border-bottom: 4px solid #E89636;
  position: absolute;
  bottom: 0;
  width: 100%;
}
`;

export const HeroBg = styled.div`
min-width: 1440px;

// height: 800px;
background-image: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)), url(${bgImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
margin-left: auto;
margin-right: auto;
`;

export const Link = styled.a`
font-style: normal;
font-weight: 500;
font-size: 36px;
color: #E4D8C9;
:hover {
  color: #E89636
}

&+& {
  margin-left:24px;
}`;

export const Logo = styled.img`
margin-left: auto;
margin-right: auto;
margin-bottom: 40px;`;

export const Title = styled.h1`
color: #E4D8C9;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-weight: 700;
font-size: 48px;
letter-spacing: 0.4em;
margin-bottom: 334px;
`;

export const HeroBtn = styled.button`

margin-bottom: 40px;
width: 500px;
height:110px;
border: 3px solid #E89636;
filter: drop-shadow(2px 2px 50px rgba(148, 140, 160, 0.3));
border-radius: 16px;
font-weight: 700;
font-size: 40px;
line-height: 47px;
color: #E89636;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: transparent;
cursor: pointer;

:hover {
  background: #E89636;
  color: #262A30;
}
`;

export const About = styled.section`

text-align: center;
max-width: 1440px;
margin-top: 20px;
margin-left: auto;
margin-right: auto;

`;
export const AboutTitle = styled.h2`
display: block;
font-weight: 700;
position: relative;
font-size: 56px;
line-height: 66px;
letter-spacing: 0.15em;
color: #E89636;

::before {
  content: '';
  display: block;
  position: absolute;
  // width: 530px;
  flex-basis: calc((100% - 40px) / 2);
  top:40px;
  right: 0;
  width: 450px;
  margin-right: 40px;
  border-bottom: 3px solid #E89636;
}

::after {
  content: '';
  display: block;
  position: absolute;
  // width: 530px;
  top:40px;
  left: 0;
  width: 450px;
  margin-left: 40px;
  border-bottom: 3px solid #E89636;
}
`;

export const LineStyle = styled.div`
max-width: 1440px;
margin-bottom: 40px;`;

export const AboutText = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 36px;
letter-spacing: 0.03em;
color: #E89636;

margin: 80px 20px;`;

export const CardSet = styled.ul`
margin-left: 80px;
margin-right: 80px;
margin-bottom: 40px;
display: flex;
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 40px;`;

export const Card = styled.li`
flex-basis: calc((100% - 80px) / 2);
display: block;
width: 600px;
height: 350px;
background: transparent;
`;

export const CardTitle = styled.h3`
display: block;
width: 100%;
background-color: #E89636;
border-radius: 16px 16px 0px 0px;
padding: 31.5px 0;
font-weight: 700;
font-size: 40px;
line-height: 47px;
letter-spacing: 0.03em;
color: #262A30;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);`;

export const CardBox = styled.div`
padding:10px;
// width: 594px;
height: 220px;
border-radius: 0px 0px 16px 16px;
border-left: 3px solid #E89636;
border-right: 3px solid #E89636;
border-bottom: 3px solid #E89636;
`;

export const CardText = styled.p`
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
text-align: center;
letter-spacing: 0.03em;
color: #E4D8C9;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

&+& {
  margin-top: 30px;
}`;

export const ResultBtn = styled.button`
margin-top: 40px;
margin-bottom: 40px;
width: 500px;
height:110px;
border: 3px solid #E89636;
filter: drop-shadow(2px 2px 50px rgba(148, 140, 160, 0.3));
border-radius: 16px;
font-weight: 700;
font-size: 40px;
line-height: 47px;
color: #E89636;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
background: transparent;
cursor: pointer;

:hover {
  background: #E89636;
  color: #262A30;
}
`;


export const ContactBox = styled.div`
display: flex;
justify-content: center;

`;

export const ContactCard = styled.div`
width: 622px;
height: 94px;
display: flex;
justify-content: space-evenly;
align-items: center;
border: 3px solid #E89636;
border-radius: 16px;


&+& {
  margin-top:20px;
}`;

export const StyledContacts = styled.div`
margin-right: 24px;`;

export const ContactText = styled.a`
display: inline-block;
font-weight: 500;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.15em;
font-feature-settings: 'ss01' on;
color: #E89636;


:hover {
  color:#E4D8C9;
  transform: scale(1.05);
}
`;


export const Footer = styled.footer`
background-color: #E89636;`;

export const FooterBox = styled.div`
width:1280px;
padding: 20px 80px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
`;

export const LinkFoot = styled.a`
font-weight: 700;
font-size: 24px;

letter-spacing: 0.15em;

color: #262A30;
:hover {
  color: #E4D8C9
}

&+& {
  margin-left:24px;
}`;

export const Bold = styled.p`
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 36px;
text-align: right;
color: #262A30;`;

export const FooterTag = styled.p`
font-weight: 700;
font-size: 20px;
line-height: 36px;
display: block;
text-align: center;
width:100%;
margin-top: 20px;
color: #262A30;

::before {
  content: '';
  display: block;
  width: 100%;
  border-bottom: 3px solid #262A30;
}`;
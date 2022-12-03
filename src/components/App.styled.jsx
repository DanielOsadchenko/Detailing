import styled from '@emotion/styled';
import bgImage from '../images/background.jpg';
import mobileBgImage from '../images/mobileBG.jpg';


export const Container = styled.div`
min-width: 320px;
max-width: 480px;
padding: 20px;
margin-inline: auto;
text-align: center;

`;

export const HeroBg = styled.div`
width: 100vw;
background-image: linear-gradient(rgba(47, 48, 58, 0.2), rgba(47, 48, 58, 0.2)), url(${mobileBgImage});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
margin-inline: auto;
`;
export const Logo = styled.img`
width:300px;

margin-bottom: 20px;
margin-inline: auto;
`;
export const Header = styled.header`
width: 100%;


`;

export const Line = styled.span`
display: block;
width:100%;
border-top: 4px solid #E89636;
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
`;
export const Hero = styled.div`
Margin-top: 160px;
`;
export const HeroTitle = styled.h1`
font-weight: 500;
font-size: 26px;
line-height: 1.2;
letter-spacing: 0.4em;
color: #E4D8C9;
`;
export const HeroButton = styled.button`
border: 3px solid #E89636;
filter: drop-shadow(2px 2px 50px rgba(148, 140, 160, 0.3));
border-radius: 8px;
background-color: transparent;
max-width: 400px;
min-width: 300px;
height: 74px;
margin-top: 420px;

cursor: pointer;

font-weight: 700;
font-size: 32px;
line-height: 1.2;
letter-spacing: 0.05em;
color: #E89636;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
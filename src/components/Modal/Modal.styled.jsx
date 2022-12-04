import styled from '@emotion/styled';

export const Group = styled.div`
position: relative;
margin-top: 25px;`;
export const Input = styled.input`
width: 80%;
border: 1px solid #E4D8C9;
border-radius: 8px;
background: none;
line-height: 1;
padding: 1rem;
font-size: 1rem;
color: #E89636;
transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

&:focus{
  outline: none;
  border: 1.5px solid #E89636;
}

&:focus ~ label {
  transform: translateY(-50%) scale(0.8);
  background-color: #1E1E1E;
  padding: 0 0.2em;
  color: #E89636;
}
`;
export const Label = styled.label`
position: absolute;
left: 16px;
color: #E4D8C9;
pointer-events: none;

transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);

transform: translateY(-50%) scale(0.8);
  background-color: #1E1E1E;
  padding: 0 0.2em;
`;

export const Backdrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;`;
export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
width: 280px;
background: #1E1E1E;
margin: 5px;
border-radius: 16px;
`;

export const Form = styled.form`
`;

export const ModalTitle = styled.h3`
font-weight: 400;
font-size: 1.5rem;
line-height: 1.5;
letter-spacing: 0.03em;
color: #E89636;
`;

export const ModalButton = styled.button`
margin-top: 25px;
width: 258px;
border: 2px solid #E4D8C9;
border-radius: 8px;
background: none;
line-height: 1;
padding: 1rem;
font-size: 1rem;
color: #E89636;
transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
cursor: pointer;
&:focus, &:hover{
  outline: none;
  border: 2px solid #E89636;
}`;
import styled from "styled-components";

export const Container = styled.div`  
  min-height: 100vh;
  width: 18%;
  max-width: 230px;
  background-color: #202225;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoArea = styled.div`
  border-bottom: 2px solid #000;
  width: 100%;
  display: flex;
  justify-content: center; 
  margin-bottom: 24px;
`;

export const Logo = styled.img`
  width: 100%;
  max-width: 90px;
  margin: 18px;  
`;

export const Categories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column; 
  align-items: flex-start; 
  color: #FFF;
  margin-bottom: 32px;
`;

export const Titulo = styled.h1`
  font-size: smaller;
  font-weight: 400;
  margin-bottom: 16px;
  padding-left: 16px;
`;

export const Items = styled.div`  
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.div`  
  display: flex;
  align-items: center;  
  font-size: small; 
  padding: 8px;
  margin: 8px 0px 0px 8px;
`;

export const Popular = styled.img`
    width: 100%;
    max-width: 26px;
    margin-right:24px;
`;

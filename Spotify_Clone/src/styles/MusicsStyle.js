import styled from "styled-components";
import { AiFillPlayCircle } from "react-icons/ai";

export const MainDiv = styled.div`
  display: flex;
  flex: 6;
  color: white;
  flex-wrap: wrap;
  overflow-y: auto;
  width: 100%;


  ::-webkit-scrollbar {
    margin-left: -10px;
    opacity: 0.6;
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    padding-block-end: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: gray;
    height: 10px;
  }
`;
export const CardMusic = styled.div`
  display: flex;
  align-items: end;
  transition: 0.6s;
  margin-top: 10px;

  background-color: #1a1a1a;
  border-radius: 40px;
  height: 280px;
  margin-right: 20px;
  width: 280px;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
  

  @media only screen and (max-width: 1024px) {
    margin-left: 10px;
  }

  &:hover {
    box-shadow: inset 0px -73px 59px 5px rgba(255, 255, 255, 0.2);
    height: 285px;
    width: 285px;
  }

  &:hover #nameMusic {
    transition: 0.6s;
    font-size: 14px;
    margin: 0px;
    width: 100%;
    color: #1ed764;
    font-weight: bold;
    padding: 5px;
    font-family: "Wix Madefor Display", sans-serif;
  }
  &:hover #artist {
    transition: 0.6s;
    font-size: 14px;
    margin: 0px;
    width: 100%;
    color: white;
    padding: 5px;
    font-family: "Wix Madefor Display", sans-serif;
  }
  &:hover #playGreen {
    transition: 0.6s;
    font-size: 60px;
    color: #1ed764;
  }
`;
export const PlayerIconGreen = styled(AiFillPlayCircle)`
  font-size: 0px;
`;

export const NameMusic = styled.p`
  font-size: 0px;
`;
export const Artist = styled.p`
  font-size: 0px;
`;

export const Title = styled.h2`
  width: 100%;
  height: 20px;
  display: flex;
  padding-left: 20px;
  margin: 0px;
  color: white;

  padding-block-end: 20px;
  font-family: "Wix Madefor Display", sans-serif;
  @media only screen and (max-width: 768px) {
    justify-content:center;
    padding-left: 0px;
    
  }
;

`;

export const List = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
  padding: 10px;

justify-content: space-between;
  
  @media only screen and (max-width: 768px) {
    justify-content:center;
  
  }
`;
export const BorderGray = styled.div`
width: 98%;
height: 1px ;
background-color: gray;
`
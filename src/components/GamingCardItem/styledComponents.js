import styled from 'styled-components'

export const GameingItem = styled.li`
  height: 45vh;
  width: 80vw;
  list-style-type: none;
  border-radius: 5px;
  margin-bottom: 10px;
  &: hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 4px 10px darkgray;
  }

  @media screen and (min-width: 576px) {
    height: 50vh;
    width: 40vw;
  }
  @media screen and (min-width: 768px) {
    height: 55vh;
    width: 25vw;
  }
  @media screen and (min-width: 992px) {
    height: 55vh;
    width: 18vw;
  }
`

export const GameingImg = styled.img`
  height: 30vh;
  width: 80vw;

  @media screen and (min-width: 576px) {
    height: 35vh;
    width: 40vw;
  }

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 25vw;
  }
  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 18vw;
  }
`

export const GameingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const GameingTitle = styled.p`
  font-size: 15px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
  @media screen and (min-width: 992px) {
    font-size: 18px;
  }
`

export const ViewsCount = styled.p`
  color: #94a3b8;
`

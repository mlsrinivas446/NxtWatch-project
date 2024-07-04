import styled from 'styled-components'

export const GameingItem = styled.li`
  height: 45vh;
  width: 80vw;
  list-style-type: none;

  @media screen and (min-width: 576px) {
    height: 50vh;
    width: 45vw;
  }
  @media screen and (min-width: 768px) {
    height: 55vh;
    width: 26vw;
  }
  @media screen and (min-width: 992px) {
    height: 60vh;
    width: 20vw;
  }
`

export const GameingImg = styled.img`
  height: 30vh;
  width: 80vw;

  @media screen and (min-width: 576px) {
    height: 35vh;
    width: 35vw;
  }

  @media screen and (min-width: 768px) {
    height: 40vh;
    width: 18vw;
    margin-right: 20px;
  }

  @media screen and (min-width: 992px) {
    height: 40vh;
    width: 16vw;
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

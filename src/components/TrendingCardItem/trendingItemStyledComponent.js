import styled from 'styled-components'

export const TrendingItem = styled.li`
  width: 90vw;
  list-style-type: none;
  margin-top: 6px;
  margin-bottom: 6px;
  border-radius: 5px;

  &:hover {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0px 4px 10px darkgray;
  }
  @media screen and (min-width: 576px) {
    width: 90vw;
  }
  @media screen and (min-width: 768px) {
    width: 80vw;
    display: flex;
  }
  @media screen and (min-width: 992px) {
    width: 70vw;
    display: flex;
    align-items: center;
  }
`

export const TrendingImg = styled.img`
  width: 90vw;
  height: 30vh;

  @media screen and (min-width: 576px) {
    width: 90vw;
    height: 35vh;
  }
  @media screen and (min-width: 768px) {
    width: 30vw;
    height: 30vh;
    margin-right: 20px;
  }
  @media screen and (min-width: 992px) {
    width: 20vw;
    height: 30vh;
  }
`

export const TrendingDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const TrendingTitle = styled.h1`
  font-size: 15px;
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
  @media screen and (min-width: 992px) {
    font-size: 20px;
  }
`

export const BreakElement = styled.br`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const ViewsYearContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const IbChannelText = styled.p`
  color: #94a3b8;
  font-size: 15px;
`

export const ViewsCount = styled.p`
  color: #94a3b8;
  font-size: 15px;
`

export const PublishedAt = styled.p`
  color: #94a3b8;
  font-size: 15px;
`

export const SeperatorDot1 = styled.p`
  color: #94a3b8;
  font-size: 15px;
  padding-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (min-width: 768px) {
    display: none;
    font-size: 25px;
  }
`

export const SeperatorDot2 = styled.p`
  color: #94a3b8;
  font-size: 15px;
  padding-bottom: 15px;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
`

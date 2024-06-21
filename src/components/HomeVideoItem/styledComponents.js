import styled from 'styled-components'

export const ListItemContainer = styled.li`
  list-style-type: none;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  margin: 8px;
  width: 90vw;
  height: 50vh;

  @media screen and (min-width: 576px) {
    width: 40vw;
    height: 60vh;
  }
  @media screen and (min-width: 768px) {
    width: 25vw;
    height: 60vh;
  }
  @media screen and (min-width: 992px) {
    width: 18vw;
    height: 60vh;
    margin: 10px;
  }
`

export const ThumbnillImage = styled.img`
  width: 90vw;
  height: 30vh;

  @media screen and (min-width: 576px) {
    width: 40vw;
    height: 25vh;
  }
  @media screen and (min-width: 768px) {
    width: 25vw;
    height: 28vh;
  }

  @media screen and (min-width: 992px) {
    width: 18vw;
    height: 25vh;
  }
`

export const ThumbnillContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ThumbnillTitleBatchViewCotainer = styled.div``

export const ThumbnillProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 7px;
  margin-top: 10px;
`

export const ThumbnillTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};

  @media screen and (max-width: 575px) {
    font-size: 15px;
  }

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }

  @media screen and (min-width: 992px) {
    font-size: 13px;
  }
`

export const ThumbnillBatchName = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 15px;
`

export const ThumbnillViewsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ViewsCount = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};

  @media screen and (max-width: 575px) {
    font-size: 15px;
  }

  @media screen and (min-width: 576px) {
    font-size: 13px;
  }

  @media screen and (min-width: 992px) {
    font-size: 13px;
  }
`

export const TeamIBContainer = styled.div`
  display: flex;
  align-items: center;
`

export const TeamLogoImage = styled.img`
  @media screen and (max-width: 575px) {
    height: 30px;
    width: 30px;
  }
  @media screen and (min-width: 576px) {
    height: 30px;
    width: 30px;
  }
  @media screen and (min-width: 992px) {
    height: 30px;
    width: 30px;
  }
`

export const TeamContentContainer = styled.div``

export const IBText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};

  @media screen and (max-width: 575px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`

export const Subscribers = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};

  @media screen and (max-width: 575px) {
    font-size: 13px;
  }
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`

export const Description = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#64748b')};

  @media screen and (max-width: 575px) {
    font-size: 15px;
  }
  @media screen and (min-width: 576px) {
    font-size: 15px;
  }
  @media screen and (min-width: 992px) {
    font-size: 15px;
  }
`

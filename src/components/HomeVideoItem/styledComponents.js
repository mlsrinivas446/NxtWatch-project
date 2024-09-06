import styled from 'styled-components'

export const ListItemContainer = styled.li`
  list-style-type: none;
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 4px 10px darkgray;
    transform: scale(1.02);
  }

  margin-bottom: 10px;
  background-color: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  width: 90vw;
  height: 60vh;

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

export const ThumbnailImage = styled.img`
  width: 90vw;
  height: 30vh;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

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

export const ThumbnailContentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ThumbnailTitleTeamViewCotainer = styled.div``

export const ThumbnailProfileImage = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 7px;
  margin-top: 10px;
`

export const ThumbnailTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};

  @media screen and (max-width: 575px) {
    font-size: 13px;
  }

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }

  @media screen and (min-width: 768px) {
    font-size: 13px;
  }

  @media screen and (min-width: 992px) {
    font-size: 13px;
  }
`

export const ThumbnailTeamName = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#1e293b')};
  font-size: 14px;
`

export const ThumbnailViewsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
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

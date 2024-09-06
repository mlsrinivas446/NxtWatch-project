import {Link} from 'react-router-dom'
import {
  ListItemContainer,
  ThumbnailImage,
  ThumbnailContentContainer,
  ThumbnailProfileImage,
  ThumbnailTitleTeamViewCotainer,
  ThumbnailTitle,
  ThumbnailTeamName,
  ThumbnailViewsContainer,
  ViewsCount,
} from './styledComponents'

import ReactContext from '../../context/ReactContext'

import './index.css'

const VideoItem = props => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value

      const {videoItem} = props

      const {
        name,
        profileImageUrl,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = videoItem

      return (
        <Link to={`/videos/${id}`} className="link">
          <ListItemContainer isDarkMode={isDarkMode}>
            <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
            <ThumbnailContentContainer>
              <div>
                <ThumbnailProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
              </div>
              <ThumbnailTitleTeamViewCotainer>
                <ThumbnailTitle isDarkMode={isDarkMode}>{title}</ThumbnailTitle>
                <ThumbnailTeamName isDarkMode={isDarkMode}>
                  {name}
                </ThumbnailTeamName>

                <ThumbnailViewsContainer>
                  <ViewsCount>{viewCount} views</ViewsCount>
                  <p className="dot">.</p>
                  <ViewsCount>{publishedAt}</ViewsCount>
                </ThumbnailViewsContainer>
              </ThumbnailTitleTeamViewCotainer>
            </ThumbnailContentContainer>
          </ListItemContainer>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default VideoItem

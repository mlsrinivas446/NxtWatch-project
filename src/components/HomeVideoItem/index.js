import {Link} from 'react-router-dom'
import {
  ListItemContainer,
  ThumbnillImage,
  ThumbnillContentContainer,
  ThumbnillProfileImage,
  ThumbnillTitleBatchViewCotainer,
  ThumbnillTitle,
  ThumbnillBatchName,
  ThumbnillViewsContainer,
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
            <ThumbnillImage src={thumbnailUrl} alt="video thumbnail" />
            <ThumbnillContentContainer>
              <div>
                <ThumbnillProfileImage
                  src={profileImageUrl}
                  alt="channel logo"
                />
              </div>
              <ThumbnillTitleBatchViewCotainer>
                <ThumbnillTitle isDarkMode={isDarkMode}>{title}</ThumbnillTitle>
                <ThumbnillBatchName isDarkMode={isDarkMode}>
                  {name}
                </ThumbnillBatchName>

                <ThumbnillViewsContainer>
                  <ViewsCount>{viewCount} views</ViewsCount>
                  <p className="dot">.</p>
                  <ViewsCount>{publishedAt}</ViewsCount>
                </ThumbnillViewsContainer>
              </ThumbnillTitleBatchViewCotainer>
            </ThumbnillContentContainer>
          </ListItemContainer>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default VideoItem

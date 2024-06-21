import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ReactContext from '../../context/ReactContext'

import {
  TrendingItem,
  TrendingImg,
  TrendingDetailContainer,
  TrendingTitle,
  ViewsYearContainer,
  IbChannelText,
  ViewsCount,
  PublishedAt,
  SeperatorDot2,
} from './trendingItemStyledComponent'

const TrendingCardItem = props => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {trendingCardItem} = props
      const {
        name,
        id,
        publishedAt,
        thumbnailUrl,
        title,
        viewCount,
      } = trendingCardItem

      const distanceYear = formatDistanceToNow(new Date(publishedAt))

      return (
        <Link to={`/videos/${id}`} className="link">
          <TrendingItem>
            <TrendingImg src={thumbnailUrl} alt={title} />
            <TrendingDetailContainer>
              <TrendingTitle isDarkMode={isDarkMode}>{title}</TrendingTitle>
              <ViewsYearContainer>
                <IbChannelText>{name}</IbChannelText>
                <SeperatorDot2>.</SeperatorDot2>
                <ViewsCount>{viewCount} views</ViewsCount>
                <SeperatorDot2>.</SeperatorDot2>
                <PublishedAt>{distanceYear} ago</PublishedAt>
              </ViewsYearContainer>
            </TrendingDetailContainer>
          </TrendingItem>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default TrendingCardItem

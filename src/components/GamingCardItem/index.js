import {Link} from 'react-router-dom'
import ReactContext from '../../context/ReactContext'

import {
  TrendingItem,
  TrendingImg,
  TrendingTitle,
  ViewsCount,
} from './styledComponent'

const GamingCardItem = props => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {trendingCardItem} = props

      const {id, thumbnailUrl, title, viewCount} = trendingCardItem

      return (
        <Link to={`/videos/${id}`} className="link">
          <TrendingItem>
            <TrendingImg src={thumbnailUrl} alt="video thumbnail" />
            <TrendingTitle isDarkMode={isDarkMode}>{title}</TrendingTitle>
            <ViewsCount>{viewCount} views</ViewsCount>
          </TrendingItem>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default GamingCardItem

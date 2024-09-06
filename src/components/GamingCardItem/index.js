import {Link} from 'react-router-dom'
import ReactContext from '../../context/ReactContext'

import {
  GameingItem,
  GameingImg,
  GameingTitle,
  ViewsCount,
} from './styledComponents'

const GamingCardItem = props => (
  <ReactContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const {trendingCardItem} = props

      const {id, thumbnailUrl, title, viewCount} = trendingCardItem

      return (
        <Link to={`/videos/${id}`} className="link">
          <GameingItem>
            <GameingImg src={thumbnailUrl} alt="video thumbnail" />
            <GameingTitle isDarkMode={isDarkMode}>{title}</GameingTitle>
            <ViewsCount>{viewCount} views</ViewsCount>
          </GameingItem>
        </Link>
      )
    }}
  </ReactContext.Consumer>
)

export default GamingCardItem

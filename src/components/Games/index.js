import {Component} from 'react'
import Cookies from 'js-cookie'
import {IoLogoGameControllerB} from 'react-icons/io'
import Loader from 'react-loader-spinner'
import ApiFailureView from '../ApiFailureView'
import Header from '../Header'
import SideBarNavComponent from '../SideBarNavComponent'
import GamingCardItem from '../GamingCardItem'
import ReactContext from '../../context/ReactContext'

import {
  GamesContainer,
  GamesCardContainer,
  GamesIconContainer,
  GamesContentContainer,
  GamesIcon,
  ImageIcon,
  GamesHeading,
  GamesUnorderListContainer,
} from './gamesStyledComponent'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {trendingList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const token = Cookies.get('jwt_token')
    this.setState({apiStatus: apiConstants.progress})

    const url = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    const response = await fetch(url, options)

    if (response.status === 200) {
      const trendingData = await response.json()

      const formatTrendingData = trendingData.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        isSaved: false,
      }))

      this.setState({
        trendingList: formatTrendingData,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  onApiRetry = () => {
    this.getTrendingList()
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const renderLoadingView = () => (
            <div className="loader-container" data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkMode ? '#ffffff' : '#0b69ff'}
                height="50"
                width="50"
              />
            </div>
          )

          const renderFailureView = () => (
            <ApiFailureView onApiRetry={this.onApiRetry} />
          )

          const renderSuccessView = () => {
            const {trendingList} = this.state
            return (
              <>
                {trendingList.map(each => (
                  <GamingCardItem key={each.id} trendingCardItem={each} />
                ))}
              </>
            )
          }

          const renderApiViews = () => {
            const {apiStatus} = this.state

            switch (apiStatus) {
              case apiConstants.success:
                return renderSuccessView()
              case apiConstants.failure:
                return renderFailureView()
              case apiConstants.progress:
                return renderLoadingView()
              default:
                return null
            }
          }

          return (
            <GamesContainer isDarkMode={isDarkMode} data-testid="gaming">
              <Header />
              <GamesCardContainer>
                <SideBarNavComponent />
                <GamesContentContainer isDarkMode={isDarkMode}>
                  <GamesIconContainer isDarkMode={isDarkMode}>
                    <GamesIcon isDarkMode={isDarkMode}>
                      <ImageIcon isDarkMode={isDarkMode}>
                        <IoLogoGameControllerB />
                      </ImageIcon>
                    </GamesIcon>
                    <GamesHeading isDarkMode={isDarkMode}>Gaming</GamesHeading>
                  </GamesIconContainer>
                  <GamesUnorderListContainer>
                    {renderApiViews()}
                  </GamesUnorderListContainer>
                </GamesContentContainer>
              </GamesCardContainer>
            </GamesContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Gaming

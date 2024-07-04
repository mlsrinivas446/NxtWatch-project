import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'

import Header from '../Header'
import SideBarNavComponent from '../SideBarNavComponent'
import TrendingCardItem from '../TrendingCardItem'

import ApiFailureView from '../ApiFailureView'

import ReactContext from '../../context/ReactContext'

import {
  TrendingContainer,
  TrendingCardContainer,
  TrendingIconContainer,
  TrendingContentContainer,
  TrendingIcon,
  ImageIcom,
  TrandingHeading,
  TrendingUnorderListContainer,
} from './trendingStyledComponent'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {trendingList: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.getTrendingList()
  }

  getTrendingList = async () => {
    const token = Cookies.get('jwt_token')
    this.setState({apiStatus: apiConstants.progress})

    const url = 'https://apis.ccbp.in/videos/trending'

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
        name: each.channel.name,
        channelProfileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
        isSaved: false,
      }))

      this.setState({
        trendingList: formatTrendingData,
        apiStatus: apiConstants.success,
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: apiConstants.failure})
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
                  <TrendingCardItem key={each.id} trendingCardItem={each} />
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
            <TrendingContainer isDarkMode={isDarkMode} data-testid="trending">
              <Header />
              <TrendingCardContainer>
                <SideBarNavComponent />
                <TrendingContentContainer isDarkMode={isDarkMode}>
                  <TrendingIconContainer isDarkMode={isDarkMode}>
                    <TrendingIcon isDarkMode={isDarkMode}>
                      <ImageIcom isDarkMode={isDarkMode}>
                        <HiFire />
                      </ImageIcom>
                    </TrendingIcon>
                    <TrandingHeading isDarkMode={isDarkMode}>
                      Trending
                    </TrandingHeading>
                  </TrendingIconContainer>
                  <TrendingUnorderListContainer>
                    {renderApiViews()}
                  </TrendingUnorderListContainer>
                </TrendingContentContainer>
              </TrendingCardContainer>
            </TrendingContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Trending

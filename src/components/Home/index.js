import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {IoMdClose, IoMdSearch} from 'react-icons/io'
import Header from '../Header'
import HomeVideoItem from '../HomeVideoItem'
import SideBarNavComponent from '../SideBarNavComponent'
import ReactContext from '../../context/ReactContext'

import ApiFailureView from '../ApiFailureView'
import EmptyResultsView from '../EmptyResultsView'

import './index.css'

import {
  HomeContainer,
  HomeBottomContainer,
  HomeCardContentContainer,
  UnorderListItemsContainer,
  PremimunContainer,
  BannerDescription,
  GetItNowButton,
  CloseButton,
  VideoCardsContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './homeStyledComponent'

const apiConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  progress: 'IN_PROGRESS',
}
const storedState = JSON.parse(localStorage.getItem('homeState'))

class Home extends Component {
  state = {
    searchInput: '',
    banner: true,
    search: '',
    videoList: storedState?.videoList || [],
    apiStatus: apiConstants.initial,
  }

  componentDidMount() {
    this.getVideosListApi()
  }

  componentDidUpdate(prevState) {
    if (prevState !== this.state) {
      localStorage.setItem('homeState', JSON.stringify(this.state))
    }
  }

  getVideosListApi = async () => {
    this.setState({apiStatus: apiConstants.progress})

    const {search} = this.state
    const token = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

    try {
      const response = await fetch(url, options)
      if (response.status === 200) {
        const data = await response.json()
        const formatVideosList = data.videos.map(each => ({
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
          id: each.id,
          publishedAt: each.published_at,
          thumbnailUrl: each.thumbnail_url,
          title: each.title,
          viewCount: each.view_count,
          isSaved: false,
        }))
        this.setState({
          videoList: formatVideosList,
          apiStatus: apiConstants.success,
        })
      } else if (response.status === 401) {
        this.setState({apiStatus: apiConstants.failure})
      } else {
        this.setState({apiStatus: apiConstants.failure})
      }
    } catch (error) {
      console.error('Error fetching videos:', error)
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  hideBanner = () => {
    this.setState({banner: false})
  }

  setSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSearchFilter = () => {
    const {searchInput} = this.state
    this.setState({search: searchInput}, this.getVideosListApi)
  }

  bannerContainer = () => {
    const {banner} = this.state

    return banner ? (
      <PremimunContainer data-testid="banner">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
            className="website-logo"
          />
          <BannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </BannerDescription>
          <GetItNowButton type="button">GET IT NOW</GetItNowButton>
        </div>
        <CloseButton onClick={this.hideBanner} data-testid="close">
          <IoMdClose />
        </CloseButton>
      </PremimunContainer>
    ) : null
  }

  getVideoCardList = () => {
    const {videoList} = this.state

    return (
      <UnorderListItemsContainer>
        {videoList.map(each => (
          <HomeVideoItem key={each.id} videoItem={each} />
        ))}
      </UnorderListItemsContainer>
    )
  }

  onApiRetry = () => {
    this.getVideosListApi()
  }

  render() {
    const {searchInput} = this.state
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
            const {videoList} = this.state
            return (
              <>
                {this.bannerContainer()}
                <VideoCardsContainer>
                  <SearchContainer data-testid="searchButton">
                    <SearchInput
                      type="search"
                      onChange={this.setSearchInput}
                      data-testid="searchButton"
                      value={searchInput}
                    />
                    <SearchButton
                      onClick={this.onSearchFilter}
                      data-testid="searchButton"
                    >
                      <IoMdSearch />
                    </SearchButton>
                  </SearchContainer>

                  {videoList.length === 0 ? (
                    <EmptyResultsView />
                  ) : (
                    this.getVideoCardList()
                  )}
                </VideoCardsContainer>
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
            <HomeContainer isDarkMode={isDarkMode} data-testid="home">
              <Header />
              <HomeBottomContainer isDarkMode={isDarkMode}>
                <SideBarNavComponent />
                <HomeCardContentContainer>
                  {renderApiViews()}
                </HomeCardContentContainer>
              </HomeBottomContainer>
            </HomeContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Home

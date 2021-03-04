import React from 'react';
import headerVideo from '../video/movieWEBM.webm'
import bannerData from '../data/bannerData'
import Banner from '../components/Banner'

class Header extends React.Component {

  state = {
    isReady: false,
    videoMessage: '',
    idOfMessage: 0,
    slideTheMessage: false,
    bannerNumber: 0,
    bannerSquares: [],
  }

  interval1;
  interval2;
  interval3;
  interval4;

  time = 3000;
  idOfInterval;

  videoMessageList = [
    'Największy wybór markowych ubrań',
    'Gwarancja jakości zakupionych produktów',
    'Szybka i pewna dostawa',
    'Bezpieczeństwo zakupów to nasz priorytet'
  ]


  handleSquareOnClick = (id) => {
    let bannerSquares = this.state.bannerSquares

    bannerSquares.forEach(item => item.style.backgroundColor = '#fff')
    bannerSquares[id].style.backgroundColor = 'rgb(41, 107, 58)'

    clearInterval(this.idOfInterval)
    this.idOfInterval = setInterval(this.manageTheMainInterval, this.time * 3)

    this.setState({ bannerNumber: id })
  }


  manageTheMainInterval = () => {
    let idOfMessage = this.state.idOfMessage


    let videoMessage = this.videoMessageList[idOfMessage]

    idOfMessage >= this.videoMessageList.length - 1 ? idOfMessage = 0 : idOfMessage++



    //banner
    let bannerNumber = this.state.bannerNumber

    bannerNumber >= bannerData.length - 1 ? bannerNumber = 0 : bannerNumber++

    let bannerSquares = this.state.bannerSquares

    bannerSquares.forEach(item => item.style.backgroundColor = '#fff')
    bannerSquares[bannerNumber].style.backgroundColor = 'rgb(41, 107, 58)'


    this.setState({ idOfMessage, videoMessage, bannerNumber })


    // text from left
    this.interval1 = setTimeout(() => this.setState({ slideTheMessage: false }), this.time * 2)
    this.interval2 = setTimeout(() => this.setState({ slideTheMessage: true }), this.time * 3)

  }


  componentDidUpdate = (prevProps, prevState) => {

    if (prevState.isReady !== this.state.isReady) {
      this.idOfInterval = setInterval(this.manageTheMainInterval, this.time * 3)
    }
  }

  componentDidMount = () => {

    let bannerSquares = [...document.querySelectorAll('.square-nav-item')]
    bannerSquares[0].style.backgroundColor = 'rgb(41, 107, 58)'


    this.setState({ bannerSquares })
    this.interval3 = setTimeout(() => this.setState({ isReady: !this.state.isReady, videoMessage: this.videoMessageList[0] }), this.time)
    this.interval4 = setTimeout(() => this.setState({ slideTheMessage: true }), this.time * 1.5)
  }


  componentWillUnmount = () => {
    clearInterval(this.idOfInterval)
    clearTimeout(this.interval1)
    clearTimeout(this.interval2)
    clearTimeout(this.interval3)
    clearTimeout(this.interval4)
  }

  render() {
    const { isReady, videoMessage, slideTheMessage, bannerNumber } = this.state
    // console.log(this.state.bannerSquares)
    const banner = bannerData.map(item =>
      <Banner data={item} key={item.id}></Banner>
    )

    const squareNav = bannerData.map(item =>
      <div className={`square-nav-item ${item.id}`} key={item.id} onClick={() => this.handleSquareOnClick(item.id)}></div>
    )

    return (
      <header>
        <div className='header-video'>
          <div className="video-cont">
            <video src={headerVideo} autoPlay loop muted className={isReady ? 'darker' : null}></video>
          </div>
          <div className="video-info" style={slideTheMessage ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
            <h1 >{videoMessage}</h1>
          </div>
        </div>
        <div className="header-rest">


          <div className="banners-cont" style={{ width: `${bannerData.length * 100}%` }}>
            <div className="banners" style={{ transform: `translateX(${-1 * bannerNumber * 100 / bannerData.length}%)` }}>
              {banner}
            </div>
            <div className="square-nav">
              {squareNav}
            </div>
          </div>
        </div>
      </header >
    )
  };
}
export default Header;
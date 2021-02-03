import React from 'react';
import headerVideo from '../video/movieWEBM.webm'

class Header extends React.Component {

  state = {
    isReady: false,
    videoMessage: '',
    idOfMessage: 0,
    slideTheMessage: false,
  }


  time = 3000;
  idOfInterval;

  videoMessageList = [
    'Największy wybór markowych ubrań',
    'Gwarancja jakości zakupionych produktów',
    'Szybka i pewna dostawa',
    'Bezpieczeństwo zakupów to nasz priorytet'
  ]

  componentDidUpdate = (prevProps, prevState) => {
    console.log(prevState)
    if (prevState.isReady !== this.state.isReady) {
      console.log('change2')
      this.idOfInterval = setInterval(() => {
        let idOfMessage = this.state.idOfMessage


        let videoMessage = this.videoMessageList[idOfMessage]

        idOfMessage >= this.videoMessageList.length - 1 ? idOfMessage = 0 : idOfMessage++

        this.setState({ idOfMessage, videoMessage })

        // setVideoMessage(videoMessageList[idOfMessage])

        setTimeout(() => this.setState({ slideTheMessage: false }), this.time * 2)
        setTimeout(() => this.setState({ slideTheMessage: true }), this.time * 3)


        // idOfMessage > videoMessageList.length ? setIdOfMessage(0) : setIdOfMessage(idOfMessage + 1)

      }, this.time * 3)
    }
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({ isReady: !this.state.isReady, videoMessage: this.videoMessageList[0] }), this.time)
    setTimeout(() => this.setState({ slideTheMessage: true }), this.time * 1.5)
  }



  //   if (isReady) {
  //     let idOfInterval = setInterval(() => {
  //       setVideoMessage(videoMessageList[idOfMessage])

  //       idOfMessage > videoMessageList.length ? setIdOfMessage(0) : setIdOfMessage(idOfMessage + 1)

  //     }, time)

  //   }
  //   console.log('idOfMessage')
  // }, [isReady, idOfMessage])



  render() {
    const { isReady, videoMessage, slideTheMessage } = this.state
    return (
      <header>
        <div className='header-video'>
          <div className="video-cont">
            <video src={headerVideo} autoPlay loop muted className={isReady ? 'darker' : null}></video>
          </div>
          <div className="video-info" style={slideTheMessage ? { transform: 'translateX(0)' } : { transform: 'translateX(-100%)' }}>
            <h1 >{videoMessage}</h1>
            {/* <h1 style={{transform: `${slideTheMessage : 'translateX(0)' : 'translateX(-100%)'}`}}>{videoMessage}</h1> */}
          </div>
        </div>
        <div className="header-rest">

        </div>

      </header >
    )
  };
}
export default Header;
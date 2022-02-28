import './styling.css'

const Header = () => {
  let welcomeImg = require('../assets/welcome_man.png')

  return (
    <div className='containers'>
      <div className='welcome-container'>
        <img className='header_img' src={welcomeImg}/>
      </div>
      <div className='welcome-text'>
        <h4> hello, my name is blank </h4>
        <p>lorem ipsum dolor sit amet</p>  
      </div>
    </div>
  )
}

export default Header
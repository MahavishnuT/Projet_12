import "./keydata.scss"
import PropTypes from 'prop-types'


function KeyData({picture, unit, text, keydata}) {
  return (
    <div className="keydata-container">
      <img src={picture} alt="logo" className="keydata-img"/>
      <div className="keydata-text">
        <h2 className="keydata-text-title">{keydata + unit}</h2>
        <span className="keydata-text-description">{text}</span>
      </div>
    </div>
  )
}

export default KeyData

KeyData.propTypes = {
  picture: PropTypes.string,
  unit: PropTypes.string,
  text: PropTypes.string,
  keydata: PropTypes.number
}
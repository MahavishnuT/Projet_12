import "./keydata.scss"

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
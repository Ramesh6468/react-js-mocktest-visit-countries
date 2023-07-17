import './index.css'

const NationItem = props => {
  const {nationDetails, removeNationItem} = props
  const {id, imageUrl, name} = nationDetails

  const onClickRemoveButton = () => {
    removeNationItem(id)
  }

  return (
    <li className="nationItem">
      <img src={imageUrl} alt="thumbnail" className="flag" />
      <div className="bottom">
        <p className="name2">{name}</p>
        <button className="button2" type="button" onClick={onClickRemoveButton}>
          Remove
        </button>
      </div>
    </li>
  )
}

export default NationItem

import './index.css'

const CountryItem = props => {
  const {countryDetails, onClickVisitButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    onClickVisitButton(id)
  }

  return (
    <li className="item">
      <p className="name">{name}</p>
      {isVisited ? (
        <p className="para">Visited</p>
      ) : (
        <button className="button" type="button" onClick={onClickVisit}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryItem

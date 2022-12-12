import './index.css'

const DenominationItem = props => {
  const {eachValue, onWithdraw} = props
  const {value} = eachValue

  const onWithdrawButton = () => {
    onWithdraw(value)
  }

  return (
    <li className="withdrawalButtonsContainer">
      <button
        type="button"
        className="withdrawButton"
        onClick={onWithdrawButton}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

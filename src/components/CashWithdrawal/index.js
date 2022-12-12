import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    const {balance} = this.state
    this.setState(prevState => ({balance: prevState.balance - value}))
    return balance === 0 ? this.setState({balance: 0}) : null
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="CashWithdrawalAppContainer">
        <div className="CashWithdrawalHomeContainer">
          <div className="AccountHolderContainer">
            <div className="profileContainer">
              <p>S</p>
            </div>
            <p className="AccountHolderName">Sarah Williams</p>
          </div>
          <div className="BalanceContainer">
            <p className="BalanceTitle">Your Balance</p>
            <div className="BalanceMoneyContainer">
              <p className="digitsContainer">{balance}</p>
              <p className="rupeesContainer">In Rupees</p>
            </div>
          </div>
          <p className="WithdrawTitle">Withdraw</p>
          <p className="withdrawDetails">CHOOSE SUM (IN RUPEES)</p>
          <ul className="withdrawalOptionsContainer">
            {denominationsList.map(eachValue => (
              <DenominationItem
                eachValue={eachValue}
                key={eachValue.id}
                onWithdraw={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

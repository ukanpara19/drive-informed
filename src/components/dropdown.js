import React, { Component } from 'react';
import './style/dropdown.css';
import Data from '../data/data.json';

class Dropdown extends Component {
    constructor() {
        super();
        this.state = {
          showMenu: false,
          data: Data,
          onMonthyASC: false,
          onMonthylDEC: false,
          onDownASC: false,
          onDownDec: false
        };
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
          });  
        }
      }

      handleMonthylDEC = (e) => {
        console.log("Monthly")
        // this.props.OnmonthlySortDEC(this.props.Data);
        this.setState({onMonthylDEC: true});
      }
      
      render() {
        // console.log(this.props);
        return (
          <div>
          <div className = "data-vehicles">
           {Data.autoCount} Vehicles
           </div>
            <button onClick={this.showMenu}>
               Down Payment
            </button>
            {this.state.showMenu ? (
                  <div className="menu" ref={(element) => { this.dropdownMenu = element; }} >
                    <button onClick={() => console.log('DownPay - ASC',this.props.OnDownPaymentSortASC())} >Down Payment <span className='dollar-class' >$ - $$</span></button>
                    <button onClick={() => console.log('DownPay - DEC',this.props.OnDownPaymentSortDEC())}>Down Payment <span className='dollar-class'>$$ - $</span></button>
                    <button onClick={() => console.log('MonthylPay - ASC',this.props.OnmonthlySortASC())}>Monthly Payment<span className='dollar-class'>$ - $$</span> </button>
                    <button onClick={() => console.log('MonthlyPay - DSC',this.props.OnmonthlySortDEC())}>Monthly Payment<span className='dollar-class'>$$ - $</span></button>
                  </div>
                ): (null)
            }
          </div>
        );
      }
    }
// 
export default Dropdown;

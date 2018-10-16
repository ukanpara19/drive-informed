import React, { Component } from 'react';
import './style/dropdown.css';
import Data from '../data/data.json';

class dropdown extends Component {
    constructor() {
        super();
        this.state = {
          showMenu: false,
          data: Data,
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
      

      render() {
        console.log(this.props.OnmonthlySortASC);
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
                    <button >Down Payment <span className='dollar-class' >$ - $$</span></button>
                    <button onClick= {(e) => {this.props.OnmonthlySortASC(e)}}>Down Payment <span className='dollar-class'>$$ - $</span></button>
                    <button>Monthly Payment<span className='dollar-class'>$ - $$</span> </button>
                    <button>Monthly Payment<span className='dollar-class'>$$ - $</span></button>
                  </div>
                ): (null)
            }
          </div>
        );
      }
    }

export default dropdown;

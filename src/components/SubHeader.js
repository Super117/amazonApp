import React, { Component } from 'react';
import styled from 'styled-components';
import DehazeIcon from '@material-ui/icons/Dehaze';
import SideBarMenu from './SideBarMenu.js';

const StyledSubHeader = styled.div`
  	height: 40px;
  	display: flex;
  	align-items: center;
  	background-color: #232f3e;
  	position: sticky;
  	top: 0;
    padding: 0 20px;
    color: white;  
`;

const StyleSubLabel = styled.div`
    height: 40px;
    display: flex;
    margin: auto;
    flex-flow: row wrap;
    overflow: hidden;

    div {
        padding: 9px 12px;
        a {
            color: white;
            text-decoration: none;
            padding: 4px 8px 4px 6px;
            &:hover {
                border: 1px solid;
                border-radius: 2px;
                outline: 0;
                padding: 3px 7px 3px 5px;
            }
        }
    }
`;

const NavMenu = styled.div`
    display: flex;
    align-item: center;
    cursor: pointer;
    
    span {
        margin-left: 2px;
    }
`

class SubHeader extends Component {

    constructor() {
        super();
        this.state = {
            menuStatus: "open"
        }

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick() {
        switch(this.state.menuStatus) {
            case "open":
                this.setState({
                    menuStatus: "close"
                });
                break;
            case "close":
                this.setState({
                    menuStatus: "open"
                });
                break;
            default:
                this.setState({
                    menuStatus: "close"
                });
                break;
        }
    }

	render() {
		return (
			<StyledSubHeader>
                <StyleSubLabel>
                    <NavMenu
                        onClick={this.handleClick}
                    >
                        <DehazeIcon />
                        <span>All</span>
                    </NavMenu>
                    <div>
                        <a href="/">Best Sellers</a>
                    </div>
                    <div>
                        <a href="/">Prime</a>
                    </div>
                    <div>
                        <a href="/">Customer Service</a>
                    </div>
                    <div>
                        <a href="/">New Releases</a>
                    </div>
                    <div>
                        <a href="/">Find a Gift</a>
                    </div>
                    <div>
                        <a href="/">Whole Foods</a>
                    </div>
                    <div>
                        <a href="/">Today's Deals</a>
                    </div>
                    <div>
                        <a href="/">Gift Cards</a>
                    </div>
                    <div>
                        <a href="/">Best Sellers</a>
                    </div>
                    <div>
                        <a href="/">Books</a>
                    </div>
                    <div>
                        <a href="/">AmazonBasics</a>
                    </div>
                    <div>
                        <a href="/">Kindle Books</a>
                    </div>
                    <div>
                        <a href="/">Toys & Games</a>
                    </div>
                    <div>
                        <a href="/">Fashion</a>
                    </div>
                    <div>
                        <a href="/">Sell</a>
                    </div>
                    <div>
                        <a href="/">Coupons</a>
                    </div>
                    <div>
                        <a href="/">Computers</a>
                    </div>
                    <div>
                        <a href="/">Video Games</a>
                    </div>
                    <div>
                        <a href="/">Amazon Home</a>
                    </div>
                </StyleSubLabel>
                <SideBarMenu 
                    menuStatus={this.state.menuStatus}
                    closeClick={this.handleClick}
                />
            </StyledSubHeader>
		);
	}
}

export default SubHeader;

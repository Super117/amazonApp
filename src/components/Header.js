import React, { Component } from 'react';
import styled from 'styled-components';
import SearchIcon from "@material-ui/icons/Search";

const StyledHeader = styled.div`
  	height: 60px;
  	display: flex;
  	align-items: center;
  	background-color: #131921;
  	position: sticky;
  	top: 0;
  	z-index: 100;
`;

const StyledImg = styled.img`
	width: 100px;
  	object-fit: contain;
  	margin: 0 20px;
  	margin-top: 18px;
`;

const StyledOption = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
	color: white;
`;

const StyledOptionLineOne = styled.span`
	font-size: 10px;
`;

const StyledOptionLineTwo = styled.span`
	text-align: center;
	font-size: 13px;
	font-weight: 800;
`;

const StyledHeaderSearch = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	border-radius: 24px;
`;

const StyledSearchInput = styled.input`
	height: 12px;
	padding: 10px;
	border: none;
	width: 100%;
`;

const StyledSearchIcon = styled(SearchIcon)`
	padding: 5px;
	height: 22px !important;
	background-color: #cd9042;
`;

const StyledSearchOption = styled.select`
	height: 34px;
	width: 150px;
`;


export class Header extends Component {

	render() {
		return (
			<StyledHeader>
				<a href="/">
					<StyledImg 
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					/>
				</a>
				<StyledOption>
					<StyledOptionLineOne>Contact to </StyledOptionLineOne>
					<StyledOptionLineTwo>us</StyledOptionLineTwo>
				</StyledOption>
				<StyledHeaderSearch>
					<StyledSearchOption>
						<option value="volvo">Volvo</option>
						<option value="saab">Saab</option>
						<option value="opel">Opel</option>
						<option value="audi">Audi</option>
					</StyledSearchOption>
					<StyledSearchInput type="text" />
					<StyledSearchIcon />
				</StyledHeaderSearch>
			</StyledHeader>
		);
	}
}

export default Header;

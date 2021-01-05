import React, { Component } from 'react';
import styled from 'styled-components';

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

export class Header extends Component {

	render() {
		return (
			<StyledHeader>
				<a href="/">
					<StyledImg 
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					/>
				</a>
			</StyledHeader>
		);
	}
}

export default Header;

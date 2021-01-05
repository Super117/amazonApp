import React, { Component } from 'react';
import styled from 'styled-components';
import Products from './Products.js';

const StyledHome = styled.div`
	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1500px;
	height: 300px;
	overflow: visible;
`;

const StyledHomeImage = styled.img`
	width: 100%;
	height: 600px;
	z-index: -1;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

class Header extends Component {

	render() {
		return (
			<div>
				<StyledHome>
					<StyledHomeImage
						src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Gateway/Dec2020_testing/wk3_GW1_fallguys_1500x600_EN_v2._CB413781238_.jpg"
						alt=""
					/>
				</StyledHome>
				<Products />
			</div>
		);
	}
}

export default Header;

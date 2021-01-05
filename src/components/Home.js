import React, { Component } from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
	display: flex;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1500px;
`;

const StyledHomeImage = styled.img`
	width: 100%;
	z-index: -1;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

class Header extends Component {

	render() {
		return (
			<StyledHome>
				<div>
					<StyledHomeImage
						src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Gateway/Dec2020_testing/wk3_GW1_fallguys_1500x600_EN_v2._CB413781238_.jpg"
						alt=""
					/>
				</div>
		  </StyledHome>
		);
	}
}

export default Header;

import React from 'react';
import { withRouter } from 'react-router';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, history, linkUrl, match }) => (
	<div
		className="menu-item"
		onClick={() => history.push(`${match.url}${linkUrl}`)}
		//the .match props was access due to react-router-dom,
	>
		<div
			className='background-image'
			style={{ backgroundImage: `url(${imageUrl})` }}
		/>
		<div className="content">
			<h1 className="title">{ title.toUpperCase() }</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
)

export default withRouter(MenuItem);
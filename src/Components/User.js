import React from 'react';
import './User.css';
import PropTypes from 'prop-types';

const User = props => {
	let { id, avatar, first_name, last_name } = props
	return (
		<div className= "gridList">
			<img className="roundedImage" src= {avatar} alt= {first_name} />
			<div className= "textAlign">{first_name} {last_name}</div>
			<div className= "buttonAlign" onClick= {()=>{props.clickHandler(id)}}>Delete</div>
		</div>
	)
}

User.propTypes = {
  avatar: PropTypes.string.isRequired,
	first_name: PropTypes.string.isRequired,
	last_name: PropTypes.string.isRequired
}

export default User

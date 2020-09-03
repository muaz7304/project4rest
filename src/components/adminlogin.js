import React from 'react'
import { Link } from 'react-router-dom'

function Adminlogin() {

	return (
		<div>
			<h1>You are an admin</h1>
			<Link to="/addmenu">
				<button>Add New Menu Item</button>
			</Link>
			<Link to="/">
				<button>Home</button>
			</Link>
		</div>
	)
}

export default Adminlogin
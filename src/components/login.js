import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

	return (
		<div>
			<h1>Please log in</h1>
			<Link to="/user">
				<button>Customer</button>
			</Link>
			<Link to="/admin">
				<button>Admin</button>
			</Link>
		</div>
	)
}

export default Login
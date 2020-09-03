import React from 'react'
import { Link } from 'react-router-dom'

function Userlogin() {

	return (
		<div>
			<div>
				<h1>Please select your table number</h1>
			</div>
			<div>
				<form>
					<Link to="/order">
						<input type="button" value="1" />
					</Link>
					<input type="button" value="2" />
					<input type="button" value="3" />
					<input type="button" value="4" />
					<input type="button" value="5" />
				</form>
			</div>
			<div>
				<Link to="/">
					<button>Home</button>
				</Link>
			</div>
			
		</div>
	)
}

export default Userlogin
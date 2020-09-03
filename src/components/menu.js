import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

class Menu extends Component {

    state = {
        title: "",
        desc: "",
        posts: []
    };

    componentDidMount = () => {
        this.getFoodEntry();
    };

    getFoodEntry = () => {
        axios.get('/api')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data });
                console.log('Data received');
            })
            .catch(() => {
                alert('Error retrieving data');
            });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        return null;
    }

    displayFoodMenu = (posts) => {

        return posts.map((post, index) => (
            <div key={index}>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Quantity:</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="0" />
                    </div>
                    <button type='submit'>Add to order</button>
                </form>
            </div>
        ));
    };
    
    render() {
        return (
            <div>
                <h3>
                    Choose any food you want to add
                </h3>
                <div>
                    {this.displayFoodMenu(this.state.posts)}
                </div>
                <div>
                    <Link to="/order">
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Menu;
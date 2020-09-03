import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AddMenu extends Component {

    state = {
        title: "",
        desc: ""
    }

    handleChange = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            title: this.state.title,
            desc: this.state.desc
        };

        axios({
            url: "/api/save-menu",
            method: "POST",
            data: payload
        })
            .then(() => {
                console.log("Data has been sent to server");
                this.resetUserInputs();
            })
            .catch(() => {
                console.log("Internal server error");
            });
    }

    resetUserInputs = () => {
        this.setState({
            title: '',
            desc: ''
        })
    }

    render() {

        return (
            <div>
                <h1>
                    Add menu page
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-input">
                        <input
                            type="text"
                            name="title"
                            placeholder="Food name"
                            value={this.state.title}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-input">
                        <textarea
                            name="desc"
                            placeholder="Description"
                            cols="30"
                            rows="10"
                            value={this.state.desc}
                            onChange={this.handleChange} />
                    </div>
                    <button>
                        Submit
                    </button>
                </form>
                <div>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AddMenu
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

class Orderlist extends Component {

    // constructor(props) {
    //     super(props);
        
    //     this.state={
    //       newOrder:"",
    //       list:[]
    //     } 
    // }

    state = {
        title: "lol",
        desc: "",
        quantity: 0,
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
        console.log(this.state.posts.post.title)
        
    }

    getQuantity = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }


    addOrder = (event) => {
        event.preventDefault()
        return console.log(`item ${event.target.value} is added to order`)
    }

    submitOrder(){

        // console.log(this.posts);

        return console.log("order submitted to the kitchen")



        // const newOrder={
        //     id: 1 + Math.random(),
        //     value: this.state.newOrder.slice()
        // };
        // const list = [...this.state.list];
        // list.push(newOrder);
        // this.setState({
        //     list,
        //     newOrder:""
        // });
    }

    // deleteOrder(id){
    //     const list = [...this.state.list];
    //     const updatedList = list.filter(order => order.id !== id);
    //     this.setState({list: updatedList});
    // }

    displayOrderEntry = (posts) => {

        return posts.map((post, index) => (
            <div key={index}>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <form>
                    <div>
                        <label>Quantity:</label>
                        <input type="number" onChange={null} min="1" max="5" placeholder="0" />
                    </div>
                </form>
            </div>
        ));
    };

    displayFoodMenu = (posts) => {

        return posts.map((post) => (
            <div key={post._id}>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <p>{this.state.quantity}</p>
                <form onSubmit={this.addOrder}>
                    <div>
                        <label>Quantity:</label>
                        <input type="number" name="quantity" value={posts.title} min="1" max="5" placeholder="0" onChange={this.getQuantity} />
                    </div>
                    <button type="submit">Add to order</button>
                </form>
            </div>
        ));
    };

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.submitOrder()}>
                        Submit Order
                    </button>
                    {/* <div>
                        <ul>
                            {this.state.list.map(order => {
                                return(
                                    <li key={order.id}>
                                        {order.value}
                                        <button onClick={() => this.deleteOrder(order.id)}>
                                            X
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>            */}
                </div>
                <div>
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                </div>
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
            </div>
        );
    }
}

export default Orderlist
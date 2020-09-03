import React from 'react';

function Food(props) {

    

    // handleSubmit = (event) => {
    //     event.preventDefault();

    //     const payload = {

    //     }
    // }
    console.log(props)

    return (
        <div key={props.index}>

            food
            {/* <h3>{props.post.title}</h3>
            <p>{props.post.desc}</p>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="0" />
                </div>
                <button type='submit'>Add to order</button>
            </form> */}
                
        </div>
    );
}

export default Food;
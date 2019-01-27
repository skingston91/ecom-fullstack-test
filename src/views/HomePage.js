import React, { Component } from 'react';
import '../stylesheets/listingPage.scss';
import ProductCard from '../components/ProductCard/index.js';

// TODO add snapshot jest test
// TODO add productcard styling
// TODO add 404 fail page
// TODO Spilt out the button logic
// TOOD if cba to fix resolvers for the JSX loading

// const getImage = name => {
//     return import(`../${name}`).then(({ default: url }) => {
//         return url;
//     });
// };

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/products')
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { data, isLoaded, error } = this.state;
        return (
            <div className="HomePage">
                <h1 className="HomePage__title"> Home Page</h1>
                {!isLoaded && <h2> Loading...</h2>}
                {isLoaded && error && <h2> Error</h2>}
                <div className="HomePage__products">
                    {isLoaded &&
                        !error &&
                        data &&
                        data.map(product => (
                            <ProductCard key={product.title} {...product} />
                        ))}
                </div>
            </div>
        );
    }
}

export default HomePage;

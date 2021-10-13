import React, { Component } from "react";
import axios from 'axios';

const Category = props => {
    return (<>
        <option value={props.category.name}>{props.category.name}</option>
    </>
    )
}

export default class RegisterServiceProviderProfile extends Component {

    constructor(props) {
        super(props);

        this.state = {

            categories: []
        };

    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/auth/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:8080/api/auth/categories')
            .then(response => {
                this.setState({ categories: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }


    categoryList() {
        return this.state.categories.map(function (currentCategory, i) {
            return <Category category={currentCategory} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <div className="form-group">
                    <select id="category" className="w3-input w3-border" type="text">
                        <option value="">--Please select a Category--</option>
                        {this.categoryList()}
                    </select>
                </div>
            </div>
        )
    }
}





import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

export const GET_PEOPLE = gql`
    {
        character {
            id
            name
            species
            gender 
            image
        }
    }
`

export default class PeopleQuery extends Component {
    render() {
        return (
            <Query query={GET_PEOPLE}>
                {({ loading, error, data }) => {
                    if (loading)
                        return (
                        <div>
                            <img
                            src="https://media2.giphy.com/media/liBsVeLILcyaY/giphy.gif"
                            alt="loading"
                            />
                        </div>
                        );
                    if (error)
                        return (
                        <div>
                            <img
                            src="https://media1.giphy.com/media/o8elHkOZR56g0/giphy.gif"
                            alt="error"
                            />
                        </div>
                        );
                    return <div>{this.props.render(data)}</div>;
                    }}
            </Query>
        )
    }
}
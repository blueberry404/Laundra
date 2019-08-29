import React, { Component } from 'react-native';
import { Container } from 'native-base';

export default class BaseContainer extends Component {

    render() {
        return (
            <Container>
                <Header>
                    
                </Header>
                {this.props.children}
            </Container>
        );
    }
}
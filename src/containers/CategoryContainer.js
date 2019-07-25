import React from 'react';
import { connect } from 'react-redux';

import Category from '../components/category';

class CategoryContainer extends React.Component {
    
    render() {
        <Category />
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);
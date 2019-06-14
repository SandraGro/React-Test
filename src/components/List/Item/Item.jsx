import React, { Component } from 'react';

// Components
import UpdateItem from '../UpdateItem/UpdateItem';
import {deleteData}  from '../../../utils/api';
import {withRouter} from 'react-router-dom'; 

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0,
            editing: false,
        }

        this.increaseClick = this.increaseClick.bind(this);
        this.editItem = this.editItem.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    increaseClick() {
        this.setState({ clicked: this.state.clicked + 1 });
        this.props.changeLastClicked(this.props.id);
    }

    editItem() {
        this.setState({ editing: true });
    }

    closeModal() {
        this.setState({ editing: false });
        this.props.updateList();
    }

    removeItem() {
        deleteData('items', this.props.id).then(this.props.updateList).catch(console.log);
    }

    render() {
        const { id, name, description, value } = this.props;
        const currentId = this.props.match.params.id;
        return (
            <tr onClick={this.increaseClick}>
                <td>{currentId === id?'Selected':''}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>{value}</td>
                <td>{this.state.clicked}</td>
                <td>{this.props.id === this.props.lastClicked && 'Last Clicked'}</td>
                <td onClick={this.editItem}>Edit</td>
                <td onClick={this.removeItem}> Remove </td>
                <UpdateItem show={this.state.editing} hide={this.closeModal} {...this.props} />
            </tr>
        );
    }
}

export default withRouter(Item);
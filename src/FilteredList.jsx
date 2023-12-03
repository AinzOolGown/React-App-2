import React, { Component } from 'react'; 
import {DropdownButton, Dropdown} from 'react-bootstrap' ; 
import List from './List';

class FilteredList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: "",
			type: "All"
		};
	}
	
	onSearch = (event) => {
        this.setState({ search: event.target.value.trim().toLowerCase() });
    }

    onSelectType = (type) => {
        this.setState({ type });
    }

	filterItem = (item) => {
		return item.name.toLowerCase().includes(this.state.search) &&
               (this.state.type === "All" || item.type === this.state.type);
	}
	/* TODO: Add an event handling method for when an item in dropdown is selected
	Per the DropdownButton documentation, this function should take in an eventKey and event
	*/
	render() {
		return (
			<div>
                <input type="text" placeholder="Search" onChange={this.onSearch} />
                <DropdownButton title="Select Type" id="dropdown-basic-button">
                    <Dropdown.Item onClick={() => this.onSelectType("All")}>All</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.onSelectType("Fruit")}>Fruit</Dropdown.Item>
                    <Dropdown.Item onClick={() => this.onSelectType("Vegetable")}>Vegetable</Dropdown.Item>
                </DropdownButton>
                <List items={this.props.items.filter(this.filterItem)} />
            </div>
		);
	}
}

export default FilteredList;
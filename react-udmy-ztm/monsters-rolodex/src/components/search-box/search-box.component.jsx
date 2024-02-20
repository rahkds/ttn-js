import React from "react";
import './search-box.styles.css';

class SearchBar extends React.Component {
    render(){
        return (
            <div>
                <input className={`search-box ${this.props.className}`} type="search"  placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default SearchBar;
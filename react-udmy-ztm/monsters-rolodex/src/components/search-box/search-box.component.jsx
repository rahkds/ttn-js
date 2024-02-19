import React from "react";

class SearchBar extends React.Component {
    render(){
        return (
            <div>
                <input className={this.props.className} type="search"  placeholder={this.props.placeholder}
                    onChange={this.props.onChangeHandler}
                />
            </div>
        );
    }
}

export default SearchBar;
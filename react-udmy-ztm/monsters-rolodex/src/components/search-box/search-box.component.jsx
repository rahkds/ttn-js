import React from "react";
import './search-box.styles.css';

const SearchBar = ({className, placeholder, onChangeHandler}) => {
    return (
        <div>
            <input className={`search-box ${className}`} type="search"  placeholder={placeholder}
                onChange={onChangeHandler}
            />
        </div>
    );
}

// class SearchBar extends React.Component {
//     render(){
//         return (
//             <div>
//                 <input className={`search-box ${this.props.className}`} type="search"  placeholder={this.props.placeholder}
//                     onChange={this.props.onChangeHandler}
//                 />
//             </div>
//         );
//     }
// }

export default SearchBar;
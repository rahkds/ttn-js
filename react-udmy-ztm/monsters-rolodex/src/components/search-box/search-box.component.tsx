import React, {ChangeEvent} from "react";
import './search-box.styles.css';

type SearchBoxProps = {
    className : string,
    placeholder?: string,
    onChangeHandler : (event:ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({className, placeholder, onChangeHandler} : SearchBoxProps) => {
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
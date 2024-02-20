import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users);
      })
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  }


  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBar onChangeHandler={onSearchChange} placeholder='search monsters' className='monster-search-box'/>
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}


// class App extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       monsters : [],
//       searchField : ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {
//         this.setState(() => {
//           return {
//             monsters : users
//           }
//         })
//       })
//   }

//   onSearchChange = (event) => {
//     this.setState(() => {
//       return {
//         searchField : event.target.value
//       }
//     })
//   }

//   render() {

//     const {monsters, searchField} = this.state;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
//     })

//     return (
//       <div className="App">
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBar onChangeHandler={this.onSearchChange} placeholder='search monsters' className='monster-search-box'/>
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;

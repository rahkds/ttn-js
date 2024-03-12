import React, {useState, useEffect, ChangeEvent} from "react";
// import logo from './logo.svg';
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-box/search-box.component";
import { getData } from "./utils/data.utils";

export type Monster = {
  id : string,
  name : string,
  email : string
}


const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => {
    //     setMonsters(users);
    //   })

    const fetchUsers = async() => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users);
    }
    fetchUsers();

  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event : ChangeEvent<HTMLInputElement>): void => {
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

import React, {FC, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/user-list/user-list.component';
import AddUser from './components/add-user/add-user.componenet';

const App : FC =  () : React.JSX.Element  => {
  const [input, setInput] = useState<string>('');
  const [users, setUsers] = useState<string[]>([]);


  const addUserFn = () :void => {
    if(input) {
      setUsers([...users, input])
      setInput('');
    }
  }

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(event.target.value);
  }

  return (
    <div className="App">
        <h2>Hello World</h2>
        <AddUser addUserFn={addUserFn} onChangeInput = {onChangeInput} inputValue={input}/>
        <UserList users={users}/>
    </div>
  );
}

export default App;

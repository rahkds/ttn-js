const Person = (props) => {
    return React.createElement('div', {}, [
        React.createElement('h1', {}, props.name),
        React.createElement('p', {}, props.occupation)
    ]);
}

const App = () => {
    return React.createElement('div', {}, [
        React.createElement('h1', {className: "title", key : "h1"}, 'React is rendered'),
        React.createElement(Person, {name : 'Yihua', occupation : "instrutor"}, null),
        React.createElement(Person, {name : 'Anderi', occupation : "lead instructor"}, null),
        React.createElement(Person, {name : 'Emily', occupation : "instrutor"}, null),
    ])
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));

// ReactDOM.render(React.createElement(App), document.getElementById('root'));
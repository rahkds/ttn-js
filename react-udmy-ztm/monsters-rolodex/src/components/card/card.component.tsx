import React from "react";
import './card.styles.css';
import {Monster} from '../../App';

type CardProps = {
    monster : Monster
}

const Card = ({monster} : CardProps) => {
    const {id,name,email} = monster;
    return (
        <div className="card-container" key={id}>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}

// class Card extends React.Component {
//     render(){
//         const {id,name,email} = this.props.monster;
//         return (
//             <div className="card-container" key={id}>
//                 <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//                 <h1>{name}</h1>
//                 <p>{email}</p>
//             </div>
//         );
//     }
// }

export default Card;
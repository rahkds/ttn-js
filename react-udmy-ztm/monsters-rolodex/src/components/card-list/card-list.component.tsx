import React from "react";
import './card-list.styles.css';
import Card from "../card/card.component";
import {Monster} from '../../App';

type CardListProps = {
    monsters : Monster[]
}


const CardList = ({monsters} : CardListProps) => {
    return (
        <div className="card-list">
            {
            monsters.map((monster) => {
                const {name,email,id} = monster;
                return (
                    <Card key={id} monster={monster}/>
                )
            })
            }
        </div>
    );
}


// class CardList extends React.Component {
//     render(){
//         const {monsters} = this.props;
//         return (
//             <div className="card-list">
//                 {
//                 monsters.map((monster) => {
//                     const {name,email,id} = monster;
//                     return (
//                         <Card key={id} monster={monster}/>
//                     )
//                 })
//                 }
//             </div>
//         );
//     }
// }

export default CardList;
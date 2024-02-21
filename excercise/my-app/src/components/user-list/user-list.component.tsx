import React, {FC, useState} from 'react';
import './user-list.styles.scss';

interface UserListProps {
    users: string[];
}


const UserList : FC<UserListProps> = ({users}) :  React.JSX.Element => {
    return (
        <>
            <div className='user-list'>
                <table className='styled-table'>
                <thead>
                    <th>Sr No.</th>
                    <th>User name</th>
                </thead>
                <tbody>
                    {users.length  ? (
                    users.map((username:string, idx : number) => {
                        return  (
                        <tr>
                        <td>{idx+1}</td>
                        <td>{username}</td>
                        </tr>
                        )
                    })
                    ) : ''}                              
                </tbody>
                </table>
            </div>
        </>
    )

}


export default UserList;
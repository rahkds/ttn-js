import React, {FC} from 'react';
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
                    <tr>
                        <th>Sr No.</th>
                        <th>User name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length  ? (
                    users.map((username:string, idx : number) => {
                        return  (
                        <tr key={idx}>
                            <td>{idx+1}</td>
                            <td>{username}</td>
                        </tr>
                        )
                    })
                    ) : null}                              
                </tbody>
                </table>
            </div>
        </>
    )

}


export default UserList;
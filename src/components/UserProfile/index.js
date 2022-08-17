import React , {useContext}from 'react';
import { UserContext } from '../../contexts';

const UserProfile = () => {
    const { name} = useContext(UserContext);
    console.log()
    return (
        <div>
            <h2>User Profile</h2>
            <h3>Hi, {name}</h3>
        </div>
    );
}

export default UserProfile;

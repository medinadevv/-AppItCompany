import React from 'react';
import './Profile.scss'
import {NavLink, Outlet} from "react-router-dom";

const Profile = () => {
    return (
        <div id="profile">
            <div className="container">
                <div className="profile">
                    <div className='profile--blocks'>
                        <div className="profile--blocks__block">
                            <NavLink to='/profile/block'>
                                Кызматкер кошуу
                            </NavLink>
                        </div>
                        <div className="profile--blocks__block1">
                            <NavLink to='/profile/block1'>
                                Маалымат
                            </NavLink>
                        </div>
                    </div>
                    <div className="profile--routes">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
import React from 'react';
import '../style/topnav.css'

export default class TopNav extends React.Component {
    render() {
        return (
            <div id="topnav">
                <h2>Patient Management</h2>

                <div id='right-side'>
                    <label className='light'>Your Organisation:</label>
                    <label>BlackSheep</label>
                </div>
            </div>
        );
    }
}
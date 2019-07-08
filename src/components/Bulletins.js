import React, { Component } from 'react';
import Bulletin from './BulletinItem';

export class Bulletins extends Component {
    render() {
        if (this.props.bulletins.length > 0) {
            return this.props.bulletins.map( (bulletin) => (
                <Bulletin bulletin={bulletin} key={bulletin.id}/>
            ));
        }
        return (
            <h1>"Oh snap!, No bulletins to display."</h1>
        )

    }
}

export default Bulletins

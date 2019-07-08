import React, { Component } from 'react';
import Bulletin from './BulletinItem';

export class Bulletins extends Component {
    render() {
        return this.props.bulletins.map( (bulletin) => (
            <Bulletin bulletin={bulletin} key={bulletin.id}/>
        ))
    }
}

export default Bulletins

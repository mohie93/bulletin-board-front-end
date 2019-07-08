import React, { Component } from 'react'

export class BulletinItem extends Component {
    render() {
        let {title, images, content} = this.props.bulletin;
        console.log({images});
        // let firstImage = images.split(',')[0];
        return (
            <div className="card mb-3">
            <img src="..." className="card-img-top" alt="..."/>  
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
            </div>
            </div>
        )
    }
}

export default BulletinItem

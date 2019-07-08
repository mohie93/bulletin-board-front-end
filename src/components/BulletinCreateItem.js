import React, { Component } from 'react';

export class BulletinCreateItem extends Component {

    state = {
        title: '',
        content: '',
        images: ''
    }

    handleInputChange = (e) => {
        e.target.type === "file" ? this.setState({[e.target.name]: e.target.files}) : this.setState({[e.target.name]: e.target.value});
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let {title, content, images} = this.state;
        console.log({images})
        this.props.createBulletin(title, content, images);
        this.setState({title: '', content: '', images: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit} encType="multipart/form-data">
                    <div className="form-group">
                        <label>Bulletin title</label>
                        <input type="text" name="title" className="form-control" id="bulletinTitle" placeholder="Hello World..." onChange={this.handleInputChange}/>
                    </div>
                    <div className="form-group">
                        <label >Bulletin content</label>
                        <textarea className="form-control" name="content" id="bulletinContent" rows="5" onChange={this.handleInputChange}></textarea>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" name="images" id="bulletinImages" multiple onChange={this.handleInputChange} accept='image/*'/>
                        <label className="custom-file-label">Choose files, Use (control or command) to select multiple</label>
                    </div>
                    <div className="form-group">
                        <br/>
                        <button type="submit" id="triggerSubmit" className="btn btn-secondary col-md-12">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default BulletinCreateItem

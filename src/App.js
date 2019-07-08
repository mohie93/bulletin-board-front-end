import React, {Component} from 'react';
import Bulletins from './components/Bulletins';
import Header from './components/layouts/Header';
import BulletinsService from './services/BulletinService';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateBulletin from './components/BulletinCreateItem';

export class App extends Component {

  bulletinsService = new BulletinsService();

  state = {
    bulletins: []
  }

  componentDidMount = async () => {
    const bulletins = await this.bulletinsService.all();
    this.setState({bulletins: bulletins});
  }

  CreateBulletin = async (title, content, images) => {
    console.log({title, content, images})
    images = this.getImagesNames(images).toString();
    const newBulletin = await this.bulletinsService.create(title, content, images);
    this.setState({bulletins: [...this.state.bulletins, newBulletin]})
  }

  getImagesNames = (images) => {
    let imagesNames =  Array.from(images).map((image) => {
      return image.name
    })
    return imagesNames  
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (<Bulletins bulletins={this.state.bulletins}/>)}></Route>
            <Route exact path="/create" render={props => (<CreateBulletin createBulletin={this.CreateBulletin}/>)}></Route>
          </div>
        </div>
      </Router>
    )
  }
}
export default App

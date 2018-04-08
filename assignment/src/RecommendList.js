import React, { Component } from 'react';
import './App.css';

class RecommendList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
          recommendations: []
        };
      }

  componentWillMount(){
        this.callFakeApi2();
    }

    callFakeApi2(){
        const recommendations = [
          {
          'title': 'Family Guy',
          'id': 4,
          'img': 'http://cdn5.nflximg.net/webp/5815/2515815.webp'
          },
          {
          'title': 'The Croods',
          'id': 5,
          'img': 'http://cdn3.nflximg.net/webp/2353/3862353.webp'
          },
          {
          'title': 'Friends',
          'id': 6,
          'img': 'http://cdn0.nflximg.net/webp/3200/9163200.webp'
          }]
       
        this.setState({recommendations});
    }

    addItem = (item) => {
       this.props.onAddItem(item);
    }
    
  render() {
    const recommendations = this.state.recommendations.map((item, i) => {
        return (
            <div key={i} className="list-group">
                <div><strong>{item.title}</strong></div>
                <img className="image" src={item.img} alt="true"/>
                <button onClick={() => this.addItem(item)} className="btn btn-success">Add</button>
            </div>
        )
    })
    return (
      <div>
        <h2>This is Recommendation List</h2>
        {recommendations}
      </div>
    );
  }
}

export default RecommendList;
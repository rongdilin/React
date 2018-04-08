import React, { Component } from 'react';
import MyList from './MyList';
import RecommendList from './RecommendList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      mylist:[],
    };
    this.addItemParentFn = this.addItemParentFn.bind(this);
  }

  
  addItemParentFn = (item) => {
    console.log(this.state.mylist)
     this.setState((state) => {
            return {
              mylist: item
            }
          });
  }

  render() {
    return (
      <div className="App">
        <MyList passedItem={this.state.mylist} />
        <RecommendList onAddItem={this.addItemParentFn}/>
      </div>
    );
  }
}

export default App;

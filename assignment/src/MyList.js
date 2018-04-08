import React, { Component } from 'react';
import './App.css';

class MyList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            mylist: []
        };
        this.callFakeApi = this.callFakeApi.bind(this);
    }

    componentWillMount(){
        this.callFakeApi();
    }

    callFakeApi(){
        const mylist = [
            {
            'title': 'Futurama',
            'id': 1,
            'img': 'http://cdn1.nflximg.net/webp/7621/3787621.webp'
            },
            {
            'title': 'The Interview',
            'id': 2,
            'img': 'http://cdn1.nflximg.net/webp/1381/11971381.webp'
            },
            {
            'title': 'Gilmore Girls',
            'id': 3,
            'img': 'http://cdn1.nflximg.net/webp/7451/11317451.webp'
            }];
       
        this.setState({mylist});
    }

    componentWillReceiveProps(nextProps){
        this.setState((state) => {
            return {mylist: this.state.mylist.concat(nextProps.passedItem)}
        });
    }

    onRemoveItem(item){
        this.setState((state) => {
            return {mylist: this.state.mylist.filter((ele) => {
                return ele !== item;
            })}
        });
       
    }

   

  render() {
    
    const mylist = this.state.mylist.map((item, i) => {
        return (
            <div key={i} className="list-group">
                <div><strong>{item.title}</strong></div>
                <img className="image" src={item.img} alt="Item"/>
                <button onClick={() => this.onRemoveItem(item)} className="btn btn-danger">Remove</button>
            </div>
        )
    })
    return (
      <div>
        <h2>This is My List</h2>
        <div>
            {mylist}
        </div>
      </div>
    );
  }
}

export default MyList;
import React ,{Component} from 'react';
import './AddItem.css';
class AddItem extends Component{
    state={
        name:'',
        age:''
    }
    handleChange=(e)=>{
this.setState({
    [e.target.id]:e.target.value
    })
}
handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(this.state);    
    this.props.addItem(this.state);
    this.setState({ name:'',
    age:''})
   
}
 render(){
        return(
            <div>
         <form onSubmit={this.handleSubmit}>
             <input type="text" placeholder="enter your name" id="name" onChange={this.handleChange} value={this.state.name}/>
             <input type="number" placeholder="enter your age" id ="age" onChange={this.handleChange} value={this.state.age}/>
             <input type="submit" value=" add"/>
         </form>
            </div>
        )
}

}
export default AddItem

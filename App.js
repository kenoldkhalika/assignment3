//import Mycomponents from './Mycomponents';
//import reactDOM from 'react-dom';
//import React from 'react';
import React,{Component} from 'react';
import Fcomponent from './components/Note';
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      messageToBeNoted: '',
      message:[],
    }
  }
  updatingmessageToBeNoted(messageToBeNoted){
    this.setState({messageToBeNoted:messageToBeNoted.target.value})
    console.log(this.state.messageToBeNoted);
  }
  addingMessage(){
    if(this.state.messageToBeNoted===''){return false}
    let arrayMessage=this.state.message;
    arrayMessage.push(this.state.messageToBeNoted);
    this.setState({messageToBeNoted: ''})
    this.textInput.focus();
  }
   handlingkeys=(b) =>{
    if(b.key=== 'Enter'){
      let arrayMessage=this.state.message;
      arrayMessage.push(this.state.messageToBeNoted);
    this.setState({messageToBeNoted: ''})
    }
  }
erasingMessage(k){
  let arrayMessage=this.state.message;
  arrayMessage.splice(k, 1);
  this.setState({message:arrayMessage})
}
render(){
  //ppp
  let message =this.state.message.map ((val, key)=>{
   return<Fcomponent key={key} text={val}
          deleteMethod={()=>this.erasingMessage(key)}/>
  }) 

return(
    
   <div className="basin">
   <div>
   <div className="heading">APPLICATION THAT ADD UPDATES TO THE CONSOLE</div>
   <div className="subHeading">You can add your update by writing in text field and then press Enter or ADD key for the message to appear in the console<br></br>
    For the message to be deleted just right click on the message</div>
   </div>
   {message}
   <div className="button" onClick={this.addingMessage.bind(this)}>ADD</div>

   <input type="text"
   ref={((input)=>{this.textInput=input})}
   className="input"
   value={this.state.messageToBeNoted}
   onChange={messageToBeNoted=>this.updatingmessageToBeNoted(messageToBeNoted)}
   onKeyPress={this.handlingkeys.bind(this)}
   />
   </div>
    );
  }
}
export default App ;


import React,{Component} from 'react';
class Fcomponent extends Component {
render(){

return(
    <div className="text" onClick={this.props.deleteMethod}>
    {this.props.text}
    </div>
  
    );
  }
}
export default Fcomponent ;

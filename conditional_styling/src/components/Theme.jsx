import { Component } from "react";
class ThemeChange extends Component{
    constructor(){
        super();
        this.state={isThemeColor:false}
    }
    handleTheme=()=>{
    this.setState({isThemeColor:!this.state.isThemeColor})
    
    }
    
    render(){
        return(
            <div style={{backgroundColor:this.state.isThemeColor?"black":"darkcyan"}}>
                <p>changeBackground</p>

                <button onClick={()=>this.handleTheme()}>{this.state.isThemeColor? "brightcolor":"darkcolor"}</button>
            </div>
        )
    }
}
export default ThemeChange
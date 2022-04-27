import './App.css';
import React from "react";

class ButReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            name:'',
            history: [],
            buttons: ['One','Two','Three','Four','Five']
        }
        this.writeHistory1 = this.writeHistory1.bind(this)
    }
    writeHistory1(event) {
        if(this.state.history.length >= 3){
            this.state.history.shift();
            this.state.history.push(this.state.buttons[event])
        }else{
            this.state.history.push(this.state.buttons[event])
        }
        console.log(this.state.history.toString())
        let str = this.state.history.toString()
        this.setState({
            name: `${str}`
        })
    }

    render() {
        return(
            <>
                <p className='Requests'>Requests</p>
                <div>
                    <button className='buttons' onClick={()=> this.writeHistory1(0)}>{this.state.buttons[0]}</button>
                    <button className='buttons' onClick={()=> this.writeHistory1(1)}>{this.state.buttons[1]}</button>
                    <button className='buttons' onClick={()=> this.writeHistory1(2)}>{this.state.buttons[2]}</button>
                    <button className='buttons' onClick={()=> this.writeHistory1(3)}>{this.state.buttons[3]}</button>
                    <button className='buttons' onClick={()=> this.writeHistory1(4)}>{this.state.buttons[4]}</button>
                    <p className='reqHistoryTitle'>Request history</p>

                </div>
                <p className='reqHistory'>{this.state.name.replace(/,/g,' ')}</p>
            </>
        )
    }
}

export default ButReq;
import './App.css';
import React from "react";
import News from "./News";

class ButReq extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false
        }
    }


    render() {
        return(
            <>
                <p className='Requests'>The New York Times</p>
                <div>

                    <input type='text'
                           placeholder='Find news'
                           className='searchNews'
                           onChange={(ev) => console.log(ev.target.value)}
                    />
                    <button className='searchBtn' onClick={()=>this.showSearch(1)}>Srch</button>

                    <button className='reqHistoryTitle' onClick={() => {
                        this.setState((state)=>({flag: !state.flag}))
                    }}>Show News</button>


                    {this.state.flag && <News setValue={
                        (type) => {
                            this.setState({
                        name: type
                            })
                        }
                    }/>}


                </div>
            </>
        )
    }
}

export default ButReq;
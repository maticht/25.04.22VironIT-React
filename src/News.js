let count = 0;
import React from "react";
class News extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            flag: false,
            nan1:'',
            nan2:'',
            nan3:'',
            nan4:'',
            btn:'▼',
            nanBtn:'',
            nan: '',
            val: '',
            st: '',
            nanNewsTitle:'',
            history: [],
            news: [
                {
                    name:'Elon Musk Is a Typical Twitter User, Except for One Thing',
                    nanDescription: '',
                    description: 'The platform has always been the perfect place to indulge your whims. But when you’re the richest man in the world, those whims can grow significantly.'
                },{
                    name:'Ohio Senate Race Pits Trump and Son Against Big G.O.P. Group',
                    nanDescription: '',
                    description: 'The Club for Growth has lined up behind Josh Mandel. Donald J. Trump and his eldest son, Donald Jr., are backing J.D. Vance. Tuesday’s outcome will be a crucial test of the former president’s sway.'
                },{
                    name:'China’s Covid Lockdown Outrage Tests Limits of Triumphant Propaganda',
                    nanDescription: '',
                    description: 'Public anger and grief over the bungled lockdown in Shanghai is creating a credibility crisis for the country’s leader, Xi Jinping, and his zero Covid policies.'
                },{
                    name:'A Long Way Home for ‘Looted’ Art Is Getting Shorter',
                    nanDescription: '',
                    description: 'Curators at major museums are increasingly grappling with a thorny topic: restitution.'
                },{
                    name:'McCarthy Feared G.O.P. Lawmakers Put ‘People in Jeopardy’ After Jan. 6',
                    nanDescription: '',
                    description: 'New audio recordings reveal Kevin McCarthy worried that comments by his far-right colleagues could incite violence. He said he would try to rein in the lawmakers, but has instead defended them.'
                }
            ]

        }
        this.writeHistory = this.writeHistory.bind(this)
        this.replaceNews = this.replaceNews.bind(this)


    }


    writeHistory(event) {
        count +=1
        if (count % 2 === 1){

            console.log(this.state.news[event].description)
            if(event === 1){
                this.setState({
                    nan1: this.state.news[event].description
                })
            }else if(event === 2){
                this.setState({
                    nan2: this.state.news[event].description
                })
            }else if(event === 3){
                this.setState({
                    nan3: this.state.news[event].description
                })
            }else{
                this.setState({
                    nan4: this.state.news[event].description
                })
            }

        }else{
            console.log(this.state.news[event].nanDescription)
            if(event === 1){
                this.setState({
                    nan1: this.state.news[event].nanDescription
                })
            }else if(event === 2){
                this.setState({
                    nan2: this.state.news[event].nanDescription
                })
            }else if(event === 3){
                this.setState({
                    nan3: this.state.news[event].nanDescription
                })
            }else{
                this.setState({
                    nan4: this.state.news[event].nanDescription
                })
            }
        }
    }
    replaceNews(e){
        this.setState({
            news: this.state.news.reverse()
        })
    }
    // const filteredNews = this.state.news.filter(news =>{
    //     return news.name.toLowerCase().includes(value.toLowerCase())
    // })

showSearch(e){
    // this.state.news.filter(news =>{
    //         return news.name.toLowerCase().includes(value.toLowerCase())
    //     })
        let text = document.getElementsByTagName("input");
        let val = text.value;

        this.state.news.map(function(item) {
            if (item.news.name.includes(val)) {
                console.log(item.news.name);
            }
        });
}

    render() {
        return(
            <>
                <button className='reqHistoryTitle' onClick={()=>this.replaceNews(1)}>Replace News</button>


                <div>
                    <p className='newsName'>{this.state.news[0].name}</p>
                    <p className='newsDescription'>{this.state.news[0].description}</p>
                </div>
                <div>
                    <p className='newsName'>{this.state.news[1].name}</p>
                    <button className='showDescription' onClick={()=> this.writeHistory(1)}>{this.state.nan}</button>
                    <p className='newsDescription'>{this.state.nan1}</p>
                </div>
                <div>
                    <p className='newsName'>{this.state.news[2].name}</p>
                    <button className='showDescription' onClick={()=> this.writeHistory(2)}>{this.state.nan}</button>
                    <p className='newsDescription'>{this.state.nan2}</p>
                </div>
                <div>
                    <p className='newsName'>{this.state.news[3].name}</p>
                    <button className='showDescription' onClick={()=> this.writeHistory(3)}>{this.state.nan}</button>
                    <p className='newsDescription'>{this.state.nan3}</p>
                </div>
                <div>
                    <p className='newsName'>{this.state.news[4].name}</p>
                    <button className='showDescription' onClick={()=> this.writeHistory(4)}>{this.state.nan}</button>
                    <p className='newsDescription'>{this.state.nan4}</p>
                </div>

            </>
        )
    }
}
export default News;
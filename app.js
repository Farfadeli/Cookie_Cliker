// variables

let nbCookie = 0
let valueClick = 1

// class react
class CookieClick extends React.Component{

    constructor(props){
        super(props)
    }
    isClick(){
        nbCookie = nbCookie + this.props.value
        ReactDOM.render(<Score />,document.querySelector(".score"))
    }
    render(){
        return <img className="cookie" onClick={this.isClick.bind(this)} src="./images/cookie.png" alt="cookie"/>
    }

}
class Seconds extends React.Component{

    constructor(props){
        super(props)
    }

    SkillUp(){
        if(this.props.type == "click"){
            if(nbCookie >= this.props.price){
                valueClick = valueClick + this.props.more
                nbCookie -= this.props.price
                let more = this.props.more
                let lvl = this.props.lvl + 1 


                ReactDOM.render(<Score />,document.querySelector(".score"))            
                if(lvl == 10){
                    valueClick = valueClick*this.props.prct[0] + this.props.more
                    more*=this.props.prct[0]
                }
                else if(lvl == 25){
                    valueClick = valueClick*this.props.prct[1] + this.props.more*this.props.prct[1]
                    more*=this.props.prct[1]
                }
                else if(lvl == 50){
                    valueClick = valueClick*this.props.prct[2] + this.props.more*this.props.prct[2]
                    more*=this.props.prct[2]
                }
                else if(lvl == 75){
                    valueClick = valueClick*this.props.prct[3] + this.props.more*this.props.prct[3]
                    more*=this.props.prct[3]
                }
                else if(lvl == 100){
                    valueClick = valueClick*this.props.prct[4] + this.props.more*this.props.prct[4]
                    more*=this.props.prct[4]
                }
                ReactDOM.render(<Seconds name="click" price={this.props.price + this.props.ajout} type="click" more={more} ajout={10} lvl={lvl} prct={[2,2.25,2.25,2,10]}/>,document.querySelector(".amelioration"))
                ReactDOM.render(<CookieClick value={valueClick} />, document.querySelector(".main"))
                
            }
        }
    }
    render(){
        return <div>
           <div className="seconds"><h3>{this.props.name} lvl {this.props.lvl}</h3>  <button onClick={this.SkillUp.bind(this)} >Acheter <br/>{this.props.price}</button></div> 
        </div>
    }

}


const Score = () =>{
    return <h3 className="affScore">{nbCookie}</h3>
}



// Affichage

ReactDOM.render(<CookieClick value={valueClick} />, document.querySelector(".main"))
ReactDOM.render(<Score />,document.querySelector(".score"))
ReactDOM.render(<Seconds name="click" price={12} type="click" more={1} ajout={10} lvl={1} prct={[2,2.25,2.25,2,10]}/>,document.querySelector(".amelioration"))
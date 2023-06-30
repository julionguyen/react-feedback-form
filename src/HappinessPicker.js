import { Component } from "react";
import "./HappinessPicker.css"

export default class HappinessPicker extends Component {
    
    emojiScores = ['😦', '😞', '😐', '🙂', '😁']

    doUpdateNewScore = newScore => {

        let newItem = {
            type: this.props.type,
            score: newScore
        }
        this.props.updateScore(newItem)
        
    }
    render() {
        return (
            <div className="survey_box">
            <fieldset>
                <legend className="survey_name">{this.props.type}</legend>

            <div className="hp_rating_bar">
                    {this.emojiScores.map((emoji,index) => 
                        this.props.score == index ? 
                        <button key={index} 
                                className="hp_emoji_selected"                                
                        >{emoji}</button> :
                        <button key={index}
                                className="hp_emoji"
                                onClick={()=>this.doUpdateNewScore(index)}
                        >{emoji}</button>
                    )}
            </div>
            </fieldset>                    
            </div>                        
        )
    }
}
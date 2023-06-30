import { Component } from "react";
import HappinessPicker from "./HappinessPicker"
import "./FeedbackForm.css"

export default class FeedbackForm extends Component {
    state = {
        surveyItems: [
            {
                type: 'Food',
                score: 4
            },
            {
                type: 'Service',
                score: 1
            },
            {
                type: 'Value of money',
                score: 3
            }
        ]
    }

    totalScore() {
        let score = 0
        this.state.surveyItems.map((item,index)=>{
            score += item.score
        })        
        return score
    }
    doUpdateScore = (itemNew) => {
        let newSurveyItemScoreList = []
        
        this.state.surveyItems.map((item,index)=>
            item.type===itemNew.type
            ?
                newSurveyItemScoreList = [...newSurveyItemScoreList,{type: itemNew.type, score: itemNew.score}]
            :
            newSurveyItemScoreList = [...newSurveyItemScoreList,{type: item.type, score: item.score}]

        )
        
        this.setState({
            surveyItems: newSurveyItemScoreList
        })
    }    
    render() {        
        return (
            <div className="feedback_form_main">                            
                <p className="survey_title">Let us know how we did</p>
                {this.state.surveyItems.map((item,index)=>
                        <HappinessPicker key={index} 
                            type={item.type}
                            score={item.score}
                            updateScore={this.doUpdateScore}
                        />
                )}
                <p className="survey_score">Total Score: {this.totalScore()}/12</p>
            </div>
            
        )
    }
}
import React from 'react';
import { connect } from "react-redux";

class Smurf extends React.Component {
    render() {
        const { smurf,smurfList } = this.props;
        console.log(this.props)
        return(
        < > 
            {smurfList.map((element) => {
                return( <div data-testid="smurf" className="card">
                    <p>Name: {element.name}</p>
                    <p>Positoin: {element.position}</p>
                    <p>Nickname: {element.nickname}</p>
                    <p>Description: {element.description}</p>
                    </div>
                )
            })}
        </>);
    }
}

const mapStateToProps = state => {
    return{
        smurfList:state.smurfList,
    }
}

export default connect(mapStateToProps,{})(Smurf);

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
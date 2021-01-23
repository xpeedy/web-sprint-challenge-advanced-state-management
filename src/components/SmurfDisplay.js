import React from 'react';
import { fetchSmurfs } from "../actions"
import Smurf from "./Smurf";
import { connect } from 'react-redux';

export class SmurfDisplay extends React.Component {

    componentDidMount(){
        this.props.fetchSmurfs()
    } 

    render() {
        
        const { smurfList } = this.props;
        console.log(smurfList)
        
        console.log(this.props)
        return(<div>
            <Smurf />
        </div>)
    }
}

const mapStateToProps = state => {
    return{
        smurfList: state.smurfList,
        
    }
}

export default connect(mapStateToProps,{fetchSmurfs})(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
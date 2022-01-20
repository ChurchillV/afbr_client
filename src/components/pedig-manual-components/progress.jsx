import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



// export const Progress = (props) => {
//     return (
//         <div class="progress" style={{width: '90%'}}>
//             <div class="progress-bar" role="progressbar" style={{width: props.valuenow}}
//              aria-valuenow={props.valuenow} aria-valuemin="0" aria-valuemax="100">{props.valuenow}</div>
//         </div>
//     )
// }
// import React from 'react'

export class Progress extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                valuenow: '0%'
            
        }
    }

    componentDidMount = () => {
        let total = 0
        for (let value in this.props.pedigree){
            // console.log(this.props.pedigree[value].id )

            if(this.props.pedigree[value].id !=404){
               
                total += 1
             
            }
            else{
                
            }
        }
        let percent = (total/15 * 100)
        // console.log(toString(percent, '%'))
        this.setState({valuenow: Math.round(percent) + '%'},
        () => console.log(this.state))

    }

    render(){
        return (
            <div class="progress" style={{width: '90%'}}>
                <div class="progress-bar" role="progressbar" style={{width: this.state.valuenow}}
                 aria-valuenow={this.state.valuenow} aria-valuemin="0" aria-valuemax="100">{this.state.valuenow}</div>
            </div>
        )
    }
}
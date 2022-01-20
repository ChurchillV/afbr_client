import React from 'react'

class ProgressValue extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                valuenow: '5%'
            
        }
    }

    componentDidMount = () => {
        total = 0
        for (value in this.props.pedigree){
            if(this.props.pedigree.value.id !=404){
                total += 1
            }
        }
        this.setState({valuenow: toString(total) + '%'},
        () => console.log(this.state))

    }

    render()
}
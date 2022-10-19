import React, { Component } from 'react'
import styles from './style.module.css'
import axios from 'axios'

const api = {
    baseUrl: "https://api.github.com",
    client_id: "20dcfe151c0e8262",
    client_secret: "Pmik0DGVyaSywTmPeQGLnyv5uuxXABsn+iBfZMed1sQ="
}

class Contribuitors extends Component{
    constructor() {
        super()
        this.state = {
            githubData: []
        }
    }

    componentDidMount() {
        axios   
          .get(api.baseUrl + "/repos/OpenDevUFCG/roadmap-cc/contributors")
          .then((res) => { 
            this.setState({githubData: res.data.items})
            console.log("Infos api", res)
          })
        }

    render() {
        const { githubData } = this.state
        return(
            <>
                {githubData.map((icon) => (
                    <div>
                        {icon}
                    </div>

                ))}
            </>
        )

    }
}

export default Contribuitors
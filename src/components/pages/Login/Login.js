import './Login.css';
import AppInst1 from '../../../asset/images/AppInst1.png';
import AppInst2 from '../../../asset/images/AppInst2.png'
import AppInst3 from '../../../asset/images/AppInst3.png'
import AppInst4 from '../../../asset/images/AppInst4.png'

import React, { Component } from 'react';
import Form from '../../Form/Form';

const arrSrcImg = [AppInst1, AppInst2, AppInst3, AppInst4]
class Login extends Component {
    state = {imgCurrent: 0}

    componentDidMount(){
        setInterval(() => {
            let tam = this.state.imgCurrent;
            tam = tam + 1;
            if(tam == 4) {
               tam = tam - 4
            }
            console.log(tam); 
            this.setState({imgCurrent: (tam)})
        }, 2000)
    
    }
       

    render() {
        console.log("2");
        return (
            <div className="pageLogin">
                <div className="leftImageIntroduct mx-2">
                    <div className="imgActive">
                        <img src={arrSrcImg[this.state.imgCurrent]}/>
                    </div>
                </div>
                <div className="rightForm mx-2">
                    <Form/>
                </div>
            </div>
        );
    }
}

export default Login;
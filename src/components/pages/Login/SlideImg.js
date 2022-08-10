import React, { Component } from 'react'
import AppInst1 from '../../../asset/images/AppInst1.png';
import AppInst2 from '../../../asset/images/AppInst2.png'
import AppInst3 from '../../../asset/images/AppInst3.png'
import AppInst4 from '../../../asset/images/AppInst4.png'

const arrSrcImg = [AppInst1, AppInst2, AppInst3, AppInst4]
export default class SlideImg extends Component {
    state = {imgCurrent: 0}

    componentDidMount(){
        setInterval(() => {
            let tam = this.state.imgCurrent;
            tam = tam + 1;
            if(tam == 4) {
               tam = tam - 4
            }
            // console.log(tam); 
            this.setState({imgCurrent: (tam)})
        }, 2000)
    
    }
  render() {
    return (
      
        <div className="imgActive">
                        <img src={arrSrcImg[this.state.imgCurrent]}/>
                    </div> 
      
    )
  }
}

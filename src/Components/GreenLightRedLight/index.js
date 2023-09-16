import { Component } from 'react'

import {v4 as uuidv4} from 'uuid'

import GameView from '../GameView'

import './index.css'

const Timers = [
    {level:"Easy",id:uuidv4()},
    {level:"Medium",id:uuidv4()},
    {level:"Hard",id:uuidv4()}
]


class  GreenLightRedLight extends Component {

    state ={count:0,username:'',email:'',mobile:'',gameLevel:Timers}

    onGameStart = (event) =>{
        event.preventDefault()

        const {username,email,mobile}=this.state

        if (username === ''){
            alert("Enter username")
        }

        else if (email === ''){
            alert("Enter email")
        }

        else if (mobile === ''){
            alert("Enter mobile no")
        }
        




    }

    onChangeUsername= event =>{
        this.setState({username:event.target.value})
    }

    onChangeMobile= event =>{
        this.setState({mobile:event.target.value})
    }

    onChangeEmail= event =>{
        this.setState({email:event.target.value})
    }






    render(){

        const {count}=this.state

    return(
        <div className='bg-container'>
            

            <form className='form-container' onSubmit={this.onGameStart}>

                <div className='input-container'>
                    <label htmlFor='username'>Name</label>
                    <br />

                    <input placeholder='username' onChange={this.onChangeUsername} id='username' type='text' />

                </div>
                <div className='input-container'>
                    <label htmlFor='email'>Email</label>
                    <br/>

                    <input placeholder='email' onChange={this.onChangeEmail} id='email' type='text' />

                </div>
                <div className='input-container'>
                    <label htmlFor='mobile'>Mobile</label>
                    <br />

                    <input placeholder='mobile' onChange={this.onChangeMobile} id='mobile' type='text' />

                </div>               
                  <select>
                        {Timers.map(each=>(
                            <option key={each.id}>{each.level}</option>
                        ))}
                    </select>

                    <br/>              
                <div >
                    <button type='submit' className='button'>start</button>
                </div>
            </form>

            <div >
                <GameView />
            </div>
            
        </div>
        
    )

    }

}

export default GreenLightRedLight
import React from 'react';
import axios from 'axios';

class App extends React.Component{

    state ={
        address:'',
        city: '',
        state: '',
        zip: 0,
        erd: '',
        phone: 0,
        pin: 0,


    }

    handleChange = (event)=>{
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }

    submit = (event)=>{

        event.preventDefault();

        const payload = {
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            erd: this.state.erd,
            phone: this.state.phone,
            pin: this.state.pin

        }

        axios({
            url: 'http://localhost:5000/api/trips',
            method: "POST",
            data: payload

        })
        .then(()=>{
            console.log('Data has been sent to the server');
        })
        .catch(()=>{
            console.log('Internal server error')
        })
    }

    render(){
        return(
            <div>
                <h2>Welcome sucka</h2>
                
                <form onSubmit={this.submit}>
                    <div className='form-input'>
                        <input
                            type='text'
                            name='address'
                            placeholder='address'
                            value={this.state.address}
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='city'
                            placeholder='City'
                            value={this.state.city}
                            onChange={this.handleChange}
                        />
                        <input
                            type='text'
                            name='state'
                            placeholder='State'
                            value={this.state.state}
                            onChange={this.handleChange}
                        />
                        <input
                            type='integer'
                            name='zip'
                            placeholder='ZIP Code'
                            value={this.state.zip}
                            onChange={this.handleChange}
                        />
                        <input
                            type='date'
                            name='erd'
                            placeholder='Expected Return Date'
                            value={this.state.erd}
                            onChange={this.handleChange}
                        />
                        <input
                            type='integer'
                            name='phone'
                            placeholder='Phone Number'
                            value={this.state.phone}
                            onChange={this.handleChange}
                        />
                        <input
                            type='integer'
                            name='pin'
                            placeholder='PIN number'
                            value={this.state.pin}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Plan your trip!</button>
                </form>
            </div>
        )
    }
}

export default App;
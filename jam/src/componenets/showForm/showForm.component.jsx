import React from "react";
import axios from "axios";
import "./showForm.scss"
import PhoneInput from 'react-phone-number-input'
const API = process.env.REACT_APP_BACKEND_URL


class ShowForm extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            phoneNumber: "",
            name: "",
            DOB: ""
        }
    }
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    
    handleSubmit = async event => {
        event.preventDefault()
        const {email,  phoneNumber, name, DOB} = this.state

        // Under Age Detection
        const current = new Date()
        const past = new Date(DOB)
        var age = current.getFullYear() - past.getFullYear();
        const m = current.getMonth() - past.getMonth();
        if (m < 0 || (m === 0 && current.getDate() < past.getDate())) 
        {
            age--;
        }
        if(age < 18)
        {
            return alert("Minor Detected!!!")
        }

        try {
            console.log(API);
            var result = await axios.post(`${API}/user-form`, {
                email,
                phoneNumber,
                name,
                DOB
            })
            // console.log(this.state);
            console.log(result);
        } catch (error) {
            alert(error.message)
        }
    }
    render() {
        const { email, name, phoneNumber, DOB } = this.state;
        return <div className="row">
            <div>{process.env.REACT_APP_BACKEND_URL}</div>
            <div className="col-md-12">
                <form >
                    <h1>User Form</h1>

                    <fieldset>
                        <legend><span className="number">1</span> Basic Info</legend>
                        <br />

                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" value={name} onChange={this.handleChange} />

                        <label for="email">Email:</label>
                        <input type="email" id="mail" name="email" value={email} onChange={this.handleChange} />

                        <label for="phoneNumber">Phone Number:</label>
                        <input type="number" id="phNumber" name="phoneNumber" value={phoneNumber} onChange={this.handleChange} />
                        
                        <label for="DOB">Date of Birth:</label>
                        <input type="date" id="DOB" name="DOB" value={DOB} onChange={this.handleChange} />
                    </fieldset>
                    <button type="reset">Reset</button>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    }
}

export default ShowForm;
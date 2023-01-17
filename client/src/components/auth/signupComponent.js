
import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state={
            fname:'',
            lname:'',
            email:'',
            password:'',
            role:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        const { fname, lname, email, role, password } = this.state;
        console.log(fname, lname, email, role, password);
        fetch('http://localhost:5000/register', {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fname,
                lname,
                email,
                password,
                role,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data, "userRegister");
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>
                
                <div className="mb-3">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        onChange={(e) => this.setState({fname: e.target.value})}

                    />
                </div>

                <div className="mb-3">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        onChange={(e) => this.setState({lname: e.target.value})}
                    />
                </div>

                <div className="mb-3">
                    <label>Email Address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                        onChange={(e) => this.setState({email: e.target.value})}
                    />
                </div>

                <div className="mb-3">
                    <label>Role</label>
                    <select 
                        className="form-control"
                        onChange={(e) => this.setState({role: e.target.value})}
                        >
                            <option value="Admin" >Admin</option>
                            <option value="Manager" >Manager</option>
                            <option value="Employee" >Employee</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={(e) => this.setState({password: e.target.value})}
                    />
                </div>

                <div className="d-grid">
                    <button type='submit' className='btn btn-primary'>Sign Up</button>
                
                </div>
                <p className="forgot-password text-right">
                    Already registered <a href="/signin">sign in?</a>
                </p>

            </form>
        );
    }
};

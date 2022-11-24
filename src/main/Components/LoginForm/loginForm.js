import React from 'react';
import { connect } from 'react-redux';
import { Button, TextField, Paper } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import './loginForm.css';

import * as Actions from '../../Actions';

class LoginForm extends React.Component {
    state = {
        emailid: '', password: '', isEmailidValid: false, isPasswordValid: false, isAuth: false
    }

    handleEmailidValue = (e) => {
        this.setState({ emailid: e.target.value })
    }
    handlePasswordValue = (e) => {
        this.setState({ password: e.target.value })
    }
    render() {
        // localStorage.setItem("isAuth", "false");
        let loginFunction = (<div>
            <div>
                <form>
                    <Paper className="outerLoginCard" elevation={12} >
                        <div className='alignLoginCard'>
                            <h1 className='loginHeadingStyle'>Welcome to the page!!</h1>
                            <div className='loginFieldStyle'>
                                <TextField id="field1" className='emailFieldStyle' autoFocus label="Enter EmailID" variant="outlined" type='text' name='userName' value={this.state.emailid} placeholder='Enter the Emailid' onChange={this.handleEmailidValue} />
                            </div>
                            <div className='passwordFieldStyle'>
                                <TextField id="field2" className='passwordFieldStyle' label="Enter Password" variant="outlined" type='password' name='password' value={this.state.password} placeholder='Enter the Password' onChange={this.handlePasswordValue} />
                            </div>
                            <div className='buttonFieldStyle'>
                                <Button variant="contained" style={{ textAlign: 'center' }} color="primary"
                                 onClick={() => this.props.onButtonClick(this.state.emailid, this.state.password)}>
                                    Login
                    </Button>
                            </div>
                        </div>
                    </Paper>
                </form>
            </div></div>)
        return (localStorage.getItem("isAuth") === "false" || localStorage.getItem("isAuth") === null ? loginFunction : <Redirect to="/Dashboard" />)

    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        onButtonClick: (emailId, password) => dispatch(Actions.loginUserActionHandle(emailId, password))
    }
}

const mapStateToProps = (state) => {
    return {
        componentState: state
    }
}

export default connect(mapStateToProps, mapDisptachToProps)(LoginForm);
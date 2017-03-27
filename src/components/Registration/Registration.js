import React from "react";
import { connect } from "react-redux";
import { Text, Form } from "react-form";
import { userRegistration  } from "../../actions/actions";
import Recaptcha from 'react-recaptcha'

class Registration extends React.Component{
    render(){

        const { hendleSubmit } = this.props;

        return(
            <div style={ { "padding": "20px 0" } } className="registration">
                <Form onSubmit={ hendleSubmit } >
                    {
                        ({ submitForm }) => {
                            return (
                                <form onSubmit={ submitForm } >
                                    <div className="form-group">
                                        <label> Login </label>
                                        <Text field="login" type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label> Email </label>
                                        <Text field="email" type="email" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label> Password </label>
                                        <Text field="password" type="password" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Confirm Password </label>
                                        <Text field="passwordConfirm" type="password" className="form-control"/>
                                    </div>
                                    <div className="form-group text-center">
                                        <div style={{ "display" : "inline-block" }} >
                                            <Recaptcha render="explicit" onloadCallback={ () => console.log("") } sitekey="6LcKfhoUAAAAAKQWr9NmqM55vZPMjC3yiZ-1jvI3" />
                                        </div>
                                    </div>
                                    <button type='submit' className="btn btn-info btn-block">Login</button>

                                </form>
                            )
                        }
                    }

                </Form>
            </div>
        )
    }
}

const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch ) => ({
    hendleSubmit : ( value ) => ( dispatch(userRegistration(value)) )
});

Registration = connect( mapStateToProps, mapDispatchToProps )(Registration);



export default Registration;
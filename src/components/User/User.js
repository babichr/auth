import React from "react";
import  { connect } from "react-redux";
import  { authUserData } from "../../actions/actions";
class User extends React.Component{


    componentWillMount(){
        this.props.hedleRequest(this.props.params.id)
    }

    render(){



        return (
            <div className="user">
                {

                }
            </div>
        )
    }
}



const mapStateToProps = ( state ) => ({

});

const mapDispatchToProps = ( dispatch ) => ({
    hedleRequest: ( id ) => {  dispatch( authUserData( id ) ) }
});

User = connect( mapStateToProps, mapDispatchToProps )(User);

export default User;
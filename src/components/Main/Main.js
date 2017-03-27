import React from "react";
import Header from "../Header/Header";

class Main extends React.Component{
    render(){
        return(
            <div className="wrap">
                <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 col-md-offset-4">
                                {
                                    this.props.children
                                }
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
};

export default Main;
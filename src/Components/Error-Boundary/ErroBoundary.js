import React  from "react";
import { Component } from "react";
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./ErrorBoundry.Styles";

class ErrorBoundary extends Component {

constructor(props){

    super(props);

    this.state={
        hasError : false
    }
}
    static getDerivedStateFromError(error){
     console.log("this ins from error",error)

        return {hasError:true}

    }

    componentDidCatch(error, info) { 
        console.log("this is erros",error, info)
    }

    render()
   {

        if(this.state.hasError){
            return(<ErrorImageOverlay>
                <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png"/>
                <ErrorImageText>Sorry Somthing is Wrong.....</ErrorImageText>
            </ErrorImageOverlay>)
        }
        return this.props.children;
    }
}

export default ErrorBoundary
import React from "react";
import "./Home.css";
import { TopSectionOfWebsite, MiddleOfWebsite } from "../index";

export default class Home extends React.Component {
    constructor() {
        super()
    }
    
    // Sets the document title 
    componentDidMount() {
        document.title = "Home | Sweets By Maria "
    }

    render() {
        return (
            <>
            <TopSectionOfWebsite></TopSectionOfWebsite>
            <MiddleOfWebsite></MiddleOfWebsite>
            </>
        );
    }
}

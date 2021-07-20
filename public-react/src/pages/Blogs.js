import React from "react";
import Sidebar from '../components/Sidebar';


import '../App.css';

export default function Blogs() {
    return (
        <div className="Home">
            <Sidebar/>
            {/* Tinder Cards */ } 
            {/* Swipe Buttons Cards */ } 
            {/* Chat Screen */ } 
            {/* Individual Chat Screen */ } 
            <h1>Let's Build React Blogs!</h1>
        </div>
    );
}

export const BlogsID = function Blogs(props) {

    return (
        <div className="Home">
            <Sidebar/>
            {/* Tinder Cards */ } 
            {/* Swipe Buttons Cards */ } 
            {/* Chat Screen */ } 
            {/* Individual Chat Screen */ } 
            <h1>Let's Build React Blogs for Child ID: {props.match.params.id}!</h1>
        </div>
    );
}
import React,{Component} from "react";
import Cards from './Cards';
import Footer from "./Footer";
import HeroSection from "./HeroSection";
export class Home extends Component{
    render(){
        return(
            <div>
                <HeroSection/>
                <Cards/>
                <Footer/>
            </div>
        )
    }
}
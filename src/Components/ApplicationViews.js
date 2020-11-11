import React from "react"
import { Route, Switch } from "react-router-dom"
import { withRouter } from "react-router-dom"
// import { LocationProvider } from "./location/LocationProvider"
// import { AnimalProvider } from "./animal/AnimalProvider"
import { DreamerGirl } from "./dreamerGirl/DreamerGirl"
import { BabyYodaTotoro  } from "./babyYodaTotoro/BabyYodaTotoro"
import { Home } from "./home/Home"
import {FlowChartSVG} from "./chartSvg/ChartSVG"

export const ApplicationViews = (props) => {
    return (
        <>
        <Switch>
            
                <Route 
                exact
                path="/"
                render={() => {
                    return <Home/>
                }} />
                <Route 
                exact
                path="/babyyoda"
                render={() => {
                    return <BabyYodaTotoro/>
                }} />
                <Route 
                exact
                path="/dreamergirl"
                render={() => {
                    return <DreamerGirl/>
                }}>
                </Route>
                <Route 
                exact
                path="/chartsvg"
                render={() => {
                    return <FlowChartSVG/>
                }}>
                </Route>
           
            </Switch>
        </>
    )
}
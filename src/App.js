import React, {useRef, useEffect, useState} from "react";
import { Route } from "react-router-dom"
import { select } from "d3";
import "./App.css";
import { NavBar } from "./Components/navbar/NavBar"
import { ApplicationViews } from "./Components/ApplicationViews"


function App() {
  const [data, setData] = useState([25,30,45,60,20])
  const svgRef = useRef();
  // console.log(svgRef);


  useEffect(()=> {
    console.log(svgRef);
    const svg = select(svgRef.current);
    // console.log(svg.selectAll("circle").data(data))
    svg
      .selectAll("circle")
      .data(data)
      .join(
      enter => enter.append("circle"),
      update => update.attr("class", "updated"),
      exit => exit.remove()
    ).attr("r", value => value)
    .attr("cx", value => value *2)
    .attr("cy", value => value * 2)
    .attr("stroke", "red");
  }, [data])
  return (
    <React.Fragment>
      <div className="SomeMargins">
       <Route render={props => (
                <NavBar {...props} />
            )} />
      
      <h1>Hello D3 & React</h1>
      {/* <svg>
        {data.map(value => <circle r={value}></circle>)}
      </svg> */}
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={()=> setData(data.map(value => value +5))}>
        Increase data values
      </button>
      <button onClick={()=> setData(data.filter(value => value <= 35))}>
        Filter data
      </button>
      <button onClick={()=> setData(data.map(value => value -5))}>
        Decrease data
      </button>
      <ApplicationViews />
      </div>
    </React.Fragment>
  );
}

export default App;

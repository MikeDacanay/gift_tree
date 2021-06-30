import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

import Bubble from './Bubble/Bubble';

import './Bubbles.scss';

const Bubbles = props => {   

    // const retThis = (
    //     <div className="Bubbles__container">
    //         {props.bubbleScores.map((b, i)=> {
    //             return (
    //                 <Bubble
    //                     score={b.score}
    //                     idx={i}
    //                     key={b.user}
    //                     user={b.user}
    //                 />
    //             )
    //         })}
    //     </div>
    // );

    // const d3bubble = d3.pack(props.bubbleScores)
    //     .size([options.diameter, options.diameter])
    //     .padding(1.5);

    // const svg = d3.select(options.ref1.current)
    //     .append('svg')
    //     .attr('width', options.diameter)
    //     .attr('height', options.diameter)
    //     .attr('class', 'bubbles__graph')
    
    // const nodes = d3.hierarchy(props.bubbleScores)
    //     .sum(d => d.score);

    // const node = svg.selectAll('.node')
    //     .data(d3bubble(nodes).descendants())
    //     .enter()
    //     .filter(d => !d.children)
    //     .append('g')
    //     .attr('class', 'node')
    //     .attr("transform", function(d) {
    //         return "translate(" + d.x + "," + d.y + ")";
    //     });

    // const circles = [{"r": 10},
    // {"r": 10},
    // {"r": 10},
    // {"r": 20},
    // {"r": 20},
    // {"r": 20},
    // {"r": 40},
    // {"r": 40},
    // {"r": 40}];

    // circles.sort((a,b) => b.r - a.r);

    // d3.packSiblings(circles);    

    // d3.select(".Bubbles__container")
    //     .selectAll('circle.node')
    //     .data(circles)
    //     .enter()
    //     .append('circle')
    //     .classed('node', true)
    //     .attr('cx', d => {console.log(d); return d.x;})
    //     .attr('cy', d => d.y)
    //     .attr('r', d => d.r);

    //add data

    useEffect(() => {   
        const data = props.bubbleScores;
            
        

        d3.packSiblings(data);

        console.log(data);

        const svg = d3.select('.Bubbles__container')
            .append('svg');

        const graph = svg.append('g');

        d3.select(".Bubbles__container g")
            .selectAll('circle.node')
            .data(data)
            .enter()
            .append('circle')
            // .classed('node', true)
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.r);    

    },[props.bubbleScores]);

    //create graph

    const svg = d3.select('.Bubbles__container')
    .append('svg')
    .attr('width', 1060)
    .attr('height', 800);

    const graph = svg.append('g'); 
    
    //join data w/ graph

    


    const retThis = (
        <div className="Bubbles__container"></div>
    );

    return retThis;
}

const mapStateToProps = state => {
    return {
        bubbleScores: state.bubblesReducer.scores,
    }
}

export default connect(mapStateToProps, null)(Bubbles);
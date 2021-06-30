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

    const options = {
        ref1: useRef(null),
        colorScheme1: d3.scaleOrdinal(d3.schemeCategory10),
        diameter: 600,
    }

    const d3bubble = d3.pack(props.bubbleScores)
        .size([options.diameter, options.diameter])
        .padding(1.5);

    const svg = d3.select(options.ref1.current)
        .append('svg')
        .attr('width', options.diameter)
        .attr('height', options.diameter)
        .attr('class', 'bubbles__graph')
    
    const nodes = d3.hierarchy(props.bubbleScores)
        .sum(d => d.score);

    const node = svg.selectAll('.node')
        .data(d3bubble(nodes).descendants())
        .enter()
        .filter(d => !d.children)
        .append('g')
        .attr('class', 'node')
        .attr("transform", function(d) {
            return "translate(" + d.x + "," + d.y + ")";
        });

    const retThis = (
        <div className="Bubbles__container" ref={options.ref1}></div>
    );

    return retThis;
}

const mapStateToProps = state => {
    return {
        bubbleScores: state.bubblesReducer.scores,
    }
}

export default connect(mapStateToProps, null)(Bubbles);
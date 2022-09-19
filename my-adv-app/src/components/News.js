import React from 'react'
import { useLocation } from 'react-router-dom';

function News() {
    const { state } = useLocation();
    console.log(state)
  return (
    <div> <div>{state.label}</div>
    <div><img src={state.newsSrc}></img></div>
    <div>{state.text}</div></div>

  )
}

export default News
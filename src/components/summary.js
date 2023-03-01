import React from "react";
import "../style/styles.css";
import reaction from "../images/icon-reaction.svg";
import memory from "../images/icon-memory.svg" ;
import verbal from "../images/icon-verbal.svg" ;
import visual from "../images/icon-visual.svg" ;
import data from "../data/data.json";
const Summary = () => {
  return (
    <section>
      <article className="card">
        <div className="Top-side">
          <p className="title">Your Result</p>
          <div className="circle">
            <p className="circle-content">
              76
              <span className="number">of 100</span>
            </p>
          </div>
          <p className="great">
            Great
            <span className="great-span">
              You scored higher than 65% of the people who have taken these
              tests.
            </span>
          </p>
        </div>
        <div className="Bottom-side">
          <p>Summary</p>
          <div>
            <div className="Summ1">
              <div className="under-summ1">
                <img src={reaction}></img>
                <span>{data[0].category}</span>
              </div>
              <p className="score"> <span>{data[0].score}</span>  / 100 </p>
            </div>

            <div className="Summ2">
              <div className="under-summ2">
                <img src={memory}></img>
                <span>{data[1].category}</span>
              </div>
              <p className="score"> <span>{data[1].score}</span>  / 100 </p>
              
            </div>

            <div className="Summ3">
              <div className="under-summ3">
                <img src={verbal}></img>
                <span>{data[2].category}</span>
              </div>
              <p className="score"> <span>{data[2].score}</span>  / 100 </p>
            </div>

            <div className="Summ4">
              <div className="under-summ4">
                <img src={visual}></img>
                <span>{data[3].category}</span>
              </div>
              <p className="score"> <span>{data[3].score}</span>  / 100 </p>
            </div>

            
           
            
          </div>
          <button>Continue</button>
        </div>
      </article>
    </section>
  );
};

export default Summary;

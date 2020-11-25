import React from 'react'
import Carousel from 'react-elastic-carousel';
import Item from "./Item";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
const Slider = () => {
    return (
        <div>
             <h2 style={{color:"#003089", textAlign: "right", marginRight:'4rem', fontWeight:'400'}}>SOME OF OUR<br/>
             <span style={{fontWeight:'800', color:"#003089"}}>Recent Clients</span></h2>
      <div className="App" style={{backgroundColor:'#F3F7FF', paddingTop:'1rem'}}>
        <Carousel breakPoints={breakPoints}>
    
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem', backgroundColor:'#C3C3C3'}}>one</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Two</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Three</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Four</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Five</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Six</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Seven</div></Item>
          <Item><div style={{border:'1px solid black', width:'15rem', height:'08rem',backgroundColor:'#C3C3C3'}}>Eight</div></Item>
          {/* <Item><div style={{border:'1px solid black', width:'10rem', height:'05rem'}}>Two</div></Item> */}
         
        </Carousel>

      </div>
        </div>
    )
}

export default Slider

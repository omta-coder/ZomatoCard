import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Fooddata from './FoodData'
import Cards from './Cards';
import './style.css'
import Set from './Set';


const Search = () => {
    const [fdata, setFdata] = useState(Fooddata)
    const [copydata, setCopyData] = useState([]);

    const changeData = (e) =>{
      let getchangedata = e.toLowerCase();
      if(getchangedata == ""){
        setCopyData(fdata);
      }
      else{
        let storedata = copydata.filter((elem,k)=>{
          return elem.rname.toLowerCase().match(getchangedata);
        });
        setCopyData(storedata);
      }
    }

    const zomatologo = "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"

    useEffect(() => {
      setTimeout(() => {
        setCopyData(Fooddata);
    }, 3000);
    }, [])
    

  return (
    <>
    <div className="container d-flex justify-content-between align-items-center">
        <img src={zomatologo} style={{ width: "8rem", position: "relative", left: "2%", cursor: "pointer" }} alt="Logo" />
        <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3">Search Filter App</h2>
    </div>

    <Form className='d-flex justify-content-center align-items-center mt-3'>
    <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
        <Form.Control onChange={(e)=>changeData(e.target.value)} type="text" placeholder="Search Items" />
      </Form.Group>
      <button className='btn text-light col-lg-1' style={{ background: "#ed4c67" }}>Submit</button>
    </Form>

    <section className='iteam_section mt-4 container'>
    <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Bhopal Open now</h2>

    <div className="row mt-2 d-flex justify-content-around align-items-center">
      {copydata && copydata.length ?<Cards data={copydata}/> :<Set sdata={fdata}/>}
    </div>
    </section>
    </>
  )
}

export default Search
import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((elem, k) => {
        return (
          <>
            <Card  style={{ width: '22rem',border:"none" }} className="hove mb-4">
              <Card.Img variant="top" className="cd" src={elem.imgdata} />
              <div className="card_body">
                <div className="upper_data d-flex justify-content-between align-items-center">
                  <h4 className="mt-2">{elem.rname}</h4>
                  <span>{elem.rating}&nbsp;★</span>
                </div>

                <div className="lower_data d-flex  justify-content-between">
                  <h5>{elem.address}</h5>
                  <span>{elem.price}</span>
                </div>

                <div className="extra"></div>

                <div className="last_data d-flex justify-content-between align-items-center">
                    <img src={elem.arrimg} className="limg" alt="" />
                    <p>{elem.somedata}</p>
                    <img src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png?output-format=webp" className="laimg" alt="" />
                </div>


              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;

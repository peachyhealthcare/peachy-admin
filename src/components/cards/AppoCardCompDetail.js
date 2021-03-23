import React from 'react';
import { Link } from 'react-router-dom';

const UserCardDetail = ({
  fullName,
  match,
  dn,
  dt,
  dp,
  da,
  pn,
  pa,
  pp,
  pl,
  location,
  time,
}) => {
  return (
    <>
      <h3>Doctor</h3>
      <div className="docListComp lol">
        <div className="left">
          {/* <div className="dlcImage">
          <img src="/assets/img/doctor.png" alt="Doctor" />
        </div> */}

          <p>{dn}</p>
        </div>
        <div className="middle">
          <p>{dt}</p>
          <p>{dp}</p>
          <p>{da}</p>
        </div>
        {/* <div className="right">
        <img src="/assets/img/iconX.png" alt="x" />
        <Link to={`/app/doctors/request`}>
          <button className="positive">APPROVE</button>
        </Link>
      </div> */}
      </div>
      <h3 className="mt-4">Patient</h3>
      <div className="docListComp lol">
        <div className="left">
          <p>{pn}</p>
        </div>
        <div className="middle">
          <p>{pa}</p>
          <p>{pp}</p>
          <p>{pl}</p>
        </div>
      </div>
      <h3 className="mt-4">Details</h3>
      <div className="docListComp lol">
        <div className="left">
          {/* <p>{time}</p> */}
          <p>{location}</p>
        </div>
        <div className="middle">
          <p>Price: £60</p>
          <p>type: REGULAR</p>
          <p>Booking fee: £8.5</p>
        </div>
      </div>
    </>
  );
};

export default React.memo(UserCardDetail);

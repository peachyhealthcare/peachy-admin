import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import PharmacyPrescription from './pharmacyPrescription';

const AppointmentCard = ({
  fullName,
  match,
  zero,
  one,
  two,
  three,
  four,
  pr,
  dn,
  dt,
  dp,
  da,
  pp,
  pa,
  pl,
}) => {
  const [modalLarge, setModalLarge] = useState(false);

  return (
    <div className={`docListComp ${pr}`} onClick={() => setModalLarge(true)}>
      <div className="left">
        <p>{zero}</p>
      </div>
      <div className="middle">
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
      </div>
      <div className="right">
        {/* <Link to={`/app/doctors/request`}> */}
        <button className="positive" onClick={() => setModalLarge(true)}>
          {four}
        </button>
        {/* </Link> */}
      </div>
      <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <ModalHeader>{zero}</ModalHeader>
        <ModalBody>
          <div className="flexColl">
            <div>
              <p className="text-muted text-small mb-2">Pharmacy Name</p>
              <p className="mb-3">{zero}</p>
              <p className="text-muted text-small mb-2">Address</p>
              <p className="mb-3">{one}</p>
              <p className="text-muted text-small mb-2">Phone number</p>
              <p className="mb-3">{two}</p>
              <p className="text-muted text-small mb-2">Email Address</p>
              <p className="mb-3">{three}</p>
              <p className="text-muted text-small mb-2">NHS Email address</p>
              <p className="mb-3">Lorem ipsum{}</p>
              <p className="text-muted text-small mb-2">GPHC number</p>
              <p className="mb-3">123456789{}</p>
              <p className="text-muted text-small mb-2">Superintendent Name</p>
              <p className="mb-3">Lorem ipsum{}</p>
              <p className="text-muted text-small mb-2">Consultation Rooms</p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="text-muted text-small mb-2">
                Average rental charge for room per day
              </p>
              <p className="mb-3">30 GBP/hour</p>
              <p className="text-muted text-small mb-2">Opening hours</p>
              <p className="mb-3">9:00 AM</p>
            </div>
            <div>
              <div>
                <PharmacyPrescription />
                <PharmacyPrescription />
                <PharmacyPrescription />
                <PharmacyPrescription />
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
      {/* <Modal
        isOpen={modalLarge}
        size="lg"
        toggle={() => setModalLarge(!modalLarge)}
      >
        <ModalHeader>{zero}</ModalHeader>
        <ModalBody>
          <AppoCardCompDetail
            pn={one}
            pp={pp}
            pa={pa}
            pl={pl}
            location={two}
            typePrice={three}
            time={zero}
            dn={dn}
            dp={dp}
            da={da}
            dt={dt}
          />
        </ModalBody>
      </Modal> */}
    </div>
  );
};

export default React.memo(AppointmentCard);

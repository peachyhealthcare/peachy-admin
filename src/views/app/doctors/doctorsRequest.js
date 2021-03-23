import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import UserCardCompDetail from '../../../components/cards/UserCardCompDetail';

const DoctorsRequest = ({ match }) => (
  <>
    {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.DoctorsRequest" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h3>Health care professionals</h3>
        <Separator className="mb-5" />
        <div className="docContainerDetails">
          <UserCardCompDetail />
          <div className="docFull">
            <h3>Bio</h3>
            <p>
              Dr. Lina Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="docHalfConts">
              <div className="leftHalf">
                <h3>Contact details</h3>
                <p>+44 123 123 123</p>
                <p>linamatthew@gmail.com</p>
                <p>Paddington Street 46, London, UK</p>
                <h3>Rates</h3>
                <p>65 GBP/hour</p>
              </div>
              <div className="rightHalf">
                <div>
                  <img src="/assets/img/dr-divinity.png" />
                </div>
                <div>
                  <img src="/assets/img/dr-divinity.png" />
                </div>
                <div>
                  <img src="/assets/img/dr-divinity.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Colxx>
    </Row>
  </>
);
export default DoctorsRequest;

import React, { useState } from 'react';
import {
  Row,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  TabContent,
  TabPane,
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';

import AppointmentCard from '../../../components/cards/PharmacyCard';

import { NavLink } from 'react-router-dom';

import classnames from 'classnames';

const noAppointments = () => (
  <div className="appointments mb-4">
    <div className="noAppo">
      <img src="/assets/img/logo-white.png" />
      <h2>You don’t have any appointens yet.</h2>
      <button className="positive">BOOK NOW</button>
    </div>
  </div>
);

const Appointments = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h3>
          {/* <IntlMessages id="menu.dashboard" /> */}
          Ordinations
        </h3>
        <Separator className="mb-5" />
        {/* {TabCardExamples()} */}
        {/* {noAppointments()} */}

        <div className="appointments mb-4">
          <AppointmentCard
            zero="Peace Pharmacy"
            one="14 The Broadway, Wembley"
            two="020 8904 2071"
            three="pharmacy@peace.com"
            four="VIEW APPOINTMENT"
            pr="privremeno"
          />
          <AppointmentCard
            zero="Egerton Pharmacy"
            one="147 Holloway Road, London"
            two="020 7871 1815"
            three="pharmacy@egerton.com"
            four="VIEW APPOINTMENT"
            pr="privremeno"
          />
          <AppointmentCard
            zero="Watsons Pharmacy"
            one="1 Frith St, London"
            two="020 7437 2270"
            three="pharmacy@watsons.com"
            four="VIEW APPOINTMENT"
            pr="privremeno"
          />
        </div>
      </Colxx>
    </Row>
  </>
);

const TabCardExamples = () => {
  const [activeSecondTab, setActiveSecondTab] = useState('1');

  return (
    <Row>
      <Colxx>
        <Card className="mb-4">
          <CardHeader className="pl-0 pr-0">
            <Nav tabs className=" card-header-tabs  ml-0 mr-0">
              <NavItem className="w-50 text-center">
                <NavLink
                  to="#"
                  location={{}}
                  className={classnames({
                    active: activeSecondTab === '1',
                    'nav-link': true,
                  })}
                  onClick={() => {
                    setActiveSecondTab('1');
                  }}
                >
                  Upcomming
                </NavLink>
              </NavItem>
              <NavItem className="w-50 text-center">
                <NavLink
                  to="#"
                  location={{}}
                  className={classnames({
                    active: activeSecondTab === '2',
                    'nav-link': true,
                  })}
                  onClick={() => {
                    setActiveSecondTab('2');
                  }}
                >
                  Past
                </NavLink>
              </NavItem>
            </Nav>
          </CardHeader>

          <TabContent activeTab={activeSecondTab}>
            <TabPane tabId="1">
              <Row>
                <Colxx sm="12">
                  <CardBody>
                    <div className="appointmentsTabs mb-4">
                      <AppointmentCard
                        zero="August 27, 2020 10:20 PM"
                        one="Kelly D Johnson"
                        two="velma@hotmail.com

                        "
                        three="60"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />
                      <AppointmentCard
                        zero="December 19, 2020 10:20 PM"
                        one="Warren D Hunt"
                        two="zachery@hotmail.com

                        "
                        three="45"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />
                      <AppointmentCard
                        zero="November 7, 2020 10:20 PM"
                        one="Cody L Perez"
                        two="brennan@hotmail.com

                        "
                        three="55"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />
                      <AppointmentCard
                        zero="November 3, 2020 10:20 PM"
                        one="Rob M Burke

                        "
                        two="verner@hotmail.com

                        "
                        three="30"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />{' '}
                      <AppointmentCard
                        zero="November 15, 2020 10:20 PM"
                        one="Jeremy D Foster

                        "
                        two="teie2004@hotmail.com

                      "
                        three="40"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />
                    </div>
                  </CardBody>
                </Colxx>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Colxx sm="12">
                  <CardBody>
                    <div className="appointmentsTabs mb-4">
                      <AppointmentCard
                        zero="June 18, 2020 10:20 PM"
                        one="Joel L Aliff



                        "
                        two="markus@hotmail.com

                        "
                        three="50"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />{' '}
                      <AppointmentCard
                        zero="November 18, 2020 10:20 PM"
                        one="Alfredo R Benner

                        "
                        two="raoul@hotmail.com

                      "
                        three="60"
                        four="VIEW APPOINTMENT"
                        pr="privremeno"
                      />
                    </div>
                  </CardBody>
                </Colxx>
              </Row>
            </TabPane>
          </TabContent>
        </Card>
      </Colxx>
    </Row>
  );
};

export default Appointments;

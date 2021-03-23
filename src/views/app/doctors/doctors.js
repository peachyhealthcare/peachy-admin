import React, { useState } from 'react';

import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import UserCardComp from '../../../components/cards/UserCardComp';

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

import { NavLink } from 'react-router-dom';

import classnames from 'classnames';

const Second = ({ match }) => {
  const [activeSecondTab, setActiveSecondTab] = useState('1');
  return (
    <>
      {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.second" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}

      <Row>
        <Colxx xxs="12" className="mb-4">
          <h3>Health care professionals</h3>
          <Separator className="mb-5" />
          {/* <div className="docContainer"> */}
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
                        Join Requests
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
                        Approved HCP
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
                            <UserCardComp
                              match={match}
                              pic="/assets/img/user/75 (1).jpg"
                              dl="/assets/img/drivers.jpg"
                              zero="Dr. Lina Matthew"
                              one="Dermatologists                              "
                              two="077 5946 1330"
                              three="76  Vicar Lane"
                              four="VIEW REQUEST"
                              email="matthew@gmail.com"
                              price1="65"
                              price2="55"
                            />
                            <UserCardComp
                              match={match}
                              pic="/assets/img/user/61.jpg"
                              dl="/assets/img/drivers.jpg"
                              zero="Dr. Eleanor B Summers"
                              one="Endocrinologists"
                              two="078 2418 5883"
                              three="105  Southern Way"
                              four="VIEW REQUEST"
                              email="summers@gmail.com"
                              price1="55"
                              price2="30"
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
                            <UserCardComp
                              match={match}
                              pic="/assets/img/user/26.jpg"
                              zero="Dr. Lisa Spencer"
                              one="Gastroenterologist"
                              two="(873)-777-6781"
                              three="2401 W 6th St"
                              four="VIEW DETAILS"
                              email="spencer@gmail.com"
                              price1="60"
                              price2="30"
                            />
                            <UserCardComp
                              match={match}
                              pic="/assets/img/user/81.jpg"
                              zero="Isabella D Swift"
                              one="Cardiologist"
                              two="078 6751 0261"
                              three="103  Dover Road"
                              four="VIEW DETAILS"
                              email="swift@gmail.com"
                              price1="55"
                              price2="40"
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
          {/* </div> */}
        </Colxx>
      </Row>
    </>
  );
};

export default Second;

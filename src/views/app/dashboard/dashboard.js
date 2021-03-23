import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import IconCard from '../../../components/cards/IconCard';
import GlideComponent from '../../../components/carousel/GlideComponent';
import SalesChartCard from './SalesChartCard';

const Dashboard = ({ match }) => (
  <>
    {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.start" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h3>
          {/* <IntlMessages id="menu.dashboard" /> */}
          Dashboard
        </h3>
        <Separator className="mb-5" />
        <div className="dashMain">
          <div className="dashMainLeft">
            <div className="dashLeft">
              <IconCard value="200" title="HCP" icon="iconsminds-stethoscope" />
              <IconCard
                value="1314"
                title="Patients"
                icon="iconsminds-address-book-2"
              />
              <IconCard
                value="1456"
                title="Appointments"
                icon="iconsminds-calendar-4"
              />
              <IconCard
                value="56"
                title="Ordinations"
                icon="iconsminds-clinic"
              />
            </div>
            {/* <div className="dashContainer mb-4"> */}
            <Row>
              <Colxx xxs="12" className="mb-4">
                <SalesChartCard />
              </Colxx>
            </Row>
            {/* </div> */}
          </div>
          <div className="dashRight mb-4">
            <div className="activityComp">
              <h3>Activity</h3>
              <div>
                <p>Dr Lina booked ordination</p>
              </div>
              <div>
                <p>New virtual consultation booked with Dr. Any Smith</p>
              </div>
              <div>
                <p>Dr Errington new doctor join request</p>
              </div>
              <div>
                <p>New regular appointment booked with Dr. Lina Matthew</p>
              </div>
              <div>
                <p>New regular appointment booked with Dr. Smith</p>
              </div>
              <div>
                <p>Dr Nuttan new doctor join request</p>
              </div>
              <div>
                <p>New virtual consultation booked with Dr. Smith</p>
              </div>
              <div>
                <p>Patient Marie K. booked with Dr. Kruger</p>
              </div>
            </div>
          </div>
        </div>
      </Colxx>
    </Row>
  </>
);
export default Dashboard;

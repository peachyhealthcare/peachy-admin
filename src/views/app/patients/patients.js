import React from 'react';
import { Row } from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import UserCardComp from '../../../components/cards/UserCardComp2';

const Patients = ({ match }) => (
  <>
    {/* <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.second" match={match} />
        <Separator className="mb-5" />
      </Colxx>
    </Row> */}
    <Row>
      <Colxx xxs="12" className="mb-4">
        <h3>Patients</h3>
        <Separator className="mb-5" />
        <div className="docContainer">
          {/* <div className="contHead">
            <p>Join Requests </p> <p>|</p> <p> Approved Doctors</p>
          </div> */}
          <UserCardComp
            pic="/assets/img/user/4.jpg"
            match={match}
            zero="Becky Williams"
            one="williams@example.com"
            two="+44 123 123 123"
            three="6512 Fairview St"
            pr="privremeno"
            a1When="August 27, 2020 10:20 PM"
            a1Doctor="Dr. Lina Matthew"
            a1Type="Video"

            // four="VIEW REQUEST"
          />
          <UserCardComp
            pic="/assets/img/user/43.jpg"
            match={match}
            zero="Michael Garrett

            "
            one="michael@example.com

            "
            two="(455)-209-6635

            "
            three="5748 W Campbell Ave

            "
            // four="VIEW REQUEST"
            pr="privremeno"
            a1When="Dec 15, 2020 11:00 AM"
            a1Doctor="Dr. Eleanor B Summers

            "
            a1Type="Regular"
          />
          <UserCardComp
            pic="/assets/img/user/1.jpg"
            match={match}
            zero="Floyd Berry

            "
            one="berry@example.com

            "
            two="(762)-655-3578

            "
            three="2505 Railroad St

            "
            // four="VIEW REQUEST"
            pr="privremeno"
            a1When="Nov 10, 2020 12:00 AM"
            a1Doctor="Dr. Lisa Spencer

            "
            a1Type="Regular"
          />
          <UserCardComp
            pic="/assets/img/user/95.jpg"
            match={match}
            zero="William Steeves"
            one="william@example.com



            "
            two="(662)-126-9964



            "
            three="60 Groveland Terrace



            "
            // four="VIEW REQUEST"
            pr="privremeno"
            a1When="Nov 23, 2020 9:00 AM"
            a1Doctor="Isabella D Swift



            "
            a1Type="Regular"
          />
          <UserCardComp
            pic="/assets/img/user/92.jpg"
            match={match}
            zero="Justin Castro

            "
            one="castro@example.com

            "
            two="(610)-352-9486

            "
            three="8363 Miller Ave

            "
            // four="VIEW REQUEST"
            pr="privremeno"
            a1When="Nov 10, 2020 12:00 AM"
            a1Doctor="Dr. Lisa Spencer

            "
            a1Type="Regular"
          />
          <UserCardComp
            pic="/assets/img/user/69.jpg"
            match={match}
            zero="Samantha Berry

            "
            one="sam@example.com

            "
            two="(762)-655-3556

            "
            three="2505 Railroad St

            "
            // four="VIEW REQUEST"
            pr="privremeno"
            a1When="Nov 23, 2020 9:00 AM"
            a1Doctor="Isabella D Swift



            "
            a1Type="Regular"
          />
        </div>
      </Colxx>
    </Row>
  </>
);
export default Patients;

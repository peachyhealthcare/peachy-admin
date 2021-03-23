import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import { ThemeColors } from '../../../helpers/ThemeColors';

import { LineChart } from '../../../components/charts';
const colors = ThemeColors();

const SalesChartCard = () => {
  const lineChartData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: '',
        data: [240, 703, 600, 350, 500, 480, 800, 203, 600, 905],
        borderColor: colors.themeColor1,
        pointBackgroundColor: colors.foregroundColor,
        pointBorderColor: colors.themeColor1,
        pointHoverBackgroundColor: colors.themeColor1,
        pointHoverBorderColor: colors.foregroundColor,
        pointRadius: 10,
        pointBorderWidth: 2,
        pointHoverRadius: 8,
        fill: false,
      },
    ],
  };
  return (
    <Card>
      {/* <div className="position-absolute card-top-buttons">
        <UncontrolledDropdown>
          <DropdownToggle color="" className="btn btn-header-light icon-button">
            <i className="simple-icon-refresh" />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <p>Regular Appointments</p>
            </DropdownItem>
            <DropdownItem>
              <p>Video Appointments</p>
            </DropdownItem>
            <DropdownItem>
              <p>Admin Earnings</p>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div> */}
      <CardBody>
        <CardTitle>
          <h3>Earnings</h3>
        </CardTitle>
        <div className="dashboard-line-chart">
          <LineChart shadow data={lineChartData} />
        </div>
      </CardBody>
    </Card>
  );
};

export default SalesChartCard;

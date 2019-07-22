import React from 'react';
import Btn from './btn';
import Breakfast from './breakfast';
import Lunch from './lunch';

class Waitress extends React.Component {

  render() {
    return (
      <>
        <div className="row">
          <div className="col col-md-4 float-md-none m-3">
            <Btn name="MENÚ DESAYUNO" />
          </div>

          <div className="col col-md-4 float-md-none m-3">
            <Btn name="MENÚ ALMUERZO" />
          </div>

          <div className="col col-md-4 float-md-none m-3">
            <Breakfast />
          </div>

          <div className="col col-md-4 float-md-none m-3">
            <Lunch />
          </div>
        </div>
      </>
    )
  }
}


export default Waitress;
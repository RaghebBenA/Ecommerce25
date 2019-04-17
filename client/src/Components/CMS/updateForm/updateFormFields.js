import FIELDS from "../formFields";
import _ from "lodash"

export default (car, arr) => {
    function form(value, label, name) {
      this.name = name;
      this.value = value;
      this.label = label;
    }
  
    const Label = _.map(FIELDS, ({ label }) => {
      return Object.values({ label });
    });
    const name = _.map(FIELDS, ({ name }) => {
      return Object.values({ name });
    });
    const value = _.map(car, (arr) => {
      return arr;
    });
    let arr1d1 = _.flatten(Label);
    let arr1d2 = _.flatten(value);
    let arr1d3 = _.flatten(name);
    let Carname = new form(arr1d2[1], arr1d1[0], arr1d3[0]);
    let Carnmaker = new form(arr1d2[2], arr1d1[1], arr1d3[1]);
    let Carimage = new form(arr1d2[3], arr1d1[2], arr1d3[2]);
    let Carprice = new form(arr1d2[4], arr1d1[3], arr1d3[3]);
    let Carvin = new form(arr1d2[0], arr1d1[4], arr1d3[4]);
    arr.push(Carname, Carnmaker, Carimage, Carprice, Carvin);
    return arr;
  };


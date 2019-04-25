import React,{useEffect} from "react";
import {connect} from "react-redux"
import {fetchPurchase} from "../../redux/actions"

const PurchaseDashboard = ({fetchPurchase,purchase}) => {
     useEffect(()=>{
         fetchPurchase()
     },[])
  return <div style={{ color: "white" }}>PurchaseList</div>;
};

const mapStateToProps = ({purchase}) => ({purchase})

export default  connect(mapStateToProps,{fetchPurchase})(PurchaseDashboard);

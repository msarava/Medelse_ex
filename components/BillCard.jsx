import React from 'react';
import ArrowButton from './ArrowButton';
import PaiementStatus from './PaiementStatus';
import '../styles/BillCard.css';

function BillCard({ billDatas }) {
  return (
    <div>
      <div>BillCard details 1 {billDatas.details1}</div>
      <PaiementStatus status={billDatas.status} />
      <ArrowButton props={ArrowButtonProps} />
      <div>BillCard details 2 {billDatas.details2}</div>
    </div>
  );
}

export default BillCard;

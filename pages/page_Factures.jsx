import React from 'react';
import BillCard from '../components/BillCard';
import './styles/BillPage.css';

function page_Factures({ billsDatas }) {
  return (
    <div>
      {billsDatas.map((bill) => (
        <BillCard billData={bill.datas} />
      ))}
    </div>
  );
}

export default page_Factures;

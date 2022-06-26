import React from 'react'

function PaiementStatus({status}) {
  return (
    <div className={paiement`${status}`}>Paiement {status}</div>
  )
}

export default PaiementStatus
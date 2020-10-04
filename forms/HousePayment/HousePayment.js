function houseLoanPayment15(p,r) {
    return (p * (r*((1+r)**180))/(((1+r)**180)-1))
}

function houseLoanPayment30(p,r) {
    return (p * (r*((1+r)**360))/(((1+r)**360)-1))
}

btn15years.onclick=function calcHouseLoanPayment15(){
  let principleValue = inptPrinciple1.value
  let monthlyInterest = inptMonthlyInterest1.value
  let housePayment15 =  houseLoanPayment15(Number(principleValue),Number(monthlyInterest))
  lblAnswer1.hidden = false
  lblAnswer1.textContent = ("A home loan for $ " + principleValue + " over 15 years at " + monthlyInterest +
  " % would have a monthly payment of $ " + housePayment15)
}


btn30years.onclick=function calcHouseLoanPayment30(){
  let principleValue = inptPrinciple1.value
  let monthlyInterest = inptMonthlyInterest1.value
  let housePayment30 =  houseLoanPayment30(Number(principleValue),Number(monthlyInterest))
  lblAnswer1.hidden = false
  lblAnswer1.textContent = ("A home loan for $ " + principleValue + " over 30 years at " + monthlyInterest +
  " % would have a monthly payment of $ " + housePayment30)
}



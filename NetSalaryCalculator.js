// Tax rates
// KRA tax brackets and rates (monthly)
const taxBrackets = [
    {lower:0,upper:12298,rate:10},
    {lower:12299,upper:23885,rate:15},
    {lower:23886,upper:35472,rate:20},
    {lower:35473,upper:47059,rate:25},
    {lower:47060,upper:Infinity,rate:30},

]
//NHIF rates(monthly)
const nhifRates = [
    {lower:0,upper:5999,amount:150},
    {lower:15000,upper:19999,amount:600},
    {lower:20000,upper:24999,amount:750},
    {lower:25000,upper:29999,amount:850},
    {lower:30000,upper:34999,amount:900},
    {lower:35000,upper:39999,amount:950},
    {lower:40000,upper:44999,amount:1000},
    {lower:45000,upper:49999,amount:1100},
    {lower:50000,upper:59999,amount:1200},
    {lower:60000,upper:69999,amount:1300},
    {lower:70000,upper:79999,amount:1400},
    {lower:80000,upper:89999,amount:1500},
    {lower:90000,upper:99999,amount:1600},
    {lower:10000,upper:Infinity,amount:1700},
];
//NSSF rates (monthly)
const nssfRateEmployee = 0.06; //6% of gross salary
const nssfRateEmployer = 0.06; //6% of gross salary
function calculateTax(grossSalary){
    let tax = 0;
    for(const bracket of taxBrackets){
        if (grossSalary <= bracket.lower){
            break;
        }
        const taxableAmount = Math.min(grossSalary,bracket.upper)-bracket.lower; tax += taxableAmount*(bracket.rate/100);

    }
    return tax;

}
function calculateNhif(grossSalary){
    let nhif = 0;
    for (const bracket of nhifRates){
        if(grossSalary <= bracket.lower){
            break;
        }
        if(grossSalary <= bracket.upper){
            nhif = bracket.amount;
            break;
        }
    }
    return nhif;
}
function calculateNssf(grossSalary){
    const nssfEmployee = grossSalary * nssfRateEmployee;
    const nssfEmployer = grossSalary * nssfRateEmployer;
    return{nssfEmployee, nssfEmployer};
}
function calculateNetSalary(basicSalary,benefits){
    const grossSalary = basicSalary+benefits;
    const tax = calculateTax(grossSalary);
    const nhif = calculateNhif(grossSalary);
    const {nssfEmployee} = calculateNssf(grossSalary);
    const netSalary = grossSalary-tax-nhif-nssfEmployee;

    return{netSalary,tax,nhif,nssfEmployee,grossSalary};
}

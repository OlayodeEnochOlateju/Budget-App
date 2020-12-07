let yorHa = [];
class BudgetframeWork {
    customerName = "null"
    day = "null"
    budget = 0;
    expensesAndDesc = [];
}
class Expenses {
    exadrTime = "null";
    expAmount = 0;
    desc = "null";
    benTag = "null";
    statusdr = "null";
}
class Creditor {
    exacrTime = "null";
    creAmount = 0;
    descCr = "null";
    CreTagCr = "null";
    statuscr = "null";
}
let budgetGroup;
if (localStorage.getItem('newBudget') != null) {
    budgetGroup = JSON.parse(localStorage.newBudget)
} else {
    budgetGroup = []
}
let myBudget;
let myExp;
const acceptor = () => {
    myBudget = new BudgetframeWork;
    myBudget.customerName = document.getElementById('nameBTag').value;
    myBudget.day = document.getElementById('daytag').value;
    myBudget.budget = document.getElementById('budgettag').value;
    budgetGroup.push(myBudget);
    localStorage.setItem("newBudget", JSON.stringify(budgetGroup))
}
let d = new Date();
let p = 0;
let s = 0;
let q = 0;
let r = 0;
let j;
let i;
let k;
const updator = () => {
    j = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    myExp = new Expenses;
    budgetGroup = JSON.parse(localStorage.getItem('newBudget'));
    i = budgetGroup.length - 1
    myExp.expAmount = document.getElementById('expAmounttag').value;
    myExp.desc = document.getElementById('Desctag').value;
    myExp.benTag = document.getElementById('BenefTag').value
    myExp.statusdr = 'Debit';
    myExp.exadrTime = j;
    if (p, s == 0) {
        s = budgetGroup[i].budget;
        p = budgetGroup[i].budget - myExp.expAmount;
        q = p / s;
        r = q * 100;
    } else if (p != 0) {
        p = budgetGroup[i].budget - myExp.expAmount;
        q = p / s;
        r = q * 100;
    }
    budgetGroup[i].budget -= myExp.expAmount;
    budgetGroup[i].expensesAndDesc.push(myExp);
    k = budgetGroup[i].expensesAndDesc.length - 1;
    if (r <= 0) {
        document.getElementById('longer').style = `width:100%;  border-radius: 50px; background-color: rgb(255, 0, 0)!important;`
    } else if (r < 50) {
        document.getElementById('longer').style = `width:${r}%;  border-radius: 50px; background-color:rgb(255, 208, 0)!important;`
    } else if (r < 20) {
        document.getElementById('longer').style = `width:${r}%;  border-radius: 50px; background-color:rgb(255, 0, 0)!important;`
    } else {
        document.getElementById('longer').style = `width:${r}%;  border-radius: 50px;`
    }
    document.getElementById('budgetSpace').innerHTML = `₦${budgetGroup[i].budget}`;
    document.getElementById('timeStamp').innerHTML = `<div>Time</div>`
    document.getElementById('amountStamp').innerHTML = `<div>Amount</div>`
    document.getElementById('statusStamp').innerHTML = `<div>Status</div>`
    document.getElementById('descriStamp').innerHTML = `<div>Description</div>`
    document.getElementById('benefStamp').innerHTML = `<div>Beneficiaries</div>`
    for (let m = k; m < budgetGroup[i].expensesAndDesc.length; m--) {
        document.getElementById('timeStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].exadrTime}</div>`
        document.getElementById('amountStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">₦${budgetGroup[i].expensesAndDesc[m].expAmount}</div>`
        document.getElementById('statusStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].statusdr}</div>`
        document.getElementById('descriStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].desc}</div>`
        document.getElementById('benefStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px;">${budgetGroup[i].expensesAndDesc[m].benTag}</div>`
        if (m == 0) {
            break;
        }
    }
    localStorage.setItem("newBudget", JSON.stringify(budgetGroup));
    localStorage.setItem('percent', r)
}
const updatorCr = () => {
    j = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    myExp = new Expenses;
    budgetGroup = JSON.parse(localStorage.getItem('newBudget'));
    i = budgetGroup.length - 1
    myExp.expAmount = document.getElementById('expAmounttagg').value;
    myExp.desc = document.getElementById('Desctagg').value;
    myExp.benTag = document.getElementById('BenefTagg').value
    myExp.statusdr = 'Credit';
    myExp.exadrTime = j;
    budgetGroup[i].expensesAndDesc.push(myExp);
    k = budgetGroup[i].expensesAndDesc.length - 1;
    document.getElementById('budgetSpace').innerHTML = `₦${budgetGroup[i].budget}`;
    document.getElementById('timeStamp').innerHTML = `<div>Time</div>`
    document.getElementById('amountStamp').innerHTML = `<div>Amount</div>`
    document.getElementById('statusStamp').innerHTML = `<div>Status</div>`
    document.getElementById('descriStamp').innerHTML = `<div>Description</div>`
    document.getElementById('benefStamp').innerHTML = `<div>Beneficiaries</div>`
    if (dayofDate.innerHTML == '') {
        document.getElementById('dayofDate').innerHTML = `${myExp.expAmount}`
        console.log(dayofDate.value)
    } else {
        document.getElementById('dayofDate').value = `${dayofDate.value + myExp.expAmount}`
    }
    for (let m = k; m < budgetGroup[i].expensesAndDesc.length; m--) {
        document.getElementById('timeStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].exadrTime}</div>`
        document.getElementById('amountStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">₦${budgetGroup[i].expensesAndDesc[m].expAmount}</div>`
        document.getElementById('statusStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].statusdr}</div>`
        document.getElementById('descriStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].desc}</div>`
        document.getElementById('benefStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px;">${budgetGroup[i].expensesAndDesc[m].benTag}</div>`
        if (m == 0) {
            break;
        }
    }
    localStorage.setItem("newBudget", JSON.stringify(budgetGroup));
    localStorage.setItem('percent', r)
}
const displaystats = () => {
    r = localStorage.getItem('percent')
    budgetGroup = JSON.parse(localStorage.getItem("newBudget"));
    i = budgetGroup.length - 1;
    k = budgetGroup[i].expensesAndDesc.length - 1;
    document.getElementById('nameSpace').innerHTML = `Welcome<br>${budgetGroup[i].customerName}!`;
    document.getElementById('budgetSpace').innerHTML = `₦${budgetGroup[i].budget}`;
    if (r <= 0) {
        document.getElementById('longer').style = `width:100%;  border-radius: 50px; bacground-color:red;`
    } else if (r < 50) {
        document.getElementById('longer').style = `width:${r}%;  border-radius: 50px; background-color:rgb(255, 208, 0)!important;`
    } else {
        document.getElementById('longer').style = `width:${r}%;  border-radius: 50px;`
    }
    document.getElementById('timeStamp').innerHTML = `<div>Time</div>`
    document.getElementById('amountStamp').innerHTML = `<div>Amount</div>`
    document.getElementById('statusStamp').innerHTML = `<div>Status</div>`
    document.getElementById('descriStamp').innerHTML = `<div>Description</div>`
    document.getElementById('benefStamp').innerHTML = `<div>Beneficiaries</div>`
    for (let m = k; m < budgetGroup[i].expensesAndDesc.length; m--) {
        document.getElementById('timeStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].exadrTime}</div>`
        document.getElementById('amountStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">₦${budgetGroup[i].expensesAndDesc[m].expAmount}</div>`
        document.getElementById('statusStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].statusdr}</div>`
        document.getElementById('descriStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; font-weight:300;">${budgetGroup[i].expensesAndDesc[m].desc}</div>`
        document.getElementById('benefStamp').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px;">${budgetGroup[i].expensesAndDesc[m].benTag}</div>`
        if (m == 0) {
            break;
        }
    }
    localStorage.setItem("newBudget", JSON.stringify(budgetGroup));
}
let z;
const displayhist = () => {
    budgetGroup = JSON.parse(localStorage.getItem("newBudget"));
    i = budgetGroup.length - 1;
    document.getElementById('dateStamper').innerHTML = `<div>Date</div>`
    document.getElementById('timeStamper').innerHTML = `<div>Time</div>`
    document.getElementById('amountStamper').innerHTML = `<div>Amount</div>`
    document.getElementById('statusStamper').innerHTML = `<div>Status</div>`
    document.getElementById('descriStamper').innerHTML = `<div>Description</div>`
    document.getElementById('benefStamper').innerHTML = `<div>Beneficiaries</div>`
    for (let z = i; z < budgetGroup.length; z--) {
        k = budgetGroup[z].expensesAndDesc.length - 1;
        for (let m = k; m < budgetGroup[z].expensesAndDesc.length; m--) {
            document.getElementById('dateStamper').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; padding-top:5px;"><span style="background-image: linear-gradient(to bottom, rgb(42, 185, 76), rgb(22, 129, 47)); padding-left:6px; padding-right:6px; border-radius:10px;">${budgetGroup[z].day}</span></div>`
            document.getElementById('timeStamper').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; padding-top:5px; font-weight:300;">${budgetGroup[z].expensesAndDesc[m].exadrTime}</div>`
            document.getElementById('amountStamper').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; padding-top:5px; font-weight:300;">₦${budgetGroup[z].expensesAndDesc[m].expAmount}</div>`
            document.getElementById('statusStamper').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; padding-top:5px; font-weight:300;">${budgetGroup[z].expensesAndDesc[m].statusdr}</div>`
            document.getElementById('descriStamper').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; padding-top:5px; font-weight:300;">${budgetGroup[z].expensesAndDesc[m].desc}</div>`
            document.getElementById('benefStamper').innerHTML += `<br><div style="border-top:1px solid rgb(248, 248, 248); margin-top:-18px; padding-top:5px; font-weight:300;">${budgetGroup[z].expensesAndDesc[m].benTag}</div>`
            if (m == 0) {
                break;
            }
        }
        if (z == 0){
            break;
        }
    }

    localStorage.setItem("newBudget", JSON.stringify(budgetGroup));
}
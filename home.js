// document.getElementById('addMoney').addEventListener('click', function(e){
//     e.preventDefault()
//     console.log('btn clicked')
//     const bank = document.getElementById('bank').value 
//     const bankAccount =document.getElementById('bankAccount').value
    
//     const amount =parseInt(document.getElementById('addAmount').value)
//     const pin= document.getElementById('password').value
//     console.log(bank,bankAccount,amount,pin)

//     const availableBalance = parseInt(document.getElementById('balance').innerText)
//     console.log(availableBalance)

//     const totalNewAvailableBalance = amount +availableBalance
//     document.getElementById('balance').innerText =totalNewAvailableBalance
// })

// re capping  feature

// pin number set
const validPin = 1234
const validBankAccountNumber = 01604149169

document.getElementById('addMoney').addEventListener('click', function(e){
    e.preventDefault()

    const bank = document.getElementById('bank').value 
    const bankAccount =document.getElementById('bankAccount').value
    
    const amount =parseInt(document.getElementById('addAmount').value)
    const pin= parseInt(document.getElementById('password').value)
    
    const availableBalance = parseInt(document.getElementById('balance').innerText)
    console.log(amount, availableBalance)

    if(bankAccount.length<11){
        alert("please provide valid account number")
        return;
    }

    if(pin !==validPin){
         alert("please provide valid Pin")
        return;
    }
    if(bankAccount !=validBankAccountNumber){
         alert("please provide valid account number")
        return;
    }
    const totalNewAvailableBalance = amount + availableBalance
    document.getElementById('balance').innerText = totalNewAvailableBalance
   })
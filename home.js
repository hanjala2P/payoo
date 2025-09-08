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



// re-usable function for input field

function getInputValueNumber (id){
   const inputField = document.getElementById(id)
   const inputFieldValue = inputField.value
   const inputFieldValueNumber = parseInt(inputFieldValue)
  
   return inputFieldValueNumber
}
// re-usable function for innertext

function getInnerTextValueNumber (id){
   const element = document.getElementById('balance')
   const elementtValue = element.innerText
   const elementValueNumber = parseInt(elementtValue)
   return elementValueNumber
}

// re-usable function to set innerText

function setInnerText (value){
    const availableBalanceElement = document.getElementById('balance')
    availableBalanceElement.innerText = value
}

document.getElementById('addMoney').addEventListener('click', function(e){
    e.preventDefault()

    const bank = getInputValueNumber('bank')
    const bankAccount =document.getElementById('bankAccount').value
    
    const amount =getInputValueNumber('addAmount')
    const pin= getInputValueNumber('password')
    
    const availableBalance = parseInt(document.getElementById('balance').innerText)
    // console.log(amount, availableBalance)

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
    // document.getElementById('balance').innerText = totalNewAvailableBalance
    setInnerText(totalNewAvailableBalance)
   })
// cash out  money feature
document.getElementById("withdraw-money-btn").addEventListener('click',function(e){
    e.preventDefault()
    const amount = getInputValueNumber("WithdrawAmount")
    const availableBalance =getInnerTextValueNumber("balance")
    const WithdrawPassword = getInputValueNumber("WithdrawPassword")
    const bankAccountNumber =getInputValueNumber("bankAccountNumber")

    const totalNewAvailableBalance = availableBalance - amount
    // console.log(totalNewAvailableBalance)
     if(bankAccount.length<11){
        alert("please provide valid account number")
        return;
    }

    if(WithdrawPassword !==validPin){
         alert("please provide valid Pin")
        return;
    }
    if(bankAccountNumber!=validBankAccountNumber){
         alert("please provide valid account number")
        return;
    }
    // document.getElementById("balance").innerText = totalNewAvailableBalance
    setInnerText(totalNewAvailableBalance)
})
// toggleing reusable function code

function handleToggle (id){
    const allServices = document.getElementsByClassName("services")

            for( const services of allServices ){
                services.style.display ="none"
        }
        document.getElementById(id).style.display ="block"
}

// toggle  resuable function for select cart
function handleButtonToggle (id){
     const serviceBtn = document.getElementsByClassName("service-btn")

             for(const btn of serviceBtn){
                btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
                btn.classList.add("border-gray-300")
             }
             document.getElementById(id).classList.remove("border-gray-300")
             document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}


//    toggling features

     document.getElementById("add-money-btn").addEventListener('click', function(){
             handleToggle('add-money')
            handleButtonToggle("add-money-btn")

             
    })

        document.getElementById("cashout-btn").addEventListener('click', function(){
            handleToggle('cash-out')
            handleButtonToggle("cashout-btn")
            // const serviceBtn = document.getElementsByClassName("service-btn")

            //  for(const btn of serviceBtn){
            //     btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
            //     btn.classList.add("border-gray-300")
            //  }
            //  document.getElementById('cashout-btn').classList.remove("border-gray-300")
            //  document.getElementById('cashout-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")
        })
        document.getElementById("transerMoney-btn").addEventListener('click', function(){
        handleToggle('transerMoney')
        handleButtonToggle("transerMoney-btn")
        //  const serviceBtn = document.getElementsByClassName("service-btn")

        //      for(const btn of serviceBtn){
        //         btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        //         btn.classList.add("border-gray-300")
        //      }
        //      document.getElementById('transerMoney-btn').classList.remove("border-gray-300")
        //      document.getElementById('transerMoney-btn').classList.add("border-[#0874f2]","bg-[#0874f20d]")
        })




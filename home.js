// pin number set
const validPin = 1234
const validBankAccountNumber = "01604149169"
const transectionHistory=[]




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
    if(amount<=0){
        alert("Invalid amount")
        return;
    }
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
      setInnerText(totalNewAvailableBalance)
    const data ={
        name:"Add Money",
        Date:new Date().toLocaleTimeString()

    }
    transectionHistory.push(data)
   })
// cash out  money feature
document.getElementById("withdraw-money-btn").addEventListener('click',function(e){
    e.preventDefault()
    const amount = getInputValueNumber("WithdrawAmount")
    const availableBalance =getInnerTextValueNumber("balance")
    if(amount<=0 || amount>availableBalance){
        alert("Invalid amount")
    }
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
      const data ={
        name:"Cashout",
        Date:new Date().toLocaleTimeString()

    }
    transectionHistory.push(data)
    
    document.getElementById("balance").innerText = totalNewAvailableBalance
  
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
const data ={
        name:"Transaction",
        Date:new Date().toLocaleTimeString()

    }
    transectionHistory.push(data)

document.getElementById("transaction-btn").addEventListener('click', function() {
    const transactionContiner = document.getElementById("transaction-continer");
    
    transactionContiner.innerText = ""; // Clear previous items
    for(const data of transectionHistory){
        const div = document.createElement("div");
        div.innerHTML = `
         <div id="transaction-continer" class="flex items-center justify-between  min-h-[50px] max-w-lg mx-auto border    border-gray-300 border-gray-300 p-4 rounded-[12px] mb-[12px] ">
            <div class="flex gap-[4px] items-center justify-center">
                <div class=" bg-gray-200 h-[48px] w-[48px] rounded-[100px] flex items-center justify-center">
                    <img class="h-[32px] w-[32px] mx-auto " src="assets/wallet1.png" alt="">
                </div>
                <div>
                    <h2 class="font-bold  text-[#080808] text-[18px]">${data.name}</h2>
                    <h3 class="text-[#080808] text-[14px]">${data.Date}</h3>
                </div>
            </div>
            <div>
                <i class="fa-solid fa-ellipsis-vertical "></i>
            </div>
            </div>
        `;
        transactionContiner.appendChild(div);
    }
});

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

        document.getElementById("get-bonus-btn").addEventListener('click', function(){
        handleToggle('transerMoney')
        handleButtonToggle("get-bonus-btn")
      
        })
        document.getElementById("get-bonus-btn").addEventListener('click', function(){
        handleToggle('getBounus')
        handleButtonToggle("get-bonus-btn")
      
        })
        document.getElementById("pay-bill-btn").addEventListener('click', function(){
        handleToggle('pay-bill')
        handleButtonToggle("pay-bill-btn")
      
        })
        document.getElementById("transaction-btn").addEventListener('click', function(){
        handleToggle('transections')
        handleButtonToggle("transaction-btn")
      
        })




// login btn
document.getElementById('loginBtn').addEventListener('click',
    function(e){
        e.preventDefault()
        const mobileNumber =" 01604149169"
        const pinNumber = 1234
        const mobileNumberValue =document.getElementById('mobileNumber').value
        const mobileNumberValueConverted =parseInt(mobileNumberValue)

        const pinNumberValue =document.getElementById('pinNumber').value
        const pinNumberValueConverted =parseInt(pinNumberValue)

        // console.log(mobileNumberValueConverted,pinNumberValueConverted)

        if(mobileNumberValueConverted===mobileNumber && pinNumberValueConverted===pinNumber){
            window.location.href="/addMoney.html"
        }
        else{
            alert("Invalid Credentials")
        }
    }

    
)



document.getElementById('pay-Bill-btn').addEventListener('click', function (event) {
    event.preventDefault;
    const mobileNumber = document.getElementById('payBiller-Number-input').value;
    const amount = getInputValueById('payBill-Amount-input');
    const pinNumber = document.getElementById('payBill-Pin-input').value;
    const mainBalance = getInputValueByInnerText('main-amount');

    // if(amount < 0){
    //     alert('Invalid Amount');
    //     return;
    // }

    if (mobileNumber.length === 11) {
        if (amount >= 100) {
            if (pinNumber.length === 4) {
                const sum = mainBalance - amount;
                document.getElementById('main-amount').innerText = sum;

                // from here showing transaction history
                const transactionContainer = document.getElementById('transaction-section');
                const div = document.createElement('div');
                const selectBank = document.getElementById('select-bank-input').value;

                div.classList.add("bg-[#EDF2FA]","border", "border-sm","border-black", "rounded-lg","p-2","mt-4")
                div.innerHTML = `
                    <h1 class="text-gray-700 text-sm font-bold">From ${selectBank}</h1>

                    <h2 class="text-blue-500 text-base font-semibold">Paid Bill</h2>

                    <h3 class="text-red-500 text-lg font-bold">-$${amount}</h3>

                    <p class="text-gray-700 text-sm font-bold">Account Number: ${mobileNumber}</p> `;

                transactionContainer.appendChild(div);
            }
            else {
                alert('Enter 4 Digit Pin');
            }
        }
        else {
            alert('Add $100 At-list');
        }
    }
    else {
        alert('Enter 11 Digit Valid Bangladeshi Number');
    }
})
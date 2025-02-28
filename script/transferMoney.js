document.getElementById('transfer-btn').addEventListener('click', function (event) {
    event.preventDefault;
    const agentNumber = document.getElementById('transferNumber-input').value;
    const amount = getInputValueById('transferAble-Amount-input');
    const pin = document.getElementById('transferPin-input').value;
    const mainBalance = getInputValueByInnerText('main-amount');

    if(amount > mainBalance){
        alert('Invalid Amount');
        return;
    }

    if (agentNumber.length === 11) {
        if (amount >= 100) {
            if (pin.length === 4) {
                const sum = mainBalance - amount;
                document.getElementById('main-amount').innerText = sum;


                // from here this is showing the transaction history.
                const transactionContainer = document.getElementById('transaction-section');
                const div = document.createElement('div');

                div.classList.add("bg-[#EDF2FA]","border", "border-sm","border-black", "rounded-lg","p-2","mt-4")
                div.innerHTML = `<h2 class="text-blue-500 text-base font-semibold">Transferred Amount</h2>
                <h3 class="text-red-500 text-lg font-bold">-$${amount}</h3>
                <p class="text-gray-700 text-sm font-bold">Transferred Number: ${agentNumber}</p> `;

                transactionContainer.appendChild(div);
                
            }
            else {
                alert('Enter 4 Digit Pin');
            }
        }
        else {
            alert('Amount $100 At-list');
        }
    }
    else {
        alert('Enter 11 Digit Valid Bangladeshi Number')
    }
})


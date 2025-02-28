function getInputValueById (id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInputValueByInnerText (id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

// handle toggle functionality

function handleToggle (id, status){
    document.getElementById(id).style.display = status;
}
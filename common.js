function getInputValueByIdFloat(id){
  const element = document.getElementById(id).value;
  const convertedElement = parseFloat(element);
  return convertedElement;
}

function getInputValueByIdInt(id){
    const element = document.getElementById(id).value;
    const convertedElement = parseInt(element);
    return convertedElement;
}

function getInnerTextValueById(id){
    const element = document.getElementById(id).innerText;
    const convertedElement = parseFloat(element);
    return convertedElement;
}

function setInnerTextValueById(id,value){
  const element = document.getElementById(id);
  const elementValue = element.innerText = value;
}

function clearTextValueById(id){
  const element = document.getElementById(id);
  element.value = '';
}
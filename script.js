val = document.getElementById("inp")
resul = document.getElementById("p");
resul2 = document.getElementById("t");
resul3 = document.getElementById("wt");
resul4 = document.getElementById("o");
resul5 = document.getElementById("wo");
exbt1 = document.getElementById("ebt")

function done(){
    rval = val.value
    let pdtpc = (rval * 4)/40*100
    let tax = (40 * pdtpc)/100
    resul.innerHTML = `<p>The Product Price without margin : <strong>${pdtpc}</strong></p>`
    resul2.innerHTML = `<p>Margin amount : <strong>${tax}</strong></p>`
    resul3.innerHTML = `<p>Total Sale Price : <strong>${pdtpc+tax}</strong></p>`
    resul4.innerHTML = `<p>Discount : <strong>${rval*2}</strong></p>`
    resul5.innerHTML = `<p>Offer Price : <strong><span id="of">${(pdtpc+tax)-(rval*2)}</span></strong></p>`
    exbt1.innerHTML= ` <button type="button" id="Enter" style = "margin-left:0" class="af" onclick="done()">Enter</button><button class="af" type="submit">Reset</button>`
}

// resul.innerText = val
// console.log(val)

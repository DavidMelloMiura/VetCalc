function calcular() {

   let txtpeso = window.document.getElementById('Tpeso').value
   let peso = parseFloat(txtpeso)

   let txtvt = document.querySelector('input[name="VolTot"]:checked').value
   let vt = parseFloat(txtvt)
   let txtve = document.querySelector('input[name="VolExt"]:checked').value
   let ve = parseFloat(txtve)

      
    totSangue = (peso * 10) * vt
    doaSangue = (totSangue / 100) * ve
    doaSangueEnd = (totSangue / 100) * ve


   txtSangue.innerHTML = totSangue + " ml"
   txtDoaSangue.innerHTML = doaSangue + " ml"
   result.innerHTML = doaSangueEnd + " ml"

   
    
}

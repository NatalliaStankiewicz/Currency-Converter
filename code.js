import { LightningElement } from 'lwc';

export default class Day4CurrencyConverter extends LightningElement {
    selectedVal
    enteredCur
    isAvailble=false
    convertedAmount
    get options() {
        return [
            { label: 'EUR', value: 'EUR' },
            { label: 'GBP', value: 'GBP' },
            { label: 'CNY', value: 'CNY' },
        ];
    }
    amountHandler(event){
        this.enteredCur=event.target.value
      
    }
    comboboxHandler(event) {
        this.selectedVal= event.detail.value;
      
    }

   convertHandler(event){
    const APIkey='F6nbEa4mVDIHPSf36UQt0K8AFvc53DBd'
    fetch(https://api.apilayer.com/fixer/convert?to=${this.selectedVal}&from=USD&amount=${this.enteredCur}&apikey=${APIkey})
  .then(response => response.json())
  .then(data => {
   console.log(data)
    this.isAvailble=true
    this.convertedAmount=data.result
})
  .catch(error => console.log('error', error));
   }
}

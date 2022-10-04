const colums = document.querySelectorAll('.info__day .info__col');
const costs = document.querySelectorAll('.info__day .info__cost')

const setValue = async () => {
   fetch('./data.json')
   .then(res => res.json())
   .then(data => {
      let maxAmount = data[0].amount;
      for(index in data){
         maxAmount = 
         maxAmount < data[index].amount ? data[index].amount : maxAmount
      }

      for(index in data){
         colums[index].style.minHeight = 150 / (maxAmount / data[index].amount) + 'px';
         costs[index].textContent = '$' + data[index].amount;
      }
   })
}

setValue()
   colums.forEach(elem => {
      elem.addEventListener('mouseover', () => {
         elem.parentElement.children[0].style.display = 'block'
      })

      elem.addEventListener('mouseout', () => {
         elem.parentElement.children[0].style.display = 'none'
      })
   })
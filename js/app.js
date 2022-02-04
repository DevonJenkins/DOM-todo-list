const txtInput = document.querySelector('input')

const addButton = document.getElementById('add-button')

const deleteButton =  document.getElementById("delete-button")


addButton.addEventListener('click', function(){
  const newLi = document.createElement('li' ) 
  
  newLi.textContent = txtInput.value
  if(txtInput.value !== ""){

    document.querySelector('ul').appendChild(newLi)

    newLi.classList.add('list-el')
    txtInput.value = ''
  }



    } )


    deleteButton.addEventListener('click',function(){

      document.querySelectorAll('.list-el').forEach(element => {
        element.remove() 
      });  

      //removes one item ata a time. How could I make it remove all items at once?
    })
  

//i want to remove that line of UL styling
    ///how can i add the style attribute to the UL only when items are on the list?


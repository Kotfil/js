const selectAllButton = document.getElementById('test')
const inputElement = document.getElementById('input')
const ulElement = document.getElementById('list')

const todoList = []
 //upgradeView()

selectAllButton.addEventListener('click', () => {
    console.log('fired')
})

inputElement.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
        todoList.unshift({
			content:inputElement.value
			done: false //123
		})
        inputElement.value = ''
		
		upgradeView ()
	}
})

function upgradeView () {
	ulElement.innerHTML = ''

for (const todoItem of todoList) {
const liElement = document.createElement('li')
liElement.className = 'list-group-item'
ulElement.append(liElement)

const divElement = document.createElement('div')
divElement.className = 'form-group form-check'
liElement.append(divElement)

const checkboxElement = document.createElement('input')
divElement.append(checkboxElement)
checkboxElement.type = 'checkbox'
checkboxElement.classname = 'form-check-input'

const labelElement = document.createElement('label')
divElement.append(labelElement)
labelElement.className = 'form-check-label'
labelElement.setAttribute('for', 'exampleCheck1')
labelElement.innerText = todoItem

const buttonDoneElement = document.createElement('button')
divElement.append(buttonDoneElement)
buttonDoneElement.type = 'button'
buttonDoneElement.className = 'btn btn-outline-primary'
buttonDoneElement.innerText = 'Done'

const buttonRemoveElement = document.createElement('button')
divElement.append(buttonRemoveElement)
buttonRemoveElement.type = 'button'
buttonRemoveElement.className = 'btn btn-outline-danger'
buttonRemoveElement.innerText = 'Remove'
}
}
const btnAdd = document.querySelector('.add'),
      itemAdd = document.querySelector('.new-item'),
      taskIncompleted = document.querySelector('.incompleted'),
      taskCompleted = document.querySelector('.completed');

function buildBtn(){
  const btn = document.createElement('button'),
        length = taskIncompleted.querySelectorAll('li').length;

  btn.textContent = 'Complete';
  btn.classList.add('btn--tasks');
  btn.setAttribute('data-id', length + 1);

  btn.addEventListener('click', (e) => { // target é o elemento do evento que me fala qual item disparou o evento;
    const element = taskIncompleted.querySelector(`#item-${e.target.getAttribute('data-id')}`),
          pElement = element.children[0];

    element.remove();
    e.target.remove();
    pElement.classList.add('completed__li');
    taskCompleted.append(element);
  })

  return btn;
}

function buildParagraph(){
  const p = document.createElement('p');
  
  p.textContent = itemAdd.value;
  
  return p
};

function removeItens(){
  const btnRemove = document.createElement('button'),
        length = taskIncompleted.querySelectorAll('li').length;

  btnRemove.textContent = 'Remove';
  btnRemove.classList.add('btn--remove');
  btnRemove.setAttribute('data-id', length + 1);

  btnRemove.addEventListener('click', (e) => {
    const element = taskIncompleted.querySelector(`#item-${e.target.getAttribute('data-id')}`);
    element.remove();
    e.target.remove();
  });

  btnRemove.addEventListener('click', (e) => {
    const element = taskCompleted.querySelector(`#item-${e.target.getAttribute('data-id')}`),
          pElement = element.children[0];
    
    pElement.remove();
    element.remove();
    e.target.remove();
  });

  return btnRemove;
};

function createMenuItem(){
  const li = document.createElement('li'),
        p = buildParagraph(),
        btn = buildBtn(),
        btnRemove = removeItens(),
        length = taskIncompleted.querySelectorAll('li').length;

  
  li.classList.add('tasks');
  li.id = `item-${length + 1}`;

  li.append(p, btn, btnRemove);
  taskIncompleted.append(li);

  itemAdd.value = '';
}

btnAdd.addEventListener('click', () => {
  createMenuItem();
});


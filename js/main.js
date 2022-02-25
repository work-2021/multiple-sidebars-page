const imgsSlider = document.querySelectorAll('.main .slider .images img');
const indicator = document.querySelectorAll('.indicator li');
let i = 1;
setInterval(() => {
  removeAllShow();
  imgsSlider[i].classList.add('show');
  indicator[i].classList.add('active');
  i++;
  if (i >= imgsSlider.length) {
    i = 0;
  }
}, 5000);

function removeAllShow() {
  imgsSlider.forEach((img, ind) => {
    img.classList.remove('show');
    indicator[ind].classList.remove('active');
  });
}
const membersFilter = document.querySelectorAll('.members .content .filter button');
const members = document.querySelectorAll('.members .content .member');
membersFilter.forEach((button) => {
  button.onclick = () => {
    removeAllActiveM();
    button.classList.add('active');
    let key = button.getAttribute('data-filter');
    let j = 0,
      k = 1;
    members.forEach((member) => {
      if (member.classList.contains(key)) {
        member.style.order = j;
        j--;
      } else {
        member.style.order = k;
        k++;
      }
    });
  };
});
const groupsFilter = document.querySelectorAll('.groups .content .filter button');
const groups = document.querySelectorAll('.groups .content .group');
groupsFilter.forEach((button) => {
  button.onclick = () => {
    removeAllActiveG();
    button.classList.add('active');
    let key = button.getAttribute('data-filter');
    let j = 0,
      k = 1;
    if (key !== 'alphbet') {
      groups.forEach((group) => {
        if (group.classList.contains(key)) {
          group.style.order = j;
          j--;
        } else {
          group.style.order = k;
          k++;
        }
      });
    }
    else {
      let l = 0,
        j = 0,
        k = 1;
      groups.forEach((group) => {
        let nameGroup = group.children[1].children[0].innerHTML;
        let letterCode = nameGroup.charCodeAt(0);
        if (l >= letterCode) {
          group.style.order = j;

          j--;
        } else {
          group.style.order = k;
          l = letterCode;
          k++;
        }
      });
    }
  };
});

function removeAllActiveM() {
  membersFilter.forEach((button) => {
    button.classList.remove('active');
  });
}

function removeAllActiveG() {
  groupsFilter.forEach((button) => {
    button.classList.remove('active');
  });
}

const inputs = document.querySelectorAll('input');
const rgx1 = /^[a-zA-Z!@#\$%\^\&*\)\(+=._-]{2,}$/i;
/* start with letter and does not contain special characters, number and at least two characters */
const rgx2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i;
/* at least a small letter,at least a capital letter, at least a number,at least a special character and at least eight characters  */
inputs.forEach((el) => {
  el.onblur = () => {
    if (el.getAttribute('type') === 'password') {
      check(el, rgx2, 'look at code to see why not valid');
    } else {
      check(el, rgx1, 'look at code to see why not valid');
    }
  };
});

function check(input, regx, msg) {
  if (regx.test(input.value)) {
    input.classList.remove('active');
    input.nextElementSibling.classList.remove('active');
    input.nextElementSibling.lastElementChild.textContent = '';
  } else {
    input.classList.add('active');
    input.nextElementSibling.classList.add('active');
    input.nextElementSibling.lastElementChild.textContent = msg;
  }
}
const formSearch = document.querySelector('.search form');
const inputSearch = document.querySelector('.search form input');
const errorSearchMsg = document.querySelector('.search form div p');
formSearch.onsubmit = (event) => {
  inputSearch.blur();
  if (errorSearchMsg.classList.contains('active')) {
    event.preventDefault();
  }
  if (inputSearch.value === '') {
    inputSearch.classList.add('active');
    errorSearchMsg.classList.add('active');
    errorSearchMsg.lastElementChild.textContent = 'Add Some Information';
    event.preventDefault();
  }
}
const formSignin = document.querySelector('.sign-in .content form');
const inputsSignin = document.querySelectorAll('.sign-in .content form input');
const errorSigninMsgs = document.querySelectorAll('.sign-in .content form div p');
formSignin.onsubmit = (event) => {
  inputsSignin.forEach((input) => {
    input.blur();
  });
  errorSigninMsgs.forEach((msg, index) => {
    if (msg.classList.contains('active')) {
      event.preventDefault();
    }
    if (inputsSignin[index].value === '') {
      inputsSignin[index].classList.add('active');
      msg.classList.add('active');
      msg.lastElementChild.textContent = 'Add Some Information';
      event.preventDefault();
    }
  });
}
const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const body = document.querySelector('body');
const shadow = document.querySelector('body .shadow');
const sidebarsBtn = document.querySelectorAll('.sidebars-btn button');
sidebarsBtn.forEach((button) => {
  button.onclick = () => {
    let side = button.getAttribute('data-show');
    if (side === 'left') {
      leftSide.classList.toggle('show');
      shadow.style.right = '0';
      shadow.style.left = 'auto';
      shadow.style.transformOrigin = 'right';
      rightSide.classList.remove('show');
    } else {
      rightSide.classList.toggle('show');
      shadow.style.left = '0';
      shadow.style.right = 'auto';
      shadow.style.transformOrigin = 'left';
      leftSide.classList.remove('show');
    }
    body.classList.toggle('fit');
  };
});
shadow.onclick = () => {
  leftSide.classList.remove('show');
  rightSide.classList.remove('show');
  body.classList.remove('fit');
};
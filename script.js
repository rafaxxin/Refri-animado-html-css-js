const list = document.querySelectorAll('.item');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const count = list.length;
let active = 0;

class Carrossel {
    Next() {
        let activeOld = document.querySelector('.active');
        if (activeOld) {
            activeOld.classList.remove('active'); 
        }
        if (active >= count - 1) {
            active = 0;
        } else {
            active++;
        }
        list[active].classList.add('active');
    }

    Prev() {
        let activeOld = document.querySelector('.active');
        if (activeOld) {
            activeOld.classList.remove('active');
        }
        if (active <= 0) {
            active = count - 1;
        } else {
            active--;
        }

        list[active].classList.add('active');
    }
}

const slider = new Carrossel();

next.addEventListener('click', () => {
    slider.Next();
});

prev.addEventListener('click', () => {
    slider.Prev();
});
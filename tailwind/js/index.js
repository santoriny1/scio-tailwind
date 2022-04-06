let showM1 = document.getElementsByClassName('m1');
let showM2 = document.getElementsByClassName('m2');
let showM3 = document.getElementsByClassName('m3');
let showM1Btn = document.getElementById('home');
let showM2Btn = document.getElementById('ho');
let showM3Btn = document.getElementById('sports');

Array.prototype.forEach.call(showM3, (shm3) => {
        shm3.style.display = 'none';
});

Array.prototype.forEach.call(showM2, (shm2) => {
        shm2.style.display = 'none';
});

showM1Btn.onclick = () => {
    Array.prototype.forEach.call(showM1, (shm1) => {
            shm1.style.display = '';
    });
    Array.prototype.forEach.call(showM3, (shm3) => {
        if(shm3.style.display == ''){
            shm3.style.display = 'none';
        }
    });

    Array.prototype.forEach.call(showM2, (shm2) => {
        if(shm2.style.display == '') {
            shm2.style.display = 'none';
        }
    });

}

showM2Btn.onclick = () => {
    Array.prototype.forEach.call(showM1, (shm1) => {
        if(shm1.style.display == '') {
            shm1.style.display = 'none';
        }
    });
    Array.prototype.forEach.call(showM3, (shm3) => {
        if(shm3.style.display == ''){
            shm3.style.display = 'none';
        }
    });

    Array.prototype.forEach.call(showM2, (shm2) => {
            shm2.style.display = '';
    });
}

showM3Btn.onclick = () => {
    Array.prototype.forEach.call(showM1, (shm1) => {
        if(shm1.style.display == '') {
            shm1.style.display = 'none';
        }
    });
    Array.prototype.forEach.call(showM3, (shm3) => {
        shm3.style.display = '';
    });

    Array.prototype.forEach.call(showM2, (shm2) => {
        if(shm2.style.display == '') {
            shm2.style.display = 'none';
        }
    });
}

//For Tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


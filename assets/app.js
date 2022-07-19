
let _flag = 0;
let pop1 = document.getElementById('pop01');
let pop2 = document.getElementById('pop02');
let pop3 = document.getElementById('pop03');
let pop4 = document.getElementById('pop04');

document.getElementById('btn-pop01').onclick = () => {
    pop1.style.display = 'flex';
    _flag = 1;
    console.log(_flag);
};
document.getElementById('btn-pop02').onclick = () => {
    pop2.style.display = 'flex';
    _flag = 2;
    console.log(_flag);
};
document.getElementById('btn-pop03').onclick = () => {
    pop3.style.display = 'flex';
    _flag = 3;
    console.log(_flag);
};
document.getElementById('btn-pop04').onclick = () => {
    pop4.style.display = 'flex';
    _flag = 4;
    console.log(_flag);
};

document.getElementById('close01').onclick = () => {
    pop1.style.display = 'none';
    console.log('close 1');
};
document.getElementById('close02').onclick = () => {
    pop2.style.display = 'none';
    console.log('close 2');
};
document.getElementById('close03').onclick = () => {
    pop3.style.display = 'none';
    console.log('close 3');
};
document.getElementById('close04').onclick = () => {
    pop4.style.display = 'none';
    console.log('close 4');
};
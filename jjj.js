const btn = document.getElementById('colorBtn');
const card = document.getElementById('glowCard');

// Colors ki array jo button click par change hogi
const colors = [
    '0 15px 35px rgba(99, 102, 241, 0.6)', 
    '0 15px 35px rgba(236, 72, 153, 0.6)', 
    '0 15px 35px rgba(34, 197, 94, 0.6)', 
    '0 15px 35px rgba(234, 179, 8, 0.6)'
];

let index = 0;

btn.addEventListener('click', () => {
    index = (index + 1) % colors.length;
    card.style.boxShadow = colors[index];
});
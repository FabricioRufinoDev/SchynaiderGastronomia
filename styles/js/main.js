document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todos os botões de pergunta
    const faqButtons = document.querySelectorAll('.faq-question');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Seleciona o item pai (o faq-item)
            const item = this.closest('.faq-item');
            
            // Opcional: Fecha outros itens quando um novo é aberto
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Alterna a classe 'active' no item clicado
            item.classList.toggle('active');
        });
    });
});
    // ==========================================
// ==========================================
// SCRIPT DA GALERIA AUTOMÁTICA
// ==========================================
const allPhotos = [
    "assets/img9.jpeg", "assets/img10.jpeg", "assets/img11.jpeg", "assets/img12.jpeg",
    "assets/img13.jpeg", "assets/img14.jpeg", "assets/img15.jpeg", "assets/img16.jpeg",
    "assets/img17.jpeg", "assets/img18.jpeg", "assets/img19.jpeg", "assets/img20.jpeg",
    "assets/img21.jpeg", "assets/img22.jpeg", "assets/img22.jpeg", "assets/img23.jpeg"
];

const slots = document.querySelectorAll(".gallery-slot img");

function startGallery() {
    if (slots.length === 0) return;

    setInterval(() => {
        // Escolhe um slot aleatório
        const randomSlot = slots[Math.floor(Math.random() * slots.length)];
        // Escolhe uma foto aleatória
        const newSrc = allPhotos[Math.floor(Math.random() * allPhotos.length)];

        // Efeito de FADE OUT (sumir)
        randomSlot.style.opacity = "0";

        setTimeout(() => {
            randomSlot.src = newSrc;
            // Efeito de FADE IN (aparecer)
            randomSlot.style.opacity = "1";
        }, 600); // Esse tempo deve ser igual ao transition no CSS
    }, 3000); // Troca a cada 3 segundos
}

// Inicia a galeria
startGallery();
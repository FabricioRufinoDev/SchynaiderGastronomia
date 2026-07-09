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
    "assets/imgp1.jpeg", "assets/imgp2.jpeg", "assets/imgp3.jpeg", "assets/imgp4.jpeg",
    "assets/imgp5.jpeg", "assets/imgp6.jpeg", "assets/imgp7.jpeg", "assets/imgp8.jpeg",
    "assets/imgp9.jpeg", "assets/imgp10.jpeg", "assets/imgp11.jpeg", "assets/imgp12.jpeg","assets/imgp13.jpeg",
    "assets/img1.jpeg", "assets/img2.jpeg", "assets/img3.jpeg", "assets/img4.jpeg",
    "assets/img5.jpeg", "assets/img6.jpeg", "assets/img7.jpeg", "assets/img8.jpeg",
    "assets/img9.jpeg", "assets/img10.jpeg", "assets/img11.jpeg", "assets/img12.jpeg",
    "assets/img13.jpeg", "assets/img14.jpeg", "assets/img15.jpeg", "assets/img16.jpeg",
    "assets/img17.jpeg", "assets/img18.jpeg", "assets/img19.jpeg", "assets/img20.jpeg"
    
];//

const slots = document.querySelectorAll(".gallery-slot img");

// Função para embaralhar o array (algoritmo Fisher-Yates)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function updateGallery() {
    // 1. Embaralha a lista completa de fotos
    const shuffledPhotos = shuffle([...allPhotos]);

    // 2. Itera sobre os slots e atribui uma foto única para cada um
    slots.forEach((slot, index) => {
        // Efeito de FADE OUT
        slot.style.opacity = "0";

        setTimeout(() => {
            // Pega a foto correspondente à posição (sem repetição)
            slot.src = shuffledPhotos[index];
            
            // Efeito de FADE IN
            slot.style.opacity = "1";
        }, 600);
    });
}

// Inicia a galeria
function startGallery() {
    if (slots.length === 0) return;
    
    // Executa a primeira vez imediatamente
    updateGallery();
    
    // Troca a cada 8 segundos
    setInterval(updateGallery, 8000);
}

startGallery();
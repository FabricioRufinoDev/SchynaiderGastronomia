document.addEventListener("DOMContentLoaded", () => {
    
    // 1. FAQ SCRIPT
    const faqButtons = document.querySelectorAll('.faq-question');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item) otherItem.classList.remove('active');
            });
            item.classList.toggle('active');
        });
    });

    // 2. EFEITO SCROLL (Intersection Observer)
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animated').forEach(el => observer.observe(el));

    // 3. GALERIA AUTOMÁTICA (Aleatória e Infinita)
    const allPhotos = [
        "assets/img1.jpeg", "assets/img2.jpeg", "assets/img3.jpeg", "assets/img4.jpeg",
        "assets/img5.jpeg", "assets/img6.jpeg", "assets/img7.jpeg", "assets/img8.jpeg",
        "assets/img9.jpeg", "assets/img10.jpeg", "assets/img11.jpeg", "assets/img12.jpeg",
        "assets/img13.jpeg", "assets/img14.jpeg", "assets/img15.jpeg", "assets/img16.jpeg",
        "assets/img17.jpeg", "assets/img18.jpeg", "assets/img19.jpeg", "assets/img20.jpeg",
        "assets/imgp1.jpeg", "assets/imgp2.jpeg", "assets/imgp3.jpeg", "assets/imgp4.jpeg",
        "assets/imgp5.jpeg", "assets/imgp6.jpeg", "assets/imgp7.jpeg", "assets/imgp8.jpeg",
        "assets/imgp9.jpeg", "assets/imgp10.jpeg", "assets/imgp11.jpeg", "assets/imgp12.jpeg",
        "assets/imgp13.jpeg"
    ];

    const track = document.getElementById('auto-gallery');
    
    if (track) {
        // Função de embaralhamento Fisher-Yates
        const shuffle = (array) => {
            let currentIndex = array.length, randomIndex;
            while (currentIndex != 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
            }
            return array;
        };

        // Embaralha e duplica para efeito infinito
        const shuffledPhotos = shuffle([...allPhotos]);
        const fullList = [...shuffledPhotos, ...shuffledPhotos];
        
        fullList.forEach(src => {
            const slot = document.createElement('div');
            slot.className = 'carousel-slot';
            const img = document.createElement('img');
            img.src = src;
            img.alt = "Galeria Schynaider Gastronomia";
            slot.appendChild(img);
            track.appendChild(slot);
        });
    }
});
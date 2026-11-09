// Zadanie 5: Funkcje, pętle i zdarzenia

// 1. Funkcja generująca dynamiczną listę za pomocą pętli
function generujListeDanych() {
    const kontener = document.getElementById('zad5-kontener');
    if (!kontener) return;

    // Czyszczenie kontenera przed ponownym generowaniem
    kontener.innerHTML = '';

    // Tworzenie nagłówka i listy za pomocą pętli for
    const tytul = document.createElement('h4');
    tytul.textContent = 'Wygenerowano przy użyciu pętli w Zadaniu 5:';
    kontener.appendChild(tytul);

    const lista = document.createElement('ul');

    for (let i = 1; i <= 5; i++) {
        const element = document.createElement('li');
        element.textContent = `Element iteracji numer: ${i}`;
        
        // Dodanie prostego zdarzenia kliknięcia na element listy
        element.addEventListener('click', function() {
            alert(`Kliknięto element numer: ${i}`);
        });

        lista.appendChild(element);
    }

    kontener.appendChild(lista);
}

// 2. Obsługa zdarzenia załadowania strony i podpięcia pod przycisk
document.addEventListener('DOMContentLoaded', function() {
    const przycisk = document.getElementById('zad5-btn');
    if (przycisk) {
        przycisk.addEventListener('click', generujListeDanych);
    }
});
// 1. Deklaracja tablicy z pięcioma elementami
const tablica = ['Film1', 'Film2', 'Film3', 'Film4', 'Film5'];
console.log(tablica);
console.table(tablica);

// 2. Modyfikacja ostatniego elementu przez length - 1
tablica[tablica.length - 1] = 'Nowa wartość';
console.log(tablica);

// 3. Powiększanie tablicy na trzy sposoby
tablica[5] = 'nowy6';
tablica[tablica.length] = 'nowy7';
tablica.push('nowy8', 'nowy9', 'nowy10', 'nowy11');
console.log(tablica.length);

// 4. Dodawanie elementów na początek
const nowaDlugosc = tablica.unshift('nowy12', 'nowy13');
console.log(nowaDlugosc);

// 5. Wypisanie na stronie tablicy, długości, includes oraz indexOf
document.write('<p>Tablica: ' + tablica.join(', ') + '</p>');
document.write('<p>Elementów: ' + tablica.length + '</p>');
document.write('<p>Czy zawiera "Film2"? ' + tablica.includes('Film2') + '</p>');
document.write('<p>Pozycja "Film2": ' + tablica.indexOf('Film2') + '</p>');
//taktaktaktak
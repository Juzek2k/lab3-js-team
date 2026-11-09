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

// ==========================================
// ZADANIE 3 (Osoba A)
// ==========================================

// 1. Druga tablica i wyświetlenie pierwszego elementu
const nowaTablica = ['JavaScript', 'Python', 'C++', 'Java'];
document.write('<p>Pierwszy element to <strong>' + nowaTablica[0] + '</strong></p>');

// 2. Wyświetlenie ostatniego elementu z użyciem length
document.write('<p>Ostatni element to <strong>' + nowaTablica[nowaTablica.length - 1] + '</strong></p>');

// 3. Dodanie elementu metodą unshift() i ponowne wyświetlenie pierwszego
nowaTablica.unshift('TypeScript');
document.write('<p>Nowy pierwszy po unshift: <strong>' + nowaTablica[0] + '</strong></p>');

// 4. Usunięcie elementu metodą pop() i shift() oraz wypisanie wyników
const usunietyOstatni = nowaTablica.pop();
const usunietyPierwszy = nowaTablica.shift();
document.write('<p>Usunięto z końca: ' + usunietyOstatni + '</p>');
document.write('<p>Usunięto z początku: ' + usunietyPierwszy + '</p>');
document.write('<p>Pozostałe w tablicy: ' + nowaTablica.join(', ') + '</p>');

// 5. Tablica tablic (macierz) oceny
const oceny = [
  ['JavaScript', 5],
  ['Git', 4],
  ['HTML', 5]
];
console.log(oceny[1]);
console.log(oceny[1][0]);
console.log(oceny[1][1]);
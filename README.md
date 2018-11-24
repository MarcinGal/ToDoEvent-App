# ToDoEvent-App
UPDATE: Aplication in progress
App made in OOP.
It's main functionality is adding and removing tasks. 
You can also filter events and check one that you'd already done.

Do stworzenia macie mini aplikacje ToDo listy. 
Aplikacja ma za zadanie: 
- umożliwiać dodawanie taskow do listy poprzez wprowadzenie zadania w polu tekstowym i zatwierdzeniem go przyciskiem 
- usuwanie taskow z listy poprzez kliknięcie przycisku usuń dostępnego przy każdym tasku 
- oznaczanie zadań jako wykonane poprzez kliknięcie w zdanie (zakończone zadanie powinno zostać przekreslone ale nadal być widoczne na liście)
Kryteria akceptacji: 
- aplikacja powinna być wykonana przy użyciu OOP (klasy lub konstruktory)
- w globalnym zakresie powinna być dostępna tylko jedna zmienna - konstruktor aplikacji umożliwiający stworzenie instancji listy poprzez wywołanie z new 
- powinno być możliwe wskazanie w konstruktorze elementu html (poprzez przekazanie selektora lub elementu drzewa DOM) gdzie aplikacja ma się renderowac 
- w przypadku nie przekazania niczego do konstruktora aplikacja powinna się wyrenderowac w body 
- użycie metody render wywolywanej przy każdej zmianie stanu 
Za wykonanie aplikacji przysługują 4 punkty. Punkty przyznaje po wykonaniu ewentualnych poprawek. Jeśli będę miał poważne zastrzeżenia co do jakości kodu czy spełnienia kryteriów mogę dać adekwatnie mniej pkt. 
Ponadto po wykonaniu powyższych oferuje dodatkowe punkty, po 1pkt za: 
- stworzenie osobnej klasy dla pojedynczego zadania i użycie jej do tworzenia taskow w klasie głównej 
- umozliwienie wyszukiwania taskow poprzez dodatkowe pole tekstowe gdzie użytkownik może wpisać nazwę taskow a lista zostanie przefiltrowana do tych spełniających kryteria (wyszukiwarka powinna ignorować wielkość liter i spacje) wymagane użycie metody filter
- zapisywanie i odczytywanie danych w localStorage 
- stworzenie przycisków umożliwiających zawężenie listy wyświetlanych taskow do jednej z 3 opcji) - WSZYSTKIE, ZAKOŃCZONE, NIE ZAKOŃCZONE

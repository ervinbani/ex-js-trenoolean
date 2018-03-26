/*
*Trenoolean*
Un treno è rappresentato dalle seguenti caratteristiche:
- numero indentifico di 4 cifre orari
- Stazione di partenza
- Stazione di arrivo
- Durata del viaggio in minuti
- Orario di partenza
- Numero di posti liberi

A) Generare 10 treni in partenza da Roma e in arrivo a firenze e 10 treni in partenza da milano e in arrivo a Roma
Non devono essere generati a mano, ma con cicli che creino dei valori plausibili per ogni dato

B) Stampare il numero identificativo e l'orario di partenza di un treno che da Roma e va a Firenze,
con le seguenti caratteristiche
 1) Quello che parte prima
 2) Quello che ci mette meno
 3) Quello più vuoto
+-
C) Prenotazione: chiedere al'utente la stazione di partenza, la stazione di arrivo e il modo di ricerca.
Il modo di ricerca può essere una delle opzioni del punto B.
Il software deve individuare il treno con le caratteristiche scelte dall'utente che abbiamo posti liberi,



decrementare il numero di posti liberi e generare un Codice Prenotazione di 6 caratteri alfanumerici casuali.
*/

//creo un un oggetto treno vuoto
var treno1={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno2={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno3={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno4={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno5={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno6={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno7={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno8={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno9={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
var treno10={
  "codice_id":" ",
  "st_partenza":" ",
  "st_arrivo": " ",
  "durata":" ",
  "orario" : " ",
  "postiLiberi": " "
}
//creo due array vuoti dove vado a memorizzare i dati dei treni;
var RomaFirenze=[treno1,treno2, treno3, treno4, treno5, treno6, treno7, treno8, treno9, treno10 ];
var MilanoRoma=[treno1,treno2, treno3, treno4, treno5, treno6, treno7, treno8, treno9, treno10 ];
var i=0;
do{
  for(i=0;i<10;i++ ){
    RomaFirenze[i].codice_id=(Math.floor(Math.random()*10000)+1);
    RomaFirenze[i].st_partenza=("Roma");
    RomaFirenze[i].st_arrivo=("Firenze");
    RomaFirenze[i].durata=(Math.floor(Math.random()*60)+31);
    RomaFirenze[i].orario=Math.floor((Math.random()*24)+1), + ":", + (Math.floor((Math.random()*60)+1));
    RomaFirenze[i].postiLiberi=(Math.floor(Math.random()*450)+1);


    MilanoRoma[i].codice_id=(Math.floor(Math.random()*10000)+1);
    MilanoRoma[i].st_partenza=("Milano");
    MilanoRoma[i].st_arrivo=("Roma");
    MilanoRoma[i].durata=(Math.floor(Math.random()*60)+31);
    MilanoRoma[i].orario=Math.floor((Math.random()*24)+1), + ":", + (Math.floor((Math.random()*60)+1));
    MilanoRoma[i].postiLiberi=(Math.floor(Math.random()*450)+1);



  }
  i++;
}while(i<10)
console.log("treni da roma a firenze : ", RomaFirenze)
console.log("treni da milano a Roma ", MilanoRoma)

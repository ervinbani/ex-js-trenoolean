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

B) Stampare il numero identificativo e l'orario di partenza di un treno che da
Roma e va a Firenze,con le seguenti caratteristiche
 1) Quello che parte prima
 2) Quello che ci mette meno
 3) Quello più vuoto
+-
C) Prenotazione: chiedere al'utente la stazione di partenza, la stazione di arrivo e il modo di ricerca.
Il modo di ricerca può essere una delle opzioni del punto B.
Il software deve individuare il treno con le caratteristiche scelte dall'utente che abbiamo posti liberi,
decrementare il numero di posti liberi e generare un Codice Prenotazione di 6 caratteri alfanumerici casuali.
*/

//creo 10 oggetti treno vuoti
//creo due array vuoti dove vado a memorizzare i dati dei treni;
var RomaFirenze=[ ];
var MilanoRoma=[ ];
for(var i=0;i<10;i++){
  var treno={
    "codice_id":" ",
    "st_partenza":" ",
    "st_arrivo": " ",
    "durata":" ",
    "orario" : " ",
    "postiLiberi": " "
  }
  RomaFirenze[i]=treno;
  MilanoRoma[i]=treno;
}

var i=0;
do{
  for(i=0;i<10;i++ ){
//istruzioni che creano 10 treni da Milano a Roma
    RomaFirenze[i].codice_id=(Math.floor(Math.random()*10000)+1);
    RomaFirenze[i].st_partenza=("Roma");
    RomaFirenze[i].st_arrivo=("Firenze");
    RomaFirenze[i].durata=(Math.floor(Math.random()*60)+31);
    RomaFirenze[i].orario=Math.floor((Math.random()*24)+1) + (":") + (Math.floor((Math.random()*60)+1));
    RomaFirenze[i].postiLiberi=(Math.floor(Math.random()*450)+1);

//istruzioni che creano 10 treni da Milano a Roma
    MilanoRoma[i].codice_id=(Math.floor(Math.random()*10000)+1);
    MilanoRoma[i].st_partenza=("Milano");
    MilanoRoma[i].st_arrivo=("Roma");
    MilanoRoma[i].durata=(Math.floor(Math.random()*60)+31);
    MilanoRoma[i].orario=Math.floor((Math.random()*24)+1) + (":") + (Math.floor((Math.random()*60)+1));
    MilanoRoma[i].postiLiberi=(Math.floor(Math.random()*450)+1);

  }
  i++;
}while(i<10)

console.log("treni da roma a firenze : ", RomaFirenze);
console.log("treni da milano a Roma ", MilanoRoma);

//istruzioni che stampano i dati di un treno che parte da Roma e va a Firenze;
var primaPartenza=(24 + ":" + 59);
var p=0;
var minDurata=90;
var m=0;
var postiLib=450;
var k=0;

for(var i=0;i<RomaFirenze.length;i++){
  if(primaPartenza>RomaFirenze[i].orario){
    primaPartenza=RomaFirenze[i].orario;
    p++;
  }
  if(minDurata>RomaFirenze[i].durata){
    minDurata=RomaFirenze[i].durata;
    m++;
  }
  if(postiLib>RomaFirenze[i].postiLiberi){
    postiLib=RomaFirenze[i].postiLiberi
    k++;
  }
}
console.log("IL PRIMO TRENO CHE PARTE DA ROMA PER FIRENZE E' ID::", RomaFirenze[p].codice_id, "alle ore::", primaPartenza );
console.log("IL  TRENO PIU' VELOCE CHE PARTE DA ROMA PER FIRENZE E' ID::",  RomaFirenze[m].codice_id,  "alle ore::",  RomaFirenze[m].orario );
console.log("IL  TRENO CON PIU' POSTI LIBERI CHE PARTE DA ROMA PER FIRENZE E' ID::", RomaFirenze[k].codice_id, "alle ore::", RomaFirenze[k].orario );

//Prenotazione
//i questo caso le stazioni di partenza per semplificare da scegliere saranno solo Roma o Milano
//le opzioni di ricerca sono , trano che parte prima o treno piu' veloce;
var search=["primaPartenza", "minDurata"];


var control=false;

//istruzione do-while, il prog verifica il criterio di ricerca
do{
  var stazione=prompt("inserisci la stazione da dove vuoi partire:(scegli tra Roma o Milano):");
  var destinazione=prompt("inserisci la destinazione::");

  var ricerca=prompt("inserisci il criterio di ricerca fra quelle suggerite dal software, primaPartenza o minDirata");
  if(ricerca=="primaPartenza"){
    RomaFirenze[p].postiLiberi--;
    conrol=true;
  }
  else if(ricerca=="minDurata"){
    RomaFirenze[m].postiLiberi--;
    conrol=true;
  }
  else {
    alert("inserisci un  criterio di ricerca fra quelle suggerite dal software, premi ok, e reinserisci i dati");
    var control=false;
  }
}while(control=false)

var codicePrenotazione=alfanumerico();
//creo un array vuoto dove vado a memorizzare il codice della prenotazione

if(ricerca=="primaPartenza"){
  console.log("il treno che hai scelto e' :: id ", RomaFirenze[m].codice_id, "alle ore: ", RomaFirenze[m].orario );
}
else if(ricerca=="minDurata"){
  console.log("il treno che hai scelto e' :: id ", RomaFirenze[p].codice_id, "alle ore: ", RomaFirenze[p].orario );
}
console.log("il codice della prenotazione::", codicePrenotazione);








function alfanumerico(){
  var array=[];
  var casualarray=[];
  for(var i='a';i<'z';i++){
    array[i]=i;
  }
  for(var i=0;i<10;i++){
    array[i]=i;
  }
  for(var i=0;i<6;i++){
    casualarray.push(Math.floor(Math.random()*array.length)+1)
  }
  return casualarray.join(" ");


}

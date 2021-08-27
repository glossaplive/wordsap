var inputques = [
['Es … der Flughafen, Frankfurt.','ist','sind','bin','a'],
['SAP … eine IT-Firma.','seid','ist','sind','b'],
['Wir … Ingenieure.','seid','sind','ist','b'],
['Ich … nicht krank.','bist','ist','bin','c'],
['Deutschland, Schweiz und Österreich …. deutschsprachige Länder.','ist','seid','sind','c'],
['Der Kaffee … sehr heiß.','bist','sind','ist','c'],
['Sie … schön.','ist','seid','bist','a'],
['… du beschäftigt?','bist','bin','sind','a'],
['Orange und Mango … Früchte.','sind','seid','ist','a'],
['Eesa und Kana … Kinder.','ist','sind','seid','b'],
['Ich … das Buch.','nimm','nehme','nehmt','b'],
['Sie … keine Kartoffeln.','esse','esst','ißt','c'],
['Wir … ein Taxi.','brauchen','braucht','brauchst','a'],
['… du den Pass?','Habst','Haben','Hast','c'],
['Sie …. nicht.','rauchen','rauchst','rauche','a'],
['Tobias und Marc … die Schweiz.','besucht','besuche','besuchen','c'],
['Billy … in Berlin.','wohnst','wohne','wohnt','c'],
['Keert … in Düsseldorf als Programmiererin.','arbeitest','arbeitet','arbeiten','b'],
['Er … nach Stuttgart.','fährt','fahren','fahrt','a'],
['Sie … Hamburg sehr.','mag','mögt','magst','a'],
['Sydney ist … Stadt.','eine','ein','eines','a'],
['Joghurt ist im Kühlschrank.','der','die','das','a'],
['… Luft ist frisch.','das','der','die','c'],
['… Klima ist angenehm.','die','das','der','b'],
['Der Elefant ist … Tier.','eines','ein','eine','b'],
['Alpen ist … Berg.','ein','eine','eines','a'],
['Er ist … Informatiker.','kein','keine','keines','a'],
['Müller und Julia sind … Studenten.','keinen','keine','kein','b'],
['Es ist … Haus.','keines','kein','keine','b'],
['… Buch ist langweilig.','der','das','die','b'],
['Transaktion … nicht.','funktionierst','funktioniertet','funktioniert','c'],
['Scanner … nach Nummer.','suchst','sucht','suchen','b'],
['Sie … eine E-Mail …','haben…bekammen','hast…bekommen','haben…bekommen','c'],
['Wir … Beleg senden.','werden','waren','wurden','a'],
['Fehler … ','tritt auf','trett auf','trettet auf','a'],
['Der Computer … 5000€.','koste','kostet','kosten','b'],
['Ich … mit Bleistift.','schriebe','schriebte','schreibe','c'],
['Rußland … gegen Frankreich heute.','spiel','spielst','spielt','c'],
['Der Professor … nach USA.','fliegt','fliegst','flugt','a'],
['Sie … an.','ruft','rufst','rufest','a']
//['ques 15','optiona15','optionb15','optionc15','a']
];

correctanswers = [];

var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * (inputques.length-1));
    if(arr.indexOf(r) === -1) arr.push(r);
}
// console.log(arr);

for (ci=0;ci<10;ci++)
{
	tempci = ci+1;
	var quesci = 'quest'+tempci;
	var optaci = 'optiona'+tempci;
	var optbci = 'optionb'+tempci;
	var optcci = 'optionc'+tempci;
	// console.log(quesci+optaci+optbci+optcci);
	correctanswers[ci] = inputques[arr[ci]][4];
	document.getElementById(quesci).innerHTML = tempci+ '. ' +inputques[arr[ci]][0];
	document.getElementById(optaci).innerHTML = 'a) ' + inputques[arr[ci]][1];
	document.getElementById(optbci).innerHTML = 'b) ' + inputques[arr[ci]][2];
	document.getElementById(optcci).innerHTML = 'c) ' + inputques[arr[ci]][3];
}
console.log(correctanswers);
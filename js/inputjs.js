var inputques = [
['Es … der Flughafen, Frankfurt.','ist','sind','bin','a'],
['SAP … eine IT-Firma.','seid','ist','sind','b'],
['Wir … Ingenieure.','seid','sind','ist','b'],
['Ich … nicht krank.','bist','ist','bin','c'],
['Deutschland, Schweiz und Österreich …. deutschsprachige Länder.','ist','seid','sind','c'],
['Der Kaffee … sehr heiß.','bist','sind','ist','c'],
['Sie … schön.','ist','seid','bist','a'],
['… du beschäftigt?','Bist','Bin','Sind','a'],
['Orange und Mango … Früchte.','sind','seid','ist','a'],
['Eesa und Kana … Kinder.','ist','sind','seid','b'],
['Ich … das Buch.','nimm','nehme','nehmt','b'],
['Sie … keine Kartoffeln.','esset','esst','ißt','c'],
['Wir … ein Taxi.','brauchen','braucht','brauchst','a'],
['… du den Pass?','Habst','Haben','Hast','c'],
['Sie …. nicht.','rauchen','rauchst','rauchtest','a'],
['Tobias und Marc … die Schweiz.','besucht','besuche','besuchen','c'],
['Billy … in Berlin.','wohnst','wohnen','wohnt','c'],
['Keert … in Düsseldorf als Programmiererin.','arbeitest','arbeitet','arbeiten','b'],
['Er … nach Stuttgart.','fährt','fahren','fahrt','a'],
['Sie … Hamburg sehr.','mag','mögtet','magst','a'],
['Frankfurt ist … Weltstadt.','eine','ein','eines','a'],
['... Joghurt ist im Kühlschrank.','Der','Die','Das','a'],
['… Luft ist frisch.','Das','Der','Die','c'],
['… Klima ist angenehm.','Die','Das','Der','b'],
['Der Elefant ist … Tier.','eines','ein','eine','b'],
['Alpen ist … Berg.','ein','eine','eines','a'],
['Er ist … Informatiker.','kein','keine','keines','a'],
['Müller und Julia sind … Studenten.','keinen','keine','kein','b'],
['Es ist … Haus.','keines','kein','keine','b'],
['… Buch ist langweilig.','Der','Das','Die','b'],
['Transaktion … nicht.','funktionierst','funktioniertet','funktioniert','c'],
['Scanner … nach der Nummer.','suchst','sucht','suchen','b'],
['Sie … eine E-Mail …','haben…bekammen','hast…bekommen','haben…bekommen','c'],
['Wir … Beleg senden.','werden','waren','wurden','a'],
['Fehler … ','tritt auf','trett auf','trettet auf','a'],
['Der Computer … 5000€.','kostest','kostet','kosten','b'],
['Ich … mit Bleistift.','schrieben','schriebte','schreibe','c'],
['Rußland … gegen Frankreich heute.','spiel','spielst','spielt','c'],
['Der Professor … nach USA.','fliegt','fliegst','flugt','a'],
['Sie … an.','ruft','rufst','rufest','a'],
['Ich ... sagen','möchten','möchte','möche','b'],
['Er ... hören.','willt','wollt','will','c'],
['Wir ... jetzt gehen.','konnte','kannan','können','c'],
['... du auch kommen?','Sollst','Sollt','Sollen','a'],
['... ich hier fotografieren?','Durf','Darf','Dürf','b'],
['Nein, man ... hier nicht fotografieren.','durfen','darf','dürf','b'],
['Sie ... viel Wasser trinken.','muß','mußtest','mußt','a'],
['SAP ... Daten aus Oracle.','erhältst','erhältet','erhält','c'],
['Vennila ... in Italien.','lebt','lebe','leben','a'],	
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

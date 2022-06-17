const array2 = [
 "Ratnik ne treba osobnu povijest. Jednoga dana, shvativši da je više ne treba, ostaviti će je iza sebe.",
 "Život je neizmjeriv. Takvi smo i mi, a i svako živo biće koje živi na Zemlji.",
 "Kada stvari postanu nejasne, ratnik razmišlja o svojoj smrti. Jedino ideja o smrti očvršćuje naš duh. A smrt će mu reči: 'Sve je u redu, nisam te još dotaknula'. ",
 "Ratnik radi stvari zbog višeg cilja, a ne zbog osobne koristi.",
 "Akcije većine ljudi su usmjerene na osobni dobitak. Ratnikova djelovanja su u korist Duha.",
 "Duhovno se nudi i otkriva svakome istim intenzitetom i postojanošću. Jedino ratnik ima privilegiju da to i spozna.",
 "Ratnik mora uzgajati ideju da ima sve što mu je potrebno za delikatno putovanje kao što je život.",
 "Ono što ratniku treba je saznanje da živi. I to je sve što mu je potrebno.",
 "Ratnik ne dobiva svoje bitke razbijajući glavom zid. On ga zaobilazi ili preskače preko njega.",
 "Cilj šamanizma je promijeniti naše shvaćanje o svijetu. To se jedino može postići zaustavljanjem unutarnjeg monologa.",
 "Put šamana je put povratka. On se vraća iz nepoznatog sa trofejima za Duh. Znanje je jedan od njih.",
 "Svaki puta kada zaustavimo unutarnji monolog, svijet se urušava i otkriva nam se čudesnost, koja kao da je bila snažno čuvana našim vlastitim mislima.",
 "Znanje je najčudesnija stvar, pogotovo za ratnika. Znanje je za njega nešto što dolazi naglo, preplavljuje ga i potom odlazi.",
 "Ratnik razmišlja o sebi kao da je već mrtav. Stoga nema što izgubiti. Najgore mu se je već dogodilo, stoga je smiren. ",
 "Kada ratnik nauči zaustaviti unutarnji dijalog sve postaje moguće; najkompliciranije zamisli postaju ostvarive.",
 "Jedina opcija koju ratnik ima jest da radi konstantno i bezrezervno. U određenom momentu, upoznavajući put ratnika, moći će djelovati potpuno usklađeno. Samo stare navike mogu mu još stati na put...",
 "Kada ratnik naumi uspjeti u nečemu, uspjeh mora doći nježno. Uz puno uloženog truda, ali bez strasti ili opsesije.",
 "Postoje mnoge stvari koje ratnik može napraviti sada, a nije ih mogao napraviti u godinama prije. Te stvari nisu se promijenile, ali se promijenio njegov stav o sebi.",
 "Ratnik ne žali za svojim postupcima. Okarakterizirati neko svoje djelovanje kao dobro ili loše, bilo bi pridavanje neopravdanog značenja sebi i svojem djelovanju.",
 "Ratnik djeluje kao da zna apsolutno sve o tome što radi, čak i ako o situaciji ne zna ništa.",
 "Ratnik mora činiti tako, da svaka njegova akcija bude smislena. Inače neće ostati na ovome svijetu dovoljno dugo, kako bi se divio njegovim čudesima.",
 "Lovac-ratnik djeluje u skladu sa svijetom, ali je u isto vrijeme nevidljiv za svijet. On djeluje tiho, ostane koliko je potrebno i zatim odlazi jedva ostavljajući traga.",
 "Ratnik će biti i dostupan i nedostupan, prema potrebi. Besmisleno je biti dostupan čitavo vrijeme, isto kao što je besmisleno skrivati se, kada svi znaju da se skrivaš.",
 "Kada se ratnik odluči za akciju, mora je provesti do kraja i preuzeti odgovornost za svoje postupke. Prvo mora znati zašto to radi i odraditi naum sa sigurnošću, bez sumnji i žaljenja.",
 "Čovjek koji misli o sebi kao da je najvažnija osoba na svijetu, ne može cijeniti svijet oko sebe. Onaj koji vidi samo sebe, odvojen je od svega ostaloga.",
 "Ratnik uvijek, za razliku od prosječnog čovjeka, preuzima odgovornost za svoje postupke, čak i za one najtrivijalnije.",
 "Prosječan čovjek previše vremena troši na to da bi se sviđao sebi ili drugima. Ratniku se sve sviđa, i odabire što će mu se i kako sviđati.",
 "Nema praznine u životu ratnika. Sve je puno do ruba i sve je isto.",
 "Ratnik odabire put koji ima srca, i prolazi ga u cijelosti. Osjeća i raduje se jer zna da će život ionako brzo završiti i da ništa nije bitnije od nečeg drugog. ",
 "Ratnik živi djelujući. Ne razmišlja o svojim budućim djelovanjima, niti razmišlja o završenom djelu.",
 "Put ratnika je najbolji put. Ratnik možda brine i razmišlja prije djelovanja. Ali jednom kad je odluka donesena, on nastavlja svoj put ne razmišljajući o tome, jer zna da će morati donijeti još mnoge odluke u svojem životu.",
 "Ratnik zna da je samo čovjek ograničen vremenom. I zna da će neke stvari koje ga zanimaju ostati neistražene. Ali za njega to nije problem, to je samo šteta.",
 "Osjećaj samovažnosti čini čovjeka nespretnim i taštim. Ratnik mora biti prozračan i fluidan.",
 "Čovjek ima četiri neprijatelja. Strah, jasnoću koja proizlazi iz znanja, moć koja proizlazi iz dosljednosti na putu ratnika i starost. Prva tri se mogu kontrolirati. Ne i starost. Njezini efekti se mogu ublažiti, no ne i izbjeći.",
 "Svi su putevi isti. Nijedan ne vodi nigdje. Jedan vodi u šumu, drugi kroz šumu. Zato ratnik bira put koji ima srca, i prolazi ga u cijelosti. Takav put će prijeći s uživanjem i radošću, dok bi mu onaj drugi put samo oduzimao energiju i životnu radost. Zato si ratnik uvijek postavlja pitanje: 'Da li ovaj put ima srca?' ",
 "Ratnik ne pridaje preveliko značenje ljudskim djelovanjima, stoga se on ne može ljutiti na ljude. Ljudska djelovanja nikada ne mogu zasjeniti jednu činjenicu. Naš neizbježni susret s vječnošću.",
 "Ništa vrijedno na ovom svijetu se ne dobija na poklon. Za to je potrebno uložiti trud i vrijeme.",
 "Moć leži u vrsti znanja koju posjedujemo. Kakva je korist od znanja koje ne možemo upotrijebiti?",
 "Nijedno ljudsko djelovanje nije vrijednije od Svijeta. Zato je Svijet za ratnika neiscrpna zagonetka."]

 //array 39 članova

function myFunction2() {
let randomNumber2 = Math.floor(Math.random() * 39);
let randomTip2 = array2[randomNumber2];
document.getElementById("hrvatski").innerText= randomTip2;
}
myFunction2();

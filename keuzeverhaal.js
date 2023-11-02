const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function startStory() {
  console.log("Het verhaal van Spider-Man")
  console.log("")
  console.log("In het verhaal van Spider-Man speel jij de hoofdrol. Het verhaal bestaat uit stukjes en aan het eind van elk stukje kun je een keuze maken, die het vervolg van het  verhaal beïnvloedt. Volg zo je eigen pad door het verhaal en probeer één van de eindes te bereiken. Veel plezier!")
  console.log("")
  rl.question("Stukje 1: Je bent Peter Parker, beter bekend als Spider-Man. Je zit in je klaslokaal en luistert naar een saaie lezing van je docent. Plotseling voel je een rilling over je rug. Je Spider-Zintuig waarschuwt je dat er iets mis is.\nA) Je verontschuldigt je en rent uit de klas om te onderzoeken wat er aan de hand is. B) Je blijft zitten en besluit om je te concentreren op je studie.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part2();
    } else if (choice.toUpperCase() === 'B') {
      part3_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      startStory();
    }
  });
}

function part2() {
  console.log("")
  console.log("\u2800\u2800\u2880\u285F\u2880\u284F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u28E7\u2808\u28E7\u2800\u2800\r\n\u2800\u2800\u28FC\u2800\u28FC\u2847\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28BB\u2846\u28B8\u2846\u2800\r\n\u2800\u28B0\u28FF\u2800\u283B\u2827\u28E4\u2874\u28E6\u28E4\u28E4\u28E4\u28E0\u2876\u28E4\u28E4\u283E\u2817\u2808\u28FF\u2800\r\n\u2800\u283A\u28F7\u2876\u2816\u281B\u28E9\u28ED\u28FF\u28FF\u28FF\u28FF\u28FF\u28EF\u28ED\u2859\u281B\u2836\u28F6\u287F\u2803\r\n\u2800\u2800\u2800\u2880\u28E4\u283E\u288B\u28F4\u281F\u28FF\u28FF\u28FF\u285F\u28B7\u28EC\u2819\u28B7\u28C4\u2800\u2800\u2800\r\n\u2880\u28E0\u2874\u281F\u2801\u2800\u28FE\u2847\u2800\u28FF\u28FF\u28FF\u2847\u2800\u28FF\u2847\u2800\u2819\u2833\u28E6\u28C0\r\n\u28B8\u284F\u2800\u2800\u2800\u2800\u28BF\u2847\u2800\u28B8\u28FF\u28FF\u2801\u2800\u28FF\u2847\u2800\u2800\u2800\u2808\u28FF\r\n\u2800\u28F7\u2800\u2800\u2800\u2800\u28B8\u2847\u2800\u2800\u28BB\u2807\u2800\u2800\u28FF\u2807\u2800\u2800\u2800\u2800\u28FF\r\n\u2800\u28BF\u2800\u2800\u2800\u2800\u28B8\u2847\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u2800\u2800\u2800\u2800\u28B8\u284F\r\n\u2800\u2818\u2847\u2800\u2800\u2800\u2808\u28F7\u2800\u2800\u2800\u2800\u2800\u2880\u285F\u2800\u2800\u2800\u2800\u287E\u2800\r\n\u2800\u2800\u2839\u2800\u2800\u2800\u2800\u28BB\u2800\u2800\u2800\u2800\u2800\u28B8\u2807\u2800\u2800\u2800\u28B0\u2801\u2800\r\n\u2800\u2800\u2800\u2801\u2800\u2800\u2800\u2808\u2887\u2800\u2800\u2800\u2800\u285E\u2800\u2800\u2800\u2800\u2801\u2800\u2800")
  rl.question("Stukje 2: Je trekt je Spider-Man kostuum aan en slingert door de stad. Je voelt de aanwezigheid van een onbekende schurk.\nA) Je gaat je gevoel achterna. B) Je besluit eerst meer informatie te verzamelen.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part4();
    } else if (choice.toUpperCase() === 'B') {
      part5_B();
     } else {
        console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
        part2();
    }
  });
}

function part3_B() {
  console.log("")
  console.log("\u2800\u2800\u2800\u2800\u28C0\u28E0\u28E4\u28E4\u2824\u2800\u28A4\u28E4\u28C4\u2840\u2800\u2800\u2800\u2800\r\n\u2800\u2880\u2844\u281B\u281B\u288B\u28C9\u28E4\u28F4\u2846\u28E6\u28EC\u28C9\u28C9\u2801\u28A0\u2800\u2800\r\n\u28A0\u281F\u28F0\u284E\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u28FF\u28FF\u28FF\u285F\u28F0\u284C\u28B7\u2840\r\n\u2810\u28BE\u28FF\u28FF\u2858\u28FF\u28FF\u287F\u281F\u2803\u283F\u28FF\u287F\u28B1\u28FF\u28FF\u28E6\u28C3\r\n\u2800\u2800\u283B\u28FF\u2807\u2800\u28C0\u28E4\u28F4\u2847\u28F7\u28E6\u2880\u2858\u28FF\u28FF\u287F\u280B\r\n\u28B0\u28C4\u2840\u2800\u283A\u28E7\u28BB\u28FF\u28FF\u28C7\u28FF\u2887\u28FE\u28FF\u280E\u2889\u28F4\u2807\r\n\u2800\u28FF\u28FF\u28E6\u2840\u2818\u28A7\u28BB\u28FF\u28B8\u2887\u28FE\u281F\u2881\u28F4\u28FF\u28FF\u2800\r\n\u2840\u2838\u28FF\u28FF\u28FF\u28F6\u28C4\u2811\u28BB\u28A8\u281B\u2881\u28F4\u28FF\u28FF\u28FF\u2807\u2800\r\n\u28B0\u2840\u2819\u283F\u28FF\u283F\u280B\u2800\u2834\u2804\u2800\u2819\u283F\u28FF\u287F\u280B\u28F4\u2803\r\n\u2808\u28FF\u28F7\u2816\u28E0\u28C4\u2842\u2838\u283F\u2803\u281B\u28E2\u28C4\u28B2\u284E\u28B8\u285F\u2800\r\n\u2800\u2808\u28E5\u2848\u28BB\u287F\u28B0\u28F6\u28FF\u28FF\u28B8\u28FF\u28FF\u2817\u2840\u283F\u2801\u2800\r\n\u2800\u2800\u2839\u28FF\u28C6\u2801\u281F\u281B\u281B\u281B\u2806\u281B\u28F5\u28FF\u28FF\u2802\u2800\u2800\r\n\u2800\u2800\u2800\u2819\u287F\u28F0\u28FF\u28FF\u28FF\u28FF\u28C7\u28B8\u28FF\u287F\u2801\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u2818\u281F\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u281B\u280B\u2809\u2800\u2800\u2800\u2800\u2800\u2800\u2800")
  rl.question("Stukje 3: Je blijft zitten en probeert je op de les te concentreren. Dan krijg je een bericht op je telefoon: er is een bankoverval aan de gang.\nA) Je besluit toch naar de bankoverval te gaan. B) Je blijft in de klas, iemand anders zal het wel oplossen.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part6();
    } else if (choice.toUpperCase() === 'B') {
      part7_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part3_B();
    }
  });
}

function part4() {
  console.log("")
  rl.question("Stukje 4: Je gaat je gevoel achterna en komt uit bij een verlaten pakhuis. Plotseling word je aangevallen door Electro!\nA) Je probeert Electro te verslaan. B) Je probeert weg te komen en een nieuwe strategie te bedenken.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part8();
    } else if (choice.toUpperCase() === 'B') {
      part9_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part4();
    }
  });
}

function part5_B() {
  console.log("")
  rl.question("Stukje 5: Je besluit meer informatie te verzamelen en belt Ned, je beste vriend. Hij vertelt je dat Electro gezien is bij een verlaten pakhuis.\nA) Je gaat direct naar het pakhuis. B) Je verzamelt eerst speciale apparatuur om Electro te verslaan.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part10();
    } else if (choice.toUpperCase() === 'B') {
      part11_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part5_B();
    }
  });
}

function part6() {
  console.log("")
  rl.question("Stukje 6: Je komt bij de bank en ziet Sandman geldzakken stelen.\nA) Je valt Sandman direct aan. B) Je probeert eerst de burgers in veiligheid te brengen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part12();
    } else if (choice.toUpperCase() === 'B') {
      part13_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part6();
    }
  });
}

function part7_B() {
  console.log("")
  console.log("Stukje 7: Je blijft in de klas zitten en je concentreert je op je studie. Later hoor je dat de bankoverval is voorkomen door een andere superheld.");
  console.log("Einde 1: Je voelt je schuldig dat je er niet was om te helpen. Je vraagt je af of je wel geschikt bent om Spider-Man te zijn.");
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part7_B();
    }
  });
}


function part8() {
  console.log("")
  console.log("\u2800\u2800\u2880\u285F\u2880\u284F\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2808\u28E7\u2808\u28E7\u2800\u2800\r\n\u2800\u2800\u28FC\u2800\u28FC\u2847\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28BB\u2846\u28B8\u2846\u2800\r\n\u2800\u28B0\u28FF\u2800\u283B\u2827\u28E4\u2874\u28E6\u28E4\u28E4\u28E4\u28E0\u2876\u28E4\u28E4\u283E\u2817\u2808\u28FF\u2800\r\n\u2800\u283A\u28F7\u2876\u2816\u281B\u28E9\u28ED\u28FF\u28FF\u28FF\u28FF\u28FF\u28EF\u28ED\u2859\u281B\u2836\u28F6\u287F\u2803\r\n\u2800\u2800\u2800\u2880\u28E4\u283E\u288B\u28F4\u281F\u28FF\u28FF\u28FF\u285F\u28B7\u28EC\u2819\u28B7\u28C4\u2800\u2800\u2800\r\n\u2880\u28E0\u2874\u281F\u2801\u2800\u28FE\u2847\u2800\u28FF\u28FF\u28FF\u2847\u2800\u28FF\u2847\u2800\u2819\u2833\u28E6\u28C0\r\n\u28B8\u284F\u2800\u2800\u2800\u2800\u28BF\u2847\u2800\u28B8\u28FF\u28FF\u2801\u2800\u28FF\u2847\u2800\u2800\u2800\u2808\u28FF\r\n\u2800\u28F7\u2800\u2800\u2800\u2800\u28B8\u2847\u2800\u2800\u28BB\u2807\u2800\u2800\u28FF\u2807\u2800\u2800\u2800\u2800\u28FF\r\n\u2800\u28BF\u2800\u2800\u2800\u2800\u28B8\u2847\u2800\u2800\u2800\u2800\u2800\u2800\u28FF\u2800\u2800\u2800\u2800\u28B8\u284F\r\n\u2800\u2818\u2847\u2800\u2800\u2800\u2808\u28F7\u2800\u2800\u2800\u2800\u2800\u2880\u285F\u2800\u2800\u2800\u2800\u287E\u2800\r\n\u2800\u2800\u2839\u2800\u2800\u2800\u2800\u28BB\u2800\u2800\u2800\u2800\u2800\u28B8\u2807\u2800\u2800\u2800\u28B0\u2801\u2800\r\n\u2800\u2800\u2800\u2801\u2800\u2800\u2800\u2808\u2887\u2800\u2800\u2800\u2800\u285E\u2800\u2800\u2800\u2800\u2801\u2800\u2800")
  rl.question("Stukje 8: Je valt Electro aan, maar hij is te sterk en verslaat je.\nA) Je geeft je over en hoopt dat hij je zal sparen. B) Je gebruikt je laatste krachten om een stroomstoot te ontwijken en probeert te ontsnappen.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part14();
    } else if (choice.toUpperCase() === 'B') {
      part15_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part8();
    }
  });
}

function part9_B() {
  console.log("")
  console.log("\u2800\u2800\u2800\u2800\u28C0\u28E0\u28E4\u28E4\u2824\u2800\u28A4\u28E4\u28C4\u2840\u2800\u2800\u2800\u2800\r\n\u2800\u2880\u2844\u281B\u281B\u288B\u28C9\u28E4\u28F4\u2846\u28E6\u28EC\u28C9\u28C9\u2801\u28A0\u2800\u2800\r\n\u28A0\u281F\u28F0\u284E\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u28FF\u28FF\u28FF\u285F\u28F0\u284C\u28B7\u2840\r\n\u2810\u28BE\u28FF\u28FF\u2858\u28FF\u28FF\u287F\u281F\u2803\u283F\u28FF\u287F\u28B1\u28FF\u28FF\u28E6\u28C3\r\n\u2800\u2800\u283B\u28FF\u2807\u2800\u28C0\u28E4\u28F4\u2847\u28F7\u28E6\u2880\u2858\u28FF\u28FF\u287F\u280B\r\n\u28B0\u28C4\u2840\u2800\u283A\u28E7\u28BB\u28FF\u28FF\u28C7\u28FF\u2887\u28FE\u28FF\u280E\u2889\u28F4\u2807\r\n\u2800\u28FF\u28FF\u28E6\u2840\u2818\u28A7\u28BB\u28FF\u28B8\u2887\u28FE\u281F\u2881\u28F4\u28FF\u28FF\u2800\r\n\u2840\u2838\u28FF\u28FF\u28FF\u28F6\u28C4\u2811\u28BB\u28A8\u281B\u2881\u28F4\u28FF\u28FF\u28FF\u2807\u2800\r\n\u28B0\u2840\u2819\u283F\u28FF\u283F\u280B\u2800\u2834\u2804\u2800\u2819\u283F\u28FF\u287F\u280B\u28F4\u2803\r\n\u2808\u28FF\u28F7\u2816\u28E0\u28C4\u2842\u2838\u283F\u2803\u281B\u28E2\u28C4\u28B2\u284E\u28B8\u285F\u2800\r\n\u2800\u2808\u28E5\u2848\u28BB\u287F\u28B0\u28F6\u28FF\u28FF\u28B8\u28FF\u28FF\u2817\u2840\u283F\u2801\u2800\r\n\u2800\u2800\u2839\u28FF\u28C6\u2801\u281F\u281B\u281B\u281B\u2806\u281B\u28F5\u28FF\u28FF\u2802\u2800\u2800\r\n\u2800\u2800\u2800\u2819\u287F\u28F0\u28FF\u28FF\u28FF\u28FF\u28C7\u28B8\u28FF\u287F\u2801\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u2818\u281F\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u281B\u280B\u2809\u2800\u2800\u2800\u2800\u2800\u2800\u2800")
  rl.question("Stukje 9: Je weet te ontsnappen en belt Ned voor advies. Hij zegt dat water Electro's krachten kan verzwakken.\nA) Je gaat terug om met water te vechten. B) Je zoekt naar een andere manier om Electro te verslaan.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part16();
    } else if (choice.toUpperCase() === 'B') {
      part17_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part9_B();
    }
  });
}

function part10() {
  console.log("")
  rl.question("Stukje 10: Je gaat direct naar het pakhuis en wordt weer aangevallen door Electro.\nA) Je vecht terug, maar deze keer voorbereid. B) Je probeert hem te ontwijken en de situatie te analyseren.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part18();
    } else if (choice.toUpperCase() === 'B') {
      part19_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part10();
    }
  });
}

function part11_B() {
  console.log("")
  rl.question("Stukje 11: Met je speciale apparatuur ga je naar het pakhuis. Je ziet Electro en activeert je apparatuur.\nA) Je gebruikt je apparatuur om hem uit te schakelen. B) Je probeert hem eerst af te leiden voordat je je apparatuur gebruikt. \n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part20();
    } else if (choice.toUpperCase() === 'B') {
      part21_B();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part11_B();
    }
  });
}

function part12() {
  console.log("")
  rl.question("Stukje 12: Je valt Sandman aan, maar hij gebruikt zijn zandkrachten om je te verslaan.\nA) Je geeft je over en hoopt op het beste.\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      part22();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part12();
    }
  });
}

function part13_B() {
  console.log("")
  console.log("Stukje 13: Je brengt de burgers in veiligheid, maar hoort dat Sandman is ontsnapt.")
  console.log("Einde 2: Je voelt je verslagen, omdat Sandman is ontsnapt.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part13_B();
    }
  });
}

function part14() {
  console.log("")
  console.log("Stukje 14: Je geeft je over aan Electro. Hij besluit je te sparen, maar je moet beloven nooit meer in zijn weg te staan.")
  console.log("Einde 3: Je bent gespaard door Electro, maar je voelt je verslagen en vernederd.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part14();
    }
  });
}

function part15_B() {
  console.log("")
  console.log("Stukje 15: Het lukt je niet om te ontsnappen. Je bent in de handen van Electro, maar hij besluit je toch te sparen. ")
  console.log("Einde 3: Je bent gespaard door Electro, maar je voelt je verslagen en vernederd.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part15_B();
    }
  });
}

function part16() {
  console.log("")
  console.log("Stukje 16: Je gaat terug naar het pakhuis met waterballonnen en gooit ze naar Electro, waardoor zijn krachten verzwakken.")
  console.log("Einde 4: Je hebt Electro verslagen en de stad is weer veilig. Je voelt je een echte held.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part16();
    }
  });
}

function part17_B() {
  console.log("")
  console.log("Stukje 17: Na lang zoeken vind je een oude generator en gebruikt die om Electro's krachten op te zuigen.")
  console.log("Einde 4: Je hebt Electro verslagen en de stad is weer veilig. Je voelt je een echte held.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part17_B();
    }
  });
}

function part18() {
  console.log("")
  console.log("Stukje 18: Je vecht terug tegen Electro en weet hem deze keer te verslaan.")
  console.log("Einde 4: Je hebt Electro verslagen en de stad is weer veilig. Je voelt je een echte held.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part18();
    }
  });
}

function part19_B() {
  console.log("")
  console.log("Stukje 19: Je ontwijkt Electro en ziet een waterpijp aan de muur. je breekt het open en het water uit de waterpijp komt op Electro terecht en hij valt neer.")
  console.log("Einde 4: Je hebt Electro verslagen en de stad is weer veilig. Je voelt je een echte held.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part19_B();
    }
  });
}

function part20() {
  console.log("")
  console.log("Stukje 20: Je gebruikt je speciale apparatuur om Electro uit te schakelen.")
  console.log("Einde 4: Je hebt Electro verslagen en de stad is weer veilig. Je voelt je een echte held.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part20();
    }
  });
}

function part21_B() {
  console.log("")
  console.log("Stukje 21: Je leidt Electro af en gebruikt je speciale apparatuur om hem uit te schakelen.")
  console.log("Einde 4: Je hebt Electro verslagen en de stad is weer veilig. Je voelt je een echte held.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part21_B();
    }
  });
}

function part22() {
  console.log("")
  console.log("Stukje 22: Je geeft je over aan Sandman, maar net als hij je wil uitschakelen, arriveert de politie en rent Sandman weg.")
  console.log("Einde 2: Je voelt je verslagen, omdat Sandman is ontsnapt.")
  rl.question("Wil je opnieuw beginnen of stoppen? (A) Opnieuw beginnen, (B) Stoppen\n", function(choice) {
    if (choice.toUpperCase() === 'A') {
      startStory();
    } else if (choice.toUpperCase() === 'B') {
      console.log("Bedankt voor het spelen!");
      rl.close();
    } else {
      console.log("Ongeldige keuze. Je kunt alleen A of B invoeren. Probeer opnieuw.");
      part22();
    }
  });
}

startStory();


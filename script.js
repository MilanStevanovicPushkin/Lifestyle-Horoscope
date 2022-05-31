function readDate() {
	var dateControl = document.querySelector('input[type="date"]');
	//console.log(dateControl.value);
	var d = dateControl.valueAsDate;
	//var N = d.getDate();
	var N = d.getFullYear()+ d.getMonth() + d.getDate();
    
    return d;	
	}

function myFunction(){
	//alert("Page is loaded");
	
	document.getElementById('datePicker').valueAsDate = new Date();
	//console.log(document.getElementById('datePicker').getAttribute('value'));
	}
	
function readSign(){
	var znak = document.getElementById("signPicker");
	//console.log(znak);
    var M = parseInt(znak.value);
	//console.log(M);
	return M;
	
}

function predict(){
	document.getElementById("horoskop").style.display = "flex"; 
	
	const  kultura1= ["Vaš prijatelj", "Vaš partner", "Vaš apotekar", "Vaš ljubimac", "Vaša podsvest", "Vaš komšija", "Vaša frizerka", "Vaš rođak sa sela", "Vaša tetka iz Kanade", "Vaš šef", "Vaš đubretar", "Vaš pekar", "Vaš predsednik vlade", "Vaš sudski veštak", "Vaš omiljeni ruski pisac", "Vaša hipnotizerka", "Vaš astrolog", "Vaša simpatija iz školskih dana", "Vaš odžačar", "Vaš smrtni neprijatelj", "Vaš omiljeni rok bend", "Vaš bivši instruktor plivanja", "Saobraćajac sa obližnje raskrsnice", "Najbolja drugarica Vaše tetke", "Vaš pop sa venčanja", "Vaša unuka"];
	const  kultura2= ["gotivi", "mrzi", "krade", "lomi", "mazi", "ljubi", "provocira", "neguje", "kuva", "prodaje", "prska pesticidima", "gasi", "otpisuje", "odbacuje", "farba", "špijunira", "otkriva", "ubija", "prevrće", "preprodaje", "posmatra", "zakopava", "buši", "pretvara u zlato", "stavlja u džepove", "mota i puši"];
	const  kultura3= ["Vaš dvosed", "Vaš smisao za humor", "Vašu frizuru", "Vašu cigaretu", "Vašu dušu", "Vašu veru u bolje sutra", "Vašu tajnu", "Vaše parče zemlje", "Vašu mačku", "Vašu papučicu za kvačilo", "Vaš domaći zadatak", "Vaše prezime", "Vaš dnevnik", "Vašu kolekciju poštanskih marki", "Vašu omiljenu pesmu", "Vašu ružičastu košulju", "Vaše nervne slomove", "Vašu sreću", "Vašu DonCafe šolju", "Vašu pitu sa višnjama", "Vaš bezobrazluk", "Vaš ponos", "Vaš mali prst na levoj nozi", "Vaš bistar pogled", "Vašu omiljenu stilsku figuru", "Vašu rođendansku tortu"];
	
	const  sport1= ["Svakodnevno", "Prekosutra", "Pred spavanje", "Posle jela", "Jednom godišnje", "Svake srede", "Ili sada ili odmah", "Kad se setite", "Za vreme olimpijade", "U snu", "Na poluvremenu", "Po kiši", "Kad se probudite", "Bar jednom", "Posle treninga", "Kad god hoćete", "Ne verujte ljudima koji Vam kažu ovo:", "Kad dođete s posla", "Pre odlaska u crkvu", "Redovno", "Kad padne prvi sneg", "Prvog januara", "Kad se napijete", "Kad Vam je dosadno", "U PMS-u", "Kad ste umorni"];
	const  sport2= ["igrajte basket", "šutirajte penale", "plivajte 100m delfin stilom", "rešavajte šahovske probleme", "preskačite prepone", "bacajte koplje", "se takmičite u pijančenju", "se prijavite za maraton", "trčite za svojim snovima", "se oprobajte kao levoruki korektor", "dizajnirajte triko za ritmičku gimnastiku", "skočite u vodu na glavu", "skliznite niz gelender solitera", "jašite morskog psa", "vodite loptu a ne rat", "zategnite pojas na kimonou", "poštujte  svoje telo", "radite jogu (ili drogu)", "veslajte uzvodno", "igrajte tiket uživo", "pazite na start s leđa", "odigrajte dupli pas s Mesijem", "kupite opremu za badmington", "trenirajte skok s motkom", "navijajte za Zvezdu", "odigrajte partiju PES-a"];
	const  sport3= ["na atletskoj stazi", "na Rolan Garosu", "protiv Vanje Grbića", "preko Šakila O'Nila", "na jednoj nozi", "na zadnjem sedištu", "s Oliverom Jevtić", "na Ronaldovoj faci", "ali bez kokaina", "sa zadrškom", "jače nego ikad", "pred budnim okom trenera", "noseći naočare", "kroz prozor", "unazad", "kao Maradona", "uz komentar Ace Stojanovića", "bez faula", "iz što manje pokušaja", "i pohvalite se Noletu", "i pobedite sebe", "kod kuma na slavi", "zatvorenih očiju", "bez dlake na jeziku", "ljušteći krompir", "ali prvo vežite pertle"];

    const  vreme1= ["Danas velika vlažnost vazduha", "Pašće sneg", "Uhvatiće Vas grad", "Čeka Vas provala oblaka", "Šokiraće Vas sunce", "Obradovaće Vas duga", "Ohladiće Vas vetar", "Oporaviće Vas lepo vreme", "Naljutiće Vas grmljavina", "Zagolicaće Vas povetarac", "Doći će Vam glave meteoropatija", "Pašće Vam na glavu nebo", "Obasjaće Vas munje", "Faliće Vam čist vazduh", "U zoru rosa", "Uplašiće Vas zemljotres", "Poneće Vas plima", "Pritiska Vas gravitacija", "Velike klimatske promene", "Stiže zima", "Miris leta na Balkanu...", "Pazite da Vas ne pokupi tornado", "Iza ugla Vas čeka klizav teren", "Ne dozvolite da Vas iznenadi košava", "Ne da Vam mira sunčanica", "Otucava Vam biološki sat"];
	const  vreme2= ["sa elementima", "uz puno", "uz dodatak", "sa mestimičnim pojavama", "i mnogo", "bez previše", "uz nedostatak", "na severu, a u drugim krajevima biće", "uz naznake", "i ogromne količine", "uz pogubne posledice od", "i zato napravite barku punu", "s primesama", "i ponegde kiša", "uz blagi uspon uticaja", "uz drastičan pad intenziteta", "sa poplavom", "bez posledica, a uveče pojačanje", "a preporučuje se i zaobilazak", "baš kako volite, kao i približavanje", "odozdo, a odozgo navala", "i snaga da se izborite protiv", "uz postepenu eliminaciju", "naravno, a čuvajte se i", "po svoj prilici, a neće Vam dosaditi ni tona", "i sve Vas gura ka prizorima"];
	const  vreme3= ["suza radosnica", "salate od kupusa", "slatkih muka", "teških odluka", "novih nada", "dubokih ludosti", "prave ljubavi", "jahanja ka zapadu", "opijanja od apsinta", "čitanja između redova", "bajki Branka Ćopića", "kafe bez šećera", "zabavnih zagonetki", "cikličnih ponavljanja", "kućnog lečenja", "namagnetisanih ličnosti", "čudne energije", "zelenih površina", "energetskih vampira", "propalih izuma", "zabranjenog voća", "kisele vode", "manjka apetita", "dobroćudnih zmajeva", "lepljivih prstiju", "lajanja na zvezde"];	
	
	var d = readDate();
	var M = readSign();
	
	const kx = (d.getFullYear()+d.getDate()+M)%kultura1.length;
	const ky = (M*M*100+M+d.getDate())%kultura2.length;
	const kz = (d.getDate()*M*d.getFullYear())%kultura3.length;
    
	var kultura = kultura1[kx] + " " + kultura2[ky] + " " + kultura3[kz] +".";
	//console.log("Kultura: ", kultura);
	document.getElementById("kultura").innerHTML=kultura;
	
	const sx = (M*M*100+M+d.getDate())%sport1.length;
	const sy = (d.getDate()*M*d.getFullYear())%sport2.length;
	const sz = (d.getFullYear()+d.getDate()+M)%sport3.length;
    
	var sport = sport1[sx] + " " + sport2[sy] + " " + sport3[sz] +".";
	//console.log("Sport: ", sport);
	document.getElementById("sport").innerHTML=sport;
	
	const vx = (d.getDate()*M*d.getFullYear())%vreme1.length;
	const vy = (d.getFullYear()+d.getDate()+M)%vreme2.length;
	const vz = (M*M*100+M+d.getDate())%vreme3.length;
    
	var vreme = vreme1[vx] + " " + vreme2[vy] + " " + vreme3[vz] +".";
	//console.log("Vreme: ", vreme);
	document.getElementById("vreme").innerHTML=vreme;
	
	
	
}
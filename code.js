var a,b,c, non, who;
non = 1;

function nextCard(){
	
a = rendo(20);
b = rendo(20);
c = rendo(20);

document.getElementById('otch').innerHTML = a +" "+ b +" "+ c;


 if (non == 1 & (a == b & b == c)) {
	 
	 document.getElementById('typeCard').innerHTML = "ЛЕГЕНДАРНАЯ";
	 document.getElementsByClassName('card')[0].style.background = "#D86E72";
	 document.body.style.background = "#50292A";
	 non = 0;
	 genLeg();
 }
 
  if ((non == 1) & (((a == b) & (b!= c)) || ((b == c) & (a!= c)) || ((a == c) & (a!= b)))) {
	 non = 0;
	 document.getElementById('typeCard').innerHTML = "РЕДКАЯ";
	 document.getElementsByClassName('card')[0].style.background = "#A0B6FF";
	 document.body.style.background = "#323950";
	 genRed();
	 
 }
  if ((non == 1) & (a>b) & (c==6) ) {
	 
	 document.getElementById('typeCard').innerHTML = "МИСТИЧЕСКАЯ";
	 document.getElementsByClassName('card')[0].style.background = "#CA94D8";
	 document.body.style.background = "#4B3750";
	 non = 0;
	 genMis();
 }
 
 if (non == 1){
 document.getElementById('typeCard').innerHTML = "ЧАСТАЯ";
 document.getElementsByClassName('card')[0].style.background = "#B7FAB8";
 document.body.style.background = "#3B503B";
 genCha();
 non = 1;
 }
 
 non = 1;
}

function whatMan(){
	who = rendo(20);
	switch (who){
	case 1:	document.getElementById('textCard').innerHTML += " ИГРОКА СПРАВА ";
	break;
	case 2:	document.getElementById('textCard').innerHTML += " ИГРОКА СЛЕВА ";
	break;
	case 3:	document.getElementById('textCard').innerHTML += " ИГРОКА НАПРОТИВ ";
	break;
	case 4:	document.getElementById('textCard').innerHTML += " ИГРОКА СПРАВА ПРОТИВОПОЛОЖНОГО ПОЛА ";
	break;
	case 5:	document.getElementById('textCard').innerHTML += " ИГРОКА СЛЕВА ПРОТИВОПОЛОЖНОГО ПОЛА ";
	break;
	case 6:	document.getElementById('textCard').innerHTML += " ТОГО, КТО ВАМ НАИБОЛЕЕ СИМПОТИЧЕН ПРОТИВОПОЛОЖНОГО ПОЛА ";
	break;
	case 7:	document.getElementById('textCard').innerHTML += " ТОГО, КТО ВАМ НАИБОЛЕЕ СИМПОТИЧЕН СВОЕГО ПОЛА ";
	break;
	case 8:	document.getElementById('textCard').innerHTML += " ТОГО, КОГО ВЫ ЗНАЕТЕ ДОЛЬШЕ ВСЕГО В КОМПАНИИ ";
	break;
	case 9:	document.getElementById('textCard').innerHTML += " ТОГО, КОГО ВЫ ЗНАЕТЕ МЕНЬШЕ ВСЕГО В КОМПАНИИ ";
	break;
	case 10:	document.getElementById('textCard').innerHTML += " ИГРОКА С САМЫМ МАЛЕНЬКИМ НОСОМ ";
	break;
	case 11:	document.getElementById('textCard').innerHTML += " ИГРОКА С САМЫМ БОЛЬШИМ РАЗМЕРОМ НОГИ ";
	break;
	case 12:	document.getElementById('textCard').innerHTML += " ИГРОКА, В ЧЬЕМ ИМЕНИ ФАМИЛИИ И ОТЧЕСТВЕ В СУММЕ БОЛЬШЕ ВСЕГО БУКВ ";
	break;
	case 13:	document.getElementById('textCard').innerHTML += " ИГРОКА С САМЫМ НЕОБЫЧНЫМ ЦВЕТОМ ВОЛОС ";
	break;
	case 14:	document.getElementById('textCard').innerHTML += " ИГРОКА, КОТОРЫЙ МЕНЬШЕ ВСЕХ ПЬЕТ (НА ТВОЙ ВЗГЛЯД) ";
	break;
	case 15:	document.getElementById('textCard').innerHTML += " ИГРОКА, НА КОТОРОМ БОЛЬШЕ ВСЕГО ЭЛЕМЕНТОВ ОДЕЖДЫ ";
	break;
	case 16:	document.getElementById('textCard').innerHTML += " ИГРОКА САМОГО МАЛЕНЬКОГО РОСТА ";
	break;
	case 17:	document.getElementById('textCard').innerHTML += " ИГРОКА, ЧЬЕ ИМЯ БОЛЬШЕ ВСЕГО ПОХОЖЕ НА ИМЯ ТВОЕЙ МАМЫ ";
	break;
	case 18:	document.getElementById('textCard').innerHTML += " ЛЮБОГО ИГРОКА ";
	break;
	case 19:	document.getElementById('textCard').innerHTML += " КАЖДОГО ИГРОКА С ЦВЕТОМ ГЛАЗ КАК У ТЕБЯ ";
	break;
	case 20:	document.getElementById('textCard').innerHTML += " ИГРОКА СПРАВА ";
	break;
}
}

function rendo(i){
	
return Math.round( Math.random() * (i - 1) + 1) ;}

function genCha(){
	b = rendo(33);
	switch (b){
		case 1: document.getElementById('textCard').innerHTML = " ОБНИМИ ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p3.png)";
				break;
		case 2: document.getElementById('textCard').innerHTML = " ПОПРОБУЙ НАПИТОК ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p6.png)";
				break;
		case 3: document.getElementById('textCard').innerHTML = " ОТВЕТЬ НА ЛЮБОЙ ВОПРОС ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p5.png)";
				break;
		case 4: document.getElementById('textCard').innerHTML = " РАССМЕШИТЕ ВСЕХ ИГРОКОВ.<br/> не получилось - пей. ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p15.png)";
		break;
		case 5: document.getElementById('textCard').innerHTML = " ГОВОРИТЕ \"УРА ТОВАРИЩИ\" КАЖДЫЙ РАЗ КОГДА КТО-ТО ПЬЕТ ДО КОНЦА КРУГА";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p3.png)";
		break;
		case 6: document.getElementById('textCard').innerHTML = " НЕ ГОВОРИТЕ ГЛАСНЫЕ БУКВЫ ДО КОНЦА КРУГА";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p3.png)";
		break;
		case 7: document.getElementById('textCard').innerHTML = " РАССКАЖИ ИСТОРИЮ ПРО ";
				whatMan();
				document.getElementById('textCard').innerHTML += " , ОСТАЛЬНЫЕ ИГРОКИ ДОЛЖНЫ УГАДАТЬ, ПРАВДА ЭТО ИЛИ НЕТ";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p1.png)";
				break;
		case 8: document.getElementById('textCard').innerHTML = "ПРОЙДИ ВОКРУГ ВСЕХ, ИЗОБРАЖАЯ НАЛОГОВУЮ ИНСПЕКЦИЮ, ВЫИСКИВАЮЩУЮ НАРУШЕНИЯ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p7.png)";
				break;
		case 9: document.getElementById('textCard').innerHTML = "ПЕЙ И СКАЖ ТОСТ ЗА ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p7.png)";
				break;
		case 10: document.getElementById('textCard').innerHTML = "ПРОЧИТАЙ СТИХ ИЛИ ЕГО ЧАСТЬ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p7.png)";
				break;
		case 11: document.getElementById('textCard').innerHTML = " НАПОЙ ПЕСНЮ, КОТОРАЯ МОГЛА БЫ ТЕБЕ НАПОМНИТЬ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p13.png)";
				whatMan();
				break;
		case 12: document.getElementById('textCard').innerHTML = " ТАНЦУЙ ПОД ПЕРВЫЙ ТРЕК ИЗ ПЛЕЙ-ЛИСТА ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p13.png)";
				whatMan();
				break;
		case 13: document.getElementById('textCard').innerHTML = " ПОСТАВЬ СВОЙ АВТОГРАФ НА ТЕЛЕ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p1.png)";
				whatMan();
				break;
		case 14: document.getElementById('textCard').innerHTML = " РАССКАЖИ НАУЧНЫЙ ФАКТ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p10.png)";
				break;
		case 15: document.getElementById('textCard').innerHTML = " [ПОМОЩЬ ДРУГИХ ИГРОКОВ ПРИВЕТСТВУЕТСЯ] ОТПЕЙ НАПИТОК, ПОСТАВИВ ЕГО НА ЖИВОТ.  ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p16.png)";
				break;
		case 16: document.getElementById('textCard').innerHTML = " ГОВОРИ СЕКСУАЛЬНЫМ ГОЛОСОМ ДО КОНЦА КРУГА ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p2.png)";
				break;
		case 17: document.getElementById('textCard').innerHTML = " ОПИШИ ЛЮБОГО ИГРОКА ТРЕМЯ СЛОВАМИ. ЕСЛИ ЕГО НЕ УГАДАЛИ - ТЫ ПЬЕШЬ. ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p5.png)";
				break;
		case 18: document.getElementById('textCard').innerHTML = " БЕРИ РУКИ ";
				whatMan();
				document.getElementById('textCard').innerHTML += " И ИГРАЙ С НИМ В ЛАДУШКИ. ПРОИГРАВШИЙ ПЬЕТ ";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p8.png)";
				break;
		case 19: document.getElementById('textCard').innerHTML = " РАССКАЖИ ЗАБАВНУЮ НАСТОЯЩУЮ ИСТОРИЮ ИЗ СВОЕЙ ЖИЗНИ, С ПРИСУТСТВИЕМ ";
				whatMan();
				document.getElementById('textCard').innerHTML += " (НЕТ - ПЬЕШЬ) ";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p9.png)";
				break;
		case 20: document.getElementById('textCard').innerHTML = " УДАЧА. ТЯНИ КАРТУ ИЛИ ПЕРЕДАЙ ДЕВАЙС ЛЮБОМУ ИГРОКУ.  ";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p12.png)";
				break;
		case 21: document.getElementById('textCard').innerHTML = " РАССКАЖИ ИСТОРИЮ ИЗ ШКОЛЫ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p17.png)";
				break;
		case 22: document.getElementById('textCard').innerHTML = " РАССКАЖИ О СВОЕЙ САМОЙ ЭПИЧНОЙ ДРАКЕ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p9.png)";
				break;
		case 23: document.getElementById('textCard').innerHTML = " ДО КОНЦА КРУГА ПЬЕШЬ ВМЕСТО ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p6.png)";
				break;
		case 24: document.getElementById('textCard').innerHTML = " РАССКАЖИ О ЛУЧШЕМ ПОДАРКЕ НА СВОЙ ДР ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p11.png)";
				break;
		case 25: document.getElementById('textCard').innerHTML = " РАССКАЖИ О СВОЕМ САМОМ РОМАНТИЧНОМ ПОСТУПКЕ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p2.png)";
				break;
		case 26: document.getElementById('textCard').innerHTML = " КАК ДУМАЕШЬ, КАК ВЫГЛЯДИТ ЛЮБИМАЯ ИГРУШКА ";
				whatMan();
				document.getElementById('textCard').innerHTML += " ?";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p14.png)";				
				break;
		case 27: document.getElementById('textCard').innerHTML = " ИЗОБРАЗИ СМАЙЛИК ИЗ ВК, ЧТОБЫ ДРУГЕ ЕГО УГАДАЛИ. НЕ УГАДАЮТ, ПЬЕШЬ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p10.png)";
				break;
		case 28: document.getElementById('textCard').innerHTML = " РАССКАЖИ О СВОЕМ ПЕРВОМ ВПЕЧАТЛЕНИИ, КОГДА ТЫ УВИДЕЛ ";
				whatMan();
				document.getElementById('textCard').innerHTML += ". ИЗМЕНИЛОСЬ ЛИ ОНО ЗА ВРЕМЯ ЭТОЙ ИГРЫ? ";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p5.png)";
				break;
		case 29: document.getElementById('textCard').innerHTML = " РАССКАЖИ О КАКОЙ-НИБУДЬ НЕЛОВКОЙ ИСТОРИИ ИЗ СВОЕЙ ЖИЗНИ, ТЕАТРАЛЬНО ИЗОБРАЗИ ЕЕ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p15.png)";
				break;
		case 30: document.getElementById('textCard').innerHTML = " С КАКИМ АЛКОГОЛЕМ ТЫ АССОЦИИРУЕШЬ ";
				whatMan();
				document.getElementById('textCard').innerHTML += "?";
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p4.png)";
				break;
		case 31: document.getElementById('textCard').innerHTML = " РАССКАЖИ О ЛЮБОЙ ИСТОРИИ ИЗ СВОЕГО РАННЕГО ДЕТСТВА ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p4.png)";
				break;
		case 32: document.getElementById('textCard').innerHTML = " ТЫ НАЗЫВАЕШЬ ТЕМУ. ИГРОКИ ПО КРУГУ НАЗЫВАЮТ СЛОВА НА ЭТУ ТЕМУ. КТО ПЕРВЫЙ ЗАТУПИТ - ПЬЕТ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p17.png)";
				break;
		case 33: document.getElementById('textCard').innerHTML = " ЮРА КЛАССНЫЙ. МОЖЕТЕ ЛИСТАТЬ ДАЛЬШЕ.  ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p19.png)";
				break;
	}
	
}

function genRed(i){
		b = rendo(6);
	switch (b){
		case 1: document.getElementById('textCard').innerHTML = " НА ОДИН КРУГ ОТДАЙ СВОЙ И ЗАБЕРИ СЕБЕ НАПИТОК  ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p16.png)";
				break;
		case 2: document.getElementById('textCard').innerHTML = " ВЫПЕЙ ЗАЛПОМ НАПИТОК ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p6.png)";
				break;
		case 3: document.getElementById('textCard').innerHTML = " АНОНИМНОЕ ГОЛОСОВАНИЕ. ПОБЕДИТЕЛЬ ПЬЕТ. ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p6.png)";
				break;
		case 4: document.getElementById('textCard').innerHTML = " НАРИСУЙ ПОРТРЕТ ";
		whatMan();
		document.getElementById('textCard').innerHTML += ". У ТЕБЯ ЕСТЬ ОДИН КРУГ НА ЭТО. НЕ ПОЛУЧИЛОСЬ - ПЬЕШЬ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p1.png)";
		break;
		case 5: document.getElementById('textCard').innerHTML = " ЗАДАЙ ЛЮБОЙ ВОПРОС ДЛЯ ";
		whatMan();
		document.getElementById('textCard').innerHTML += ", ОН ОБЯЗАН ОТВЕТИТЬ ПРАВДУ. ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p5.png)";
		break;
		case 6: document.getElementById('textCard').innerHTML = " ПОЦЕЛУЙ В ЩЕЧКУ ";
		whatMan();
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p2.png)";
		break;
		
	}
	
	
}

function genMis(i){
			b = rendo(4);
	switch (b){
		case 1: document.getElementById('textCard').innerHTML = " ВЫ ПРЕЗЕДЕНТ. ВЫ МОЖЕТЕ ВЫБИРАТЬ, НА КОГО БУДЕТ НАПРАВЛЕНО ДЕЙСТВИЕ ЛЮБОЙ КАРТЫ ПОКА НЕ ВЫПЬЕТЕ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p7.png)";
				break;
		case 2: document.getElementById('textCard').innerHTML = " ВСЕ ИГРОКИ НАЗЫВАЮТ ТЕБЯ ТАК И ТАКИМ ТОНОМ, КАК ТЫ СКАЖЕШЬ ДО КОНЦА ИГРЫ. КТО ОШИБАЕТСЯ - ПЬЕТ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p7.png)";
				break;
		case 3: document.getElementById('textCard').innerHTML = " СДЕЛАЙ МАКИЯЖ НА ЛИЦЕ ";
				whatMan();
		document.getElementById('textCard').innerHTML += " ИЗ ПОДРУЧНЫХ СРЕДСТВ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p1.png)";
				break;
		case 4: document.getElementById('textCard').innerHTML = " СНИМИТЕ ЛЮБОЙ ЭЛЕМЕНТ ОДЕЖДЫ ЗУБАМИ С  ";
		whatMan();
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p14.png)";
		break;
		
	}
	
}

function genLeg(i){
				b = rendo(3);
	switch (b){
		case 1: document.getElementById('textCard').innerHTML = " ЗАГАДАЙ ЛЮБОЕ ЖЕЛАНИЕ ДЛЯ";
				whatMan();
		document.getElementById('textCard').innerHTML += " . ЕСЛИ ОН НЕ ВЫПОЛНЕТ - ПЬЕТ. ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p9.png)";
				break;
		case 2: 
		document.getElementById('textCard').innerHTML = " ТЫ МОЖЕТЕ ОТМЕНИТЬ ДЕЙСТВИЕ ЛЮБЫЫХ ТРЕХ КАРТ ";
		document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p9.png)";
				break;
		case 3: document.getElementById('textCard').innerHTML = " ИММИТИРУЙ ИЗНАСИЛОВАНИЕ ";
				whatMan();
				document.getElementsByClassName('pic')[0].style.backgroundImage= "url(p2.png)";
				break;
		
	}
	
	
}

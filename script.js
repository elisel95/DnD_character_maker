// on click on random -> create a random character
$("#random").click(function(){

	//function random
	function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
	}
	
	//NAMES
	//list of names (First and last name)
	let fName =["Christopher", "Joe", "John", "Frederick", "Noah", "Connor", "Aiden", "Anthony", "Ashton", "Jamar", "Kason", "Ignacio", "Brady", "Ishaan", "Josh", "Jay", "Arthur", "Lewis", "Cash", "Alejandro", "Keaton", "Russell", "Elias", "Sean", "Daniel", "Hayden", "Tristian", "Rowen", "Jon", "Reginald", "Louis", "William", "Zachary", "Archie", "Ollie", "Maximus", "Abdullah", "Mitchell", "Jamir", "Konnor", "Leo", "Joseph", "Ellis", "Ben", "Mason", "Zain", "Walker", "Asher", "Conrad", "Jimmy", "Charlie", "Riley", "Harry", "Benjamin", "Rory", "Salvador", "Taylor", "Jovanni", "Randy", "Tommy", "Corey", "Tyler", "Jamison", "Sylas", "Karter", "Jax", "Emilio", "Gabriel", "Michael", "Scott", "Kayden", "Aidan", "Rowen", "Kohen", "Emmett", "Jorge", "Jeffrey", "Jonathan", "Ryan", "Finlay", "Oliver", "Jared", "Bryce", "Chad", "Mathew", "Eugene", "Billy", "Zak", "Alexander", "Johnny", "Graham", "Crew", "Layton", "Emerson", "Tom", "David", "Elliott", "Cameron", "Darian", "Blake","Abrigain","Allrianne","Armal","Astryn","Bailey","Bekka","Belle","Charlette","Dalmari","Eliysha","Etta","Fionne","Flora","Grace","Halex","Hope","Ingra","Lessie","Limmi","Lystra","Mae","Marasi","Marthin","Meryl","Myshalla","Porsha","Prudence","Ranette","Rosele","Sara","Seraye","Sesperina","Shella","Telsin","Vereta","Vinna","Alernath","Alloran","Arintol","Augustin","Barl","Brettin","Bren","Brill","Charetel","Doxon","Edwarn","Elors","Evhar","Aaron", "Abdul", "Abel", "Abigail", "Abraham", "Adalberto", "Adam", "Ben", "Bill", "Brad", "Carlos", "Carol", "Charlie", "Chris", "Chuck", "Clint", "Clinton", "Clyde", "Cody", "Colby", "Cole", "Colleen", "Coleman", "Coletta", "Colin", "Collette", "Concepcion", "Conchita", "Connie", "Conrad", "Contessa", "Dalton", "Dennis", "Derrick", "Dudley", "Elizabeth", "Elsa", "Eric", "Erin"];
	let lName =["Smith","Lincoln","Whitney","Gallup","Fox","Brown","Campbell","Hamilton","Wedgwood","Williams","Grant","Von Borcke","Regnier","Stewart","Daniels","Garner","Johnson","Eristoff","Von Below","Tuttle","Jones","Clark","Wilson","Potter","Peters","Dupont","Dupont","Martin","Sanchez","San Angielo","Garcia","Fernandez","Lopez","Gonzalez","Pérez","Diaz","Alvarez","Munoz","Romero","Petit","Martin","Dubois","Simon","Durand","Morin","Roussel","Muller","Maillard","Bailly","Collet","Julien","Leger","Prevost","Guyot","Poirier","Menard","Le Roux","Daniel","Craig","Glenn","Roy","Dunn","Bowie","Murphy","Kelly","Byrne","Ryan","O'Brien","Walsh","O'Sullivan","O'Connor","Abbas","Abdelli","Achour","Ait Ali","Masako","Akihito","Hirohito","Shoda","Komuro","Schmidt","Schneider","Fischer","Meyer","Weber","Hofman","Wagner"];
	
	var firstName = fName[getRandomInt(0, fName.length)];
	var lastName = lName[getRandomInt(0, lName.length)];
	
	//Show generated name and surname in the input
	$("#firstName").val(firstName);
	//console.log(firstName);
	$("#lastName").val(lastName);
	//console.log(lastName);
	//END NAMES

	//RACES AND CLASSES
	let races = ["Dwarf","Elf","Halfling","Human"];
	let classes = ["Bard","Cleric","Fighter","Rogue","Wizard"];
	
	let race = races[getRandomInt(0, races.length)];
	let classe = classes[getRandomInt(0, classes.length)];
	
	$("#race").append("<option value='"+race+"' selected>"+race+"</option>");
	$("#classe").append("<option value='"+classe+"' selected>"+classe+"</option>");

	//END RACES AND CLASSES
	
	//BACKGROUND & ALIGNMENT
	let backgrounds = ["Acolyte","Criminal","Entertainer","Soldier"];
	let alignments = ["Lawful Good","Neutral Good","Lawful Neutral","Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"];
	
	let background = backgrounds[getRandomInt(0, backgrounds.length)];
	let alignment = alignments[getRandomInt(0, alignments.length)];
	
	$("#background").append("<option value='"+background+"' selected>"+background+"</option>");
	$("#alignment").append("<option value='"+alignment+"' selected>"+alignment+"</option>");
	//END BACKGROUND & ALIGNMENT
	
	//ABILITY SCORE
	
	//Random int between 4 and 24 (4x dices(6) = ability score for each ability)
	let strength = getRandomInt(4,24);
	let dexterity = getRandomInt(4,24);
	let constitution = getRandomInt(4,24);
	let intelligence = getRandomInt(4,24);
	let winsdom = getRandomInt(4,24);
	let charisma = getRandomInt(4,24);
	
	//show the result in the form. 
	$("#strength").val(strength);	
	$("#dexterity").val(dexterity);	
	$("#constitution").val(constitution);	
	$("#intelligence").val(intelligence);	
	$("#winsdom").val(winsdom);	
	$("#charisma").val(charisma);	
	
	//SKILLS
	let skills = ["athletics","acrobatics","sleight of hand","stealth","arcana","history","investigation","nature","religion","animal handling","insight","medicine","perception","survival","deception","intimidation","performance","persuasion"];
	//END SKILLS
	
	//EQUIPMENT
	let armors = ["Leather Armor","Chain Mail","Light Armor"];
	let weapons = ["Hand Crossbow","Long Sword","Short Sword","Long Bow","Short Bow","Rapiers","Daggers"];
	
	let armor = armors[getRandomInt(0, armors.length)];
	let weapon = weapons[getRandomInt(0, weapons.length)];
	//END EQUIPMENT
	
	//CONDITION
	//We delete the picked classe & race 
	var myClasse = classes.indexOf(classe);
	if (myClasse !== -1) {
		classes.splice(myClasse, 1);
	};
	
	let myRace = races.indexOf(race);
	if (myRace !== -1) {
		races.splice(myRace, 1);
	};

	//CLASSES
	//WIZARD
	//If Wizard isn't in "classes" = it's the picked value and then we can work with it.
	var wizard = classes.indexOf("Wizard");
	if (wizard !== -1) {
	}else{
		$("#armor").append("<option value='' selected></option>");
		let weapons = ["Daggers", "darts", "slings", "quarterstaffs", "light crossbows"];
		let weapon = weapons[getRandomInt(0, weapons.length)];
		$("#weapons").append("<option value='"+weapon+"' selected>"+weapon+"</option>");
		let skills = ["arcana","history","investigation","religion","medicine","religion"];
	
		let s1 = skills[getRandomInt(0, skills.length)];
		$("#s1").val(s1);	
		var myIndex = skills.indexOf(s1);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		
		let s2 = skills[getRandomInt(0, skills.length)];
		var myIndex = skills.indexOf(s2);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		$("#s2").val(s2);
		
		let pv = 6 + constitution;
		$("#pv").val(pv);
	};
	//END WIZARD
	//ROGUE
	var rogue = classes.indexOf("Rogue");
	if (rogue === -1) {
		$("#armor").append("<option value='Light Armor' selected>Light Armor</option>");
		let weapons = ["Simple weapons", "hand crossbows", "longswords", "rapiers", "shortswords"];
		let weapon = weapons[getRandomInt(0, weapons.length)];
		$("#weapons").append("<option value='"+weapon+"' selected>"+weapon+"</option>");
		let skills = ["Acrobatics", "Athletics", "Deception", "Insight", "Intimidation", "Investigation", "Perception", "Performance", "Persuasion", "Sleight of Hand","Stealth"];
	
		let s1 = skills[getRandomInt(0, skills.length)];
		$("#s1").val(s1);	
		var myIndex = skills.indexOf(s1);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		
		let s2 = skills[getRandomInt(0, skills.length)];
		var myIndex = skills.indexOf(s2);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		$("#s2").val(s2);
		
		let pv = 8 + constitution;
		$("#pv").val(pv);
	};
	//END ROGUE
	//FIGHTER
	var fighter = classes.indexOf("Fighter");
	if (fighter === -1) {
		$("#armor").append("<option value='"+armor+"' selected>"+armor+"</option>");
		let weapons = ["Battleaxe", "Glaive", "longswords", "Lance", "Dagger"];
		let weapon = weapons[getRandomInt(0, weapons.length)];
		$("#weapons").append("<option value='"+weapon+"' selected>"+weapon+"</option>");
		let skills = ["Acrobatics", "Animal Handling", "Athletics", "History", "Insight", "Intimidation", "Perception", "Survival"];
	
		let s1 = skills[getRandomInt(0, skills.length)];
		$("#s1").val(s1);	
		var myIndex = skills.indexOf(s1);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		
		let s2 = skills[getRandomInt(0, skills.length)];
		var myIndex = skills.indexOf(s2);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		$("#s2").val(s2);
		
		let pv = 10 + constitution;
		$("#pv").val(pv);
	};
	//END FIGHTER
	//BARD
	var bard = classes.indexOf("Bard");
	if (bard === -1) {
		$("#armor").append("<option value='Light Armor' selected>Light Armor</option>");
		let weapons = ["hand crossbows", "longswords", "rapiers", "shortswords"];
		let weapon = weapons[getRandomInt(0, weapons.length)];
		$("#weapons").append("<option value='"+weapon+"' selected>"+weapon+"</option>");

		let s1 = skills[getRandomInt(0, skills.length)];
		$("#s1").val(s1);	
		var myIndex = skills.indexOf(s1);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		
		let s2 = skills[getRandomInt(0, skills.length)];
		var myIndex = skills.indexOf(s2);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		$("#s2").val(s2);
		
		let pv = 8 + constitution;
		$("#pv").val(pv);
	};
	//END BARD
	//CLERIC
	var cleric = classes.indexOf("Cleric");
	if (cleric === -1) {
		let armors = ["Medium Armor", "Light Armor"];
		let armor = armors[getRandomInt(armors)];
		$("#armor").append("<option value='"+armor+"' selected>"+armor+"</option>");
		let weapons = ["Dart", "Shortbow", "Club", "Spear", "Dagger"];
		let weapon = weapons[getRandomInt(0, weapons.length)];
		$("#weapons").append("<option value='"+weapon+"' selected>"+weapon+"</option>");
		let skills = ["History", "Insight", "Medicine", "Persuasion","Religion"];
	
		let s1 = skills[getRandomInt(0, skills.length)];
		$("#s1").val(s1);	
		var myIndex = skills.indexOf(s1);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		
		let s2 = skills[getRandomInt(0, skills.length)];
		var myIndex = skills.indexOf(s2);
		if (myIndex !== -1) {
			skills.splice(myIndex, 1);
		}
		$("#s2").val(s2);
		
		let pv = 8 + constitution;
		$("#pv").val(pv);
	};
	//END CLERIC
	//RACES	
	var dwarf = races.indexOf("Dwarf");
	if (dwarf === -1) {
		$("#s3").val("Languages : Common & Dwarvish");
	};
	
	var elf = races.indexOf("Elf");
	if (elf === -1) {
		$("#s3").val("Languages : Common & Elvish");
	};
	
	var halfling = races.indexOf("Halfling");
	if (halfling === -1) {
		$("#s3").val("Languages : Common & Halfling");
	};
	
	var human = races.indexOf("Human");
	if (human === -1) {
		let languages = ["Dwarvish","Halfling","Elvish"];
		let language = languages[getRandomInt(0, languages.length)];
		$("#s3").val("Languages : Common & "+language+"");
	};
	//END RACES
	
	//END CONDITION
});

//END FUNCTION RANDOM

//GO BUTTON
$("#go").click(function(){
	
	//Collect value
	let firstName = $("#firstName").val();
	let lastName = 	$("#lastName").val();
	let pv = $("#pv").val();
	let race = $("#race").val();
	let classe = $("#classe").val();
	let background = $("#background").val();
	let alignment = $("#alignment").val();
	let strength = $("#strength").val();	
	let dexterity = $("#dexterity").val();	
	let constitution = $("#constitution").val();	
	let intelligence = $("#intelligence").val();	
	let winsdom = $("#winsdom").val();	
	let charisma = $("#charisma").val();
	let s1 = $("#s1").val();
	let s2 = $("#s2").val();
	let s3 = $("#s3").val();
	let armor = $("#armor").val();
	let weapon = $("#weapons").val();	
	
	//show them in html
	$(".main").html(
	
		"<h1 style='text-align:center;'>"+firstName+" "+lastName+"</h1><br><div style='text-align:center;' class='row'><p>"+pv+" hp  |  "+race+"  |  "+classe+"  |  "+background+"  |  "+alignment+"</p><br> <hr> <h3>Ability</h3><div class='col-6'><ul style='list-style-type:none;'><li>Strength : "+strength+"</li><li>Dexterity : "+dexterity+"</li><li>Winsdom : "+winsdom+"</li></ul></div><div class='col-6'><ul style='list-style-type:none;'><li>Constitution : "+constitution+"</li><li>Intelligence : "+intelligence+"</li><li>Charisma : "+charisma+"</li></ul></div><br><hr><h3>Skills</h3><div class='col-4'>"+s1+"</div><div class='col-4'>"+s2+"</div><div class='col-4'>"+s3+"</div><br><br><hr><h3>Equipment</h3><div class='col-6'>"+armor+"</div><div class='col-6'>"+weapon+"</div><br><br><br><button id='print' type='button' class='btn btn-outline-secondary'>Print it !</button></div>"
	);
	
	//print function
	$("#print").click(function(){
		window.print();
	});
});
//END GO BUTTON
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
	//console.log(race);
	$("#classe").append("<option value='"+classe+"' selected>"+classe+"</option>");
	//console.log(classe);
	//END RACES AND CLASSES
	
	
});
//END FUNCTION RANDOM
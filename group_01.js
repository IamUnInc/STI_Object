var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

 var employees = [atticus, jem, boo, scout];

employees.forEach(function(newPer){

var obj = new newPerson(newPer[0], newPer[1], newPer[2], newPer[3]);
//newPerson converts arrays into objects
	function newPerson(objnam, objbonus, objsal, objnum) {
	  this.nam = objnam;
	  this.bonus = objbonus;
	  this.sal = objsal;
		this.num = objnum;
	};

	var personOne = obj;

	var empComp = [];

	empComp.push(personOne.nam);
	var sti;
	switch (personOne.num) {
		case 0:
		case 1:
		case 2: sti = 0;
		break;
		case 3: sti = 0.04;
		break;
		case 4: sti = 0.06;
		break;
		case 5: sti = 0.10;
		break;
	}
	if (personOne.bonus.length == 4) {
		sti += 0.05;
	}
	if (personOne.sal > 65000) {
		sti -= 0.01;
	}
	if (sti > 0.13) {
		sti = 0.13;
	}
	empComp.push(sti);

	empComp.push(parseInt(personOne.sal) + (personOne.sal * sti));
	empComp.push(Math.round(personOne.sal * sti));
	// console.log(empComp); //This will console log the output as an array
  // This line down will console log the output as an object with labels
	var ob = new person(empComp[0], empComp[1], empComp[2], empComp[3]);

		function person(objnam, objbonus, objsal, objnum) {
		  this.empName = objnam;
		  this.salaryPer = objbonus;
		  this.salaryTotal = objsal;
			this.empBonus = objnum;
		};

		var personTwo = ob;
		console.log(personTwo)
});

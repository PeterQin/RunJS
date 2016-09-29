function getdata (){
	return [
	  { key: "1",              name: "Don Meow",   source: "cat1.png" },
	  { key: "2", parent: "1", name: "Demeter",    source: "cat2.png" },
	  { key: "3", parent: "1", name: "Copricat",   source: "cat3.png" },
	  { key: "4", parent: "3", name: "Jellylorum", source: "cat4.png" },
	  { key: "5", parent: "3", name: "Alonzo",     source: "cat5.png" },
	  { key: "6", parent: "2", name: "Munkustrap", source: "cat6.png" }
	];
};
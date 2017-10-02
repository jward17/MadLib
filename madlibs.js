// Initialize variables
var sentence=[];
var replacements=[];
var index=0;
// initialize users
alert ("Filler, Go Away.");
alert ("End with shift+6(^)");
// fill sentence
populate(index, sentence, "word");
alert (sentence);
populate(index, replacements, "position");
// fill or specify positions
alert (replacements);
replace(index, sentence, replacements, "part of speech");
function populate(sindex, sarray, label){
	do{
		sarray[sindex]=prompt("Next "+label+"?");
		sindex = sindex+1;
	}
	while (sarray[sindex-1]!="^");
	console.log(sarray);
	sarray.splice(-1,1);
	return sarray;
}







function replace(sindex, sarray, rarray, label) {
	for sindex = 0; sindex < rarray.length; sindex++) {
		sarray[rarray[sindex]] = prompt("next "+label+"?");
	}
	return sarray;
}
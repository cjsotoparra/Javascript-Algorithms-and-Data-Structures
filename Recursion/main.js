let counter = 0;
function inception(){
	if(counter > 3){
		return "Done!";
	}

	counter++;
	return inception();
}

console.log(inception());

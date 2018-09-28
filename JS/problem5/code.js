// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var num = 0;

function smallDiv(){



	for(i=1; i<1000000000;i++){

	var num = i;


		for (j=1; j<=20; j++) {

			var trueCounts = 0;

			if(num%j==0){

				trueCounts = trueCounts + 1;
				//console.log(j);
				console.log(trueCounts);
				console.log("test");
			} else{
				break;
			}
		}

		if(trueCounts==20){

				console.log(num);
				break;	
		}

	}

console.log("end");

}

	


smallDiv();

//console.log("test");

 
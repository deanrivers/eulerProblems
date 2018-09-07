// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.


//return palindrome 9009



var num = 6;



function reverseString(str){
	var splitString = str.split("");

	var reverseArray = splitString.reverse();

	var joinArray = reverseArray.join("");

	//console.log(num.toString());

	

}






function palindrome(){

var currentBigNumeber = "";

for(i=1;i<=999;i++){



	for(j=1;j<=999;j++){

		
		var product = i*j;
		var textProduct = product.toString();
		var splitTextProduct = textProduct.split("");
		var reverseArray = splitTextProduct.reverse();
		var joinArray = reverseArray.join("");
		var reverseTextProduct = joinArray;
		
		//test if the normal text matches the reverse text
		if(textProduct === reverseTextProduct) {
		var biggestNumber = textProduct;
		

		//console.log("yes");
		//console.log(biggestNumber);

		if (i.toString().length == 3 & j.toString().length == 3 & biggestNumber > answer){

		var currentBigNumber = biggestNumber;
		var answeri = i;
		var answerj = j;

		}	

	
		
	} 

	if(currentBigNumber > biggestNumber){

		biggestNumber = currentBigNumber;
		var ith = i;
		var jth = j;


	}

	

	}
	



}



console.log(currentBigNumeber);
console.log(answeri);
console.log(answerj);














}

palindrome();


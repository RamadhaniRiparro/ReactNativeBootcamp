/* Soal No. 1 (Membuat kalimat)
Buatlah agar kata-kata ini menjadi satu kalimat */
var word = 'JavaScript '; 
var second = ' is '; 
var third = ' awesome '; 
var fourth = ' and '; 
var fifth = ' I '; 
var sixth = ' love '; 
var seventh = ' it! ';
console.log(word.concat(second).concat(third).concat(fourth).concat(fifth).concat(sixth).concat(seventh));
//atau
console.log(word + second + third + fourth + fifth + sixth + seventh );
console.log("------------------------------------" );


/* Soal No.2 Mengurai kalimat (Akses karakter dalam string) */
var sentence = "I am going to be React Native Developer"; 
 
var FirstWord = sentence[0] ; 
var SecondWord = sentence[2] + sentence[3]  ; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] + sentence[9];  
var fourthWord = sentence[11] + sentence[12];  
var fifthWord = sentence[14] + sentence[15];  
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21] ;  
var seventhWord = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28];  
var eighthWord = sentence[29] + sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38];  

console.log('First Word: ' + FirstWord); 
console.log('Second Word: ' + SecondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)

console.log("-----------------------------------")

/* Soal No. 3 Mengurai Kalimat (Substring) */
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14);   
var thirdWord2 = sentence2.substring(15, 17); 
var fourthWord2 = sentence2.substring(18, 20);  
var fifthWord2 = sentence2.substring(21, 25);  

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

console.log("-----------------------------------")

/* Soal No. 4 Mengurai Kalimat dan Menentukan Panjang String */
var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14);   
var thirdWord2 = sentence2.substring(15, 17); 
var fourthWord2 = sentence2.substring(18, 20);  
var fifthWord2 = sentence2.substring(21, 25);  

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);



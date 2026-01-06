// 20260106 

// different ways to link js file with html 

// 1.
//     <script src="./102.js"></script>

// write this in the head tag in the html file
// // Deficiency in this method 

// the html file goes to browser and the browsert parse(read) it line by line 
// when the browser reads this line <script src="./102.js"></script> 
// it loads the javascript file after complete loading js file browser will run(execute) the js file  and stop parsing the remainging html file 
// in the js file we were using many or some elements or properties or methods from the html file , so this will give errors as html file is still not parsed


// 2. we can load the js script just before the closing tag of body  <script src="./102.js"></script>

// the browser after parsing all the line reaches to the js script line , it loads the js file after loading then execute it

// Deficiency in this method
// this method is time consuming 
// Browser
// Parse html file , then
// Load the js file . then
// execute the js file


// 3      <script src="./102.js" async></script>

// write this in the head tag in the html file

// Browser
// start parsing(reading) the html file when it reaches the js script here it starts loading the js file also sees the keyword async in the script script tag so , it does not stop parsing . now parsing html and js files are loading asyncronosly(at a time). when browser have loaded the js file its starts executing the js file and stops parsing the remaining html file. the will cause errors like the first method


// 4      <script src="./102.js" defer></script>
//    // write this in the head tag in the html file
// Browser
// start parsing(reading) the html file when it reaches the js script here it starts loading the js file also sees the keyword defer in the  script tag so , it does not stop parsing . now parsing html and js files are loading asyncronosly(at a time, (Samultaneously)). when browser have loaded the js file it does not start executing the js file untill the html files parsing complete

// This is the best way to link js file to html

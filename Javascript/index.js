console.log('hello World');
    let myarray=[45,34,23];
    myarray[0]=56;
    console.log(myarray)
    let person={
        name:'Reginald',
        age:30
    };
    console.log(person)
    // Performing a task
    function greet(name,lastName){
        console.log('Hello ' + name + ' '+ lastName);
    
    }
    // Calculating a value
    function square(number){
       return  number * number;
    }
    greet('John','Smith');
    greet('kerry','Faith');
    greet('Leo','Sabb');
    console.log(square(12));
    
// var visitorName= prompt("what is your Name?");
   alert("Welcome "+visitorName);
   var message=("Hello "+visitorName+" Welcome to My Website");
   message=(message+" I am so glad you came to visit feel free to browse around.");
   document.write(message);
  
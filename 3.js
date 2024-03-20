//1


// let person={
//     name:"Jone",
//     age:20,
//     job:"developer"
// }
//person.name="mike";
//person1["from"]="russia"
//delete person1.year;
// console.log(person)




// let car={
//     brand:"toyota",
//     model:"camry",
//     year:2020,
//     color:"blue"

// }
//car.brand="porshe"
//car1.size="big";
//delete car1.brand;




//2


// function person(name,age,job){
//      this.name=name;
//     this.age=age;
//     this.job=job;
//  }


//  let person1 =new person("Max",24,"develorer")
// person1.name="Andrey"
//person1["from"]="russia"
//delete person1.year;
//  console.log(person1)





//  function car(brand,model,year,color){
//      this.brand=brand;
//     this.model=model;
//     this.year=year;
//     this.color=color;

//  }

//  let car1 =new car ("toyota","camry",2020,"black")
// car1["model"]="porshe"
// car1.size="big";
// delete car1.brand;
//  console.log(car1)




//методы объектов



// let person={
//     name:"Jone",
//     age:20,
//     greet:function(){
//         console.log("hello,"+this.name);
//     }
// }

// person.greet();






// let calculator={
//    a:5,
//    b:5,
//     add:function (){
//         return console.log (this.a + this.b)
//     }
// }

// calculator.add()



// let calculator2={
//     a:5,
//     b:5,
//      subtract:function (){
//          return console.log (this.a - this.b)
//      }
//  }
 
//  calculator2.subtract()



//  let calculator={
//     a:5,
//     b:5,
//      multiply:function (){
//          return console.log (this.a * this.b)
//      }
//  }
 
//  calculator.multiply()




//  let calculator={
//     a:5,
//     b:5,
//      divide:function (){
//          return console.log (this.a / this.b)
//      }
//  }
 
//  calculator.divide()




//  let car={
//     start:function(){
//         console.log("машина запущена")
//     }
//  }

//  car.start()



//  let car={
//     stop:function(){
//         console.log("машина не запущена")
//     }
//  }

//  car.stop()




 //прототипы обЪуктов


//  let person={
//     name:"",
//     age:0,
//     greet:function(){
//         console.log("hello,"+this.name);
//     }
// }

// let person1=Object.create(person);
// person1.name="lili";
// person1.age=23;
// person1.greet();


// let person2=Object.create(person);
// person2.name="vika";
// person2.age=25;
// person2.greet();



// let animal={
//     eat:function(){
//         console.log("животное кушает")
//     }
// }

// animal.eat()

// let dog= Object.create(animal);
// dog.eat()




// let shape={
//     draw:function(){
//         console.log("фигура рисуется")
//     }
// }

// shape.draw()

// let rectangle=Object.create(shape);
// rectangle.draw()


//массивы


// let r=["gg","ff"]
// let numbers=[1,2,3,4]
// let mix=["hi",23,true]


// const emp=new Array();
// const arrwithlen=new Array(5);
// console.log(emp);
// console.log(arrwithlen);



// const str = "hi";
// const arr= Array.from(str);
// console.log(arr)


// const ff={
//     length:3,
//     0:'a',
//     1:"n",
// }

// const fff=Array.from(ff)
// console.log(fff)









//методы массивов




// const numbers=[1,2,,34,,56,,78,9,8]
// numbers.pop()
// numbers.push(7)
// numbers.shift()
// numbers.unshift(77)
// console.log(numbers)




//slice



// const numbers=[1,2,3,4,5,6,7,8]
// const arr=numbers.slice(0,3)

// console.log(arr)



// let str=['banana',"orange","apple","cherry"]
// let gh=str.slice(0,3)

// console.log(gh)


// let str=['banana',"orange","apple","cherry","pear"]
// let gh=str.slice(2,5)

// console.log(gh)


// let str=['banana',"orange","apple","cherry","pear"]
// let gh=str.slice(1,4)

// console.log(gh)




// let person=["name","age","job"]
// let r=person.slice(0,2)

// console.log(r)


///splice


// const numbers=[1,2,3,4,5,6,7,8]
// const arr=numbers.splice(1)

// console.log(arr)



// let str=['banana',"orange","apple","cherry"]
//  let gh=str.splice(1)

//  console.log(gh)



//  let str=['banana',"orange","apple","cherry"]
//  str.splice(1,1)

//  console.log(str)


//  let str=["banana","orange","apple","cherry"]
//  str.splice(0,3)
 
//  console.log(str)


//  let person=["name","age","job"]
// person.splice(0,1)

// console.log(person)



////concat



// let str=["banana","orange","apple","cherry"]
// let person=["name","age","job"]

// let mix=str.concat(person)
// console.log(mix)




// const numbers=[1,2,3,4,5,6,7,8]
// const numbers2=[1,2,3,4,5,6,7,8]
// let n=numbers.concat(numbers2)
// console.log(n)



// let str=["hi,"]
// let e=["i am Markha"]
// let m=str.concat(e);
// console.log(m)


// let k=["klllll",88878]
// let d=["nm,lk",777]
// let f=k.concat(d)
// console.log(f)

// const numbers=[1,2,3,4,5,6,7,8]
// const number=[1,2,3]
// let n=numbers.concat(number)
// console.log(n)






/////map



// const numbers=[1,2,3];
// const dnumbers=numbers.map(function(number){
//     return number+1
// })

// console.log(dnumbers)

//  const str=["banana","apple","orange"]
//  const strs=str.map(function(word){
//     return word
//  }
//  )

//  console.log(strs)







// const numbers=[1,2,3];
// const dnumbers=numbers.map(function(number){
//     return number*number
// })

// console.log(dnumbers)





//  const str=["banana","apple","orange"]
// const strs=str.map(function(word){
//     console.log(word)
// }
//      )








///filter

// const numbers=[1,2,3,4,5];
// const dnumbers=numbers.filter(function(number)
// {
//     return number %2 ===0;
// })

// console.log(dnumbers)








// const numbers=["sssssss","snjklsk","kk"];
// const dnumbers=numbers.filter(function(number)
// {
//     return number.length>=5;
// })

// console.log(dnumbers)



///reduce


// const numbers=[1,2,3,4,5];
// const dnumbers=numbers.reduce(function(accum,carrent){
//     return accum+carrent;

// },0
// )
// console.log(dnumbers)



 





//  const numbers=[1,2,3,4,5];
// const dnumbers=numbers.reduce(function(accum,carrent){
//     return accum*carrent;

// },
// )
// console.log(dnumbers)







///sort


// const numbers=[1,2,3,4,5];
// numbers.sort(function(a,b){
//     return b-a;
// })
// console.log(numbers)




//foreach


// const numbers=[1,2,3,4,5];
// numbers.forEach(function(number){
//     console.log(number)
// })


// const str=["banana","apple","orange"]
// str.forEach(function(word){
//     console.log(word
//     )
// }
// )





/////find

// const numbers=[1,2,3,4,5,11]; 
// const num=numbers.find(function(number){
//      return number >10;

//  })
//  console.log(num)
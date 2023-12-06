// task 1

let arr = ["Tom", "Sam", "Ray", "Bob"];
let [x, y, , ...z] = arr ;
console.log(x);
console.log(y); 
console.log(z); 

// task 2

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
        };

    let concatArray = [...data.names, ...data.ages];
    console.log(concatArray)
    let [name1, name2, name3, name4, age1, age2, age3, age4] = concatArray;
    console.log(name2); 
    console.log(age2); 
    console.log(name4); 
    console.log(age4); 
    
// task 3

function mul(...args) {
    let valueOne = 1;

    args.forEach(value => {
        if(typeof value === 'number'){
            valueOne *= value;
        }
    });
    return valueOne !== 1 ? valueOne : 0;
  }
  
  console.log(mul(1, "str", 2, 3, true)); 
  console.log(mul(null, "str", false, true));

// task 4

let server = {
    data: 0,
       convertToString : function (callback) {
    callback(( ) => {
             return this .data + "";
    });
    },
    };
    let client = {
    server: server,
    result: "",
    calc: function (data) {
          this .server.data = data;
          this .server.convertToString ( this .notification ());
    },
    notification: function () {
          return (callback) => {
             this.result = callback();
    };
    },
    };
    client.calc (123);
    console.log( client.result ); 
    console.log( typeof client.result ); 
    

// task 5
function mapBuilder(keysArray, valuesArrays){
    return new Map(keysArray.map((key, index) => [key, valuesArrays[index]]));
}

let keys = [1, 2, 3, 4];
let values = ["div", "span", "b", " i "];
let map = mapBuilder (keys, values);
console.log( map.size ); 
	console.log( map.get (2)); 


let calc={
    'sum':function(){
        let  result = this.num1 + this.num2;
        console.log(result);
    },
    'mul':function(){
        let  result = this.num1 * this.num2;
        console.log(result);
    },
    'div':function(){
        let  result = this.num1 / this.num2;
        console.log(result);
    },
    'diff':function(){
        let  result = this.num1 - this.num2;
        console.log(result);
    },
    'mod':function(){
        let result = this.num1 % this.num2;
        console.log(result);
    },
    'sum_in_apply':function(a,b,c){
        let result = a + b +c;
        console.log(result);
    },

    'mul_in_apply':function(a,b,c){
        let result = a * b  *c;
        console.log(result);
    },
};

var set1={
    'num1':10,
    'num2':20,
};

var set2={
     array:[10,30,4],
};

var set3={
    'num1':30,
    'num2':40,
}

console.log("************Function Call**************");
console.log("sum of 10 and 20 is");
calc.sum.call(set1);
console.log("multipy of 10 and 20 is");
calc.mul.call(set1);
console.log("substraction of 10 and 20 is");
calc.diff.call(set1);
console.log("module of 10 and 20 is");
calc.mod.call(set1);


console.log("************Function Apply**************");
console.log("sum of 10 and 30 and 4");
calc.sum_in_apply.apply(set2,set2.array);
console.log("multiply of 10 and 30 and 4");
calc.mul_in_apply.apply(set2,set2.array);


console.log("************Function Bind**************");
console.log("sum of 30 and 40 is");
let new_sum=calc.sum.bind(set3);
new_sum();
console.log("multiply of 30 and 40 is");
let new_mul=calc.mul.bind(set3);
new_mul();
console.log("substraction of 30 and 40 is");
let new_diff=calc.diff.bind(set3);
new_diff();
console.log("mod of 30 and 40 is");
let new_mod=calc.mod.bind(set3);
new_mod(); 
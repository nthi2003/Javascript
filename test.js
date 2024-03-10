// const sole = (num) => {
//     if(num % 2 === 1)
//        return true
//     else return false
// }
// console.log(sole(5))
// var sachs = [
//     {
//         tacgia: 'Harper Lee',
//         tieuDe: 'To Kill a Mockingbrid',
//         namXuatBan: 2020,
//         trangthai: true
//     },
//     {
//         tacgia: 'Ray Bradbury',
//         tieuDe: 'Fahrenheit 451',
//         namXuatBan: 2020,
//         trangthai: false
//     }
// ]

// for (var i = 0; i < sachs.length; i++) { 
//     console.log(sachs[i].tieuDe);
// }
// const MinMax = () => {
//     var arr = [2,3,4,5];
//     let min = arr[0];
//     let max = arr[0];
//     for (let i = 1 ; i< arr.length; i++){
//             if(arr[i] < min){
//                 min = arr[i];
//             }
//             else if( arr[i] > max ) {
//                 max = arr[i];
//             }
       
//     }
//     return [max , min]
// }
// const [max , min] = MinMax();
// console.log( max , min )
// plussAll = () => {
//   var res = 0;
//   for (var i in arguments) {
//     res += arguments[i];
//   }
//   return res;

// }
// console.log(plussAll(1) + "<br/>")
// console.log(plussAll(2, 3, 5) + "<br/>")

// Findkeylong = (name) => {
//     let ten = name.split('');
//     let max = ten[0];
//     for(let i = 0 ; i<ten.length; i++){
//         if(max < ten[i]) {
//             max = ten[i];
//         }
//         console.log(max)
//     }
// }


// FindKeyLong2 = (name) =>{
//     let ten = "";
//     let max = 0;
//     name.trim().split('').forEach(e => {
//         max <= e.length ? (ten = e , max = e.length) : ten = ten 
//     });
//     console.log(ten)
// }
// FindKeyLong2('Nguyen Van dasdsda Thi')
// const a = () => {
//     b = 5
//     c = 4
//     return b + c

// }
// const MayTinh = () => {
//    d = this.b 
//    console.log(d)
// }
step1 = () => {
     te = "2"
    console.log(te)
}
step2 = () => {
     this.te
    step1()
}
step2(step1)
var te = "Quoc"

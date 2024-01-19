// Bài tập JS 17/1/2024

// Câu 1: Swich case
var x = 3
switch (x) {
    case 0:
        console.log('thu 2')
        break
    case 1:
        console.log('thu 3')
        break
    case 2:
        console.log('thu 4')
        break
    case 3:
        console.log('thu 5')
        break
    case 4:
        console.log('thu 6')
        break
    case 5:
        console.log('thu 7')
        break
    case 6:
        console.log('Chu nhat')
        break


}
// Câu 2: Swich case array
var x = 5;
var y = ["Thứ 2","Thứ 3","Thứ 4","Thứ 5","Thứ 6","Thứ 7","Chủ Nhật"];
switch(x){
    case 0:
        console.log(y[x - 5]);
        break;
      case 1:
        console.log(y[x - 4]);
        break;
      case 2:
        console.log(y[x - 3]);
        break;
      case 3:
        console.log(y[x - 2]);
        break;
      case 4:
        console.log(y[x - 1]);
        break;
      case 5:
        console.log(y[x + 0]);
        break;
      case 6:
        console.log(y[x + 1]);
        break;
}
 const kiemTra = (x) => {
    ktr = true;
    if (x < 2){
        ktr = false;
    }
    else{
        
        for (var i = 2; i < x-1; i++)
        {
            if (x % i == 0){
                ktr = false;
                break;
            }
        }
    }
 
 
    if (ktr == true) console.log(x + " là số nguyên tố")
    else console.log(x + " không phải là số nguyên tố ")
}
console.log(kiemTra(4))

// Câu 4: Nhị phan 3x3 
var z = [[1,1,0],[1,0,1],[0,1,1],[0,0,0]];
        for (var i = 0; i<4; i++){
            for (var j = 0; j<3; j++){
                console.log(z[i][j] + " ");
            }
            console.log("<br/>");
        }



// Câu 5 : kiểm tra email



const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let msg = []
  if (email.value === '' || email.value == null || !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    msg.push('email không hơp lệ')
  }

  if (password.value.length <= 10  ) {
    msg.push('Password phải dài hơn 10')
  }
  if ( password.value === '' ) {
    msg.push("Password không được để trống")
  }
   if( /[^a-zA-Z0-9]/.test(password.value)){
     msg.push('Password không chứa các kí tự đặc biệt')
   }


  if (msg.length > 0) {
    e.preventDefault()
    errorElement.innerText = msg.join(', ')
  }
})
//B1: Nhập vào số lượng sinh viên => nhập điểm cho từng sinh viên đó
//=> hiển thị ra xếp loại sinh viên: Giỏi (điểm >= 😎, khá (8< điểm <= 6.5), trung bình(6.5< điểm < 5)
//, còn lại là yếu
let n = parseInt(prompt("Nhập vào số lượng sinh viên: "))
console.log(n);
let A = [];
for (let i = 1; i <n+1; i++){
    A[i] = parseInt(prompt("Nhập vào Điểm của sinh viên thứ" + i+ " ( 0<= Điểm nhập vào <= 10)"));
    console.log(A[i]);
}
for (let i = 1; i < n+1; i++){
    if (A[i] >= 8){
        console.log("Sinh viên thứ "+i+' giỏi');

    }
    else if (A[i]>6.5 && A[i]<8){
        console.log("Sinh viên thứ "+i+" khá");
    }
    else if (A[i]<6.5 && A[i]> 5){
        console.log("Sinh viên thứ "+i+ " trung bình");
    }
    else{
        console.log("Sinh viên thứ "+i+ " yếu");
    }
}
//B2: Nhập vào 3 cạnh của tam giác
// hiển thị ra đó là tam giác đều, cân, vuông hay là tam giác thường
let B = [];
for (let i = 1; i <4; i++){
    B[i] = parseInt(prompt("Nhập vào độ dài cạnh thứ" +i +" của tam giác"));
}
if (B[1] == B[2] && B[1]== B[3]){
    console.log("Tam giác đã nhập là tam giác đều");
}
else if (B[2]*B[3] ==B[1]**2 || B[1]*B[3] == B[2]**2 || B[1]*B[2] == B[3]**2 ){
    console.log("Tam giác đã nhập là tam giác vuông");
}
else if (B[1] == B[2] || B[2]== B[3] || B[1]== B[3] ){
    console.log("Tam giác đã nhập là tam giác cân");
}
else {
    console.log("Tam giác đã nhập là tam giác thường");
}
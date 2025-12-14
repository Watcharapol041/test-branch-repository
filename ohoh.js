function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; 
    }
  }
  return true;
}

console.log("จำนวนเฉพาะตั้งแต่ 2 ถึง 20 ได้แก่:");
for (let i = 2; i <= 20; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
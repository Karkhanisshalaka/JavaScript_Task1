let isPrime=(num,flag=0) => {
 for(i = 2; i <= num - 1; i++)
    if (num % i == 0) {
        flag = false;
        break;
    }
    if (flag == true)
    console.log(num + " is prime");

    else
    console.log(num + " is not prime");
}
isPrime(5);
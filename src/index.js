const randomNumberGenerator = () => {
    let valueArr = [];
    for (let i = 0; i < 4 ; i++) {
        valueArr.push(Math.floor(Math.random() * 9));
    }
    let targetElementArr = document.getElementsByTagName("th");
    Object.keys(targetElementArr).forEach((element, i) => {
        targetElementArr[element].innerHTML = valueArr[i];
    });
}
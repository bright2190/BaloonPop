let noOfBaloon = document.getElementsByTagName("span").length
console.log(noOfBaloon)
let numbers = new Set()
for(let i = 0;i < noOfBaloon; i++ ){
    document.getElementsByClassName("span")[i].addEventListener("click", function(){

        document.getElementsByClassName("span")[i].style.backgroundColor = 'white'
        document.getElementsByTagName('p')[i].style.zIndex="0"
        
        
        numbers.add(i)
        console.log(numbers.size)
        if(numbers.size == 9){
            document.getElementsByClassName("container")[0].style.display = "none"
            document.getElementsByClassName('show')[0].innerHTML = " YOU HAVE POPPED ALL THE BALLOONS. "
        
        }

    })
   

}


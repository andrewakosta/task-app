const randomId = ()=>{
    let id = ''
    const letters =[
        'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
        't','b','w','x','y','z'
    ]

    function getRandomNumber (){
       return Math.random()*(letters.length - 1) + 1
    }

    for (let i = 0; i < 20; i++) {

        const index = parseInt(getRandomNumber())

        let letter = letters[index]

     


        if(i % 2 === 0){
            letter = letter.toUpperCase()
        }

        id += letter
    }
 
    return id
}

export default randomId
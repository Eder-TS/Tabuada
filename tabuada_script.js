function Tabuada(){
    var num = document.getElementById('num')
    var number = Number(num.value)

    var end = document.getElementById('end')
    var endpoint = Number(end.value)

    const answers = [endpoint]

    var answer = document.getElementById('answers')

    answer.innerHTML = '<p>A tabuada do ' + number + ' é:</p>'

    for (let index = 0; index <= endpoint; index++) {
        answers[index] = number * index

        answer.innerHTML += number + ' X ' + index + ' = ' + answers[index] + '<br>'
    }
    
}
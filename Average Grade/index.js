let gradeInput = document.getElementById('input-grade')
let submitBtn =  document.getElementById('submit')
let averageResult = document.getElementById('result')

const studentGrade = []
submitBtn.addEventListener('click', function(){
    let student = gradeInput.value
    if (student){
        studentGrade.push(Number(student))
        gradeInput.value = ''
        renderGrade()
    }
})

function renderGrade(){
    let html = ''

    studentGrade.forEach(function(grade){
        html += `
                    <li>${grade}</li>
                 `
    })

    let total = studentGrade.reduce(function(prev, curr){
        return prev + curr
    }, 0)

    let average = total / studentGrade.length

    html += `Total Grade: ${total} <br>
             Average Grade: ${average.toFixed(2)}%`

    averageResult.innerHTML = html
}

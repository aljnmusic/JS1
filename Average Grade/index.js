let gradeInput = document.getElementById('input-grade')
let units = document.getElementById('input-units')
let submitBtn =  document.getElementById('submit')
let averageResult = document.getElementById('result')

const studentGrade = []
const studentUnits = []
submitBtn.addEventListener('click', function(){
    let student = gradeInput.value
    let studentUni = units.value

    if (student){
        studentGrade.push(Number(student))
        studentUnits.push(Number(studentUni))

        gradeInput.value = ''
        units.value = ''
        renderGrade()
    }
})

// function convertToGWA(percentage) {
//     if (percentage >= 90) return 1.0
//     if (percentage >= 85) return 1.5
//     if (percentage >= 80) return 2.0
//     if (percentage >= 75) return 2.5
//     if (percentage >= 70) return 3.0
//     if (percentage >= 65) return 3.5
//     if (percentage >= 60) return 4.0
//     if (percentage >= 50) return 4.5
//     return 5.0  // Below 50% is 5.0 (Failing)
// }

function renderGrade(){
    let html = ''

    studentGrade.forEach(function(grade, index){
        html += `
                    <li>${grade}, ${studentUnits[index]} units</li>
                 `
    })

    let totalWeightScore = 0
    let totalUnits = 0
    let averageGrade = 0

    studentGrade.forEach(function(grade, index){
        averageGrade += grade
        totalWeightScore += grade * studentUnits[index]
        totalUnits += studentUnits[index]
    })

    let gwa = totalWeightScore / totalUnits


    html += `
        <br>Total Weighted Score: ${totalWeightScore} <br>
        Average Grade: ${(totalWeightScore / studentGrade.length).toFixed(2)}% <br>
        GWA: ${gwa.toFixed(2)}%
    `


    averageResult.innerHTML = html
}

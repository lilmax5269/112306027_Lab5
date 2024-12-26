// Function to add grades to the table
function addGrades() {
    let mathGrade = document.getElementById('math-grade').value;
    let englishGrade = document.getElementById('english-grade').value;

    // Check if grades are valid numbers
    if (isNaN(mathGrade) || isNaN(englishGrade) || mathGrade === "" || englishGrade === "") {
        alert("Please enter valid numeric values for both grades.");
        return;
    }

    // Convert grades to numbers
    mathGrade = parseFloat(mathGrade);
    englishGrade = parseFloat(englishGrade);

    // Calculate the average score for the row
    let rowAverage = (mathGrade + englishGrade) / 2;

    // Add the new row to the table
    let tableBody = document.getElementById('grades-table').getElementsByTagName('tbody')[0];
    let newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = mathGrade;
    newRow.insertCell(1).textContent = englishGrade;
    newRow.insertCell(2).textContent = rowAverage.toFixed(2);

    // Update the averages
    updateAverages();
}

// Function to update column-wise averages and overall average
function updateAverages() {
    let tableBody = document.getElementById('grades-table').getElementsByTagName('tbody')[0];
    let rows = tableBody.getElementsByTagName('tr');

    let totalMath = 0;
    let totalEnglish = 0;
    let totalAverage = 0;

    for (let i = 0; i < rows.length; i++) {
        let mathGrade = parseFloat(rows[i].cells[0].textContent);
        let englishGrade = parseFloat(rows[i].cells[1].textContent);
        let rowAverage = parseFloat(rows[i].cells[2].textContent);

        totalMath += mathGrade;
        totalEnglish += englishGrade;
        totalAverage += rowAverage;
    }

    let columnCount = rows.length;

    // Update the column averages
    document.getElementById('grades-table').getElementsByTagName('tfoot')[0].cells[0].textContent = (totalMath / columnCount).toFixed(2);
    document.getElementById('grades-table').getElementsByTagName('tfoot')[0].cells[1].textContent = (totalEnglish / columnCount).toFixed(2);

    // Update the overall average
    let overallAverage = totalAverage / columnCount;
    document.getElementById('overall-average').textContent = "Overall Average: " + overallAverage.toFixed(2);
}

const namesInput = document.getElementById('names');
const generateButton = document.getElementById('generate');
const resultDiv = document.getElementById('result');

generateButton.addEventListener('click', generateGroups);

function generateGroups() {
    const names = namesInput.value.trim().split('\n');
    const shuffledNames = shuffleArray(names);
    const groups = [];

    for (let i = 0; i < shuffledNames.length; i += 6) {
        groups.push(shuffledNames.slice(i, i + 6));
    }

    const tableHtml = generateTable(groups);
    resultDiv.innerHTML = tableHtml;
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function generateTable(groups) {
    let tableHtml = '<table>';
    tableHtml += '<tr><th>Group #</th><th>Names</th></tr>';

    for (let i = 0; i < groups.length; i++) {
        tableHtml += `<tr><td>${i + 1}</td><td>${groups[i].join(', ')}</td></tr>`;
    }

    tableHtml += '</table>';
    return tableHtml;
}
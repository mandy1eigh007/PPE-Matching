const tasks = document.querySelectorAll('.task');
const ppeOptions = document.querySelectorAll('.ppe');
const checkButton = document.getElementById('checkButton');
const result = document.getElementById('result');

ppeOptions.forEach(ppe => {
    ppe.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

tasks.forEach(task => {
    task.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    task.addEventListener('drop', (e) => {
        e.preventDefault();
        const ppeId = e.dataTransfer.getData('text/plain');
        const ppeElement = document.getElementById(ppeId);
        if (!task.querySelector('.ppe')) {
            task.appendChild(ppeElement);
        }
    });
});

checkButton.addEventListener('click', () => {
    let correct = 0;

    if (document.getElementById('task1').querySelector('#ppe1') &&
        document.getElementById('task1').querySelector('#ppe2')) {
        correct++;
    }
    if (document.getElementById('task2').querySelector('#ppe1') &&
        document.getElementById('task2').querySelector('#ppe3') &&
        document.getElementById('task2').querySelector('#ppe4')) {
        correct++;
    }
    if (document.getElementById('task3').querySelector('#ppe1') &&
        document.getElementById('task3').querySelector('#ppe5')) {
        correct++;
    }

    result.textContent = `You matched ${correct} out of 3 tasks correctly!`;
});

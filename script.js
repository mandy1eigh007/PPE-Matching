document.addEventListener('DOMContentLoaded', () => {
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
            if (!task.querySelector(`#${ppeId}`)) {
                task.appendChild(ppeElement);
            }
        });
    });

    checkButton.addEventListener('click', () => {
        let correct = 0;
        const taskPPEMap = {
            task1: ['ppe1', 'ppe2'],
            task2: ['ppe1', 'ppe3', 'ppe4'],
            task3: ['ppe1', 'ppe5']
        };

        Object.keys(taskPPEMap).forEach(taskId => {
            const taskElement = document.getElementById(taskId);
            const matchedPPE = taskPPEMap[taskId].every(ppeId => taskElement.querySelector(`#${ppeId}`));

            if (matchedPPE) {
                correct++;
            }
        });

        result.textContent = `You matched ${correct} out of ${Object.keys(taskPPEMap).length} tasks correctly!`;
    });
});

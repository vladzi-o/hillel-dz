let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

function formatArray(array) {
    return array
        .map(function(task){
            task[1] = task[1] / 60;
            return task
        })
        .filter(function(task) {
            return task[1] > 2;
        } )
        .map(function(task) {
            task[2] = task[1] * amount;
            return task;
        })
}
const formatedMonday = formatArray(monday);
const formatedTuesday = formatArray(tuesday);




// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:



// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2-х часов.
// Умножить результат на часовую ставку (amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:

document.write (
    `<table>
        <thead>
            <tr>
                <th>Task</th>
                <th>Duration</th>
                <th>Amount</th>
            </tr>
        </thead>
        <tbody>
            ${formatedMonday.concat(formatedTuesday).map(function(task) {
                return `
                <tr>
                    <td>${task[0]}</td>
                    <td>${task[1]}</td>
                    <td>${task[2]}</td>
                </tr>`
            }).join('')}
        </tbody>
    </table>`
)

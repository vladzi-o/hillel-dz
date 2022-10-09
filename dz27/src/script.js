import { API_URL, HEADERS } from "./config.js";

const studentsTable = document.querySelector("table");
const newStudentForm = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

async function renderTable() {
  renderHeader();
  const students = await fetchStudents();
  renderStudents(students);
}

function renderStudents(students) {
  const tableBody = document.createElement("tbody");
  students.forEach((student) => {
    const row = renderStudent(student);
    tableBody.appendChild(row);
  });
  studentsTable.appendChild(tableBody);
}

function renderHeader() {
  const tableHeader = document.createElement("tr");
  const _1to10 = [...Array(11).keys()].slice(1);
  tableHeader.innerHTML = `
    <th>Student</th>
    ${_1to10.map((number) => `<th class="mark">${number}</th>`).join("")}
  `;
  studentsTable.appendChild(tableHeader);
}

function renderStudent(student) {
  const row = document.createElement("tr");
  const cells = [];
  const nameCell = document.createElement("td");
  nameCell.innerHTML = `${student.name} ${student.email}`;
  cells.push(nameCell);

  student.marks.forEach((mark, index) => {
    const markCell = document.createElement("td");
    markCell.classList.add("mark");
    const markInput = document.createElement("input");
    markInput.type = "number";
    markInput.value = mark;
    markInput.addEventListener("blur", () => {
      const newMark = +markInput.value;
      if (newMark === mark) {
        return;
      }
      student.marks[index] = newMark;
      updateStudent(student);
    });
    markCell.appendChild(markInput);
    cells.push(markCell);
  });

  cells.forEach((cell) => row.appendChild(cell));
  return row;
}

async function fetchStudents(options = {}, id) {
  const response = await fetch(`${API_URL}${id ? `/${id}` : ""}`, {
    headers: HEADERS,
    ...options,
  });
  const data = await response.json();
  return data;
}

function updateStudent(student) {
  fetchStudents(
    {
      method: "PUT",
      body: JSON.stringify(student),
    },
    student.id
  );
}

async function createStudent(name, email) {
  const newStudentData = {
    name,
    email,
    marks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  };
  const newStudent = await fetchStudents({
    method: "POST",
    body: JSON.stringify(newStudentData),
  });
  const tableBody = document.querySelector("tbody");
  const newRow = renderStudent(newStudent);
  tableBody.appendChild(newRow);
}

newStudentForm.addEventListener("submit", () => {
  const name = nameInput.value;
  const email = emailInput.value;
  createStudent(name, email);
});

renderTable();

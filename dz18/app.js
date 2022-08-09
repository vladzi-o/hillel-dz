let usersBlock = document.querySelector(".users");

const roles = {
  admin: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  student: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  lector: "https://cdn-icons-png.flaticon.com/512/1424/1424450.png",
};

class Person {
  constructor({ name, age, role, img, courses }) {
    this.name = name;
    this.age = age;
    this.role = role;
    this.img = img;
    this.courses = courses;
  }

  renderInfo() {
    return `
      <div class="user">
        <div class="user__info">
          <div class="user__info--data">
            <img src="${this.img}" alt="${this.name}" height="50">
            <div class="user__naming">
              <p>Name: <b>${this.name}</b></p>
              <p>Age: <b>${this.age}</b></p>
            </div>
          </div>
          <div class="user__info--role student">
              <img src="${roles[this.role]}" alt="${this.role}" height="25">
              <p>${this.role}</p>
          </div>
        </div>
        ${this.courses ? this.renderCourses() : ``}
      </div>`;
  }

  renderCourses() {
    let allTitle = this.courses
      .map((el) => {
        return `<p class="user__courses--course ${this.role}">
          ${el.title} <span class="${grageUser(
          gradation,
          el.mark
        )}">${grageUser(gradation, el.mark)}</span>
        </p>`;
      })
      .join("");

    return `<div class="user__courses">${allTitle}</div>`;
  }
}

class Student extends Person {
  constructor(args) {
    super(args);
  }
}

class Admin extends Person {
  constructor(args) {
    super(args);
  }

  renderCourses() {
    let allTitle = this.courses
      .map(
        (el) =>
          `<div class="user__courses--course ${this.role}">
          <p>Title: <b>${el.title}</b></p>
          <p>Admin's score: <span class="${grageUser(
            gradation,
            el.score
          )}">${grageUser(gradation, el.score)}</span></p>
          <p>Lector: <b>${el.lector}</b></p>
        </div>`
      )
      .join("");

    return `<div class="user__courses admin--info">${allTitle}</div>`;
  }
}

class Lector extends Person {
  constructor(args) {
    super(args);
  }

  renderCourses() {
    let allTitle = this.courses
      .map((el) => {
        return `<div class="user__courses--course ${this.role}">
          <p>Title: <b>Front-end Pro</b></p>
          <p>Lector's score: <span class="${grageUser(
            gradation,
            el.score
          )}">${grageUser(gradation, el.score)}</span></p>
          <p>Average student's score: <span class="${grageUser(
            gradation,
            el.studentsScore
          )}">${grageUser(gradation, el.studentsScore)}</span></p>
        </div>`;
      })
      .join("");

    return `<div class="user__courses admin--info">${allTitle}</div>`;
  }
}

const ROLES = {
  student: (user) => new Student(user),
  admin: (user) => new Admin(user),
  lector: (user) => new Lector(user),
};

function renderUsers(array) {
  let users = array
    .map((user) =>
      ROLES[user.role] ? ROLES[user.role](user) : new Person(user)
    )
    .map((user) => {
      console.log(user);
      return user;
    })
    .map((user) => user.renderInfo())
    .join(``);

  usersBlock.innerHTML = users;
}
renderUsers(users);

function grageUser(gradationObject, mark) {
  let grade = `test Grade`;
  for (let key in gradationObject) {
    if (mark <= key) {
      grade = gradationObject[key];
      break;
    }
  }
  return grade;
}

const roles = {
  admin: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  student: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
  lector: "https://cdn-icons-png.flaticon.com/512/1424/1424450.png",
};

const gradation = {
  20: "satisfactory",
  55: "good",
  85: "very-good",
  100: "excellent",
};

const users = [
  {
    name: "Jack Smith",
    age: 23,
    img: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 20,
      },
      {
        title: "Java Enterprise",
        mark: 100,
      },
    ],
  },
  {
    name: "Amal Smith",
    age: 20,
    img: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    role: "student",
  },
  {
    name: "Noah Smith",
    age: 43,
    img: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 50,
      },
    ],
  },
  {
    name: "Charlie Smith",
    age: 18,
    img: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    role: "student",
    courses: [
      {
        title: "Front-end Pro",
        mark: 75,
      },
      {
        title: "Java Enterprise",
        mark: 23,
      },
    ],
  },
  {
    name: "Emily Smith",
    age: 30,
    img: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    role: "admin",
    courses: [
      {
        title: "Front-end Pro",
        score: 10,
        lector: "Leo Smith",
      },
      {
        title: "Java Enterprise",
        score: 50,
        lector: "David Smith",
      },
      {
        title: "QA",
        score: 75,
        lector: "Emilie Smith",
      },
    ],
  },
  {
    name: "Leo Smith",
    age: 253,
    img: "https://cdn-icons-png.flaticon.com/512/1388/1388863.png",
    role: "lector",
    courses: [
      {
        title: "Front-end Pro",
        score: 78,
        studentsScore: 79,
      },
      {
        title: "Java Enterprise",
        score: 85,
        studentsScore: 85,
      },
    ],
  },
];

class User {
  constructor(image, name, age, role, courses) {
    this.image = image;
    this.name = name;
    this.age = age;
    this.role = role;
    this.courses = courses;
  }

  render() {
    return `
    <div class="user">
      <div class="user__info">
        <div class="user__info--data">
          <img src="${this.image}" alt="${this.name}" height="50">
          <div class="user__naming">
            <p>Name: <b>${this.name}</b></p>
            <p>Age: <b>${this.age}</b></p>
          </div>
        </div>
        <div class="user__info--role ${this.role}">
          <img src="${roles[this.role]}" alt="${this.role}" height="25">
          <p>${this.role}</p>
        </div>
      </div>
      ${this.renderCourses()}
    </div>
    `;
  }

  renderCourses() {
    if (!this.courses) {
      return "";
    }
    return `
    <div class="user__courses">
      ${this.courses
        .map((course) => {
          const mark = this.markToGrade(course.mark);
          return `
            <p class="user__courses--course student">
              ${course.title} <span class="${mark}">Satisfactory</span>
            </p>
          `;
        })
        .join("")}
    </div>
    `;
  }

  markToGrade(mark) {
    if (mark <= 20) {
      return gradation[20];
    } else if (mark <= 55) {
      return gradation[55];
    } else if (mark <= 85) {
      return gradation[85];
    } else {
      return gradation[100];
    }
  }
}

class Admin extends User {
  renderCourses() {
    if (!this.courses) {
      return "";
    }
    return `
    <div class="user__courses admin--info">
      ${this.courses
        .map((course) => {
          const mark = this.markToGrade(course.score);
          return `
            <div class="user__courses--course admin">
              <p>Title: <b>${course.title}</b></p>
              <p>Admin's score: <span class="${mark}">${mark}</span></p>
              <p>Lector: <b>${course.lector}</b></p>
            </div>
          `;
        })
        .join("")}
    </div>
    `;
  }
}

class Lector extends User {
  renderCourses() {
    if (!this.courses) {
      return "";
    }
    return `
    <div class="user__courses admin--info">
      ${this.courses
        .map((course) => {
          const mark = this.markToGrade(course.score);
          return `
            <div class="user__courses--course lector">
              <p>Title: <b>${course.title}</b></p>
              <p>Lector's score: <span class="${mark}">${mark}</span></p>
              <p>Average student's score: <b>${course.studentsScore}</b></p>
            </div>
          `;
        })
        .join("")}
    </div>
    `;
  }
}

class Student extends User {}

document.write(`
  <div class="users">
    ${users
      .map((user) => {
        if (user.role === "student") {
          return new Student(
            user.img,
            user.name,
            user.age,
            user.role,
            user.courses
          );
        }
        if (user.role === "admin") {
          return new Admin(
            user.img,
            user.name,
            user.age,
            user.role,
            user.courses
          );
        }
        if (user.role === "lector") {
          return new Lector(
            user.img,
            user.name,
            user.age,
            user.role,
            user.courses
          );
        }
      })
      .map((user) => user.render())
      .join("")}
  </div>`);

TaskFlow - Get Things Done. Stay in Flow.

✨ Features
* Create, edit, and delete tasks
* Search and sort tasks
* Mark tasks as completed
* Responsive productivity dashboard
* MySQL-powered data storage

🛠️ Tech Stack
* Frontend: HTML, CSS, JavaScript, EJS
* Backend: Node.js, Express.js
* Database: MySQL (`mysql2`)
* Tools: Git, GitHub, npm

## 📂 Project Structure
```
TASKFLOW/
├── config/
├── controllers/
├── routes/
├── views/
├── public/
│   ├── css/
│   ├── images/
│   └── videos/
├── app.js
├── index.js
├── package.json
└── .env
```

 ⚙️ Installation
```bash
git clone https://github.com/priyanshu-ben-projects/taskflow.git
cd taskflow
npm install
node index.js
```
Open **http://localhost:3000** in your browser.

 🗄️ Database
```sql
CREATE DATABASE taskflow;

USE taskflow;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  task_date DATE,
  task_time TIME
);
```

 👨‍💻 Author
**Priyanshu Ben**
GitHub: https://github.com/priyanshu-ben-projects

# TaskFlow - Get Things Done. Stay in Flow.

✨ **Features**

* Create, edit, and delete tasks
* Search and sort tasks
* Mark tasks as completed
* Responsive productivity dashboard
* MySQL-powered data storage
* Cloud database deployment with Aiven
* Backend deployment with Render

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript, EJS
* **Backend:** Node.js, Express.js
* **Database:** MySQL (`mysql2`)
* **Database Hosting:** Aiven
* **Backend Hosting:** Render
* **Tools:** Git, GitHub, npm

## 📂 Project Structure

```text
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

## ⚙️ Installation

```bash
git clone https://github.com/priyanshu-ben-projects/taskflow.git
cd taskflow
npm install
node index.js
```

Open **http://localhost:3000** in your browser.

## ☁️ Deployment

### Database — Aiven

TaskFlow uses **MySQL hosted on Aiven** for cloud database storage.

The application connects to the Aiven MySQL database using environment variables:

```env
DB_HOST=your-aiven-host
DB_PORT=your-aiven-port
DB_USER=your-aiven-user
DB_PASSWORD=your-aiven-password
DB_NAME=your-database
```

### Backend — Render

The Node.js + Express.js application is deployed and hosted on **Render**.

**Build Command:**

```bash
npm install
```

**Start Command:**

```bash
node index.js
```

Environment variables for the Aiven MySQL database are configured in the Render dashboard.

## 🗄️ Database

TaskFlow uses MySQL with the following table structure:

```sql
CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  task_date DATE,
  task_time TIME,
  completed BOOLEAN NOT NULL DEFAULT FALSE
);
```

The production database is hosted on **Aiven**.

## 👨‍💻 Author

**Priyanshu Ben**

GitHub: https://github.com/priyanshu-ben-projects

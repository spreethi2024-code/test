# Full-Stack Monorepo Project

A complete full-stack web application demonstrating modern development practices with React, Spring Boot, and MySQL.

## 🏗️ Project Structure

```
/
├── frontend/          # React + TypeScript + Vite application
├── backend/           # Spring Boot + Java + Maven API
├── database/          # MySQL Docker configuration
└── README.md          # This file
```

## 🚀 Tech Stack

### Frontend
- **React 18** with **TypeScript**
- **Vite** for fast development and building
- **React Router** for client-side routing
- **Axios** for API communication
- Modern CSS with responsive design

### Backend
- **Spring Boot 3.5.4** with **Java 17**
- **Spring Web** for REST API
- **Spring Data JPA** for database operations
- **MySQL Connector/J** for database connectivity
- **Maven** for dependency management

### Database
- **MySQL 8.0** in Docker container
- **phpMyAdmin** for database management (optional)
- Sample data included

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn**
- **Java 17** or higher
- **Maven** (or use the included Maven wrapper)
- **Docker** and **Docker Compose**

## 🛠️ Setup and Installation

### 1. Clone and Setup

```bash
# Clone the repository (if from git)
git clone <repository-url>
cd full-stack-monorepo

# Or if you're starting with this project structure
cd /path/to/project
```

### 2. Database Setup

Start the MySQL database using Docker Compose:

```bash
cd database
docker-compose up -d
```

This will:
- Start MySQL 8.0 on port 3306
- Create the `fullstack_db` database
- Insert sample data
- Start phpMyAdmin on port 8081 (optional, for database management)

**Database Credentials:**
- Host: `localhost:3306`
- Database: `fullstack_db`
- Username: `fullstack_user`
- Password: `fullstack_password`
- Root Password: `root_password`

### 3. Backend Setup

```bash
cd backend

# Install dependencies and run the application
./mvnw spring-boot:run

# Or if you have Maven installed globally:
mvn spring-boot:run
```

The Spring Boot API will start on `http://localhost:8080`

**API Endpoints:**
- `GET /api/items` - Get all items
- `GET /api/items/{id}` - Get item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/{id}` - Update item
- `DELETE /api/items/{id}` - Delete item

### 4. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
```

The React application will start on `http://localhost:5173`

## 🚀 Running the Complete Application

### Option 1: Manual Startup (Recommended for Development)

1. **Start Database:**
   ```bash
   cd database && docker-compose up -d
   ```

2. **Start Backend:**
   ```bash
   cd backend && ./mvnw spring-boot:run
   ```

3. **Start Frontend:**
   ```bash
   cd frontend && npm run dev
   ```

### Option 2: Production Build

1. **Build Frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Build Backend:**
   ```bash
   cd backend
   ./mvnw clean package
   java -jar target/backend-0.0.1-SNAPSHOT.jar
   ```

## 🌐 Application URLs

- **Frontend Application:** http://localhost:5173
- **Backend API:** http://localhost:8080
- **API Documentation:** http://localhost:8080/api/items
- **Database (phpMyAdmin):** http://localhost:8081

## 📱 Features

### Frontend Features
- Modern, responsive UI with gradient design
- Home page with project overview
- Items page displaying data from API
- Error handling and loading states
- Client-side routing
- Real-time API communication

### Backend Features
- RESTful API with full CRUD operations
- JPA/Hibernate for database operations
- CORS configuration for frontend integration
- Automatic database schema generation
- Comprehensive error handling

### Database Features
- Dockerized MySQL setup
- Sample data initialization
- phpMyAdmin for easy database management
- Persistent data storage

## 🔧 Development Commands

### Frontend Commands
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend Commands
```bash
cd backend
./mvnw spring-boot:run              # Run application
./mvnw clean compile                # Compile
./mvnw clean package                # Build JAR
./mvnw test                         # Run tests
```

### Database Commands
```bash
cd database
docker-compose up -d                # Start database
docker-compose down                 # Stop database
docker-compose logs mysql           # View MySQL logs
docker-compose exec mysql mysql -u fullstack_user -p fullstack_db  # Connect to MySQL CLI
```

## 🐛 Troubleshooting

### Common Issues

1. **Port Already in Use:**
   - Frontend (5173): Change port in `vite.config.ts`
   - Backend (8080): Change `server.port` in `application.properties`
   - Database (3306): Change port mapping in `docker-compose.yml`

2. **Database Connection Issues:**
   - Ensure Docker is running
   - Check if MySQL container is up: `docker-compose ps`
   - Verify database credentials in `application.properties`

3. **CORS Issues:**
   - Ensure backend CORS configuration matches frontend URL
   - Check `@CrossOrigin` annotation in controllers

4. **API Not Loading in Frontend:**
   - Verify backend is running on port 8080
   - Check browser network tab for API calls
   - Ensure database has sample data

### Useful Docker Commands
```bash
# View running containers
docker ps

# View all containers
docker ps -a

# View logs
docker-compose logs -f mysql

# Reset database (removes all data)
docker-compose down -v
docker-compose up -d
```

## 📚 Project Architecture

### Frontend Architecture
```
frontend/src/
├── components/        # React components
│   ├── Home.tsx      # Home page component
│   └── Items.tsx     # Items list component
├── App.tsx           # Main app with routing
├── main.tsx          # App entry point
└── App.css           # Global styles
```

### Backend Architecture
```
backend/src/main/java/com/example/backend/
├── controller/       # REST controllers
├── entity/          # JPA entities
├── repository/      # Data repositories
└── BackendApplication.java  # Main application class
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Review the application logs
3. Ensure all prerequisites are installed
4. Verify all services are running on correct ports

---

**Happy Coding! 🎉**
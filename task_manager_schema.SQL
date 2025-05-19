
DROP TABLE IF EXISTS Notifications, TaskLabels, Labels, Tasks, Users;

CREATE TABLE Users (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    hashed_password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Tasks (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT UNSIGNED,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date TIMESTAMP,
    priority VARCHAR(10),
    is_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(id)
);

CREATE TABLE Labels (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    color VARCHAR(7)
);

CREATE TABLE TaskLabels (
    task_id BIGINT UNSIGNED,
    label_id BIGINT UNSIGNED,
    PRIMARY KEY (task_id, label_id),
    FOREIGN KEY (task_id) REFERENCES Tasks(id),
    FOREIGN KEY (label_id) REFERENCES Labels(id)
);

CREATE TABLE Notifications (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    task_id BIGINT UNSIGNED,
    send_time TIMESTAMP,
    status VARCHAR(20),
    type VARCHAR(20),
    FOREIGN KEY (task_id) REFERENCES Tasks(id)
);

INSERT INTO Users (username, email, hashed_password) VALUES
('jadenp', 'jaden@example.com', 'hashed_pw_1');

INSERT INTO Tasks (user_id, title, description, due_date, priority) VALUES
(1, 'Build backend schema', 'Create models and relationships', '2025-05-25', 'high');

INSERT INTO Labels (name, color) VALUES
('Work', '#FF5733');

INSERT INTO TaskLabels (task_id, label_id) VALUES
(1, 1);

INSERT INTO Notifications (task_id, send_time, status, type) VALUES
(1, '2025-05-24 08:00:00', 'pending', 'email');

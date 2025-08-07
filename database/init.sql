-- Initialize the fullstack_db database with sample data
USE fullstack_db;

-- Create items table (Spring Boot will also create this via JPA, but this ensures it exists)
CREATE TABLE IF NOT EXISTS items (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(500)
);

-- Insert sample data
INSERT INTO items (name, description) VALUES 
('Laptop', 'High-performance laptop for development work'),
('Smartphone', 'Latest model smartphone with advanced features'),
('Headphones', 'Noise-cancelling wireless headphones'),
('Monitor', '4K Ultra HD monitor for professional use'),
('Keyboard', 'Mechanical keyboard with RGB lighting'),
('Mouse', 'Wireless gaming mouse with precision tracking'),
('Tablet', 'Lightweight tablet for productivity on the go'),
('Camera', 'Professional DSLR camera for photography'),
('Speakers', 'High-quality Bluetooth speakers for music'),
('Smartwatch', 'Fitness tracking smartwatch with health monitoring');

-- Verify the data was inserted
SELECT COUNT(*) as total_items FROM items;
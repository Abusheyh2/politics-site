-- Create posts table for Politics Club CMS
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('article', 'video', 'announcement')),
  video_url TEXT,
  author TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert a welcome post
INSERT INTO posts (title, content, type, author, published) VALUES
('Welcome to Al-Beruni Politics Club!', 'We are excited to launch our new website. Stay tuned for updates on upcoming events, debates, and political discussions.', 'announcement', 'Admin', true);

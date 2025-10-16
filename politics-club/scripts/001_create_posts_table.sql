-- Create posts table for news articles and updates
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author VARCHAR(100) NOT NULL,
  post_type VARCHAR(50) DEFAULT 'article', -- article, video, announcement
  media_url TEXT, -- for images or video embeds
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- Insert sample post
INSERT INTO posts (title, content, excerpt, author, post_type, published) VALUES
(
  'Welcome to Al-Beruni Politics Club',
  'We are excited to launch our new Politics Club website! This platform will serve as a hub for political discourse, debate, and civic engagement at Al-Beruni School. Stay tuned for upcoming events, discussions, and opportunities to get involved in shaping our community.',
  'Welcome to the official launch of our Politics Club website.',
  'Club President',
  'announcement',
  true
);

/*
  # Shop Schema Setup

  1. New Tables
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (decimal)
      - `image_url` (text)
      - `artist_id` (uuid, foreign key)
      - `category` (text)
      - `stock` (integer)
      - `created_at` (timestamp)
    - `artists`
      - `id` (uuid, primary key)
      - `name` (text)
      - `bio` (text)
      - `image_url` (text)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
    - Add policies for authenticated admin writes
*/

-- Create artists table
CREATE TABLE IF NOT EXISTS artists (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  bio text,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price decimal(10,2) NOT NULL,
  image_url text,
  artist_id uuid REFERENCES artists(id),
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE artists ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on artists"
  ON artists
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on products"
  ON products
  FOR SELECT
  TO public
  USING (true);

-- Create policies for authenticated admin writes
CREATE POLICY "Allow authenticated users to manage artists"
  ON artists
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to manage products"
  ON products
  USING (auth.role() = 'authenticated');
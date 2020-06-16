CREATE DATABASE api;

-- Run the command "\c api"

CREATE TABLE products (
    id SERIAL PRIMARY KEY
    properties jsonb
)

CREATE TABLE payments (
    info jsonb
)

CREATE TABLE broadcasts {
    id SERIAL PRIMARY KEY
    properties jsonb
}

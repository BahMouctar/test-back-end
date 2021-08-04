import { readFileSync } from 'fs';

const env = process.env.ENV || "local"
require('dotenv').config({ path: "./.env." + env })

export const CONFIG_FILE = 'config.json';
export const CONFIG = () => JSON.parse(readFileSync(CONFIG_FILE,'utf8'));


import { loginTest as test } from "../fixtures/loginPage.fixture";
import * as dotenv from 'dotenv';

dotenv.config();

export const BASE_URL = process.env.BASE_URL || (() => {
  console.warn("BASE_URL no está definida en el .env");
  return 'http://localhost:3000';
})();



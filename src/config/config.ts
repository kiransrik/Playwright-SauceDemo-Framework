import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const BASE_URL = process.env.BASE_URL || 'https://www.saucedemo.com';
export const DEFAULT_USER = {
  standard: process.env.STANDARD_USER || 'standard_user',
  locked: process.env.LOCKED_USER || 'locked_out_user',
  problem: process.env.PROBLEM_USER || 'problem_user',
  performance_glitch: process.env.PERF_USER || 'performance_glitch_user'
};
export const DEFAULT_PASS = process.env.PASSWORD || 'secret_sauce';

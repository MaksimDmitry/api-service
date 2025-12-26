// types.ts

export interface ErrorResponse {
  statusCode: number;
  error: string;
  message: string;
}

export interface SuccessResponse<T> {
  data: T;
}

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers: { [key: string]: string };
  query?: { [key: string]: string };
  body?: any;
}

export interface ApiConfig {
  baseUrl: string;
  timeout: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type ApiError = {
  success: boolean;
  message: string;
  errors: Record<string, string[]>;
};

export type UninterceptedApiError = {
  message: string | Record<string, string[]>;
};

export interface PaginatedApiResponse<T> {
  code: number;
  status: string;
  data: T;
  meta: {
    last_page: number;
    total: number;
  };
}

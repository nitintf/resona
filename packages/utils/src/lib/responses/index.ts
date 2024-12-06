export interface Response<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export function createResponse<T>(
  success: boolean,
  data?: T,
  message?: string
): Response<T> {
  return { success, data, message };
}

export function createSuccessResponse<T>(data?: T): Response<T> {
  return createResponse(true, data);
}

export function createErrorResponse(message: string): Response<undefined> {
  return createResponse(false, undefined, message);
}

export async function createResponseFromPromise<T>(
  promise: Promise<T>
): Promise<Response<T | undefined>> {
  return promise
    .then((data) => createSuccessResponse(data))
    .catch((error) => createErrorResponse(error.message));
}

// main-website/src/lib/api.js

// Ensure this matches the URL your backend API is running on
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api';

export async function fetcher(url) {
  const response = await fetch(`${API_BASE_URL}${url}`);
  if (!response.ok) {
    console.warn(`API Error fetching ${url}:`, response.status, response.statusText);
    const error = new Error('An error occurred while fetching data.');
    try {
      error.info = await response.json();
    } catch (e) {
      error.info = { message: response.statusText };
    }
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function poster(url, data, isFormData = false) {
  const headers = {};
  let body;

  if (isFormData) {
    // For FormData, headers 'Content-Type' is set automatically by the browser
    body = data;
  } else {
    headers['Content-Type'] = 'application/json';
    body = JSON.stringify(data);
  }

  const response = await fetch(`${API_BASE_URL}${url}`, {
    method: 'POST',
    headers: headers, // Only include Content-Type if not FormData
    body: body,
  });

  if (!response.ok) {
    const error = new Error('An error occurred while submitting data.');
    error.info = await response.json(); // Get error details from backend
    error.status = response.status;
    throw error;
  }
  return response.json();
}
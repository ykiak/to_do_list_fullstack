const URL = "http://localhost:3000"

export async function apiFetch(endpoint, options = {}) {
    const response = await fetch(`${URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers
        },
        ...options
    })

    const data = await response.json()
    if(!response.ok) {
        throw new Error(data.error || "API Error")
    }

    return data
}
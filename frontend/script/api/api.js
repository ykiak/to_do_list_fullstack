const URL = "http://localhost:3000"

export async function apiFetch(endpoint, options = {}) {
    const token = localStorage.getItem("token")

    const response = await fetch(`${URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers
        },
        ...options
    })

    if (response.status === 204) {
        return null
    }
    
    const data = await response.json()
    
    if (!response.ok) {
        throw new Error(data.error || "API Error")
    }


    return data
}
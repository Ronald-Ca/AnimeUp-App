export default function getToken() {
    const headers = {
        headers: {
            Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string)?.token}`,
        },
    }

    return headers
}
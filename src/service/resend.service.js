
export const resendService = {
    addUserToWaitlist
}

export async function addUserToWaitlist(email) {
    if (!isValidEmail(email)) {
        throw new Error('Invalid email address');
    }

    try {
        const res = await fetch("/api/waitlist", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email }),
        });

        const data = await res.json();
        
        if (!res.ok) {
            throw new Error(data.error || 'Failed to add to waitlist');
        }

        return data;
    } catch (error) {
        throw error;
    }
}
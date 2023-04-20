// Fetch all users from server
export const fetchUsersData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users`);
    const {status, data} = await response.json();
    return {
        status, data
    }
}

// Fetch single user details from server
export const fetchSingleUser = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`);
    const {status, data} = await response.json();
    return {
        status, data
    }
}

// Function to execute add new user data
export const addUser = async (formData) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    const {status} = await response.json();
    return status;
}

// Function to execute deleting a user data
export const deleteUser = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    const {status} = await response.json();
    return status;
}

// Function to execute updating a user data
export const updateUser = async (formData) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/${formData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    const {status} = await response.json();
    return status;
}

export const callMockEndpoint = () => {
    fetch(`https://yolo-server-jiqm.onrender.com/`);
}

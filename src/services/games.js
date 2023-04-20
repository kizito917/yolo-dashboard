// Fetch all games from server
export const fetchGamesData = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/games`);
    const {status, data} = await response.json();
    return {
        status, data
    }
}

// Fetch single game details from server
export const fetchSingleGame = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/games/${id}`);
    const {status, data} = await response.json();
    return {
        status, data
    }
}

// Function to execute add new game data
export const addGame = async (formData) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/games/new`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    const {status} = await response.json();
    return status;
}

// Function to execute deleting a game data
export const deleteGame = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/games/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
    });
    const {status} = await response.json();
    return status;
}

// Function to execute updating a game data
export const updateGame = async (formData) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/games/${formData._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });
    const {status} = await response.json();
    return status;
}

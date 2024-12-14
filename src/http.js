// fetching places data from backend
const fetchAvailablePlaces = async() => {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    
        if (!response.ok) {
            throw new Error();
        }
        return resData.places;

}

// posting data to backend
const updateUserPlaces = async (places) => {
    
}

export default {fetchAvailablePlaces, updateUserPlaces}
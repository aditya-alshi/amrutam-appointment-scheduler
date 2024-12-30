export async function getAllAppoints() {
    const response = await fetch('http://localhost:5000/all-appointments')
    const parsedResponse = await response.json();
    if(parsedResponse.error){
        throw Error("Something went wrong");
        
    }
    return parsedResponse
}


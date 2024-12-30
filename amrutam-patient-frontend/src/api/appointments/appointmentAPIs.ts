export async function getAllDoctors() {
    const response = await fetch('http://localhost:5000/get-all-doctors')
    const parsedResponse = await response.json();
    if(parsedResponse.error){
        throw Error("Something went wrong");
        
    }
    return parsedResponse
}


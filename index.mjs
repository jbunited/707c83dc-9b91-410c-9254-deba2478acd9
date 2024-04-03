export async function handler(event) {
    // Assuming 'event' is the JSON object that contains the 'body' field with the message
    const message = event.body;
    
    // This regex is designed to match a sequence of 10 to 11 digits that might represent a phone number
    const phoneRegex = /\b\d{10,11}\b/;
    const matches = message.match(phoneRegex);

    // Extract the phone number if found, otherwise set to a default message
    const phoneNumber = matches ? matches[0] : "No phone number found";

    // Returning the phoneNumber inside a JSON object
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Phone number extracted successfully",
            phoneNumber: phoneNumber,
        }),
    };
}
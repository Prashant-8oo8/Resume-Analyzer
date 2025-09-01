const validateApiKey = async (apiKey) => {
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/status?key=${apiKey}`);
    
    if (!response.ok) {
      throw new Error('Invalid API Key or server error');
    }
    
    const data = await response.json();
    // Assuming API returns a status field indicating if the key is valid
    if (data.status === 'valid') {
      return true; // Key is valid
    } else {
      return false; // Invalid key
    }
  } catch (error) {
    console.error("API Key Validation Error:", error);
    return false; // If any error occurs, assume the key is invalid
  }
};

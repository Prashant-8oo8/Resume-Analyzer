const useChat=(secrate,jobDiscription)=>{
    const API_KEY ={secrate} ;  // Replace with your Gemini API key
    const MODEL_NAME = "gemini-2.0-flash"; // or "gemini-1.5-pro"
     const chatHistory = [];

     async function sendMessage() {
      const input = userInput.value.trim();
      if (!input) return;

      

      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: chatHistory,
              systemInstruction: {
                role: "system",
                parts: [
                  {
                    text:
                                      
                     "You are an ATS resume evaluator. Analyze resumes and:\n" +
                     +`Whith a job discription of ${jobDiscription}`+
                      "- Give an ATS compatibility score from 0 to 100\n" +
                      "- List any missing industry keywords\n" +
                      "- Suggest formatting or content improvements\n" +
                      "- Format your response in HTML using <strong>, <ul>, <li>, <br> for clarity\n\n" +
                      "Example format:\n" +
                      "<strong>Score:</strong> 78/100<br>" +
                      "<strong>Missing Keywords:</strong> Project Management, Agile, Leadership<br><br>" +
                      "<strong>Feedback:</strong><br>" +
                      "<ul><li>Bullet points should begin with strong action verbs.</li><li>Include metrics or achievements.</li></ul>\n" +
                      "Be short and precise, and make responses easy to read."

                      
                  }
                ]
              }
            })
          }
        );
        const data = await response.json();
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't get that.";
        return reply;
        
    }catch{
        console.log("errror hai chatbot me");
    }


}
}

export default useChat;
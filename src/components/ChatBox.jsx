import React, { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';

const ChatBox = ({ textable, jobDiscription, googleKey }) => {
  // Use the API key passed as a prop
  const API_KEY = googleKey;
  const MODEL_NAME = 'gemini-2.0-flash';

  // If API key is not found, display an alert and prevent further actions
  if (!API_KEY) {
    alert("API Key is missing! Please set your API key.");
    return null;
  }

  const initialMessages = [
    {
      sender: 'bot',
      text: 'Hi! Upload your resume and paste the job description. I’ll score it for ATS compatibility.',
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const chatHistory = useRef([
    {
      role: 'model',
      parts: [{ text: 'Hi! Upload your resume and paste the job description. I’ll score it for ATS compatibility.' }],
    },
    {
      role: 'user',
      parts: [{ text: textable }],
    },
  ]);
  const chatBoxRef = useRef(null);
  const hasSentInitial = useRef(false); // Prevent duplicate auto-send

  // ✅ Auto-fill and send `textable` once on load
  useEffect(() => {
    if (!hasSentInitial.current && textable && textable.trim() !== '') {
      hasSentInitial.current = true;
      setInput(textable);
      setTimeout(() => {
        sendMessage(textable);
      }, 100);
    }
  }, [textable]);

  const scrollToBottom = () => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

const sendMessage = async (customText) => {
  const messageToSend = customText !== undefined ? customText : input.trim();
  if (!messageToSend) return;

  setMessages((prev) => [...prev, { sender: 'user', text: messageToSend }]);
  chatHistory.current.push({ role: 'user', parts: [{ text: messageToSend }] });
  setInput('');

  try {
    // Sending simplified chat history, ensuring we avoid React components or circular references
    const simplifiedChatHistory = chatHistory.current.map(entry => ({
      role: entry.role,
      parts: entry.parts.map(part => ({ text: part.text })),
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: simplifiedChatHistory, // Sending simplified chat history to avoid circular refs
          systemInstruction: {
            role: 'system',
            parts: [
              {
                text:
                  "You are an ATS resume evaluator. Analyze resumes and:\n" +
                  "- Give an ATS compatibility score from 0 to 100\n" +
                  `You are analyzing for ${jobDiscription}\n` +
                  "- List any missing industry keywords\n" +
                  "- Suggest formatting or content improvements\n" +
                  "- Format your response in HTML using <strong>, <ul>, <li>, <br> and inline styling for clarity\n\n" +
                  "Example format:\n" +
                  "<div style='font-size: 15px;'>\n" +
                  "<strong style='color:#2563EB;'>Score:</strong> <span style='color:#10B981;'>78/100</span><br>\n" +
                  "<strong style='color:#2563EB;'>Missing Keywords:</strong> <span style='color:#DC2626;'>Project Management, Agile, Leadership</span><br><br>\n" +
                  "<strong style='color:#2563EB;'>Feedback:</strong><br>\n" +
                  "<ul style='list-style-type: disc; margin-left: 20px;'>\n" +
                  "<li>Start bullet points with strong action verbs.</li>\n" +
                  "<li>Include measurable achievements (e.g., “Reduced processing time by 30%”).</li>\n" +
                  "</ul>\n" +
                  "</div>\n" +
                  "Respond using ONLY HTML tags like <strong>, <ul>, <li>, <br>, <div>. Avoid markdown syntax (*, **, etc)."+ 
                  "Be short and visually structured.",
              },
            ],
          },
        }),
      }
    );

    const data = await response.json();
    let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I didn't get that.";

    // Remove markdown code block markers
    if (reply.startsWith("```html")) {
      reply = reply.replace(/^```html/, '').replace(/```$/, '').trim();
    } else if (reply.startsWith("```")) {
      reply = reply.replace(/^```/, '').replace(/```$/, '').trim();
    }

    // ✅ Convert markdown to HTML
    const htmlReply = marked(reply);

    setMessages((prev) => [...prev, { sender: 'bot', text: htmlReply }]);
    chatHistory.current.push({ role: 'model', parts: [{ text: reply }] });

    setTimeout(scrollToBottom, 100);
  } catch (err) {
    console.error('Error:', err);
    setMessages((prev) => [
      ...prev,
      { sender: 'bot', text: 'Oops! Something went wrong.' },
    ]);
  }
};


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-full flex flex-col">
      <h3 className="text-xl font-semibold text-gray-700 mb-4">
        Chat Assistant
      </h3>

      <div
        className="flex-1 overflow-y-auto mb-4 space-y-2"
        ref={chatBoxRef}
        style={{ maxHeight: '400px' }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-[80%] ${
              msg.sender === 'user'
                ? 'bg-blue-100 self-end'
                : 'bg-gray-100 self-start'
            }`}
          >
            <div
              className="text-sm text-gray-800"
              dangerouslySetInnerHTML={{ __html: msg.text }}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Paste your resume or type a message..."
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;

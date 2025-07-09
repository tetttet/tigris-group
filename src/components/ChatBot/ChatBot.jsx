import { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdFullscreenExit } from "react-icons/md";
import { Info } from './Info.js';

import imgBot from "../../assets/bot.jpg"

const initialSuggestions = [
    "Адрес нашей фирмы?",
    "Как связаться с нами?",
    "Чем мы занимаемся?",
];


const ChatBot = () => {
    const REACT_APP_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=AIzaSyBhi6q0F8zS8g-JtUw44E-HhPuw1mzoBNc";

    const [chatHistory, setChatHistory] = useState([
        {
            hideInChat: true,
            role: "model",
            text: Info
        }
    ]);
    const [showChatBot, setShowChatBot] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const chatBodyRef = useRef();

    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const user_message = inputRef.current.value;
        if (!user_message) return;
        inputRef.current.value = "";

        setChatHistory((history) => [...history, { role: "user", text: user_message }]);
        setTimeout(() => {
            setChatHistory((history) => [...history, { role: "model", text: "Thinking..." }]);
            generateBotResponse([...chatHistory, { role: "user", text: `Using the details ${user_message}` }]);
        }, 600);
    }

    const generateBotResponse = async (history) => {
        const updateChatHistory = (text, isError = false) => setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text, isError }]);

        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: history }),
        };

        try {
            const apiUrl = REACT_APP_API_URL;
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Извините, произошла ошибка.");

            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateChatHistory(apiResponseText);

            console.log(data);
        }
        catch (error) {
            updateChatHistory(error.message, true);
        }
    }

    const handleSuggestionClick = (text) => {
        setChatHistory(prev => [...prev, { role: "user", text }]);
        setShowSuggestions(false);
        generateBotResponse([...chatHistory, { role: "user", text }]);
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [chatHistory]);


    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className={`transition-all duration-300 transform ${showChatBot ? "scale-100 opacity-100 pointer-events-auto" : "scale-50 opacity-0 pointer-events-none"} w-[380px] max-w-full bg-white rounded-3xl shadow-lg origin-bottom-right`}>

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 pr-bg-blue-light rounded-t-3xl">
                    <div className="flex items-center gap-2">
                        <img src={imgBot} alt="Bot" className="w-9 h-9 p-1.5 bg-white rounded-full" />
                        <h2 className="text-white font-semibold text-base">ChatBot</h2>
                    </div>
                    <button onClick={() => setShowChatBot(prev => !prev)} className="w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full transition">
                        <FaAngleDown />
                    </button>
                </div>

                {/* Body */}
                <div ref={chatBodyRef} className="flex flex-col gap-5 h-[460px] overflow-y-auto px-6 py-6 mb-20 scrollbar-thin scrollbar-thumb-[#007AFF]">
                    <div className="flex items-center gap-3">
                        <img src={imgBot} alt="" className="w-9 h-9 p-1.5 pr-bg-blue-light text-white rounded-full" />
                        <p className="bg-[#e2f0ff] text-sm rounded-xl px-4 py-3">
                            Hello, ask information about this website?
                        </p>
                    </div>

                    {showSuggestions && (
                        <div className="flex flex-col items-end gap-2 mt-2">
                            {initialSuggestions.map((suggestion, index) => (
                                <button
                                    key={index}
                                    className="border border-gray-300 bg-white px-4 py-2 rounded-md text-right max-w-[200px] hover:bg-gray-100 transition whitespace-nowrap"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    )}

                    {chatHistory.map((message, index) =>
                        !message.hideInChat && (
                            <div
                                key={index}
                                className={`flex ${message.role === "model" ? "items-center gap-3" : "flex-col items-end"} ${message.isError ? "text-red-500" : ""}`}
                            >
                                {message.role === "model" && <img src="/assets/images/slider/1.jpg" alt="" />}
                                <p
                                    className={`text-sm px-4 py-3 break-words whitespace-pre-line max-w-[75%] ${message.role === "model"
                                        ? "bg-[#e2f0ff] rounded-xl"
                                        : "pr-bg-blue-light text-white rounded-3xl"
                                        }`}
                                >
                                    {message.text}
                                </p>
                            </div>
                        )
                    )}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 w-full bg-white px-6 py-5">
                    <form className="flex items-center rounded-full outline-1 outline-[#cccce5] focus-within:outline-2 focus-within:outline-[#007AFF] shadow-sm" onSubmit={handleFormSubmit}>
                        <input
                            ref={inputRef}
                            type="text"
                            required
                            placeholder="Message..."
                            className="flex-1 h-[47px] bg-transparent px-4 text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="w-9 h-9 flex items-center justify-center text-white pr-bg-blue-light rounded-full text-lg mr-2 hover:bg-[#005bb5] transition disabled:hidden"
                        >
                            <FaAngleUp />
                        </button>
                    </form>
                </div>
            </div>

            {/* Toggler */}
            <button
                onClick={() => setShowChatBot(prev => !prev)}
                id="chatbot-toggler"
                className={`fixed bottom-[100px] right-[35px] w-[60px] h-[60px] rounded-full pr-bg-blue-light text-white text-2xl flex items-center justify-center transition-transform duration-300 ${showChatBot ? "rotate-90" : ""
                    }`}
            >
                <span className={`${showChatBot ? "opacity-0" : "opacity-100"} absolute`}><IoChatbox /></span>
                <span className={`${showChatBot ? "opacity-100" : "opacity-0"} absolute`}><MdFullscreenExit /></span>
            </button>
        </div>
    );

}

export default ChatBot
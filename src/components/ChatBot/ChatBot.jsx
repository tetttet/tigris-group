"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoChatbox } from "react-icons/io5";
import { MdFullscreenExit } from "react-icons/md";
import { Info } from "./Info.js";
import imgBot from "../../assets/bot.jpg";

const ChatBot = () => {
    const { t } = useTranslation("chat");
    const API_URL =
        "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=AIzaSyBhi6q0F8zS8g-JtUw44E-HhPuw1mzoBNc";

    const chatBodyRef = useRef(null);
    const inputRef = useRef(null);
    const historyRef = useRef([]);

    const [showChatBot, setShowChatBot] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [chatHistory, setChatHistory] = useState([
        { role: "model", text: Info, hideInChat: true },
    ]);

    const suggestions = t("chatbot.suggestions", { returnObjects: true });

    useEffect(() => {
        historyRef.current = chatHistory;
    }, [chatHistory]);

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({
                top: chatBodyRef.current.scrollHeight,
                behavior: "smooth",
            });
        }
    }, [chatHistory]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current?.value;
        if (!userMessage) return;

        inputRef.current.value = "";
        setChatHistory((prev) => [...prev, { role: "user", text: userMessage }]);

        setTimeout(() => {
            setChatHistory((prev) => [...prev, { role: "model", text: t("chatbot.thinking") }]);
            generateBotResponse([...historyRef.current, { role: "user", text: userMessage }]);
        }, 600);
    };

    const generateBotResponse = async (history) => {
        const updateBotReply = (text, isError = false) => {
            setChatHistory((prev) => [
                ...prev.filter((msg) => !(msg.role === "model" && msg.text === t("chatbot.thinking"))),
                { role: "model", text, isError },
            ]);
        };

        const messages = history.map(({ role, text }) => ({
            role,
            parts: [{ text }],
        }));

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: messages }),
            });

            const data = await response.json();

            const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text
                ?.replace(/\*\*(.*?)\*\*/g, "$1")
                .trim();

            if (!reply) throw new Error(t("chatbot.error"));

            updateBotReply(reply);
        } catch (error) {
            updateBotReply(error.message || t("chatbot.error"), true);
        }
    };

    const handleSuggestionClick = (text) => {
        setChatHistory((prev) => [...prev, { role: "user", text }]);
        setShowSuggestions(false);
        generateBotResponse([...historyRef.current, { role: "user", text }]);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chatbox Container */}
            <div
                className={`transition-all duration-300 transform ${showChatBot
                        ? "scale-100 opacity-100 pointer-events-auto"
                        : "scale-50 opacity-0 pointer-events-none"
                    } w-[380px] max-w-full bg-white rounded-3xl shadow-lg origin-bottom-right`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 pr-bg-blue-light rounded-t-3xl">
                    <div className="flex items-center gap-2">

                        {/* if img does not exist show B */}
                        {!imgBot ? (
                            <div className="w-9 h-9 p-1.5 bg-white rounded-full flex items-center justify-center">
                                <span className="text-blue-500 text-lg font-bold">B</span>
                            </div>
                        ) : null}

                        <img src={imgBot} alt="Bot" className="w-9 h-9 p-1.5 bg-white rounded-full" />

                        <h2 className="text-white font-semibold text-base">{t("chatbot.title")}</h2>
                    </div>
                    <button
                        onClick={() => setShowChatBot((prev) => !prev)}
                        className="w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full transition"
                    >
                        <FaAngleDown />
                    </button>
                </div>

                {/* Body */}
                <div
                    ref={chatBodyRef}
                    className="flex flex-col gap-5 h-[460px] overflow-y-auto px-6 py-6 mb-20 scrollbar-thin scrollbar-thumb-[#007AFF]"
                >
                    {/* Welcome */}
                    <div className="flex items-center gap-3">
                        <img src={imgBot} alt="Bot" className="w-9 h-9 p-1.5 pr-bg-blue-light rounded-full" />
                        <p className="bg-[#e2f0ff] text-sm rounded-xl px-4 py-3">{t("chatbot.welcome")}</p>
                    </div>

                    {/* Suggestions */}
                    {showSuggestions &&
                        Array.isArray(suggestions) &&
                        suggestions.map((s, i) => (
                            <div className="flex flex-col items-end gap-2" key={i}>
                                <button
                                    className="border border-gray-300 bg-white px-4 py-2 rounded-md text-right max-w-[200px] hover:bg-gray-100 transition"
                                    onClick={() => handleSuggestionClick(s)}
                                >
                                    {s}
                                </button>
                            </div>
                        ))}

                    {/* Chat history */}
                    {chatHistory.map(
                        (msg, i) =>
                            !msg.hideInChat && (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "model" ? "items-center gap-3" : "flex-col items-end"
                                        } ${msg.isError ? "text-red-500" : ""}`}
                                >
                                    {msg.role === "model" && (
                                        <img src={imgBot} alt="bot" className="w-9 h-9 rounded-full" />
                                    )}
                                    <p
                                        className={`text-sm px-4 py-3 break-words whitespace-pre-line max-w-[75%] ${msg.role === "model"
                                                ? "bg-[#e2f0ff] rounded-xl"
                                                : "pr-bg-blue-light text-white rounded-3xl"
                                            }`}
                                    >
                                        {msg.text}
                                    </p>
                                </div>
                            )
                    )}
                </div>

                {/* Footer */}
                <div className="absolute bottom-0 w-full bg-white px-6 py-5">
                    <form
                        onSubmit={handleFormSubmit}
                        className="flex items-center rounded-full outline-1 outline-[#cccce5] focus-within:outline-2 focus-within:outline-[#007AFF] shadow-sm"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            required
                            placeholder={t("chatbot.inputPlaceholder")}
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

            {/* Toggle button */}
            <button
                onClick={() => setShowChatBot((prev) => !prev)}
                className={`fixed bottom-[100px] right-[35px] w-[60px] h-[60px] rounded-full pr-bg-blue-light text-white text-2xl flex items-center justify-center transition-transform duration-300 ${showChatBot ? "rotate-90" : ""
                    }`}
            >
                <span className={`${showChatBot ? "opacity-0" : "opacity-100"} absolute`}>
                    <IoChatbox />
                </span>
                <span className={`${showChatBot ? "opacity-100" : "opacity-0"} absolute`}>
                    <MdFullscreenExit />
                </span>
            </button>
        </div>
    );
};

export default ChatBot;

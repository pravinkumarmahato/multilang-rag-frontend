import { useEffect, useState } from "react";
import { sendChat, getHistory } from "../api/api";

interface ChatMessage {
  query: string;
  answer: string;
}

export const Chat = () => {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHistory = async () => {
    try {
      const res = await getHistory();
      setChatHistory(res.data);
    } catch(error) {
      console.error("Failed to fetch chat history:", error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const handleSend = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await sendChat(query);
      setChatHistory([...chatHistory, { query, answer: res.data.answer }]);
      setQuery("");
    } catch(error) {
      console.error("Failed to send chat:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 bg-gradient-to-br from-white to-gray-100 dark:from-gray-700 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">Chat</h2>
      <div className="flex flex-col gap-4 max-h-[500px] overflow-y-auto mb-4">
        {chatHistory.map((msg, idx) => (
          <div key={idx}>
            <div className="bg-blue-100 ml-20 text-right text-white align-right dark:bg-blue-800 rounded-xl p-3 self-end max-w-xl justify-end">
              <p className="text-sm font-semibold">You:</p>
              <p>{msg.query}</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 text-white rounded-xl p-3 self-start max-w-xl mt-1.5 justify-start">
              <p className="text-sm font-semibold">Bot:</p>
              <p>{msg.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <textarea
        rows={3}
        className="w-full p-2 border rounded resize-none dark:bg-gray-800 dark:text-white"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
      />
      <button
        onClick={handleSend}
        disabled={loading || !query.trim()}
        className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </div>
  );
};

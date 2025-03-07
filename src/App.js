import { useEffect } from "react";
import { HeartPulse, MessageCircle, BookOpen, Smile, Shield, Sun } from "lucide-react";
import "./style.css"; // Import custom CSS

export default function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-id", "7887998249");
    script.id = "chatling-embed-script";
    script.src = "https://chatling.ai/js/embed.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="container">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">🌟 Mental Health & Wellness 💙</h1>
        <p className="subtitle">Your safe space to heal, grow, and thrive.</p>
      </header>

      {/* Feature Cards */}
      <div className="features">
        <div className="feature-card">
          <Smile size={40} className="icon" />
          <h3>Emotional Support</h3>
          <p>Connect with professionals and supportive communities.</p>
        </div>
        <div className="feature-card">
          <Shield size={40} className="icon" />
          <h3>Privacy & Security</h3>
          <p>Your mental health journey is safe and confidential.</p>
        </div>
        <div className="feature-card">
          <Sun size={40} className="icon" />
          <h3>Self-Care Tips</h3>
          <p>Discover mindfulness techniques and relaxation guides.</p>
        </div>
      </div>

      {/* Glassmorphism Card */}
      <div className="card">
        <h2>🧠 Mental Health Support 💙</h2>
        <p>You're not alone. We're here to support you.</p>

        {/* Buttons Section */}
        <div className="button-group">
          <button className="button bg-blue">
            <HeartPulse className="icon" size={22} />
            Get Support
          </button>
          <button className="button bg-green">
            <MessageCircle className="icon" size={22} />
            Chat with AI
          </button>
        </div>

        {/* Resources Section */}
        <div className="resources">
          <h3>🌱 Resources & Guidance</h3>
          <p>Explore self-help guides, therapist contacts, and mindfulness techniques.</p>
          <button className="button bg-purple">
            <BookOpen className="icon" size={22} />
            Read Guides
          </button>
        </div>
      </div>
    </div>
  );
}

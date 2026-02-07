import { useState } from 'react'
import JSConfetti from 'js-confetti'
import './App.css'

function App() {
  const [openedLetter, setOpenedLetter] = useState(null);
  const jsConfetti = new JSConfetti();

  const letters = [
    {
      id: 1,
      label: "A Note on Fate",
      title: "Written in the Stars",
      content: "I often wonder how, in a world so big, our paths managed to cross through a simple screen. It wasn't luck; it was fate. Even though we are miles apart, I feel like I've known you forever. You are the best thing that has happened to me.",
      type: "text"
    },
    {
      id: 2,
      label: "A Note on Your Voice",
      title: "My Favorite Sound",
      content: "I love the sound of your voice. I always imagine you right here next to me, I can't wait to be with you.",
      type: "text"
    },
    {
      id: 3,
      label: "A Note on Waiting",
      title: "Worth Every Second",
      content: "If you asked why I am willing to wait for you. The answer is very simple: because it is you. The distance only makes me want to be more intentional in my actions. You are worth the wait, you are worth it all.",
      type: "text"
    },
    {
      id: 4,
      label: "A Note on Our Connection",
      title: "More Than Just Words",
      content: "We haven't shared a meal or a walk in the park yet, but we've shared our dreams, our fears, and our hearts. You know me so well. We have formed a connection stronger than anything.",
      type: "text"
    },
    {
      id: 5,
      label: "A Note on the Future",
      title: "The Best is Yet to Come",
      content: "I live for the day we take our first photo together. I want a future with you and I'm glad we're putting in a lot of effort even if we're in different countries for now.",
      type: "text"
    },
    {
      id: 6,
      label: "A Note for Today",
      title: "One Simple Question",
      content: "Just to ask you again cause why not...since I can't be there to give you flowers or a hug in person today, I want to start with a promise... and a question.",
      type: "proposal"
    }
  ];

  const handleOpen = (letter) => {
    setOpenedLetter(letter);
    if (letter.type === "proposal") {
      jsConfetti.addConfetti({
        emojis: ['💌', '💖', '✨', '🌏'],
        confettiNumber: 100,
      });
    }
  };

  const handleYes = () => {
    jsConfetti.addConfetti();
    alert("You just made my entire year! I love you! ❤️");
  };

  return (
    <div className="ldr-container">
      <header>
        <h1>Letters for My Fehintola ✉️</h1>
        <p className="subtitle">A few things I've been meaning to tell you...</p>
      </header>

      <div className="envelope-grid">
        {letters.map((l) => (
          <div key={l.id} className="envelope-card" onClick={() => handleOpen(l)}>
            <div className="envelope-icon">{l.id === 6 ? '💝' : '📩'}</div>
            <p className="envelope-label">{l.label}</p>
          </div>
        ))}
      </div>

      {openedLetter && (
        <div className="modal-overlay" onClick={() => setOpenedLetter(null)}>
          <div className="letter-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setOpenedLetter(null)}>✕</button>
            
            <h2 className="letter-title">{openedLetter.title}</h2>
            
            <div className="text-message">
              <p>{openedLetter.content}</p>
              {openedLetter.type === "proposal" && (
                <div className="proposal-ask">
                  <h3 className="the-big-ask">Will you be my Valentine?</h3>
                  <div className="btn-group">
                    <button className="yes-btn" onClick={handleYes}>YES! ❤️</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
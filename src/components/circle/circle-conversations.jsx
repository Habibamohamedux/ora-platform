import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./circle-conversations.css";

const MESSAGES = [
  { id: 1, user: "Layla", avatar: "L", anon: false, text: "Just had my 32-week scan — baby is head down finally 🩷", time: "2m" },
  { id: 2, user: "Anonymous", avatar: "?", anon: true, text: "I've been feeling so disconnected from my partner lately. Is that normal?", time: "4m" },
  { id: 3, user: "Dr. Nadia", avatar: "N", anon: false, text: "Completely normal — the emotional shift in third trimester is real. You are not alone in this.", time: "5m", doctor: true },
  { id: 4, user: "Mona", avatar: "M", anon: false, text: "Same here at 28 weeks. We started a weekly check-in and it helped so much.", time: "7m" },
  { id: 5, user: "Sara", avatar: "S", anon: false, text: "The drop-in room yesterday was everything I needed 🤍", time: "12m" },
];

const ROOMS = [
  { id: 1, name: "Evening Check-in", live: true, listeners: 24, type: "voice" },
  { id: 2, name: "Ask a Doctor", live: true, listeners: 67, type: "voice" },
  { id: 3, name: "Silent Support", live: false, listeners: 0, type: "text" },
  { id: 4, name: "Partners Only", live: true, listeners: 12, type: "voice" },
];

const BAR_COUNT = 22;

export default function CircleConversations() {
  const [bars, setBars] = useState(() => Array.from({ length: BAR_COUNT }, () => 0.3));
  const [visibleMsgs, setVisibleMsgs] = useState([MESSAGES[0]]);
  const msgRef = useRef(null);
  const { t } = useLanguage();
  const roomNames = t("circleConversations.rooms");
  const messageTexts = t("circleConversations.messages");

  // Animate voice bars
  useEffect(() => {
    const id = setInterval(() => {
      setBars(Array.from({ length: BAR_COUNT }, () => 0.15 + Math.random() * 0.85));
    }, 120);
    return () => clearInterval(id);
  }, []);

  // Reveal messages one by one
  useEffect(() => {
    if (visibleMsgs.length >= MESSAGES.length) return;
    const id = setTimeout(() => {
      setVisibleMsgs((prev) => [...prev, MESSAGES[prev.length]]);
    }, 900);
    return () => clearTimeout(id);
  }, [visibleMsgs]);

  useEffect(() => {
    if (msgRef.current) {
      msgRef.current.scrollTop = msgRef.current.scrollHeight;
    }
  }, [visibleMsgs]);

  return (
    <section className="cc-section">
      <div className="cc-orb cc-orb--1" />
      <div className="cc-orb cc-orb--2" />

      <div className="cc-inner">
        <div className="cc-header">
          <span className="cc-eyebrow">{t("circleConversations.eyebrow")}</span>
          <h2 className="cc-title">{t("circleConversations.title")}</h2>
          <p className="cc-desc">{t("circleConversations.desc")}</p>
        </div>

        <div className="cc-layout">
          {/* Left: Live rooms */}
          <div className="cc-rooms">
            <p className="cc-rooms__label">{t("circleConversations.roomsLabel")}</p>
            {ROOMS.map((room, index) => (
              <div key={room.id} className={`cc-room ${room.live ? "cc-room--live" : ""}`}>
                <div className="cc-room__icon">{room.type === "voice" ? "🎙" : "💬"}</div>
                <div className="cc-room__info">
                  <span className="cc-room__name">{roomNames[index]}</span>
                  {room.live
                    ? <span className="cc-room__meta"><span className="cc-room__dot" />{room.listeners} {t("circleConversations.listening")}</span>
                    : <span className="cc-room__meta cc-room__meta--off">{t("circleConversations.scheduled")}</span>
                  }
                </div>
                {room.live && (
                  <button className="cc-room__join">{t("circleConversations.join")}</button>
                )}
              </div>
            ))}

            {/* Voice wave visualizer */}
            <div className="cc-wave">
              <span className="cc-wave__label">{t("circleConversations.liveIn")}</span>
              <div className="cc-wave__bars">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="cc-wave__bar"
                    style={{ transform: `scaleY(${h})` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Chat */}
          <div className="cc-chat">
            <div className="cc-chat__header">
              <span className="cc-chat__name">{t("circleConversations.chatName")}</span>
              <span className="cc-chat__online"><span className="cc-room__dot" />{t("circleConversations.chatOnline")}</span>
            </div>
            <div className="cc-chat__messages" ref={msgRef}>
              {visibleMsgs.map((msg) => (
                <div key={msg.id} className={`cc-msg ${msg.anon ? "cc-msg--anon" : ""}`}>
                  <div className={`cc-msg__avatar ${msg.doctor ? "cc-msg__avatar--doctor" : ""} ${msg.anon ? "cc-msg__avatar--anon" : ""}`}>
                    {msg.avatar}
                    {msg.doctor && <span className="cc-msg__badge">✓</span>}
                  </div>
                  <div className="cc-msg__body">
                    <div className="cc-msg__meta">
                      <span className="cc-msg__user">
                        {msg.user}
                        {msg.doctor && <span className="cc-msg__dr">{t("circleConversations.doctorLabel")}</span>}
                      </span>
                      <span className="cc-msg__time">{msg.time} {t("circleConversations.ago")}</span>
                    </div>
                    <div className="cc-msg__bubble">{messageTexts[msg.id - 1]}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cc-chat__input">
              <div className="cc-chat__anon-toggle">
                <span>{t("circleConversations.anonymous")}</span>
                <div className="cc-toggle" />
              </div>
              <div className="cc-chat__field">{t("circleConversations.input")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

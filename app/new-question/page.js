"use client";

import React, { useState, useRef } from "react";

const QuestionCard = ({ question, upvotes }) => (
  <div className="self-stretch shadow-md rounded-xl bg-white overflow-hidden flex flex-row items-center justify-start p-4 gap-3">
    <b className="flex-1 tracking-tight leading-6 font-semibold">{question}</b>
    <div className="w-8 rounded-lg overflow-hidden flex flex-col items-center justify-start text-center text-sm text-textsecondary">
      <div className="w-5 h-5 bg-gray-300 rounded-full mb-1"></div>
      <b className="tracking-tight leading-4">{upvotes}</b>
    </div>
  </div>
);

const DesktopForm = () => {
  const textareaRef = useRef(null);

  const handleSubmit = () => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-start">
      <div className="self-stretch tracking-tight leading-6 font-extrabold">
        New question
      </div>
      <textarea
        ref={textareaRef}
        className="self-stretch rounded-lg bg-white h-[120px] overflow-hidden flex flex-col items-start justify-start py-3 pr-3 pl-4 box-border text-left text-sm text-textplaceholder tracking-tight leading-7 font-medium font-nunito placeholder-text-textplaceholder focus:text-textprimary"
        placeholder="Add as much detail as possible"
      />
      <button
        className="self-stretch rounded-lg bg-textprimary h-10 flex flex-row items-center justify-center py-1.5 px-3 box-border text-base text-white font-nunito hover:bg-gray-900 hover:cursor-pointer transition-colors duration-300 ease-in-out"
        onClick={handleSubmit}
      >
        <b className="flex-1 tracking-tight leading-5">Ask</b>
      </button>
    </div>
  );
};

const MobileForm = ({ handleAskClick }) => {
  const textareaRef = useRef(null);

  const handleSubmit = () => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
    handleAskClick();
  };

  return (
    <div className="self-stretch flex flex-col items-center justify-start w-full md:hidden">
      <div className="self-stretch tracking-tight leading-6 font-extrabold">
        New question
      </div>
      <textarea
        ref={textareaRef}
        className="self-stretch rounded-lg bg-white h-[120px] overflow-hidden flex flex-col items-start justify-start py-3 pr-3 pl-4 box-border text-left text-sm text-textplaceholder tracking-tight leading-7 font-medium font-nunito placeholder-text-textplaceholder focus:text-textprimary"
        placeholder="Add as much detail as possible"
      />
      <button
        className="self-stretch rounded-lg bg-textprimary h-10 flex flex-row items-center justify-center py-1.5 px-3 box-border text-base text-white font-nunito hover:bg-gray-900 hover:cursor-pointer transition-colors duration-300 ease-in-out"
        onClick={handleSubmit}
      >
        <b className="flex-1 tracking-tight leading-5">Ask</b>
      </button>
    </div>
  );
};

const QuestionsPage = () => {
  const [showForm, setShowForm] = useState(false);

  const handleAskClick = () => {
    setShowForm(false);
  };

  return (
    <div className="w-full relative bg-gradient-to-br from-[#fefeff] to-[#dfe2fa] h-screen overflow-hidden flex flex-col items-center justify-start pt-16 px-5 pb-0 box-border text-left text-lg text-textprimary font-nunito">
      <div className="w-full max-w-[800px] flex flex-col items-start justify-start gap-8">
        <div className="self-stretch flex flex-row items-center justify-between w-full">
          <div className="flex flex-row items-center justify-start gap-3">
            <div className="w-9 h-9 bg-gray-300 rounded-full overflow-hidden"></div>
            <b className="tracking-tight leading-6">Ask Javier</b>
          </div>
          <button
            className="block md:hidden bg-textprimary text-white rounded-lg px-3 py-1.5 hover:bg-gray-900 transition-colors duration-300 ease-in-out"
            onClick={() => setShowForm(!showForm)}
          >
            New Question
          </button>
        </div>
        <div className="self-stretch flex flex-col md:flex-row items-start justify-start gap-10 text-center w-full">
          <div className="hidden md:flex md:w-1/2">
            <DesktopForm />
          </div>
          <div
            className={`flex-1 flex flex-col items-center justify-start gap-3 text-left text-base w-full ${
              showForm ? "hidden" : "block"
            } md:flex md:flex-col`}
          >
            <QuestionCard
              question="Did you have an existing design system when starting to build Voicepal?"
              upvotes={501}
            />
            <QuestionCard
              question="How do you evaluate product/market fit?"
              upvotes={385}
            />
            <QuestionCard question="What inspired Voicepal?" upvotes={290} />
            <QuestionCard
              question="Why isn’t Voicepal building transcription features?"
              upvotes={125}
            />
          </div>
        </div>
        {showForm && <MobileForm handleAskClick={handleAskClick} />}
      </div>
    </div>
  );
};

export default QuestionsPage;

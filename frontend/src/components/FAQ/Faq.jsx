import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Faq (){
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      question: 'What is an AI voice maker?',
      answer: "AI isn't here to replace human creativity but it can amplify it and take it even further. So whether you're creating fanart of your favorite anime. Effortlessly creates and distributes innovative apps across any blockchain, while helping build a more open web"
    },
    {
      question: 'How can I quickly generate realistic voices from texts?',
      answer: "Our AI voice generation technology allows you to quickly convert any text into natural-sounding speech. Simply input your text, choose a voice style, and generate high-quality audio in seconds."
    },
    {
      question: 'How can I create a TTS video without any prior experience?',
      answer: "Our platform makes it simple to create text-to-speech videos even if you're just getting started. The intuitive interface guides you through each step of the process."
    },
    {
      question: 'How do I generate AI text-to-speech?',
      answer: "Using our AI text-to-speech tool is straightforward. Just paste your text, select your preferred voice and language options, and click generate to create natural-sounding speech."
    }
  ];

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-golden font-medium mb-4">FAQ'S</p>
          <h1 className="text-2xl text-navyblue lg:text-4xl font-bold">
            Frequently Asked Questions
          </h1>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={index}
              className="border rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="text-lg font-medium text-left">
                  {faq.question}
                </span>
                <span className="text-golden">
                  {openIndex === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


type ChatMessageProps = {
    text: string;
    sender: 'user' | 'bot';
  };
  
  export const ChatMessage = ({ text, sender }: ChatMessageProps) => {
    const isUser = sender === 'user';
  
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
        <div className={`rounded-xl px-4 py-2 max-w-xs ${isUser ? 'bg-blue-600 text-white' : 'bg-muted text-black dark:text-white'}`}>
          {text}
        </div>
      </div>
    );
  };
  
<template>
    <div class="voice-assistant">
      <div class="assistant-container">
        <div class="status-indicator" :class="{ listening: isListening, thinking: isThinking }">
          <div class="pulse"></div>
          <button 
            class="mic-button" 
            @click="toggleVoiceRecognition"
            :disabled="isThinking"
            aria-label="Toggle microphone"
          >
            <svg viewBox="0 0 24 24" class="mic-icon">
              <path v-if="!isListening" fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
              <path v-else fill="currentColor" d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11H17.5C17.5,11.83 17.33,12.63 17,13.31L18.6,14.91C19.32,13.94 19.76,12.79 19.93,11.57L19,11M13,17.93V20H14.5L15,21H9L9.5,20H11V17.93C7.61,17.43 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19C19,14.53 16.39,17.43 13,17.93M10,5H14V11A2,2 0 0,1 12,13A2,2 0 0,1 10,11V5Z" />
            </svg>
          </button>
        </div>
  
        <div class="response-area">
          <div v-if="transcript" class="user-query">
            <p>{{ transcript }}</p>
          </div>
          <div v-if="response" class="assistant-response">
            <p>{{ response }}</p>
          </div>
          <div v-if="error" class="error-message">
            <p>{{ error }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VoiceAssistant',
    data() {
      return {
        isListening: false,
        isThinking: false,
        transcript: '',
        response: '',
        error: '',
        recognition: null,
        apiEndpoint: 'YOUR_API_ENDPOINT_HERE' // Replace with your API endpoint
      }
    },
    methods: {
      initializeRecognition() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        
        if (!SpeechRecognition) {
          this.error = 'Speech recognition is not supported in your browser. Try Chrome or Edge.';
          return;
        }
  
        this.recognition = new SpeechRecognition();
        this.recognition.continuous = false;
        this.recognition.interimResults = false;
        this.recognition.lang = 'en-US';
  
        this.recognition.onstart = () => {
          this.isListening = true;
          this.error = '';
        };
  
        this.recognition.onerror = (event) => {
          this.isListening = false;
          this.error = `Error occurred in recognition: ${event.error}`;
        };
  
        this.recognition.onend = () => {
          this.isListening = false;
        };
  
        this.recognition.onresult = async (event) => {
          const transcript = event.results[0][0].transcript;
          this.transcript = transcript;
          this.isThinking = true;
          
          try {
            // Call your API here
            const apiResponse = await this.callAssistantAPI(transcript);
            this.response = apiResponse.response;
            
            // Speak the response if available
            if (apiResponse.response && this.supportsSpeechSynthesis()) {
              this.speak(apiResponse.response);
            }
          } catch (err) {
            this.error = 'Failed to get response from assistant API';
            console.error(err);
          } finally {
            this.isThinking = false;
          }
        };
      },
      
      async callAssistantAPI(query) {
        // Replace this with your actual API call
        try {
          const response = await fetch(this.apiEndpoint, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query })
          });
          
          if (!response.ok) {
            throw new Error('API request failed');
          }
          
          return await response.json();
        } catch (error) {
          console.error('API Error:', error);
          throw error;
        }
      },
      
      toggleVoiceRecognition() {
        if (this.isThinking) return;
        
        if (!this.recognition) {
          this.initializeRecognition();
        }
        
        if (this.isListening) {
          this.recognition.stop();
        } else {
          this.transcript = '';
          this.response = '';
          this.recognition.start();
        }
      },
      
      speak(text) {
        if (this.supportsSpeechSynthesis()) {
          const utterance = new SpeechSynthesisUtterance(text);
          speechSynthesis.speak(utterance);
        }
      },
      
      supportsSpeechSynthesis() {
        return 'speechSynthesis' in window;
      }
    },
    beforeUnmount() {
      if (this.recognition) {
        this.recognition.stop();
      }
    }
  }
  </script>
  
  <style scoped>
  .voice-assistant {
    font-family: 'Roboto', sans-serif;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .assistant-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  
  .status-indicator {
    position: relative;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .mic-button {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #4285f4;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 2;
  }
  
  .mic-button:hover {
    background: #3367d6;
    transform: scale(1.05);
  }
  
  .mic-button:disabled {
    background: #cccccc;
    cursor: not-allowed;
  }
  
  .mic-icon {
    width: 30px;
    height: 30px;
    color: white;
  }
  
  .pulse {
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(66, 133, 244, 0.3);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .status-indicator.listening .pulse {
    opacity: 1;
    animation: pulse 1.5s infinite;
  }
  
  .status-indicator.thinking .pulse {
    opacity: 1;
    background: rgba(234, 67, 53, 0.3);
    animation: pulse 1s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(0.8);
      opacity: 0.7;
    }
    70% {
      transform: scale(1.3);
      opacity: 0;
    }
    100% {
      transform: scale(0.8);
      opacity: 0;
    }
  }
  
  .response-area {
    width: 100%;
    min-height: 100px;
    padding: 15px;
    border-radius: 8px;
    background: #f9f9f9;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .user-query {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #eee;
  }
  
  .user-query p {
    margin: 0;
    color: #333;
    font-weight: 500;
  }
  
  .assistant-response p {
    margin: 0;
    color: #555;
    line-height: 1.5;
  }
  
  .error-message {
    color: #d32f2f;
    font-size: 14px;
  }
  </style>
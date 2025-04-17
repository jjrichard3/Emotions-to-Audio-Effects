# Emotions-to-Audio-Effects

## Table of Contents
- [1. Introduction](#1-introduction)
  - [1.1 About Emotion-Driven Timbre Transformation](#11-about-emotion-driven-timbre-transformation)
  - [1.2 Who This Manual Is For](#12-who-this-manual-is-for)
  - [1.3 System Requirements](#13-system-requirements)
- [2. Installation and Setup](#2-installation-and-setup)
- [3. Getting Started](#3-getting-started)
- [4. Core Features](#4-core-features)
- [5. Step-by-Step Guides](#5-step-by-step-guides)
- [6. Troubleshooting](#6-troubleshooting)
- [7. Support and Resources](#7-support-and-resources)
- [8. Glossary](#8-glossary)
- [9. Legal Information](#9-legal-information)

---

## 1. Introduction

### 1.1 About Emotion-Driven Timbre Transformation
Emotion-Driven Timbre Transformation is a Max/MSP patch that layers timbral effects onto an audio file based on emotional data from an AI model. By connecting to the Emotion Logic API, the software analyzes an audio file and returns 11 distinct emotions mapped to audio effects like reverb, ring modulation, and spectral freeze.

**Key Features:**
- Integration with Emotion Logic’s Cloud API for emotion recognition  
- Real-time audio transformation using emotion data  
- Interactive effect blending via a 2D vector slider  
- MIDI support for segmenting and triggering audio clips  

### 1.2 Who This Manual Is For
Musicians, sound designers, audio engineers, and developers with basic Max/MSP skills interested in AI-driven timbral manipulation.

**Prerequisites:**
- Basic Max/MSP skills  
- Working installation of Max/MSP  
- Internet access and an Emotion Logic API account  

### 1.3 System Requirements
- Max/MSP version: 8.0 or later  
- Internet connection  
- External MIDI controller (optional)  

---

## 2. Installation and Setup

### 2.1 Downloading the Software
- Visit: [GitHub Repository](https://github.com/jjrichard3/Emotions-to-Audio-Effects.git)  
- Download or clone the repository to your local machine.

### 2.2 Installation Instructions
- Ensure Max/MSP is installed.  
- Locate and open `main.maxpat` in Max/MSP.

### 2.3 Initial Configuration
- Sign up at [Emotion Logic](https://emotionlogic.ai)  
- In the Developer Zone, create a new project under "Entertainment Application"  
- Select “Cloud API” and retrieve your API credentials  
- Open `analyzeAudio.js` and enter your API_KEY and API_KEY_PASSWORD  

---

## 3. Getting Started

### 3.1 Navigating the Interface
The patch uses Max’s Presentation Mode with:
- Audio path input  
- Emotional report data stored in a `preset` object  
- Playback controls  
- Gain control  
- MIDI keyboard  
- `pictslider` for blending effects  

### 3.2 First Steps
1. Open `main.maxpat` in Max  
2. Open `analyzeAudio.js` and input your Emotion Logic credentials  
3. Input full audio file path in the message box  
4. Click the message to process the file  

### 3.3 Customizing Settings
- Adjust gain using the `live.gain~` object  
- Customize MIDI input through Max’s MIDI settings  

---

## 4. Core Features

### 4.1 Emotion Analysis via API
- Upload a clip and receive 11 emotion values (0–100) for each 2-3 second segment  
- Use the `preset` object to switch between segments  
- These values are used for effect generation  

### 4.2 Audio Effect Blending
- The `pictslider` blends effects mapped from x/y coordinates  
- Effect corners:
  - Bottom left (0,0): Original sound  
  - Top left (0,127): Ring Modulator / Distortion  
  - Bottom right (127,0): Spectral Freeze  
  - Top right (127,127): Reverb / Vibrato  

### 4.3 Real-Time Audio Playback
- Clip loops continuously after processing  
- Select and loop segments using the MIDI keyboard  
- Break out of loop with button next to the piano  
- Stop playback via `dac~` (speaker icon)  

---

## 5. Step-by-Step Guides

### 5.1 Load and Process an Audio File
1. Launch Max/MSP and open `main.maxpat`  
2. Open `analyzeAudio.js` and enter your Emotion Logic API credentials  
3. Paste absolute path of audio file into the message box  
4. Click the message to send audio for analysis  
5. Once the `preset` object is populated, click the speaker button to enable audio  

### 5.2 Use the Effect Blending Slider
- Move the `pictslider` to blend effects  
- Each corner applies a unique effect (see section 4.2)  

### 5.3 Use the MIDI Sampler
- Use MIDI piano in patch or external controller  
- Select and loop audio segments  
- Break loop by clicking the button next to the piano  

---

## 6. Troubleshooting

### 6.1 Common Issues

**No audio plays**
- Ensure `dac~` is enabled (Speaker button)  
- Verify the audio file path is valid and absolute  

**API fails to respond**
- Check internet connection  
- Verify API credentials in Developer Dashboard  

### 6.2 Error Messages

**“Invalid credentials”**  
- Re-enter or regenerate API keys  

**“File not found”**  
- Use absolute path format  
  - Mac: `/Users/you/Music/audio.wav`  
  - Windows: `C:/Users/you/Desktop/audio.wav`  

---

## 7. Support and Resources

### 7.1 Contacting Support
- Open an issue on the [GitHub repository](https://github.com/jjrichard3/Emotions-to-Audio-Effects)

### 7.2 Online Resources
- [Emotion Logic](https://emotionlogic.ai)

### 7.3 Software Updates
- Manually update by downloading the latest version from GitHub  

---

## 8. Glossary
- **Max/MSP**: Visual programming language for audio/media  
- **API**: Interface between software components  
- **pictslider**: UI object for 2D blending  
- **dac~**: Max object for enabling audio output  

---

## 9. Legal Information

### 9.1 Terms of Use
This software is intended for educational and creative purposes.

### 9.2 Privacy Policy
User audio is processed via the Emotion Logic API. Refer to their privacy policy for data handling policies.

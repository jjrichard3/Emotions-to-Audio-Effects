const maxApi = require('max-api');
const fs = require('fs');

const API_URL = "https://cloud.emlo.cloud/analysis/analyzeFile";
const API_KEY = "Put your API-Key here";
const API_KEY_PASSWORD = "Put your password here";

async function analyzeAudio(audio_file_path) {
    try {
        const { spawn } = require('child_process');

        if (!fs.existsSync(audio_file_path)) {
            maxApi.post(`Error: Audio file not found at ${audio_file_path}`);
            return;
        }

        const curl = spawn('curl', [
            '-X', 'POST', API_URL,
            '-F', `file=@${audio_file_path}`,
            '-F', 'outputType=json',
            '-F', 'sensitivity=normal',
            '-F', 'dummyResponse=false',
            '-F', 'backgroundNoise=0',
            '-F', `apiKey=${API_KEY}`,
            '-F', `apiKeyPassword=${API_KEY_PASSWORD}`,
            '-F', 'consentObtainedFromDataSubject=true',
            '-F', 'useSpeechToText=false'
        ]);

        let response = '';
        curl.stdout.on('data', (data) => {
            response += data.toString();
        });

        curl.stderr.on('data', (data) => {
            maxApi.post(`${data.toString()}`);
        });

        curl.on('close', (code) => {
            if (code === 0) {
                try {
                    const parsedResponse = JSON.parse(response);
    
                    maxApi.post("Analysis complete");
					maxApi.outlet(parsedResponse);
                } catch (parseError) {
                    maxApi.post(`Error parsing response: ${parseError.message}`);
                }
            } else {
                maxApi.post(`Request failed with exit code ${code}`);
            }
        });
    } catch (error) {
        maxApi.post(`Request failed: ${error.message}`);
    }
}

maxApi.addHandler('input', (audio_file_path) => {
	analyzeAudio(audio_file_path);	
});

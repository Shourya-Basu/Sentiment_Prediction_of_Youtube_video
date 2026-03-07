import requests
import json
import re
from Config import OPENROUTER_KEY

def ai(prompt):

    url = "https://openrouter.ai/api/v1/chat/completions"

    headers = {
        "Authorization": f"Bearer {OPENROUTER_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": "openai/gpt-4o-mini",
        "messages": [
            {"role": "system", "content": "Return ONLY valid JSON. No explanation."},
            {"role": "user", "content": prompt}
        ],
        "temperature": 0.2
    }

    response = requests.post(url, headers=headers, json=payload)

    if response.status_code != 200:
        return {"error": "AI request failed", "details": response.text}

    result = response.json()

    try:
        ai_text = result["choices"][0]["message"]["content"]

        json_match = re.search(r"\[.*\]|\{.*\}", ai_text, re.DOTALL)
        if json_match:
            return json.loads(json_match.group())

        return {"error": "No valid JSON returned"}

    except Exception as e:
        return {"error": "Failed to parse AI response", "details": str(e)}
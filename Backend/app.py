from flask import Flask, request, jsonify
from flask_cors import CORS
from Youtube_API_config import youtube
from AI_API_Config import ai
from embeded_ID_YT import embed, extract_youtube_id
import json

app = Flask(__name__)
CORS(app)


@app.route("/home", methods=["POST"])
def youtube_route():

    data = request.get_json()
    if not data:
        return jsonify({"error": "No data received"}), 400

    link = data.get("Links")
    if not link:
        return jsonify({"error": "No link provided"}), 400

    link = link.strip()


    if "youtube.com" not in link.lower() and "youtu.be" not in link.lower():
        return jsonify({"error": "Invalid YouTube link"}), 400

    video_id = extract_youtube_id(link)
    if not video_id:
        return jsonify({"error": "Could not extract video ID"}), 400

    embed_url = embed(link)


    raw_comments = youtube(video_id)

    if not raw_comments:
        return jsonify({
            "embed_url": embed_url,
            "comments": []
        }), 200


    comment_texts = [c["text"] for c in raw_comments]

    prompt = f"""
    For each comment below, classify sentiment strictly as:
    Positive, Negative, or Neutral.

    Return ONLY a JSON list like:
    ["Positive", "Neutral", "Negative"]

    Comments:
    {json.dumps(comment_texts)}
    """
    sentiments = ai(prompt)

    final_comments = [
        {"comment": text, "sentiment": sent}
        for text, sent in zip(comment_texts, sentiments)
    ]

    return jsonify({
        "embed_url": embed_url,
        "comments": final_comments
    }), 200


if __name__ == "__main__":
    app.run(debug=True)
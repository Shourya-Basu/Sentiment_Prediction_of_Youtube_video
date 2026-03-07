import requests
from Config import YOUTUBE_API_KEY

def youtube(video_id):

    url = "https://www.googleapis.com/youtube/v3/commentThreads"

    params = {
        "part": "snippet",
        "videoId": video_id,
        "maxResults": 10,
        "order": "relevance",
        "key": YOUTUBE_API_KEY
    }

    response = requests.get(url, params=params)
    data =  response.json()
    comments = []

    for item in data.get("items", []):
        snippet = item["snippet"]["topLevelComment"]["snippet"]

        comments.append({
            "author": snippet["authorDisplayName"],
            "text": snippet["textDisplay"],
            "likes": snippet["likeCount"]
        })

    return comments
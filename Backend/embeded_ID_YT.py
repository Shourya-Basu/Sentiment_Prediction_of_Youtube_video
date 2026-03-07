import re

def extract_youtube_id(link):
    if not link:
        return None

    link = link.strip()

    patterns = [
        r"v=([0-9A-Za-z_-]{11})",
        r"youtu\.be/([0-9A-Za-z_-]{11})",
        r"embed/([0-9A-Za-z_-]{11})",
        r"shorts/([0-9A-Za-z_-]{11})"
    ]

    for pattern in patterns:
        match = re.search(pattern, link)
        if match:
            return match.group(1)

    return None


def embed(link):
    video_id = extract_youtube_id(link)

    if video_id:
        return f"https://www.youtube.com/embed/{video_id}?autoplay=1&mute=1"

    return None
if __name__ == "__main__":
    test_link = "https://www.youtube.com/watch?v=-ShPKo-FXbw"
    
    embed_url = embed(test_link)
    
    print("Extracted ID:", extract_youtube_id(test_link))
    print("Embed URL:", embed_url)
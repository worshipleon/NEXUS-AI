import requests

CATBOX_UPLOAD_URL = "https://catbox.moe/user/api.php"

def upload_media(file_path, user_hash=None):
    """
    Uploads a media file to Catbox.moe.

    :param file_path: The path to the media file to be uploaded.
    :param user_hash: Optional user hash for authentication.
    :return: The URL of the uploaded media.
    """
    files = {
        'fileToUpload': open(file_path, 'rb')
    }
    data = {
        'reqtype': 'fileupload'
    }
    if user_hash:
        data['userhash'] = user_hash
    
    response = requests.post(CATBOX_UPLOAD_URL, files=files, data=data)
    
    if response.status_code == 200:
        return response.text.strip()
    else:
        raise Exception("Failed to upload media file to Catbox.moe")

# Example usage
if __name__ == "__main__":
    try:
        file_path = "path/to/your/media/file.jpg"  # Replace with your file path
        uploaded_url = upload_media(file_path)
        print(f"Uploaded URL: {uploaded_url}")
    except Exception as e:
        print(f"Error: {e}")

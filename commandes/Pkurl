import requests
import sys

def upload_to_catbox(file_path):
    url = 'https://catbox.moe/user/api.php'
    files = {
        'reqtype': (None, 'fileupload'),
        'fileToUpload': (file_path, open(file_path, 'rb'))
    }

    response = requests.post(url, files=files)
    if response.status_code == 200:
        return response.text.strip()
    else:
        raise Exception(f"Failed to upload file: {response.status_code}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python media_converter.py <file_path>")
        sys.exit(1)

    file_path = sys.argv[1]
    try:
        result = upload_to_catbox(file_path)
        print(f"File uploaded successfully: {result}")
    except Exception as e:
        print(f"Error: {str(e)}")

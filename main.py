import webview
import sys
from spotdl.download.downloader import DownloadManager
from spotdl.search.spotifyClient import SpotifyClient
import spotdl.search.songGatherer as songGatherer

class Api():
  def download_song(self, url: str):
      SpotifyClient.init(
          client_id="5f573c9620494bae87890c0f08a60293",
          client_secret="212476d9b0f3472eaa762d90b19b0ba8",
          user_auth=False,
      )

      with DownloadManager(None) as downloader:
          song_list = songGatherer.from_query(url, "mp3")

          downloader.download_multiple_songs(song_list)

def whatever(_):
  print("started")


if __name__ == "__main__":
    api = Api()
    if sys.argv[1] != "--dev":
        window = webview.create_window("not dev", "build/index.html", js_api=api)
    else:
        window = webview.create_window("dev", "http://localhost:8080", js_api=api)

    webview.start(whatever, window, debug=True)

// @ts-nocheck
import React from "react"

export default class Main extends React.Component {
  constructor(props: any) {
    super(props)
    this.state = {
      url: null
    }
  }

  textChangeHandler = (event: any) => {
    this.setState({ url: event.target.value })
  }

  submitHandler = (event: any) => {
    window.pywebview.api.download_song(this.state.url)
  }

  render() {
    return (
      <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center">
        <h1 className="text-center mb-8 text-3xl">Spotdl GUI proof of concept</h1>
        <input
          className="block border border-gray-400 w-full p-3 rounded mb-4"
          type="text"
          placeholder="URL to song/artist/playlist"
          onChange={this.textChangeHandler}
        />
        <button
          type="submit"
          className="w-full text-center py-3 rounded bg-indigo-600 text-white my-1"
          onClick={this.submitHandler}
        >
          Download
        </button>
      </div>
    )
  }
}

import React, {useState, useEffect} from 'react'

const Tweets = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetch("/tweets/").then(res => {
      if(res.ok) {
        return res.json()
      }
    }).then(jsonRes => setTweets(jsonRes.tweetsList))
  })

  return (
    <div>
      {tweets.map(tweet => <li>{tweet}</li>)}
    </div>
  )
}

export default Tweets;

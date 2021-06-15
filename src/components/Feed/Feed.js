import Tweet from "../Tweet/Tweet"
import TweetInput from "../TweetInput/TweetInput"
import "./Feed.css"

const firstTweet = {
  id: -1,
  name: `Code Path`,
  handle: `codepath`,
  text: `This is a tweet about a new intern that excites us greatly. We're going to proclaim our joy on social media and be showered with praise with likes and reactions.`,
  comments: 445,
  retweets: 121,
  likes: 165000,
}

export default function Feed(tweets, addTweet) {
  return (
    <div className="col feed">
      <TweetInput addTweet={addTweet}/>

      <div className="see-new-tweets">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">
        {/* example first tweet */}
        {tweets.tweets.map((tweet, idx) => (
          <Tweet tweet={tweet} key={tweet.id} />
        ))}
        {/* */}
      </div>
    </div>
  )
}

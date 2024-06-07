
export default function () {
  return (
    <div className="form-container"  >
        <label htmlFor="FullName">Full name</label>
        <input type="text" name="FullName" placeholder="Jim Collins"/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="jimcollins@beachesgogreen.org"/>
        <label htmlFor="message">Message</label>
        <input type="text" name="message" placeholder="How can we help you?"/>
        <input type="submit" className="input-submit" value="Send a Message"/>
    </div>
  )
}

import "./Compliment.css";
export default function Compliment(props) {
  return (
    <div className="postCardHolder">
      <img src="./postcard.png" />
      <p>{props.message}</p>
    </div>
  );
}

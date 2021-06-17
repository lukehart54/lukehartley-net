import bulma from 'bulma/css/bulma.css';

export default function CoinCard() {
  return (
    <div className="card">
      <div className="media">
        <figure className="image is-48by48">
          <img src="/alukeChess-quickdraft.png" alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="/alukeChess-quickdraft.png" alt="Placeholder image" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">Luke Hartley</p>
            <p className="subtitle is-6">@lukehartley</p>
          </div>
        </div>

        <div className="content">
          Just like regular chess, but in lukeChess you can create your own
          pieces and moves.
        </div>
      </div>
    </div>
  );
}

import bulma from 'bulma/css/bulma.css';

export default function CoinCard() {
  return (
    <div class="card">
      <div class="media">
        <figure class="image is-48by48">
          <img src="/alukeChess-quickdraft.png" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="/alukeChess-quickdraft.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Luke Hartley</p>
            <p class="subtitle is-6">@lukehartley</p>
          </div>
        </div>

        <div class="content">
          Just like regular chess, but in lukeChess you can create your own
          pieces and moves.
        </div>
      </div>
    </div>
  );
}

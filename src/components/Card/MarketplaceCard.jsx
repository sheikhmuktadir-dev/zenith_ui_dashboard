import Style from "./card.module.css";

export default function MarketplaceCard({ image, title, author, price }) {
  return (
    <div className={Style.marketplaceCard}>
      <div className={Style.marketplaceCardImageArea}>
        <img src={image} className={Style.marketplaceCardImage} />
      </div>

      <div className={Style.marketplaceCardTextArea}>
        <div className={Style.marketplaceCardTextFlex}>
          <h5>{title}</h5>
          <p className={Style.marketplaceCardPara}>By {author}</p>
        </div>

        <div className={Style.marketplaceCardBottom}>
          <p className={Style.marketplaceCardBid}>Bid: {price}</p>
          <button className={Style.marketplaceCardBtn}>Place Bid</button>
        </div>
      </div>
    </div>
  );
}

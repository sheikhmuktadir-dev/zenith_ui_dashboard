import MarketplaceCard from "../../components/Card/MarketplaceCard";
import Style from "./marketplace.module.css";
import Banner from "/images/nftbanner.webp";
import { trendingNFTs, recentNFTs } from "../../data/Market";
import Table from "../../components/Table/Table";
import {
  creatorsColumns,
  creatorsData,
  transactionsColumns,
  transactionsData,
} from "../../data/TableData";

export default function Marketplace() {
  return (
    <div className={Style.marketplaceMain}>
      <div className={Style.marketplaceLeft}>
        <div className={Style.marketplaceBanner}>
          <img
            src={Banner}
            alt="nft-banner"
            className={Style.marketplaceBannerImage}
          />

          <div className={Style.marketplaceText}>
            <h3 className={Style.marketplaceTextWhite}>
              Discover, collect, and sell extraordinary NFTs
            </h3>
            <p className={Style.marketplaceTextWhite}>
              Enter in this creative world. Discover now the latest NFTs or
              start creating your own!
            </p>
          </div>
        </div>

        <div className={Style.marketplaceCardArea}>
          <h4 className={Style.marketplaceCardheading}>Trending NFTs</h4>
          <div className={Style.MarketplaceCardGrid}>
            {trendingNFTs.map((item, i) => (
              <MarketplaceCard
                key={item.id || i}
                image={item.image}
                title={item.title}
                author={item.author}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className={Style.marketplaceCardArea}>
          <h4 className={Style.marketplaceCardheading}>Recently Added</h4>
          <div className={Style.MarketplaceCardGrid}>
            {recentNFTs.map((item, i) => (
              <MarketplaceCard
                key={item.id || i}
                image={item.image}
                title={item.title}
                author={item.author}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={Style.marketplaceRight}>
        <Table
          title="Top Creators"
          columns={creatorsColumns}
          data={creatorsData}
          showCheckbox={false}
        />

        <Table
          title="Recent Transactions"
          columns={transactionsColumns}
          data={transactionsData}
          showCheckbox={false}
        />
      </div>
    </div>
  );
}

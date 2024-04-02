import { FunctionComponent } from "react";
import styles from "./ProductDetails.module.css";

const ProductDetails: FunctionComponent = () => {
  return (
    <div className={styles.productDetails}>
      <section className={styles.bg} />
      <div className={styles.productDetailsImages}>
        <div className={styles.productImage}>
          <div className={styles.closeButton}>
            <img
              className={styles.arrowDown22Icon}
              loading="lazy"
              alt=""
              src="/arrowdown2-2.svg"
            />
          </div>
          <div className={styles.slide}>
            <img
              className={styles.productImageSlider}
              loading="lazy"
              alt=""
              src="/product-image-slider@2x.png"
            />
            <img
              className={styles.productImageSlider1}
              loading="lazy"
              alt=""
              src="/product-image-slider-1@2x.png"
            />
            <img
              className={styles.productImageSlider2}
              loading="lazy"
              alt=""
              src="/product-image-slider-2@2x.png"
            />
            <img
              className={styles.productImageSlider3}
              loading="lazy"
              alt=""
              src="/product-image-slider-3@2x.png"
            />
          </div>
          <div className={styles.closeButton1}>
            <img
              className={styles.arrowDown21Icon}
              loading="lazy"
              alt=""
              src="/arrowdown2-1.svg"
            />
          </div>
        </div>
        <img
          className={styles.productImageIcon}
          loading="lazy"
          alt=""
          src="/product-image@2x.png"
        />
      </div>
      <img className={styles.closeIcon} alt="" src="/close.svg" />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.productNameParent}>
            <div className={styles.productName}>
              <h1 className={styles.chineseCabbage}>Chinese Cabbage</h1>
              <button className={styles.stockStatus}>
                <div className={styles.inStock}>In Stock</div>
              </button>
            </div>
            <div className={styles.ratingSku}>
              <div className={styles.rating}>
                <img
                  className={styles.ratingChild}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className={styles.ratingItem}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className={styles.ratingInner}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className={styles.starIcon}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <img
                  className={styles.ratingChild1}
                  loading="lazy"
                  alt=""
                  src="/star-1.svg"
                />
                <div className={styles.review}> 4 Review</div>
              </div>
              <div className={styles.div}>•</div>
              <div className={styles.sku}>
                <div className={styles.sku1}>SKU:</div>
                <div className={styles.shareItems}>2,51,594</div>
              </div>
            </div>
          </div>
          <div className={styles.price}>
            <div className={styles.quantityAdjusters}>
              <div className={styles.wrapper}>
                <div className={styles.div1}>$48.00</div>
              </div>
              <div className={styles.div2}>$17.28</div>
            </div>
            <div className={styles.priceInner}>
              <div className={styles.offWrapper}>
                <div className={styles.off}>64% Off</div>
              </div>
            </div>
          </div>
          <div className={styles.shareIcons} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.brandWrapper}>
                <div className={styles.brand}>Brand:</div>
              </div>
              <button className={styles.farmaryLogoParent}>
                <div className={styles.farmaryLogo} />
                <div className={styles.frameWrapper}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/group-20@2x.png"
                  />
                </div>
                <b className={styles.farmary}>farmary</b>
              </button>
            </div>
            <div className={styles.shareWrapper}>
              <div className={styles.share}>
                <div className={styles.shareItemWrapper}>
                  <div className={styles.shareItem}>Share item:</div>
                </div>
                <div className={styles.share1}>
                  <img
                    className={styles.socialMediaIcon}
                    loading="lazy"
                    alt=""
                    src="/social-media.svg"
                  />
                  <img
                    className={styles.socialMediaIcon1}
                    loading="lazy"
                    alt=""
                    src="/social-media-1.svg"
                  />
                  <img
                    className={styles.socialMediaIcon2}
                    loading="lazy"
                    alt=""
                    src="/social-media-2.svg"
                  />
                  <img
                    className={styles.socialMediaIcon3}
                    loading="lazy"
                    alt=""
                    src="/social-media-3.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.classAptentTaciti}
          >{`Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. `}</div>
        </div>
        <div className={styles.cta}>
          <div className={styles.quantityInput}>
            <div className={styles.quantity}>
              <div className={styles.minus}>
                <div className={styles.container} />
                <input className={styles.minus1} type="checkbox" />
              </div>
              <div className={styles.productCategory}>
                <div className={styles.vegTagList}>5</div>
              </div>
              <div className={styles.plus}>
                <div className={styles.container1} />
                <img
                  className={styles.plus1Icon}
                  loading="lazy"
                  alt=""
                  src="/plus-1.svg"
                />
              </div>
            </div>
          </div>
          <button className={styles.button}>
            <div className={styles.addToCart}>Add to Cart</div>
            <input className={styles.frameInput} type="checkbox" />
          </button>
          <button className={styles.button1}>
            <img className={styles.heartIcon} alt="" src="/heart.svg" />
          </button>
        </div>
        <div className={styles.smallDetails}>
          <div className={styles.category}>
            <div className={styles.category1}>Category:</div>
            <div className={styles.vegetables}>Vegetables</div>
          </div>
          <div className={styles.tags}>
            <div className={styles.tag}>Tag:</div>
            <div className={styles.vegetables1}>Vegetables</div>
            <div className={styles.healthy}>Healthy</div>
            <div className={styles.chinese}>Chinese</div>
            <div className={styles.cabbage}>Cabbage</div>
            <div className={styles.greenCabbage}>Green Cabbage</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

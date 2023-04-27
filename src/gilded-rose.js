module.exports = class GildedRose {
  constructor() {
    this.items = []; // do not alter this -- Corner Goblin
  }
  updateQualityForAgedBrie(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      if (item.quality < 50) {
        item.quality = item.quality + 1;
      }
    }
  }

  updateQualityForBackstagePasses(item) {
    if (item.quality < 50) {
      item.quality = item.quality + 1;

      if (item.sellIn < 11) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
      if (item.sellIn < 6) {
        if (item.quality < 50) {
          item.quality = item.quality + 1;
        }
      }
    }
    item.sellIn = item.sellIn - 1;
    if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    }
  }

  updateQualityFor(item) {
    if (item.name == "Aged Brie") {
      this.updateQualityForAgedBrie(item);
      return;
    }
    if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
      this.updateQualityForBackstagePasses(item);
      return;
    }
   
      if (item.quality > 0) {
        if (item.name !== "Sulfuras, Hand of Ragnaros") {
          item.quality = item.quality - 1;
        }
      }
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn = item.sellIn - 1;
    }
    if (item.sellIn < 0) {
        if (item.quality > 0) {
          if (item.name !== "Sulfuras, Hand of Ragnaros") {
            item.quality = item.quality - 1;
          }
        }
    }
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i];
      this.updateQualityFor(item);
    }
  }
};

import GildedRose from "./gilded-rose";
import Item from "./item";

describe.each([
  ['+5 Dexterity Vest', 10, 20, 9, 19],
  ['Aged Brie', 2, 0, 1, 1],
  ['Elixir of the Mongoose', 5, 7, 4, 6],
  ['Sulfuras, Hand of Ragnaros', 0, 80, 0, 80],
  ['Backstage passes to a TAFKAL80ETC concert', 15, 20, 14, 21],
  ['Backstage passes to a TAFKAL80ETC concert', 10, 20, 9, 22],
  ['Backstage passes to a TAFKAL80ETC concert', 5, 20, 4, 23],
  // ['Conjured Mana Cake', 3, 6],
])('Normal %s (%i %i)', (name, sellIn, quality, expSellIn, expQuality) =>{
  it(`--> (${expSellIn},${expQuality})`, ()=> {
    let gildedRose = new GildedRose()
    gildedRose.items.push(new Item(name, sellIn, quality))
    
    gildedRose.updateQuality()

    expect(gildedRose.items[0].sellIn).toEqual(expSellIn)
    expect(gildedRose.items[0].quality).toEqual(expQuality)
  })
})
describe.each([
  ['+5 Dexterity Vest', 0, 20, -1, 18],
  ['Aged Brie', 0, 0, -1, 2],
  ['Elixir of the Mongoose', 0, 7, -1, 5],
  ['Sulfuras, Hand of Ragnaros', -1, 80, -1, 80],
  ['Backstage passes to a TAFKAL80ETC concert', 0, 20, -1, 0],
  // ['Conjured Mana Cake', 3, 6],
])('Vencido %s (%i %i)', (name, sellIn, quality, expSellIn, expQuality) =>{
  it(`--> (${expSellIn},${expQuality})`, ()=> {
    let gildedRose = new GildedRose()
    gildedRose.items.push(new Item(name, sellIn, quality))
    
    gildedRose.updateQuality()

    expect(gildedRose.items[0].sellIn).toEqual(expSellIn)
    expect(gildedRose.items[0].quality).toEqual(expQuality)
  })
})

describe.each([
  ['+5 Dexterity Vest', 0, 0, -1, 0],
  ['Aged Brie', 0, 49, -1, 50],
  ['Elixir of the Mongoose', 0, 0, -1, 0],
  // ['Sulfuras, Hand of Ragnaros', -1, 80, -1, 80],
  ['Backstage passes to a TAFKAL80ETC concert', 15, 50, 0, 50],
  ['Backstage passes to a TAFKAL80ETC concert', 15, 49, 0, 50],
  ['Backstage passes to a TAFKAL80ETC concert', 10, 49, 0, 50],
  ['Backstage passes to a TAFKAL80ETC concert', 5, 49, 0, 50],
  // ['Conjured Mana Cake', 3, 6],
])('50>= Q >=0  %s (%i %i)', (name, sellIn, quality, expSellIn, expQuality) =>{
  it(`--> (${expSellIn},${expQuality})`, ()=> {
    let gildedRose = new GildedRose()
    gildedRose.items.push(new Item(name, sellIn, quality))
    
    gildedRose.updateQuality()

    expect(gildedRose.items[0].sellIn).toEqual(expSellIn)
    expect(gildedRose.items[0].quality).toEqual(expQuality)
  })
})

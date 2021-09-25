import GildedRose from "./gilded-rose";

describe('ejemplos de prueba / borrarlos', () => {
    it('should be able to pass', () => {
      expect(true).toBe(true)
    })
  
    it('should be able to fail', () => {
      expect(true).toBe(false)
    })
  })
  
  describe('GildedRose', () => {
    let subject;
  
    beforeEach(() => {
      subject = new GildedRose()
    })
  
    it('should do a thing', () => {
      subject.updateQuality()
    })
  })
class EnhancementItem {
    constructor() {
      this.enhancementLevel = 0;
    }
  
    enhance() {
      let successProbability;
      if (this.enhancementLevel < 15) {
        successProbability = 0.95 - (this.enhancementLevel * 0.05);
      } else {
        successProbability = 0.3;
      }
  
      if (Math.random() < successProbability) {
        this.enhancementLevel++;
      }
    }
  }
  
  const item = new EnhancementItem();
  
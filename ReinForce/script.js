class EnhancementItem {
    constructor() {
      this.enhancementLevel = 0;
      this.successProbability = 0.95;
    }
  
    enhance() {
      if (this.enhancementLevel >= 15) {
        this.successProbability = 0.3;
      } else if (this.enhancementLevel >= 10) {
        this.successProbability = 0.4;
      } else if (this.enhancementLevel >= 5) {
        this.successProbability = 0.7;
      }
  
      if (Math.random() < this.successProbability) {
        this.enhancementLevel++;
      }
    }
  }
  
  const enhanceButton = document.getElementById("enhance-button");
  const enhancementLevelElement = document.getElementById("enhancement-level");
  const successProbabilityElement = document.getElementById("success-probability");
  const currentItemElement = document.getElementById("current-item");
  
  const item = new EnhancementItem();
  
  enhanceButton.addEventListener("click", () => {
    item.enhance();
    enhancementLevelElement.textContent = item.enhancementLevel.toString();
    successProbabilityElement.textContent = (item.successProbability * 100).toFixed(0) + "%";
    currentItemElement.textContent = `현재 아이템은 강화 수치가 ${item.enhancementLevel}입니다.`;
  });
  
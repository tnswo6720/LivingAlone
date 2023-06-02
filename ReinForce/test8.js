
      class EnhancementItem {
  constructor() {
    this.enhancementLevel = 0;
    this.successProbability = 0.95;
    this.attemptCount = 0;
  }

  enhance() {
    this.attemptCount++;
    if (this.enhancementLevel >= 15) {
      this.successProbability = 0.3;
    } else if (this.enhancementLevel == 0) {
      this.successProbability = 0.95;
    } else {
      this.successProbability = Math.max(0.2, 0.9 - (this.enhancementLevel - 1) * 0.05);
    }

    if (Math.random() < this.successProbability) {
      this.enhancementLevel++;
      if (this.enhancementLevel >= 15) {
        this.successProbability = 0.3;
      } else {
        this.successProbability = Math.max(0.2, 0.9 - (this.enhancementLevel - 1) * 0.05);
      }
      const successAudio = document.getElementById("success-audio");
      successAudio.currentTime = 0;
      successAudio.play();
    } else {
      const failAudio = document.getElementById("fail-audio");
      failAudio.currentTime = 0;
      failAudio.play();
    }
  }

  getNextEnhancementLevel() {
    return this.enhancementLevel + 1;
  }
}

const enhanceButton = document.getElementById("enhance-button");
const successProbabilityElement = document.getElementById("success-probability");
const enhancementLevelElement = document.getElementById("enhancement-level");
const nextEnhancementLevelElement = document.getElementById("next-enhancement-level");

const item = new EnhancementItem();
let prevEnhancementLevel = 0;

enhanceButton.addEventListener("click", () => {
  item.enhance();
  successProbabilityElement.textContent = `${Math.round(item.successProbability * 100)}%`;
  enhancementLevelElement.textContent = item.enhancementLevel;
  nextEnhancementLevelElement.textContent = item.getNextEnhancementLevel();

  if (item.enhancementLevel > prevEnhancementLevel) {
    const successAudio = document.getElementById("success-audio");
    successAudio.currentTime = 0;
    successAudio.play();
  } else {
    const failAudio = document.getElementById("fail-audio");
    failAudio.currentTime = 0;
    failAudio.play();
  }

  prevEnhancementLevel = item.enhancementLevel;
});

    
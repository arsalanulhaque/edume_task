import letterToKeyMapping from "../../utils/letterToKeyMapping";

class Trie {
  constructor() {
    this.defaultStructure = () => {
      return { predictions: { current: [], deep: [] } };
    };
    this.root = this.defaultStructure();
  }

  insert(word) {
    if (word.length === 0) throw new Error("Word length cannot be zero");

    let currentNode = this.root;

    [...word].forEach((letter, index) => {
      const digit = letterToKeyMapping[letter];

      let isLastNode = false;

      if (word.length === index + 1) {
        isLastNode = true;
      }

      if (!digit) throw new Error("Not a valid digit");

      if (!currentNode.children) {
        currentNode.children = {};
      }

      if (!currentNode.children[digit]) {
        currentNode.children[digit] = this.defaultStructure();
      }

      currentNode = currentNode.children[digit];

      if (!isLastNode) {
        currentNode.predictions.deep.push(word);
      }
    });

    currentNode.predictions.current.push(word);
  }

  getPredictionsAtNode(keyString) {
    const defaultState = this.defaultStructure().predictions;
    let currentNode = this.root;
    let predictions;

    [...keyString].forEach((nodeKey) => {
      if (!currentNode.children || !currentNode.children[nodeKey]) {
        predictions = defaultState;
        return;
      }

      currentNode = currentNode.children[nodeKey];
      predictions = currentNode.predictions;
    });

    return predictions;
  }
}

export default Trie;

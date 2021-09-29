import Trie from "./Trie";

describe("Trie", () => {
  describe(".insert", () => {
    describe("error handling", () => {
      it("throws error when given empty string", () => {
        const trieInstance = new Trie();
        const input = "";

        const assert = () => {
          trieInstance.insert(input);
        };

        expect(() => {
          assert();
        }).toThrow();
      });

      it("throws error when given non [a-z] values", () => {
        const trieInstance = new Trie();
        const input = "R";

        const assert = () => {
          trieInstance.insert(input);
        };

        expect(() => {
          assert();
        }).toThrow();
      });
    });

    describe("currentPredictions", () => {
      it("creates 1 node and stores the given word, 'a' in current predictions array", () => {
        const trieInstance = new Trie();
        const input = "a";

        trieInstance.insert(input);
        const assertion = trieInstance.root.children[2].predictions.current;
        const expectedResult = ["a"];
        expect(assertion).toEqual(expectedResult);
      });

      it("creates 2 nodes with keys '2' and '4' when given words, 'a' and 'i'", () => {
        const trieInstance = new Trie();
        const input1 = "i";
        const input2 = "a";

        trieInstance.insert(input1);
        trieInstance.insert(input2);

        const childrenKeys = Object.keys(trieInstance.root.children);

        expect(childrenKeys).toMatchObject(["2", "4"]);
      });

      it("creates stores given word, 'ace', in the current predictions array", () => {
        const trieInstance = new Trie();
        const input = "ace";

        trieInstance.insert(input);
        const array =
          trieInstance.root.children[2].children[2].children[3].predictions
            .current;

        const expectedArray = ["ace"];
        expect(array).toMatchObject(expectedArray);
      });

      it("stores T9Onyms in same array", () => {
        const trieInstance = new Trie();
        const input1 = "fat";
        const input2 = "eat";

        trieInstance.insert(input1);
        trieInstance.insert(input2);

        const array =
          trieInstance.root.children[3].children[2].children[8].predictions
            .current;

        const expectedArray = ["fat", "eat"];

        expect(array).toEqual(expectedArray);
      });
    });

    describe("deepPredictions", () => {
      it('stores the word "eat" in the deep predictions array at 2 nodes', () => {
        const trieInstance = new Trie();
        const word = "eat";

        trieInstance.insert(word);

        const firstNode = trieInstance.root.children[3];
        const secondNode = firstNode.children[2];
        const thirdNode = secondNode.children[8];

        const expectedResult = ["eat"];

        expect(firstNode.predictions.deep).toEqual(expectedResult);
        expect(secondNode.predictions.deep).toEqual(expectedResult);
        expect(thirdNode.predictions.deep).toEqual([]);
      });
    });
  });

  describe(".getWordsAtNode", () => {
    it("retrieves 'eat' and 'fat' (T9onyms) given 328 and lists 'eating' under deep predictions", () => {
      const trieInstance = new Trie();
      const input = "328";

      const word1 = "fat";
      const word2 = "eat";
      const word3 = "eating";

      trieInstance.insert(word1);
      trieInstance.insert(word2);
      trieInstance.insert(word3);

      const predictions = trieInstance.getPredictionsAtNode(input);

      const { current, deep } = predictions;

      const expectedCurrentPredictions = ["fat", "eat"];
      const expectedDeepPredictions = ["eating"];

      expect(current).toEqual(expectedCurrentPredictions);
      expect(deep).toEqual(expectedDeepPredictions);
    });

    it("returns empty predictions if node does not exist", () => {
      const trieInstance = new Trie();
      const input = "32822";

      const word = "fat";

      trieInstance.insert(word);

      const nonExistentNode = trieInstance.getPredictionsAtNode(input);
      const expectedResult = { current: [], deep: [] };

      expect(nonExistentNode).toEqual(expectedResult);
    });
  });
});

import TrieDictionary from "./TrieDictionary";
import Trie from "../Trie/Trie";

jest.mock("../Trie/Trie");

beforeEach(() => {
  Trie.mockClear();
});

describe("TrieDictionary", () => {
  describe(".populateTrie", () => {
    it("calls the insert method on the Trie class 3 times given an array of 3 words", () => {
      const trieDictionaryInstance = new TrieDictionary();
      const words = ["ace", "eat", "fat"];

      const mockTrieInstance = Trie.mock.instances[0];
      const mockInsert = mockTrieInstance.insert;

      trieDictionaryInstance.populateTrie(words);

      expect(mockInsert).toHaveBeenCalledWith("ace");
      expect(mockInsert).toHaveBeenCalledWith("eat");
      expect(mockInsert).toHaveBeenCalledWith("fat");
      expect(mockInsert).toHaveBeenCalledTimes(3);
    });

    it("calls the insert method on the Trie class 4 times when initialized with a 4 word txt file", () => {
      const filePath = "src/services/TrieDictionary/mockTextFile.txt";
      const trieDictionaryInstance = new TrieDictionary(filePath);

      const mockTrieInstance = Trie.mock.instances[0];
      const mockInsert = mockTrieInstance.insert;

      trieDictionaryInstance.populateTrie();

      expect(mockInsert).toHaveBeenCalledWith("apple");
      expect(mockInsert).toHaveBeenCalledWith("orange");
      expect(mockInsert).toHaveBeenCalledWith("banana");
      expect(mockInsert).toHaveBeenCalledWith("pear");
      expect(mockInsert).toHaveBeenCalledTimes(4);
    });
  });

  describe(".parseDictionary", () => {
    it("returns an array of words", () => {
      const filePath = "src/services/TrieDictionary/mockTextFile.txt";
      const trieDictionaryInstance = new TrieDictionary(filePath);

      const array = trieDictionaryInstance.parseDictionary();

      expect(array.length).toBe(4);
    });
  });

  describe(".getAllPredictions", () => {
    it("returns real word predictions given an numerical string", () => {
      const trieDictionaryInstance = new TrieDictionary();
      const input = "328";

      const mockTrieInstance = Trie.mock.instances[0];
      const mockGetWordsAtNode = mockTrieInstance.getPredictionsAtNode;

      trieDictionaryInstance.getAllPredictions(input);

      expect(mockGetWordsAtNode).toHaveBeenCalledWith("328");
      expect(mockGetWordsAtNode).toHaveBeenCalledTimes(1);
    });

    it("returns node structure when given undefined", () => {
      const trieDictionaryInstance = new TrieDictionary();
      const input = undefined;

      const assertion = trieDictionaryInstance.getAllPredictions(input);
      const expectedResult = { current: [], deep: [] };

      expect(assertion).toEqual(expectedResult);
    });
  });
});

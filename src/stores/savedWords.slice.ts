import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { StringToNumberUtils } from '../utils/stringToNumber.utils';
import { RootState } from './store';

// Define a type for the slice state
interface SavedWordsState {
  dictionary: {[key: number]: string[]}
}

// Define the initial state using that type
const LOCAL_STORAGE_KEY = 'savedWords';
const initialState: SavedWordsState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{\"dictionary\":{}}");

type SaveWordPayload = string;
type RemoveWordPayload = string;

export const savedWordsSlice = createSlice({
  name: 'savedWords',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    saveWord: (state, action: PayloadAction<SaveWordPayload>) => {
        const word = action.payload;
        const models = StringToNumberUtils.getModels(word);
        let wordArray = state.dictionary[models.total] || [];
        if (!wordArray.includes(word)) {
            wordArray = [...wordArray, word];
            state.dictionary = {...state.dictionary, [models.total]: wordArray};
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        }
    },
    removeWord: (state, action: PayloadAction<RemoveWordPayload>) => {
        const word = action.payload;
        const models = StringToNumberUtils.getModels(word);
        let wordArray: string[] = state.dictionary[models.total] || [];
        const newWordArray = wordArray.filter((element) => element !== word);
        if (newWordArray !== wordArray) {
            state.dictionary = {...state.dictionary, [models.total]: newWordArray};
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        }
      },
  },
})

export const SavedWordsActions = savedWordsSlice.actions

const selectSavedWords = (state: RootState) => state.savedWords.dictionary;
export const SavedWordsSelectors = {
    selectSavedWords
}

export const SavedWordsReducer = savedWordsSlice.reducer;
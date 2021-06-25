import { configureStore } from '@reduxjs/toolkit'
import { SavedWordsReducer } from './savedWords.slice'

export const store = configureStore({
  reducer: {
    savedWords: SavedWordsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
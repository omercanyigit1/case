import { combineReducers } from '@reduxjs/toolkit'
import { questionSliceReducer } from '@/store/slice/questionSlice'

const rootReducer = combineReducers({
  question: questionSliceReducer
})

export default rootReducer
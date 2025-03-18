import { createSelector } from "@ngrx/store";
import { AppState } from "../../app-state";

export const selectLogEntryPaginationState = (state: AppState) => state.counter;

export const selectCount = createSelector(selectLogEntryPaginationState, (state) => {
  state.count   
});
import { createSlice } from "@reduxjs/toolkit";
import { isExpired } from "./demoSessionService";

const STORAGE_KEY = "demoAccessSessions";
const UNLOCK_KEY = "demoUnlockedGuid";

function loadSessions() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

function saveSessions(sessions) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

const demoAccessSlice = createSlice({
  name: "demoAccess",
  initialState: {
    unlockedGuid: localStorage.getItem(UNLOCK_KEY),
    sessions: loadSessions(),
  },
  reducers: {
    addSession(state, action) {
      state.sessions.push(action.payload);
      saveSessions(state.sessions);
    },
    incrementOpenCount(state, action) {
      const guid = action.payload;
      const session = state.sessions.find((s) => s.guid === guid);
      if (session) {
        session.openCount += 1;
        saveSessions(state.sessions);
      }
    },
    unlockSession(state, action) {
      state.unlockedGuid = action.payload;
      localStorage.setItem(UNLOCK_KEY, action.payload);
    },
    logoutSession(state) {
      state.unlockedGuid = null;
      localStorage.removeItem(UNLOCK_KEY);
    },
    unlockSession(state, action) {
      state.unlockedGuid = action.payload;
    },
    cleanupExpired(state) {
      state.sessions = state.sessions.filter((s) => !isExpired(s));
      saveSessions(state.sessions);
    },
    removeSession(state, action) {
      const guid = action.payload;
      state.sessions = state.sessions.filter((s) => s.guid !== guid);
      saveSessions(state.sessions);
    }
  },
});

export const {
  addSession,
  incrementOpenCount,
  cleanupExpired,
  unlockSession,
  logoutSession,
  removeSession
} = demoAccessSlice.actions;
;

export default demoAccessSlice.reducer;

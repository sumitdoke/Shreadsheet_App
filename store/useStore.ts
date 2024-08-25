import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type Formatting = {
  textAlign: 'left' | 'center' | 'right';
  fontSize: 'text-sm' | 'text-base' | 'text-lg';
};

type Cell = {
  content: string;
  formatting: Formatting;
};

interface Store {
  cells: Cell[][];
  history: Cell[][][];
  future: Cell[][][];
  searchQuery: string;
  setCellFormatting: (row: number, col: number, formatting: Partial<Formatting>) => void;
  setCellContent: (row: number, col: number, content: string) => void;
  undo: () => void;
  redo: () => void;
  search: (query: string) => void;
  clearSearch: () => void;
  clearHistory: () => void; // Optional: Clears history and future for a fresh state
}

export const useStore = create<Store>(devtools(persist(
  (set, get) => ({
    cells: Array(20).fill(null).map(() => Array(10).fill({
      content: '',
      formatting: { textAlign: 'left', fontSize: 'text-base' }
    })),
    history: [],
    future: [],
    searchQuery: '',
    setCellFormatting: (row, col, formatting) => {
      const state = get();
      const newCells = state.cells.map((r) => r.map((c) => ({ ...c })));
      newCells[row][col] = { ...newCells[row][col], formatting: { ...newCells[row][col].formatting, ...formatting } };
      
      set({
        cells: newCells,
        history: [...state.history, state.cells],
        future: [],
      });
    },
    setCellContent: (row, col, content) => {
      const state = get();
      const newCells = state.cells.map((r) => r.map((c) => ({ ...c })));
      newCells[row][col] = { ...newCells[row][col], content };
      
      set({
        cells: newCells,
        history: [...state.history, state.cells],
        future: [],
      });
    },
    undo: () => {
      const state = get();
      const { history, cells } = state;
      if (history.length === 0) return;
      
      const [lastState, ...restHistory] = history;
      
      set({
        cells: lastState,
        history: restHistory,
        future: [cells, ...state.future],
      });
    },
    redo: () => {
      const state = get();
      const { future, cells } = state;
      if (future.length === 0) return;
      
      const [nextState, ...restFuture] = future;
      
      set({
        cells: nextState,
        history: [...state.history, cells],
        future: restFuture,
      });
    },
    search: (query) => {
      set({ searchQuery: query });
    },
    clearSearch: () => {
      set({ searchQuery: '' });
    },
    clearHistory: () => set({ history: [], future: [] }),
  }),
  { name: 'spreadsheet-storage' } // Key for local storage
)));

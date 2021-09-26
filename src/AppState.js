import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  posts: [],
  profile: null,
  pics: [],
  postsData: {},
  currentPage: 1,
  updated: {}
})

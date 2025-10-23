export const API_BASE_URL = 'http://localhost:5555';

export const ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/login',
    REGISTER: '/register',
    ME: '/me',
    LOGOUT: '/logout'
  },
  
  // User
  USER: {
    PROFILE: '/profile',
    UPDATE_PROFILE: '/profile/update',
    DELETE_ACCOUNT: '/delete',
    ALL_USERS: '/all'
  },
  
  // Badges
  BADGES: {
    ALL: '/badges',
    SINGLE: (badgeKey) => `/badges/${badgeKey}`,
    MY_BADGES: '/badges/my-badges',
    LEADERBOARD: '/badges/leaderboard',
    AWARD: '/badges/award',
    ADMIN: {
      CREATE: '/badges/admin/badges',
      SUMMARY: '/badges/admin/summary'
    }
  },
  
  // Challenges & Events
  CHALLENGES: {
    ACTIVE: '/challenges/active',
    EVENTS: {
      ACTIVE: '/events/active'
    },
    JOIN_CHALLENGE: (challengeId) => `/challenges/${challengeId}/join`,
    JOIN_EVENT: (eventId) => `/events/${eventId}/join`,
    MY_CHALLENGES: '/my-challenges',
    PARTICIPATION_PROGRESS: (participationId) => `/participations/${participationId}/progress`,
    ADMIN: {
      CREATE_CHALLENGE: '/admin/challenges',
      CREATE_EVENT: '/admin/events'
    }
  },
  
  // Community
  COMMUNITY: {
    POSTS: '/posts',
    SINGLE_POST: (postId) => `/posts/${postId}`,
    COMMENTS: (postId) => `/posts/${postId}/comments`
  },
  
  // Leaderboard
  LEADERBOARD: {
    GLOBAL: '/global',
    MY_RANK: '/my-rank',
    TOP: '/top',
    CATEGORY: (category) => `/category/${category}`,
    ADMIN: {
      UPDATE: '/admin/update',
      STATS: '/admin/stats'
    },
    POINTS_HISTORY: '/my-points-history'
  },
  
  // Moderation
  MODERATION: {
    FLAG: '/flag',
    ADMIN: {
      FLAGGED: '/admin/flagged',
      RESOLVE_FLAG: (flagId) => `/admin/flags/${flagId}/resolve`,
      STATS: '/admin/stats',
      BULK_ACTION: '/admin/bulk-action'
    }
  },
  
  // Learning Paths & Modules
  MODULES: {
    PATH_MODULES: (pathId) => `/paths/${pathId}/modules`,
    ADD_MODULE: (pathId) => `/paths/${pathId}/modules`,
    ADD_RESOURCE: (moduleId) => `/modules/${moduleId}/resources`,
    MODULE_RESOURCES: (moduleId) => `/modules/${moduleId}/resources`
  },
  
  // Progress
  PROGRESS: {
    COMPLETE_MODULE: (moduleId) => `/modules/${moduleId}/complete`,
    PATH_PROGRESS: (pathId) => `/paths/${pathId}/progress`
  }
};
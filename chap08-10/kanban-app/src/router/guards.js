import store from '../store';

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // マッチしたルートにおいて、メタフィールドに`requiresAuth`が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする。
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
};

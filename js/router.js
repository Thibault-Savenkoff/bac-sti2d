const routes = {};
let currentRoute = null;

export function registerRoute(pattern, handler) {
  routes[pattern] = handler;
}

export function navigate(hash) {
  window.location.hash = hash;
}

function parseHash(hash) {
  const path = hash.replace(/^#\/?/, '') || '';
  const parts = path.split('/');
  return { path, parts };
}

function matchRoute(path) {
  for (const pattern of Object.keys(routes)) {
    const patternParts = pattern.replace(/^\//, '').split('/');
    const pathParts = path.split('/');
    if (patternParts.length !== pathParts.length) continue;
    const params = {};
    let matched = true;
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        params[patternParts[i].slice(1)] = pathParts[i];
      } else if (patternParts[i] !== pathParts[i]) {
        matched = false;
        break;
      }
    }
    if (matched) return { handler: routes[pattern], params };
  }
  return null;
}

function dispatch() {
  const { path } = parseHash(window.location.hash);
  const match = matchRoute(path);
  if (match) {
    currentRoute = { path, params: match.params };
    match.handler(match.params);
  }
}

export function initRouter() {
  window.addEventListener('hashchange', dispatch);
  dispatch();
}

export function getCurrentRoute() {
  return currentRoute;
}

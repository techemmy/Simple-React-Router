const historyPush = (path) => {
  history.pushState({}, null, path);
};

const historyReplace = (path) => {
  history.replaceState({}, null, path);
};

export { historyPush, historyReplace };

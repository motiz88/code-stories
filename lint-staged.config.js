module.exports = {
  linters: {
    "*.js": ["git-exec-and-restage eslint --fix --"],
    "package.json": ["git-exec-and-restage prettier"]
  }
};

// eslint-disable-next-line no-unused-vars
function alt(...args) {
  return "{" + args.join(",") + "}";
}

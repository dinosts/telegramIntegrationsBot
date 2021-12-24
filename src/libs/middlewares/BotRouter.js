class BotRouter {
  constructor(set) {
    this.set = set;
  }

  async use(regex, cb) {
    try {
      if (this.set.message.match(regex)) {
        cb(this.set);
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = BotRouter;

class ConsensusError extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super();

    this.name = this.constructor.name;
    this.deprecated = false;
    this.message = message;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ConsensusError;
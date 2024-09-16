function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString();
}

module.exports = getCurrentTime;

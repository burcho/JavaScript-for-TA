const getGreeting = (username, currentDate) => {
    const currentTime = currentDate.getHours();
    if (10 > currentTime > 6) {
        return `Good morning, ${username}!`;
    } else if (16 > currentTime >= 10) {
        return `Good afternoon, ${username}!`;
    } else if (16 > currentTime >= 23) {
        return `Good evening, ${username}!`;
    } else {
        return `Good night, ${username}!`;
    }
}

module.exports.getGreeting = getGreeting;
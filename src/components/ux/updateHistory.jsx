export const updateHistory = (inView, urlString) => {
    if (inView) {
        window.history.pushState(
            {
                id: urlString
            },
            urlString,
            urlString
        );
    }
}

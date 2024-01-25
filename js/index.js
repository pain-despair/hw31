function redirectToSite(url) {
    // Проверяем, указан ли протокол
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        // Добавляем протокол, если отсутствует
        url = 'http://' + url;
    }

    // Переадресуем на указанный сайт
    window.location.href = url;
}
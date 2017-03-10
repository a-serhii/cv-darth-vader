$(function () {
    var html = $('#profile').html();
    var data = {
            name : 'Энакин Скайвокер',
            photo : 'http://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwpapers.ru%2Fwallpapers%2Ffilms%2F5342%2FPREV_%D0%94%D0%B0%D1%80%D1%82-%D0%B2%D0%B5%D0%B9%D0%B4%D0%B5%D1%80.jpg&f=1',
            who_am_I : 'Падаван Оби-Вана Кеноби',
            why_I_am_learning : [
                'Делать Йоде кофе надоело.',
                'Хочется внушать страх галактике.',
                'Мечтаю быть администратором звезды смерти, туда без front-end знаний не берут...'
            ],
            contacts : ['darthvader@power.com','Я в <a href="https://vk.com/darth_vader" target="_blank">vk.com</a>'],
            i_can : 'Если нужно, могу подавить восстание повстанцев'
        };

    var content = tmpl(html, data);
    $('body').append(content);
});


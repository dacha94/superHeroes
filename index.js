"use strict"

//JSON инфа 
let json = `[{
        "name": "Харли Квинн",
        "code": "harleyQween",
        "image": "aseets/images/kvin.jpeg",
        "universe": "DC Comics",
        "alterego": "Харлин Фрэнсис Квинзель",
        "activity": "Обаятельная злодейка",
        "firends": "Ядовитый плющ",
        "superpowers": "Тренированная гимнастка, Харли обладает увеличенной силой, ловкостью и выносливостью, а также иммунитетом к воздействию некоторых токсинов.",
        "moreinfo": "<br>сумасбродная суперзлодейка и противница Бэтмена, наиболее известная как девушка и напарница Джокера, с недавних пор начавшая выстраивать одиночную криминальную карьеру. Будучи в прошлом психиатром лечебницы Аркхем, она лично занималась лечением Джокера, пока не влюбилась в безумного дэбила <br>Харли планировала стать популярным психологом с собственной серией книг и пошла работать в психиатрическую лечебницу Аркхэм, чтобы заработать себе имя на самых сложных случаях с маньяками-убийцами. После трёх месяцев уговоров руководство позволило ей проводить сеансы с Джокером, который влюбил её в себя. Харли помогает злодею сбежать, а когда руководство больницы узнаёт об этом, Квинн вскоре сама оказывается в клинике, но уже как пациентка"
    },{
        "name": "Супермен",
        "code": "superman",
        "image": "aseets/images/superman.jpeg",
        "universe": "DC Comics",
        "alterego": "Кларк Кент",
        "activity": "Борец за справедливость",
        "firends": "Собака Крипто",
        "superpowers": "непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм",
        "moreinfo": "<br>Полная противоположность своему противнику Бэтмену. Если Брюс Уэйн был простым человеком и стал героем, то Супермен героем родился, но вынужден был изображать выходца из бедной канзасской семьи. Последний представитель планеты Криптон был отправлен на Землю прямо перед тем, как его родина была уничтожена. <br><br>Супермен — некий хамелеон от мира комиксов. В своем первом выпуске в 1938 году он был просто человек-огромный мускул, который умел только разбивать стены и выбивать двери. Позднее к его умениям добавилась способность летать. Дальше у многочисленных воплощений Кларка, от подростка в «Тайнах Смоллвиля» до величественного «Человека из стали», разный уровень и количество суперспособностей. Неизменным остается его слабое место — уязвимость к Криптониту, радиоактивному веществу с родной планеты."
    },{
        "name": "Халк",
        "code": "hulk",
        "image": "aseets/images/hulk.jpeg",
        "universe": "Marvel Comics",
        "alterego": "Брюс Беннер",
        "activity": "Супергерой, борец за справедливость, ученый-биохимик",
        "firends": "Мстители",
        "superpowers": "Сверхчеловеческая сила искорость, выносливость, полет",
        "moreinfo": "<br>Идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего единственного ребенка от его побоев. <br><br>Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным для людей, который не могут держать себя в руках."
    },{
        "name": "Черная вдова",
        "code": "blackWidow",
        "image": "aseets/images/natasha.jpeg",
        "universe": "Marvel Comics",
        "alterego": "Наташа Романофф",
        "activity": "Супергероиня, шпионка",
        "firends": "Мстители",
        "superpowers": "Пик человеческого физического потенциала, замедленное старение, знание многих языков",
        "moreinfo": "<br>Супергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы. <br><br>Там же ей вживили сыворотку Суперсолдата — как у Капитана Америки, но в советском варианте. Благодаря ей Наташа может использовать максимальные возможности своего организма: силу, гибкость, скорость, ловкость и т. д. Также сыворотка дает эффект замедленного старения. По мнению фанатов, самое главное преимущество Черной Вдовы — то, что ее сыграла красотка Скарлетт Йоханссон :)"
    },{
        "name": "Чудо-женщина",
        "code": "wonderWoman",
        "image": "aseets/images/wonder.jpeg",
        "universe": "DC Comics",
        "alterego": "Диана Принс",
        "activity": "Супергероиня, секретарь-референт",
        "firends": "Лига Справедливости, Бэтмен, Супермен",
        "superpowers": "Сверхчеловеческая сила искорость, выносливость, полет",
        "moreinfo": "<br>Пора бы разбавить эту мужскую вечеринку по-настоящему крутой девчонкой :) Принцесса-амозонка родилась на мистическом острове Темескира, расположенном в центре Бермудского треугольника, где пропадают самолеты. Свое настоящее имя — Диана — она получила в честь древнегреческой богини охоты, а суперспособности — от богини любви Афродиты. Растили героиню в исключительно женском обществе, поэтому Чудо-женщина часто появляется в культуре как символ феминизма. <br><br>У Дианы есть супер-снаряжение: лассо истины и тиара. Первое было сковано богом огня Гефестом, и оно никогда не промахивается. Человек, попавший в его петлю, неизбежно расскажет свои секреты, вспомнит забытое и даже подчинится приказам. Тиара же работает как метательное оружие, способное рассечь что угодно. Корона со звездой в центре символизирует патриотизм американской героини и служит стильным аксессуаром :)"
    },{
        "name": "Капитан Америка",
        "code": "captainAmerica",
        "image": "aseets/images/capitan.jpeg",
        "universe": "Marvel Comics",
        "alterego": "Стивен Роджерс",
        "activity": "Супер-солдат",
        "firends": "Мстители",
        "superpowers": "Сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя",
        "moreinfo": "<br>Капитан Америка — персонаж, целеноправленно созданный, чтобы воплощать идеалы патриотизма. Потому он был особенно популярный во время Второй мировой войны. В комиксах обращение «Капитан Америка» применяется к любому, кто выбран правительством США. Больше всего оно закрепилось именно за Стивом Роджерсом. <br><br>Стив родился в 1917 году в семье ирландских эмигрантов Сары и Джозефа Роджерсов. В детстве он был очень слабым юношей и постоянно подвергался насмешкам со стороны других ребят. Ирландские корни давали о себе знать, потому парень от драки не лез. В начале Второй мировой войны Стивен стремился попасть на фронт. Естественно, из-за здоровья ему отказывали. <br><br>По воле судьбы ему предложили принять участие в секретном оборонном проекте, целью которого было создание суперсолдат. Несмотря на сложности во время эксперимента, результат был успешным. Роджерс превратился из хилого юноши в настоящего Аполлона. Актер Крис Эванс с этой ролью вполне справился:)"
    },{
        "name": "Ядовитый плющ",
        "code": "poisonIvy",
        "image": "aseets/images/poison.jpeg",
        "universe": "DC comics",
        "alterego": "Памела Лилиан Айсли",
        "activity": "Суперзлодейка и враг Бэтмена",
        "firends": "Харли Квин",
        "superpowers": "Некогда учёная-ботаничка, превратившаяся в результате несчастного случая в гибрид человека и растения.",
        "moreinfo": "<br>Ядовитый Плющ — мизантропичная учёная в области ботаники и биохимии. Она обладает сверхъестественными контролем над жизнью растений и способна отравлять одним прикосновением; свои силы она использует в целях экологического терроризма. Также для совершения преступлений она использует яд растений и свои феромоны, контролирующие разум. Её деятельность обычно направлена на защиту вымирающих видов животных и окружающей среды от неосторожных действий людей. Изначально она была суперзлодейкой, но после The New 52[1] и перезапуска вселенной DC её периодически стали изображать как антигероиню или даже положительную героиню, которая делает плохие вещи ради хороших целей."
    }]`

//карточка
document.addEventListener("DOMContentLoaded", function(){
    let characters = JSON.parse(json);
    let charactersContent = "";

    for (let character of characters) {
        charactersContent +=
            `<div class="character_item">
                <img class="characterImage" src="${character.image}" alt="${character.code}"></img>
                <h2 class="characterName" id="${character.code}">${character.name}</h2>
                <div class="rating rating_set">
                    <div class="rating__body">
                        <div class="rating__active"></div>
                        <div class="rating__items">
                            <input type ="radio" class="rating__item" value="1" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="2" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="3" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="4" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="5" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="6" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="7" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="8" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="9" name="rating_${character.code}"></input>
                            <input type ="radio" class="rating__item" value="10" name="rating_${character.code}"></input>
                        </div>
                    </div>
                    <div class="rating__value" id="value_${character.code}"></div>
                </div>
                <div class="characterInfo">
                    <div><span>Вселенная:</span> ${character.universe}</div>
                    <div><span>Альтер эго:</span> ${character.alterego}</div>
                    <div><span>Род деятельности:</span>  ${character.activity}</div>
                    <div><span>Друзья:</span> ${character.firends}</div>
                    <div><span>Суперсилы:</span> ${character.superpowers}</div>
                    <div><span>Подробнее:</span> ${character.moreinfo}</div>
                </div>
            </div>`
        }

    document.getElementById("characters_container").innerHTML = charactersContent; //вывод
    renewRatings ();//достаем значения рейтинга из local storage и выводим в карточку на экран

    //рейтинг (оформление звезд)
    const ratings = document.querySelectorAll('.rating');

    if (ratings.length > 0) {
        initRatings();
    }

    //основная функция
    function initRatings (){
        let ratingActive;
        let ratingValue;

        //шаги по всем рейтингам 
        for (let index = 0; index < ratings.length; index++) {
            const rating = ratings[index];
            initRating(rating);
        }

        //инициализируем конкретный рейтинг
        function initRating(rating) {
            initRatingVars(rating);

            setRatingActiveWidth();

            if (rating.classList.contains('rating_set')) {
                setRating(rating);
            }
        }

        //инициализация переменных
        function initRatingVars(rating) {
            ratingActive = rating.querySelector('.rating__active');
            ratingValue = rating.querySelector('.rating__value');
        }

        //ширина активных звезд
        function setRatingActiveWidth(index = ratingValue.innerHTML) {
            const ratingActiveWidth = index/ 0.1;
            ratingActive.style.width = `${ratingActiveWidth}%`;
        }

        //возможность выставить оценку
        function setRating(rating) {
            const ratingItems = rating.querySelectorAll('.rating__item');

            for (let index = 0; index < ratingItems.length; index++){

                const ratingItem = ratingItems[index];

                ratingItem.addEventListener('mouseenter', function(e){
                    //обновление переменных
                    initRatingVars(rating);
                    //обновение активных звезд
                    setRatingActiveWidth(ratingItem.value);
                });

                ratingItem.addEventListener('mouseleave', function(e){
                    //обновение активных звезд
                    setRatingActiveWidth();
                });

                ratingItem.addEventListener('click', function(e){
                    initRatingVars(rating);

                    //Запись данных в локальное хранилище
                    localStorage.setItem(`${ratingItem.name}`, ratingItem.value);
                    //обновление значений рейтинга на странице
                    renewRatings ();
                });
            };
        };
    };

    //обновление видимых рейтингов на странице при изменении в локал
    function renewRatings (){
        document.getElementById(`value_${characters[0].code}`).innerHTML = localStorage.getItem(`rating_${characters[0].code}`);
        document.getElementById(`value_${characters[1].code}`).innerHTML = localStorage.getItem(`rating_${characters[1].code}`);
        document.getElementById(`value_${characters[2].code}`).innerHTML = localStorage.getItem(`rating_${characters[2].code}`);
        document.getElementById(`value_${characters[3].code}`).innerHTML = localStorage.getItem(`rating_${characters[3].code}`);
        document.getElementById(`value_${characters[4].code}`).innerHTML = localStorage.getItem(`rating_${characters[4].code}`);
        document.getElementById(`value_${characters[5].code}`).innerHTML = localStorage.getItem(`rating_${characters[5].code}`);
        document.getElementById(`value_${characters[6].code}`).innerHTML = localStorage.getItem(`rating_${characters[5].code}`);
        document.getElementById(`value_${characters[7].code}`).innerHTML = localStorage.getItem(`rating_${characters[7].code}`);
        document.getElementById(`value_${characters[8].code}`).innerHTML = localStorage.getItem(`rating_${characters[8].code}`);
        document.getElementById(`value_${characters[9].code}`).innerHTML = localStorage.getItem(`rating_${characters[9].code}`);
    };

});

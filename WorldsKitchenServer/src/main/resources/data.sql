INSERT INTO users (first_name, last_name,  login, email, password, image_url, auth_provider)
VALUES ('Weronika', 'Jankowska', 'werka', 'user@mail.com' ,'$2a$10$I2PjUfjqAUC2D8ebGwUhjO9.5bSKdPG5ECYq8Rhsyl/lF9fYBZv4.',
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/t-image2.jpg?alt=media&token=73897eab-47fd-44b6-b988-4db61e13a7b8', 'local');

INSERT INTO users (first_name, last_name, login, email, password, image_url, auth_provider)
VALUES ('Patryk', 'Górecki', 'patryczek', 'admin@mail.com', '$2a$10$I2PjUfjqAUC2D8ebGwUhjO9.5bSKdPG5ECYq8Rhsyl/lF9fYBZv4.',
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/t-image1.png?alt=media&token=cb2145ba-0b48-4deb-8805-ff52ca049522', 'local');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Spaghetti Carbonara',
        'Potrawa kuchni włoskiej złożona z makaronu, jajek, pancetty lub guanciale, sera pecorino romano lub parmezanu oraz czarnego pieprzu. Niepoprawnym jest mówienie o „sosie carbonara”, ponieważ makaron i pozostałe składniki stanowią tu nierozerwalną całość',
        '45min', 717, 3, 'ITALIAN', 'EASY', 1,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/carbonara.jpg?alt=media&token=a8f1eb2c-7094-452c-bad5-f76b39e8f7fd');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Ugotuj makaron al dente.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Do miski wbij 2 jajka i rozmieszaj.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Dodaj starty ser, sól i pieprz.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Pokrój boczek i przysmaż go na patelni.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Gdy będzie gotowy, zestaw go z ognia, a papierowym ręcznikiem zbierz ostrożnie nadmiar tłuszczu.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Odcedź ugotowany makaron i przełóż go na patelnię z boczkiem.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Wymieszaj, odczekaj około 2 minut, po czym dodaj jajeczny sos.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (1, 'Wymieszaj ponownie i wyłóż na talerze. Posyp serem i oprósz pieprzem.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Makaron spaghetti', '150g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Boczek', '75g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Jajko', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (1, 'Ser pecorino romano', '20g');

INSERT INTO comments (dish_id, user_id, content)
VALUES (1, 2, 'Bardzo smaczne danie! Polecam.');

INSERT INTO comments (dish_id, user_id, content)
VALUES (1, 1, 'Wspaniałe spaghetti carbonara, uwielbiam! 🍝');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Margherita Pizza',
        'Pizza margherita dzięki swoim klasycznym składnikom z pewnością zasmakuje każdemu. Jak zrobić domową margheritę? To naprawdę proste i każdy miłośnik tego włoskiego dania powinien stworzyć swój własny, ulubiony przepis.',
        '120min', 800, 3, 'ITALIAN', 'EASY', 1,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/margherita.jpg?alt=media&token=fb31e6ed-8734-4a06-a8b9-325a05e4fae3');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Drożdże wyjmij wcześniej z lodówki, tak aby w czasie przygotowania miały temperaturę pokojową.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Zalej je ciepłą wodą, dodaj łyżeczkę cukru oraz 2 łyżeczki mąki, po czym odstaw na przynajmniej 15 minut w ciepłe miejsce.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Przesianą mąkę wymieszaj z jedną łyżeczką soli, następnie stopniowo wlewaj rozczyn drożdży, mieszając całość drewnianą łyżką');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Dodaj łyżkę oliwy i mieszaj, aż masa zrobi się gładka.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Uformuj kulę i przez kilkanaście minut ręcznie wyrabiaj ciasto. Na koniec przykryj je ściereczką i odstaw na godzinę do wyrośnięcia.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Po tym czasie podziel ciasto na dwie-trzy mniejsze części, rozwałkuj, przełóż na blachę lub tortownicę i odstaw na kolejne pół godziny');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Pomidory z puszki przelej do garnka i rozgnieć widelcem, dodaj łyżkę oliwy, łyżeczkę cukru, szczyptę soli i pieprzu oraz oregano.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Całość gotuj przez 15 minut pod przykryciem');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Na cieście do pizzy rozsmaruj sos pomidorowy, całość posyp startym serem i wstaw do piekarnika.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (2, 'Piecz przez ok. 10 minut w 250 st. C. Gotową margheritę podawaj z listkami świeżej bazylii');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Drożdże', '25g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Mąka pszenna', '250g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Woda', '150ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Puszka pomidorów', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Kulka mozzarelli', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Bazylia', '1/2');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (2, 'Suszone oregano', '1/2 łyżeczki');

INSERT INTO comments (dish_id, user_id, content)
VALUES (2, 2, 'Jadałem lepsze pizze. 3/10');

INSERT INTO comments (dish_id, user_id, content)
VALUES (2, 1, 'Świetna pizza!!');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Lasagne',
        'Lasagne to jednocześnie nazwa potrawy i nazwa makaronu w postaci dużych, prostokątnych płatów. Lasagne jest jednym z najpopularniejszych dań kuchni włoskiej.',
        '60min', 1817, 4, 'ITALIAN', 'MEDIUM', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/lasagne.jpg?alt=media&token=ccf2a12c-0177-4f3f-b603-4a71948d51d7');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Do zmielonego mięsa dołóż przyprawy: po płaskiej łyżce majeranku i ziół prowansalskich, po płaskiej łyżeczce soli, pieprzu i słodkiej  papryki.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Mięso z przyprawami dokładnie wymieszaj i odstaw na bok.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Cebule obierz i posiekaj w drobną kostkę');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Ząbki czosnku obierz i przepuść przez praskę.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Nagrzej średniej wielkości patelnię i wlej cztery łyżki oleju roślinnego np. z pestek winogron lub ryżowego.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Cebulkę razem z czosnkiem i pieczarkami podsmażaj przez około pięć minut na odrobinę wyższej niż mała moc palnika.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Na patelnię wyłóż też mięso mielone z przyprawami.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Całość podsmażaj kilka minut, aż mięso zblednie.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Zawartość patelni mieszaj przy pomocy drewnianej łyżki. Łyżką cały czas rozdzielaj kawałki mięsa mielonego.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Po kilku minutach możesz już wlać szklankę przecieru pomidorowego. Może to być przecier z puszki, kartonu lub butelkowa passata. Dodaj też 200 gramów koncentratu pomidorowego. ');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Pyszny mięsno pomidorowy farsz do lasagne wymieszaj dokładnie i po dwóch minutach wyłącz.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Przygotuj sobie foremkę, w której będziesz piec lazanię. Może to być forma ceramiczna lub też szklana');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Ser mozzarella (nie ten jasny z zalewy) zetrzyj na tarce, na grubych oczkach. Na takich samych oczkach zetrzyj również ser żółty. Oba sery umieść razem w misce.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Na farsz mięsny wyłóż tarty ser. Postaraj się rozłożyć go równomiernie po całej foremce');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, 'Brytfankę z gotową do pieczenia zapiekanką umieść w piekarniku nagrzanym do 180 stopni. Wybierz środkową półkę z opcją pieczenia góra/dół.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (3, ' Lazanię piecz przez 50 minut');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Łopatka wieprzowa', '700g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Cebula', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Ząbek czosnku', '6szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Pieczarki', '200g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Przecier pomidorowy', '330g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Koncenrat pomidorowy', '200g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Słodka śmietanka 30%', '100g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Mleko', '1/3 szklanki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Makaron suchy', '215g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Mozzarella', '250g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (3, 'Ser żółty', '250g');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Risotto ai funghi',
        'Gallo Risotto Funghi Porcini to autentyczne włoskie ristotto z grzybami o charakterystycznej kremowej, pysznej i konsystencji „al dente”.',
        '30min', 817, 1, 'ITALIAN', 'EASY', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/risotto.jpeg?alt=media&token=45f8fb3c-2021-4cbf-ae36-5c9c727f0c10');

INSERT INTO preparation_steps (dish_id, step)
VALUES (4, 'Cebulę i pieczarki oczyścić i drobno posiekać.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (4, 'Wraz ze wszystkimi pozostałymi składnikami, oprócz sera i masła, włożyć do wysokiej formy.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (4, 'Nałożyć pokrywę i zagotować w podany sposób.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (4, 'Następnie gotować w dalszym ciągu w podany sposób.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (4, 'Masło I tarty ser włożyć pod spod krotko przed podaniem.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (4, 'Przemieszać i pozostawić na 5 minut do uspokojenia.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Cebula', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Pieczarki', '250g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Białe wino', '150ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Ryż', '300g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Bulion mięsny', '400ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Ser parmezan', '40g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (4, 'Masło', '50g');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Tiramisu',
        'Klasyczny włoski deser jest wbrew pozorom współczesną kompozycją. Włoska nazwa "tirami su" w dosłownym tłumaczeniu znaczy "podnieś mnie". Do końca nie wiadomo, czy ten deser sprawia, że rosną nam skrzydła, czy też raczej zwala nas z nóg',
        '30min', 1246, 4, 'ITALIAN', 'EASY', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/tiramisu.jpeg?alt=media&token=08f24650-8ce3-4b04-b72c-06171c08bc92');

INSERT INTO preparation_steps (dish_id, step)
VALUES (5, 'Jajka włożyć do zlewu i przelać gorącą wodą. Zaparzyć kawę, dodać likier i całość ostudzić. Oddzielić żółtka od białek.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (5, 'Wszystkie 4 żółtka ubić z cukrem pudrem na puszysty i jasny krem');

INSERT INTO preparation_steps (dish_id, step)
VALUES (5, 'Następnie dodawać porcjami mascarpone, cały czas ubijając, aż krem będzie gęsty i jednolity.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (5, 'W oddzielnej misce ubić białka na idealnie sztywną pianę z dodatkiem małej szczypty soli. Połączyć je z kremem z żółtek i mascarpone delikatnie mieszając łyżką.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (5, 'Połowę biszkoptów na moment zanurzać w kawie i układać w prostokątnym naczyniu');

INSERT INTO preparation_steps (dish_id, step)
VALUES (5, 'Wyłożyć połowę kremu i przykryć kolejną warstwą nasączonych biszkoptów. Znów oprószyć kakao. Posmarować resztą kremu, posypać kakao i wstawić do lodówki na minimum 3 godziny lub na całą noc.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Mocna kawa', '350ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Likier amaretto', '25ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Jajka', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Żółtka', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Cukier puder', '70g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Serek mascarpone', '500g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Biszkopty', '300g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (5, 'Gorzkie kakao', '3 łyżki');


INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Bigos',
        'Bigos to tradycyjna, polska potrawa z kapusty oraz różnego rodzaju mięsa (wieprzowiny, wołowiny, dziczyzny, drobiu, kiełbasy), przyprawiana ziołami. Trzymana w chłodzie i odgrzewana zyskuje na smaku.',
        '120min', 786, 4, 'POLISH', 'HARD', 1,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/bigos.jpg?alt=media&token=dab9165b-af8b-43f6-9400-073e88e66531');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Najpierw należy ugotować wędzony boczek z dodatkiem ziela angielskiego i liścia laurowego');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Po ugotowaniu pokroić boczek w kostkę.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Poszatkowane oba rodzaje kapusty dodajemy do wywaru z boczku, a następnie wrzucamy kostkę bulionu na wędzonym boczku.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Gotujemy około pół godziny.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Karkówkę i cebulę kroimy w kostkę i smażymy na patelni.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Wcześniej namoczone grzyby kroimy w kostkę i wraz z koncentratem pomidorowym dodajemy do usmażonej karkówki z cebulą.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, ' Dusimy wszystko przez kilka minut pod przykryciem.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Gdy mięso będzie już miękkie, przekładamy je do kapusty i dodajemy boczek, kiełbasę pokrojoną w kostkę, a także namoczone suszone śliwki.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Całość doprawiamy majerankiem i zgniecionym czosnkiem.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Dokładnie mieszamy i dusimy przez kolejne 30 minut.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (6, 'Na koniec należy zrobić zasmażkę ze smalcu i mąki. Dodajemy ją do bigosu i gotujemy na małym ogniu co jakiś czas mieszając.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Kapusta kiszona', '0,5kg');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Kapusta biała', '0,5kg');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Boczek wędzony', '30dag');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Kiełbasa zwyczajna', '30dag');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Mięso wieprzowe, karkówka', '40dag');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Koncentrat pomidorowy', '1 łyżka');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Cebula', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Suszone grzyby', '5szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Suszone śliwki', '5szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Smalec', '1 łyżka');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Mąka', '1 łyżka');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (6, 'Ząbek czosnku', '2szt.');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Cynamonki',
        'Absolutnie rozpustnie smaczne bułeczki z cynamonowym nadzieniem. Podane z wyśmienitą polewą z serka Philadelfia przełamują konwencjonalne smaki i nadają nowy wymiar słodko-słonym wypiekom. Nie zapomnij poczęstować nimi przyjaciół',
        '100min', 786, 3, 'POLISH', 'MEDIUM', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/cynamonki.jpg?alt=media&token=9e16ce59-3074-47cd-9a8e-b99aed1e43a0');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Do ciepłego mleka wsypać drożdże wymieszać i odstawić na 5 minut. Drożdże świeże dokładnie rozetrzeć z łyżeczką cukru, następnie dodać łyżkę mąki oraz 50 ml mleka, wymieszać i odstawić do wyrośnięcia na 10 minut.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Mąkę przesiać do miski, dodać cukier i sól. Wymieszać, wlać mleko z drożdżami instant (lub rozczyn ze świeżych drożdży) oraz dodać resztę mleka. Wszystko wymieszać łyżką.	');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Następnie zacząć wyrabiać ciasto dodając jajko i żółtka. Po ok. 3 minutach wyrabiania dodać masło i dalej wyrabiać przez ok. 10 minut aż ciasto będzie gładkie i sprężyste.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Przykryć folią i odstawić na ok. 1 godzinę do wyrośnięcia.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Po tym czasie wyłożyć ciasto na stolnicę lub blat i wygniatać przez chwilę pozbywając się pęcherzy powietrza.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Ciasto podzielić na 2 części i każdą rozwałkować na placek o wymiarach 30 x 30 cm.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Placki z ciasta kolejno smarować roztopionym masłem i posypać mieszanką cynamonu, cukru wanilinowego, drobnego cukru i startej skórki.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Zawinąć ciasto w roladki i każdą z nich pokroić w poprzek na 10 plasterków o grubości ok. 2 cm.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Wszystkie 20 sztuk ułożyć na dużej prostokątnej blaszce wyłożonej papierem do pieczenia. Odstawić na ok. 15 - 20 minut do wyrośnięcia.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Piekarnik nagrzać do 180 stopni C. Wierzch bułeczek delikatnie posmarować roztrzepanym (i nie zimnym) jajkiem i piec na złoty kolor przez ok. 20 minut.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (7, 'Po ostudzeniu polać lukrem: podgrzać sok z cytryny, dodać cukier puder i wymieszać.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Mleko', '250ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Drożdże', '50g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Mąka pszenna', '500g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Cukier', '175g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Jajko', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Żółtko', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Miękkie masło', '70g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Mielony cynamon', '3 łyżki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Cukier wanilinowy', '2 łyżki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Sok z cytryny', '3 łyżki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (7, 'Cukier puder', '3/4 szklanki');

INSERT INTO comments (dish_id, user_id, content)
VALUES (7, 2, 'Bardzo smaczne cynamonki! 🥮');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Pierogi ruskie',
        'Popularny wśród Polaków w Polsce i na Rusi rodzaj pierogów, których nazwa wywodzi się od Rusi Czerwonej. Na Ukrainie pierogi te bywają zwane „polskimi”.',
        '150min', 546, 4, 'POLISH', 'HARD', 1,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/pierogi.jpg?alt=media&token=9b0a7ff6-34a9-4604-88b2-e2793e153651');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Mąkę przesiać do miski, dodać sól. Do gorącej wody włożyć masło i roztopić, stopniowo wlewać do mąki, mieszając wszystko łyżką.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Połączyć składniki i wyłożyć je na podsypaną mąką stolnicę. Zagniatać ciasto przez około 8 - 10 minut aż będzie gładkie i plastyczne.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Ciasto włożyć do miseczki, przykryć folią, odstawić na 30 minut. W międzyczasie zacząć przygotowywać farsz.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Ziemniaki obrać, opłukać, włożyć do garnka, dodać sól, przykryć zimną wodą i zagotować. Gotować pod uchyloną pokrywą przez około pół godziny lub do miękkości. ');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Odcedzić, włożyć z powrotem do garnka i jeszcze gorące roztłuc dokładnie tłuczkiem do ziemniaków na gładką masę bez grudek. Ziemniaki całkowicie ostudzić, odparować.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Twaróg pokruszyć, rozgnieść widelcem lub praską (sera nie mielimy w maszynce bo nadzienie wyjdzie za rzadkie). Wymieszać z ziemniakami, doprawić solą i pieprzem.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Cebulkę (jeśli dodajemy) pokroić w kostkę i zeszklić na maśle lub smalcu, dodać do nadzienia, wymieszać.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Ciasto pierogowe podzielić na 4 części. Kolejno rozwałkowywać na placki.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Małą szklanką wycinać kółka z ciasta, na środek nakładać po jednej pełnej łyżce farszu (lub tyle ile się zmieści).');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Składać ciasto na pół i zlepiać dokładnie brzegi, uważając aby nadzienie nie dostało się w miejsce sklejenia.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Gotowe pierogi układać na stolnicy lub blacie podsypanych mąką.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'W dużym garnku zagotować osoloną wodę i jak będzie mocno wrzała, włożyć pierwszą partię pierogów (około 15 sztuk).');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Po ponownym zagotowaniu zmniejszyć ogień do średniego i gotować pierogi do czasu wypłynięcia na powierzchnię.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Po wypłynięciu pierogów gotować je jeszcze przez około 1,5 minuty.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Pierogi wyławiać łyżką cedzakową i układać na talerzach. Od razu podawać lub po obeschnięciu schować do pojemników i przechowywać w lodówce. Można też zamrozić.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (8, 'Podawać np. z zeszkloną na oleju lub smalcu cebulą lub z roztopionym smalcem ze skwarkami oraz z gęstą, kwaśną śmietaną.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (8, 'Mąka pszenna', '600g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (8, 'Wrząca woda', '400ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (8, 'Masło', '60g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (8, 'Twaróg', '500g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (8, 'Ziemniaki', '500g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (8, 'Cebula', '1szt.');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Kotlet schabowy',
        'Kotlet panierowany ze schabu przypominający sznycel wiedeński. Współcześnie jedna z popularnych potraw w kuchni polskiej. Historia polskich kotletów schabowych sięga XIX wieku..',
        '150min', 961, 4, 'POLISH', 'EASY', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/schabowy.jpg?alt=media&token=9de8f17b-f56d-4786-94dd-95047e220573');

INSERT INTO preparation_steps (dish_id, step)
VALUES (9, 'Ostrym nożem odciąć białą otoczkę z żyłki po zewnętrznej części mięsa. Pokroić na 4 plastry. Położyć na desce i dokładnie roztłuc na cieniutkie filety.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (9, 'Filety namoczyć w mleku z dodatkiem soli i pieprzu (ewentualnie z dodatkiem kilku plastrów cebuli)');

INSERT INTO preparation_steps (dish_id, step)
VALUES (9, 'Wyjąć filety z mleka i osuszyć je papierowymi ręcznikami. Doprawić solą i pieprzem, obtoczyć w mące, następnie w roztrzepanym jajku, a na koniec w bułce tartej.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (9, 'Na patelni rozgrzać klarowane masło (ok. 1/2 cm warstwa) lub smalec. Smażyć partiami po 2 kotlety, na większym ogniu, po 2 minuty z każdej strony. Następnie zmniejszyć ogień i smażyć jeszcze po ok. 3 minuty z każdej strony.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (9, 'Usmażone schabowe odsączyć z tłuszczu na papierowym ręczniku i podawać z ziemniakami i kapustą lub mizerią.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (9, 'Schab bez kości', '600g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (9, 'Mleko', '100ml');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (9, 'Mąka', '2 łyżki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (9, 'Jajka', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (9, 'Bułka tarta', '5 łyżek');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (9, 'Masło', '6 łyżek');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Szarlotka',
        'Wyrób cukierniczy w postaci placka z ciasta kruchego i owoców, zazwyczaj jabłek. W przypadku zastosowania jabłek, nazwy „szarlotka” i jabłecznik stosowane są zamiennie – zależnie od regionu Polski',
        '150min', 471, 4, 'POLISH', 'EASY', 1,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/szarlotka.jpg?alt=media&token=0d0ef102-a06f-4ab2-9daa-b88be41c57c8');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Jabłka obrać, pokroić na ćwiartki i wyciąć gniazda nasienne. Pokroić na mniejsze kawałki i włożyć do szerokiego garnka lub na głęboką patelnię.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Dodać cukier i cynamon i smażyć przez ok. 20 minut co chwilę mieszając, aż jabłka zmiękną i zaczną się rozpadać.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Do mąki dodać pokrojone w kostkę zimne masło, proszek do pieczenia, cukier i cukier wanilinowy.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Składniki połączyć w jednolite ciasto (mikserem lub ręcznie), pod koniec dodać jajko (ciasto będzie dość miękkie).');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Podzielić je na pół i włożyć obie połówki do zamrażarki na ok. 15 minut.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Piekarnik nagrzać do 180 st C.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Wyjąć jedną połówkę ciasta z zamrażarki, pokroić nożem na plasterki i wylepić nimi spód formy. Następnie wyłożyć na to jabłka');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Pozostałe ciasto zetrzeć na tarce bezpośrednio na jabłka (lub pokroić ciasto na plasterki i ułożyć na wierzchu).');

INSERT INTO preparation_steps (dish_id, step)
VALUES (10, 'Wstawić do piekarnika i piec przez ok. 50 minut lub na złoty kolor. Upieczoną szarlotkę przestudzić i posypać cukrem pudrem.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Jabłka', '1,5kg');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Cukier', '5 łyżek');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Cynamon', '1/2 łyżeczki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Mąka', '320g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Zimne masło', '250g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Proszek do pieczenia', '1.5 łyżeczki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Jajko', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (10, 'Cukier wanilinowy', '1 łyżka');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Tacos',
        'Wyrób cukierniczy w postaci placka z ciasta kruchego i owoców, zazwyczaj jabłek. W przypadku zastosowania jabłek, nazwy „szarlotka” i jabłecznik stosowane są zamiennie – zależnie od regionu Polski',
        '60min', 533, 1, 'MEXICAN', 'EASY', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/tacos.jpg?alt=media&token=ddd56be3-4781-4135-ad21-44e0a8124e6c');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Do zmielonego mięsa dodaj przyprawy');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Dodaj też trzy obierane i przepuszczone przez praskę ząbki czosnku.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Nagrzej patelnię z grubym, dnem wlej 2 łyżki oleju do smażenia lub roztop dwie łyżki smalcu.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Po chwili na patelnię wyłóż też mięso mielone dokładnie wymieszane z czosnkiem i z przyprawami. Mięso podsmażaj na średniej mocy palnika przez około 10 minut lub odrobinę dłużej.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Przez cały czas polecam mieszać je przy pomocy drewniane łyżki, by dokładnie porozdzielać zmielone bryłki mięsa.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Dwa dojrzałe awokado obierz i usuń dużą pestkę. Miąższ pokrój w kostkę lub zgnieć widelcem z dodatkiem soku z limonki');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Cebulę obierz i pokrój w cienkie piórka lub drobno posiekaj. Pomidory pokrój drobno lub posiekaj.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Przygotuj też świeżą kolendrę, miętę lub natkę pietruszki oraz listki sałaty rzymskiej, lodowej lub też sałatę rukolę, czy też dowolną mieszankę sałat.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Jeszcze gorące lub lekko przestudzone mięso rozdziel po równo na tyle porcji ile masz podprażonych przez chwilę na patelni mini placków tortilli kukurydzianych');

INSERT INTO preparation_steps (dish_id, step)
VALUES (11, 'Kolejno wykładaj też przygotowane warzywa i zioła lub też salsę albo guacamole.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Mięso mielone', '500g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Olej do smażenia', '2 łyżki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Czosnek', '3 ząbki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Mini placki tortilli', '12szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Sałata rzymska', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Pomidor', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Awokado', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (11, 'Czerwona cebula', '50g');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Guacamole',
        'Meksykański sos przyrządzany na bazie awokado. Guacamole swoje początki miał już w czasach azteckich.',
        '15min', 133, 3, 'MEXICAN', 'EASY', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/guacamole.jpeg?alt=media&token=a2a44955-c37e-43da-a2d0-917273282d30');

INSERT INTO preparation_steps (dish_id, step)
VALUES (12, 'Awokado umyć, przekroić na pół, ususnąć pestkę');

INSERT INTO preparation_steps (dish_id, step)
VALUES (12, 'Łyżką wydrążyć miąższ.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (12, 'Rozgnieść widelcem na pastę');

INSERT INTO preparation_steps (dish_id, step)
VALUES (12, 'Dodać sok z limonki, sól i starty czosnek');

INSERT INTO preparation_steps (dish_id, step)
VALUES (12, 'Całość wymieszać');

INSERT INTO preparation_steps (dish_id, step)
VALUES (12, 'Opcjonalnie dodać posiekaną ostrą papryczkę i listki świeżej kolendry.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (12, 'Awokado', '2szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (12, 'Sok z limonki', '2 łyżki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (12, 'Czosnek', '1 ząbek');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (12, 'Drobno posiekane chili', '1 łyżeczka');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (12, 'Pomidor', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (12, 'Cebula', '1/4 szt.');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Enchiladas',
        'Tradycyjne danie meksykańskie. Nazwa enchilada pochodzi od czasownika enchilar znaczącego „dodać paprykę chili”.',
        '45min', 683, 3, 'MEXICAN', 'MEDIUM', 2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/enchiladas.jpg?alt=media&token=6ab97ad6-be9a-4d6f-b8fd-d61e0d3c3c8c');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Nastawić do ugotowania ryż. Kurczaka pokroić na 2 cm paski. Doprawić go solą, pieprzem oraz mieszanką przypraw i nasmarować 2 łyżkami oleju roślinnego.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Rozgrzać patelnię z grubym dnem. Gdy będzie gorąca wlać łyżkę oleju, włożyć kurczaka i obsmażyć go z każdej strony, przez ok. 5 minut. Zdjąć z patelni i odłożyć na bok');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Na patelnię dodać łyżkę oleju i zeszklić pokrojoną w kosteczkę cebulę. Dodać pokrojoną w kostkę paprykę. Smażyć co chwilę mieszając przez około 3 minuty.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Dodać ugotowany ryż, odcedzoną kukurydzę i fasolę oraz podsmażone kawałki kurczaka, wszystko wymieszać.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Czosnek obrać i przekroić na pół. Włożyć do rondelka z oliwą i chwilę podsmażyć, dodać pomidory, koncentrat i przyprawy. Doprawić solą, pieprzem i zagotować. Gotować przez ok. 10 minut.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Rozłożyć farsz na tortille, posypać połową sera i listkami kolendry, zwinąć w ruloniki.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Piekarnik nagrzać do 180 stopni C. W formie lub na blaszce ułożyć zwinięte tortille łączeniem do dołu, polać sosem i posypać drugą połową sera.');

INSERT INTO preparation_steps (dish_id, step)
VALUES (13, 'Zapiekać przez 20 minut. Posypać kolendrą i posiekanym chili.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Torilla', '5szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Ryż', '100g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Pierś z kurczaka', '500g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Cebula', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Czerwona papryka', '1szt.');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Kukurydza z puszki', '1/2 szklanki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Fasola z puszki', '1/2 szklanki');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Mozzarella', '200g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Krojone pomidory', '300g');

INSERT INTO ingredients (dish_id, ingredient_name, portion)
VALUES (13, 'Koncentrat pomidorowy', '1 łyżka');




INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Chiles Rellenos',
        'Tradycyjne danie w kuchni meksykańskiej na bazie chili, wywodzące się z miasta Puebla. W 1858 roku zostało ono opisane jako „zielona papryczka chili nadziewana mięsem mielonym i panierowana w jajku”',
        '30min', 600, 2, 'MEXICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/chiles.jpg?alt=media&token=3b3fd852-c0da-4781-9623-be40759087b3');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Salsa',
        'Potrawa kuchni meksykańskiej. Rodzaj zimnego, często pikantnego sosu ze zmiksowanych lub drobno pociętych warzyw lub owoców z przyprawami.',
        '30min', 600, 2, 'MEXICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/salsa.jpg?alt=media&token=77cca4b3-86d3-459b-a807-d20db5c25e41');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Cheeseburger',
        'typowe danie typu fast food, kanapka z kotletem z mięsa wołowego. Porcja mięsa mielonego uformowana jest w płaski, okrągły placek, następnie usmażona lub upieczona bez panierki na ruszcie.',
        '30min', 600, 2, 'AMERICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/cheeseburger.jpg?alt=media&token=69ebe096-802a-4cf2-bb7e-a68cf3a0d2d0');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Hot dog',
        'Gorąca parówka lub kiełbasa z zimnym sosem serwowana najczęściej w długiej bułce. Danie typowo amerykańskie oraz przykład jedzenia typu fast food.',
        '30min', 600, 2, 'AMERICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/hotdog.jpg?alt=media&token=d67b9bf5-4ea0-4e7d-b257-0ad26c25acd0');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('BBQ Ribs',
        'Amerykańskie żeberka BBQ to legendarne danie - są miękkie, soczyste, lepkie i pełne aromatu. Marzysz o nich? Możesz je z łatwością przygotować w domowym piekarniku!',
        '30min', 600, 2, 'AMERICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/ribs.jpg?alt=media&token=de8d164c-ea68-4d44-ab4f-f82f568c3b01');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Mac and Cheese',
        'Potrawa popularna w krajach anglosaskich, w szczególności w Stanach Zjednoczonych, w postaci makaronu zapiekanego z sosem serowym.',
        '30min', 600, 2, 'AMERICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/maccheese.jpg?alt=media&token=741a1e14-96e1-45b6-aedb-746b69c132d4');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Apple Pie',
        'Owocowe ciasto, w którym podstawowym składnikiem nadzienia są jabłka, serwowane często z dodatkiem bitej śmietany lub gałkami lodów na wierzchu czy też z kawałkiem sera cheddar.',
        '30min', 600, 2, 'AMERICAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/applepie.jpg?alt=media&token=f75a577e-fbd0-463e-9c70-606a82eced62');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Sushi',
        'Potrawa japońska złożona z gotowanego ryżu zaprawionego octem ryżowym oraz różnych dodatków w postaci, przeważnie surowych: owoców morza, wodorostów nori, kawałków ryb, warzyw, grzybów, a także omletu japońskiego, tofu, ziarna sezamowego.',
        '30min', 600, 2, 'ASIAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/sushi.jpg?alt=media&token=0ad6872c-b607-43c6-9bed-0325ff8d2c90');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Pad thai',
        'Danie kuchni tajskiej przyrządzane na bazie makaronu i warzyw. Należy do najpopularniejszych dań tajskich serwowanych w restauracjach orientalnych na całym świecie.',
        '30min', 600, 2, 'ASIAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/padthai.jpg?alt=media&token=8cc55efa-cadd-439b-b11f-8ebcce91ae33');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Ramyeon',
        'To słodko-pikantne, piekące i rozgrzewające danie z dodatkiem grzybów shiitake, sosu sojowego, wonnego czosnku i cebuli oraz koreańskiej czerwonej papryki gochugaru, okraszone posypką z ciasta rybnego, zielonej cebulki i kapusty.',
        '30min', 600, 2, 'ASIAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/ramyeon.jpg?alt=media&token=f1da5fb2-9fb1-4086-a1a8-89e3ae1f661c');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Dim sum',
        'Ogólne określenie różnorodnych lekkich przekąsek spożywanych zwłaszcza w południowych Chinach tradycyjnie do herbaty. Podawane są często przed południem w lokalach specjalizujących się w tego typu przekąskach.',
        '30min', 600, 2, 'ASIAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/dimsum.jpg?alt=media&token=5bd2f90a-6688-4901-9a24-a1dd5f07aa28');

INSERT INTO dishes (name, description, preparation_time, calories, portion_size, region, level, user_id, image_url)
VALUES ('Szechuan Chicken',
        'Pyszne danie o orientalnym smaku. Soczyste mięsko z kurczaka duszone z warzywami w lekko pikantnym i słodkawym sosie. Danie podajemy z ryżem lub makaronem chińskim.',
        '30min', 600, 2, 'ASIAN', 'MEDIUM' ,2,
        'https://firebasestorage.googleapis.com/v0/b/worldskitchenstorage.appspot.com/o/szechuan.jpg?alt=media&token=445b773e-6eed-424b-94fa-22e22fc7bf14');

INSERT INTO liked_dishes (user_id, dish_id)
VALUES (1, 1);

INSERT INTO liked_dishes (user_id, dish_id)
VALUES (1, 15);

INSERT INTO liked_dishes (user_id, dish_id)
VALUES (2, 5);

INSERT INTO liked_dishes (user_id, dish_id)
VALUES (2, 9);

INSERT INTO recent_activities (user_id, dish_id, activity_type, date)
VALUES (1, 1, 'ADD_MEAL', now());

INSERT INTO recent_activities (user_id, dish_id, activity_type, date)
VALUES (2, 8, 'ADD_MEAL', now());
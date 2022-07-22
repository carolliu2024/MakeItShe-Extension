var turn_on = false; // Default
var name_dict = window.name_dict;
var word_dict = window.english_word_dict;
window.isDone = false;
var numObservations = 0;

var firstnames = fnames;
var lastnames = ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Goodman","Rodriguez","Wilson","Martinez","Anderson","Taylor","Zhu","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson","Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin","West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford","Marshall","Owens","Mcdonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza","Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder","Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero","Hicks","ixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Boyd","Mills","Warren","Fox","Rose","Rice","Moreno","Schmidt","Patel","Ferguson","Nichols","Herrera","Medina","Ryan","Fernandez","Weaver","Daniels","Stephens","Gardner","Payne","Kelley","Dunn","Pierce","Arnold","Tran","Spencer","Peters","Hawkins","Grant","Hansen","Castro","Hoffman","Hart","Elliott","Cunningham","Knight","Bradley","Carroll","Hudson","Duncan","Armstrong","Berry","Andrews","Johnston","Ray","Lane","Riley","Carpenter","Perkins","Aguilar","Silva","Richards","Willis","Matthews","Chapman","Lawrence","Garza","Vargas","Watkins","Wheeler","Larson","Carlson","Harper","George","Greene","Burke","Guzman","Morrison","Munoz","Jacobs","Obrien","Lawson","Franklin","Lynch","Bishop","Carr","Salazar","Austin","Mendez","Gilbert","Jensen","Williamson","Montgomery","Harvey","Oliver","Howell","Dean","Hanson","Weber","Garrett","Sims","Burton","Fuller","Soto","Mccoy","Welch","Chen","Schultz","Walters","Reid","Fields","Walsh","Little","Fowler","Bowman","Davidson","May","Day","Schneider","Newman","Brewer","Lucas","Holland","Wong","Banks","Santos","Curtis","Pearson","Delgado","Valdez","Pena","Rios","Douglas","Sandoval","Barrett","Hopkins","Keller","Guerrero","Stanley","Bates","Alvarado","Beck","Ortega","Wade","Estrada","Contreras","Barnett","Caldwell","Santiago","Lambert","Powers","Chambers","Nunez","Craig","Leonard","Lowe","Rhodes","Byrd","Gregory","Shelton","Frazier","Becker","Maldonado","Fleming","Vega","Sutton","Cohen","Jennings","Parks","Mcdaniel","Watts","Barker","Norris","Vaughn","Vazquez","Holt","Schwartz","Steele","Benson","Neal","Dominguez","Horton","Terry","Wolfe","Hale","Lyons","Graves","Haynes","Miles","Park","Warner","Padilla","Bush","Thornton","Mccarthy","Mann","Zimmerman","Erickson","Fletcher","Mckinney","Page","Dawson","Joseph","Marquez","Reeves","Klein","Espinoza","Baldwin","Moran","Love","Robbins","Higgins","Ball","Cortez","Le","Griffith","Bowen","Sharp","Cummings","Ramsey","Hardy","Swanson","Barber","Acosta","Luna","Chandler","Blair","Daniel","Cross","Simon","Dennis","Oconnor","Quinn","Gross","Navarro","Moss","Fitzgerald","Doyle","Mclaughlin","Rojas","Rodgers","Stevenson","Singh","Yang","Figueroa","Harmon","Newton","Paul","Manning","Garner","Mcgee","Reese","Francis","Burgess","Adkins","Goodman","Curry","Brady","Christensen","Potter","Walton","Goodwin","Mullins","Molina","Webster","Fischer","Campos","Avila","Sherman","Todd","Chang","Blake","Malone","Wolf","Hodges","Juarez","Gill","Farmer","Hines","Gallagher","Duran","Hubbard","Cannon","Miranda","Wang","Saunders","Tate","Mack","Hammond","Carrillo","Townsend","Wise","Ingram","Barton","Mejia","Ayala","Schroeder","Hampton","Rowe","Parsons","Frank","Waters","Strickland","Osborne","Maxwell","Chan","Deleon","Norman","Harrington","Casey","Patton","Logan","Bowers","Mueller","Glover","Floyd","Hartman","Buchanan","Cobb","French","Kramer","Mccormick","Clarke","Tyler","Gibbs","Moody","Conner","Sparks","Mcguire","Leon","Bauer","Norton","Pope","Flynn","Hogan","Robles","Salinas","Yates","Lindsey","Lloyd","Marsh","Mcbride","Owen","Solis","Pham","Lang","Pratt","Lara","Brock","Ballard","Trujillo","Shaffer","Drake","Roman","Aguirre","Morton","Stokes","Lamb","Pacheco","Patrick","Cochran","Shepherd","Cain","Burnett","Hess","Li","Cervantes","Olsen","Briggs","Ochoa","Cabrera","Velasquez","Montoya","Roth","Meyers","Cardenas","Fuentes","Weiss","Hoover","Wilkins","Nicholson","Underwood","Short","Carson","Morrow","Colon","Holloway","Summers","Bryan","Petersen","Mckenzie","Serrano","Wilcox","Carey","Clayton","Poole","Calderon","Gallegos","Greer","Rivas","Guerra","Decker","Collier","Wall","Whitaker","Bass","Flowers","Davenport","Conley","Houston","Huff","Copeland","Hood","Monroe","Massey","Roberson","Combs","Franco","Larsen","Pittman","Randall","Skinner","Wilkinson","Kirby","Cameron","Bridges","Anthony","Richard","Kirk","Bruce","Singleton","Mathis","Bradford","Boone","Abbott","Charles","Allison","Sweeney","Atkinson","Horn","Jefferson","Rosales","York","Christian","Phelps","Farrell","Castaneda","Nash","Dickerson","Bond","Wyatt","Foley","Chase","Gates","Vincent","Mathews","Hodge","Garrison","Trevino","Villarreal","Heath","Dalton","Valencia","Callahan","Hensley","Atkins","Huffman","Roy","Boyer","Shields","Lin","Hancock","Grimes","Glenn","Cline","Delacruz","Camacho","Dillon","Parrish","Oneill","Melton","Booth","Kane","Berg","Harrell","Pitts","Savage","Wiggins","Brennan","Salas","Marks","Russo","Sawyer","Baxter","Golden","Hutchinson","Liu","Walter","Mcdowell","Wiley","Rich","Humphrey","Johns","Koch","Suarez","Hobbs","Beard","Gilmore","Ibarra","Keith","Macias","Khan","Andrade","Ware","Stephenson","Henson","Wilkerson","Dyer","Mcclure","Blackwell","Mercado","Tanner","Eaton","Clay","Barron","Beasley","Oneal","Preston","Small","Wu","Zamora","Macdonald","Vance","Snow","Mcclain","Stafford","Orozco","Barry","English","Shannon","Kline","Jacobson","Woodard","Huang","Kemp","Mosley","Prince","Merritt","Hurst","Villanueva","Roach","Nolan","Lam","Yoder","Mccullough","Lester","Santana","Valenzuela","Winters","Barrera","Leach","Orr","Berger","Mckee","Strong","Conway","Stein","Whitehead","Bullock","Escobar","Knox","Meadows","Solomon","Velez","Odonnell","Kerr","Stout","Blankenship","Browning","Kent","Lozano","Bartlett","Pruitt","Buck","Barr","Gaines","Durham","Gentry","Mcintyre","Sloan","Melendez","Rocha","Herman","Sexton","Moon","Hendricks","Rangel","Stark","Lowery","Hardin","Hull","Sellers","Ellison","Calhoun","Gillespie","Mora","Knapp","Mccall","Morse","Dorsey","Weeks","Nielsen","Livingston","Leblanc","Mclean","Bradshaw","Glass","Middleton","Buckley","Schaefer","Frost","Howe","House","Mcintosh","Ho","Pennington","Reilly","Hebert","Mcfarland","Hickman","Noble","Spears","Conrad","Arias","Galvan","Velazquez","Huynh","Frederick","Randolph","Cantu","Fitzpatrick","Mahoney","Peck","Villa","Michael","Donovan","Mcconnell","Walls","Boyle","Mayer","Zuniga","Giles","Pineda","Pace","Hurley","Mays","Mcmillan","Crosby","Ayers","Case","Bentley","Shepard","Everett","Pugh","David","Mcmahon","Dunlap","Bender","Hahn","Harding","Acevedo","Raymond","Blackburn","Duffy","Landry","Dougherty","Bautista","Shah","Potts","Arroyo","Valentine","Meza","Gould","Vaughan","Fry","Rush","Avery","Herring","Dodson","Clements","Sampson","Tapia","Bean","Lynn","Crane","Farley","Cisneros","Benton","Ashley","Mckay","Finley","Best","Blevins","Friedman","Moses","Sosa","Blanchard","Huber","Frye","Krueger","Bernard","Rosario","Rubio","Mullen","Benjamin","Haley","Chung","Moyer","Choi","Horne","Yu","Woodward","Ali","Nixon","Hayden","Rivers","Estes","Mccarty","Richmond","Stuart","Maynard","Brandt","Oconnell","Hanna","Sanford","Sheppard","Church","Burch","Levy","Rasmussen","Coffey","Ponce","Faulkner","Donaldson","Schmitt","Novak","Costa","Montes","Booker","Cordova","Waller","Arellano","Maddox","Mata","Bonilla","Stanton","Compton","Kaufman","Dudley","Mcpherson","Beltran","Dickson","Mccann","Villegas","Proctor","Hester","Cantrell","Daugherty","Cherry","Bray","Davila","Rowland","Levine","Madden","Spence","Good","Irwin","Werner","Krause","Petty","Whitney","Baird","Hooper","Pollard","Zavala","Jarvis","Holden","Haas","Hendrix","Mcgrath","Bird","Lucero","Terrell","Riggs","Joyce","Mercer","Rollins","Galloway","Duke","Odom","Andersen","Downs","Hatfield","Benitez","Archer","Huerta","Travis","Mcneil","Hinton","Zhang","Hays","Mayo","Fritz","Branch","Mooney","Ewing","Ritter","Esparza","Frey","Braun","Gay","Riddle","Haney","Kaiser","Holder","Chaney","Mcknight","Gamble","Vang","Cooley","Carney","Cowan","Forbes","Ferrell","Davies","Barajas","Shea","Osborn","Bright","Cuevas","Bolton","Murillo","Lutz","Duarte","Kidd","Key","Cooke"];
//var lastnames_upper = ["SMITH","JOHNSON","WILLIAMS","BROWN","JONES","MILLER","DAVIS","GARCIA","RODRIGUEZ","WILSON","MARTINEZ","ANDERSON","TAYLOR","THOMAS","HERNANDEZ","MOORE","MARTIN","JACKSON","THOMPSON","WHITE","LOPEZ","LEE","GONZALEZ","HARRIS","CLARK","LEWIS","ROBINSON","WALKER","PEREZ","HALL","YOUNG","ALLEN","SANCHEZ","WRIGHT","KING","SCOTT","GREEN","BAKER","ADAMS","NELSON","HILL","RAMIREZ","CAMPBELL","MITCHELL","ROBERTS","CARTER","PHILLIPS","EVANS","TURNER","TORRES","PARKER","COLLINS","EDWARDS","STEWART","FLORES","MORRIS","NGUYEN","MURPHY","RIVERA","COOK","ROGERS","MORGAN","PETERSON","COOPER","REED","BAILEY","BELL","GOMEZ","KELLY","HOWARD","WARD","COX","DIAZ","RICHARDSON","WOOD","WATSON","BROOKS","BENNETT","GRAY","JAMES","REYES","CRUZ","HUGHES","PRICE","MYERS","LONG","FOSTER","SANDERS","ROSS","MORALES","POWELL","SULLIVAN","RUSSELL","ORTIZ","JENKINS","GUTIERREZ","PERRY","BUTLER","BARNES","FISHER","HENDERSON","COLEMAN","SIMMONS","PATTERSON","JORDAN","REYNOLDS","HAMILTON","GRAHAM","KIM","GONZALES","ALEXANDER","RAMOS","WALLACE","GRIFFIN","WEST","COLE","HAYES","CHAVEZ","GIBSON","BRYANT","ELLIS","STEVENS","MURRAY","FORD","MARSHALL","OWENS","MCDONALD","HARRISON","RUIZ","KENNEDY","WELLS","ALVAREZ","WOODS","MENDOZA","CASTILLO","OLSON","WEBB","WASHINGTON","TUCKER","FREEMAN","BURNS","HENRY","VASQUEZ","SNYDER","SIMPSON","CRAWFORD","JIMENEZ","PORTER","MASON","SHAW","GORDON","WAGNER","HUNTER","ROMERO","HICKS","IXON","HUNT","PALMER","ROBERTSON","BLACK","HOLMES","STONE","MEYER","BOYD","MILLS","WARREN","FOX","ROSE","RICE","MORENO","SCHMIDT","PATEL","FERGUSON","NICHOLS","HERRERA","MEDINA","RYAN","FERNANDEZ","WEAVER","DANIELS","STEPHENS","GARDNER","PAYNE","KELLEY","DUNN","PIERCE","ARNOLD","TRAN","SPENCER","PETERS","HAWKINS","GRANT","HANSEN","CASTRO","HOFFMAN","HART","ELLIOTT","CUNNINGHAM","KNIGHT","BRADLEY","CARROLL","HUDSON","DUNCAN","ARMSTRONG","BERRY","ANDREWS","JOHNSTON","RAY","LANE","RILEY","CARPENTER","PERKINS","AGUILAR","SILVA","RICHARDS","WILLIS","MATTHEWS","CHAPMAN","LAWRENCE","GARZA","VARGAS","WATKINS","WHEELER","LARSON","CARLSON","HARPER","GEORGE","GREENE","BURKE","GUZMAN","MORRISON","MUNOZ","JACOBS","OBRIEN","LAWSON","FRANKLIN","LYNCH","BISHOP","CARR","SALAZAR","AUSTIN","MENDEZ","GILBERT","JENSEN","WILLIAMSON","MONTGOMERY","HARVEY","OLIVER","HOWELL","DEAN","HANSON","WEBER","GARRETT","SIMS","BURTON","FULLER","SOTO","MCCOY","WELCH","CHEN","SCHULTZ","WALTERS","REID","FIELDS","WALSH","LITTLE","FOWLER","BOWMAN","DAVIDSON","MAY","DAY","SCHNEIDER","NEWMAN","BREWER","LUCAS","HOLLAND","WONG","BANKS","SANTOS","CURTIS","PEARSON","DELGADO","VALDEZ","PENA","RIOS","DOUGLAS","SANDOVAL","BARRETT","HOPKINS","KELLER","GUERRERO","STANLEY","BATES","ALVARADO","BECK","ORTEGA","WADE","ESTRADA","CONTRERAS","BARNETT","CALDWELL","SANTIAGO","LAMBERT","POWERS","CHAMBERS","NUNEZ","CRAIG","LEONARD","LOWE","RHODES","BYRD","GREGORY","SHELTON","FRAZIER","BECKER","MALDONADO","FLEMING","VEGA","SUTTON","COHEN","JENNINGS","PARKS","MCDANIEL","WATTS","BARKER","NORRIS","VAUGHN","VAZQUEZ","HOLT","SCHWARTZ","STEELE","BENSON","NEAL","DOMINGUEZ","HORTON","TERRY","WOLFE","HALE","LYONS","GRAVES","HAYNES","MILES","PARK","WARNER","PADILLA","BUSH","THORNTON","MCCARTHY","MANN","ZIMMERMAN","ERICKSON","FLETCHER","MCKINNEY","PAGE","DAWSON","JOSEPH","MARQUEZ","REEVES","KLEIN","ESPINOZA","BALDWIN","MORAN","LOVE","ROBBINS","HIGGINS","BALL","CORTEZ","LE","GRIFFITH","BOWEN","SHARP","CUMMINGS","RAMSEY","HARDY","SWANSON","BARBER","ACOSTA","LUNA","CHANDLER","BLAIR","DANIEL","CROSS","SIMON","DENNIS","OCONNOR","QUINN","GROSS","NAVARRO","MOSS","FITZGERALD","DOYLE","MCLAUGHLIN","ROJAS","RODGERS","STEVENSON","SINGH","YANG","FIGUEROA","HARMON","NEWTON","PAUL","MANNING","GARNER","MCGEE","REESE","FRANCIS","BURGESS","ADKINS","GOODMAN","CURRY","BRADY","CHRISTENSEN","POTTER","WALTON","GOODWIN","MULLINS","MOLINA","WEBSTER","FISCHER","CAMPOS","AVILA","SHERMAN","TODD","CHANG","BLAKE","MALONE","WOLF","HODGES","JUAREZ","GILL","FARMER","HINES","GALLAGHER","DURAN","HUBBARD","CANNON","MIRANDA","WANG","SAUNDERS","TATE","MACK","HAMMOND","CARRILLO","TOWNSEND","WISE","INGRAM","BARTON","MEJIA","AYALA","SCHROEDER","HAMPTON","ROWE","PARSONS","FRANK","WATERS","STRICKLAND","OSBORNE","MAXWELL","CHAN","DELEON","NORMAN","HARRINGTON","CASEY","PATTON","LOGAN","BOWERS","MUELLER","GLOVER","FLOYD","HARTMAN","BUCHANAN","COBB","FRENCH","KRAMER","MCCORMICK","CLARKE","TYLER","GIBBS","MOODY","CONNER","SPARKS","MCGUIRE","LEON","BAUER","NORTON","POPE","FLYNN","HOGAN","ROBLES","SALINAS","YATES","LINDSEY","LLOYD","MARSH","MCBRIDE","OWEN","SOLIS","PHAM","LANG","PRATT","LARA","BROCK","BALLARD","TRUJILLO","SHAFFER","DRAKE","ROMAN","AGUIRRE","MORTON","STOKES","LAMB","PACHECO","PATRICK","COCHRAN","SHEPHERD","CAIN","BURNETT","HESS","LI","CERVANTES","OLSEN","BRIGGS","OCHOA","CABRERA","VELASQUEZ","MONTOYA","ROTH","MEYERS","CARDENAS","FUENTES","WEISS","HOOVER","WILKINS","NICHOLSON","UNDERWOOD","SHORT","CARSON","MORROW","COLON","HOLLOWAY","SUMMERS","BRYAN","PETERSEN","MCKENZIE","SERRANO","WILCOX","CAREY","CLAYTON","POOLE","CALDERON","GALLEGOS","GREER","RIVAS","GUERRA","DECKER","COLLIER","WALL","WHITAKER","BASS","FLOWERS","DAVENPORT","CONLEY","HOUSTON","HUFF","COPELAND","HOOD","MONROE","MASSEY","ROBERSON","COMBS","FRANCO","LARSEN","PITTMAN","RANDALL","SKINNER","WILKINSON","KIRBY","CAMERON","BRIDGES","ANTHONY","RICHARD","KIRK","BRUCE","SINGLETON","MATHIS","BRADFORD","BOONE","ABBOTT","CHARLES","ALLISON","SWEENEY","ATKINSON","HORN","JEFFERSON","ROSALES","YORK","CHRISTIAN","PHELPS","FARRELL","CASTANEDA","NASH","DICKERSON","BOND","WYATT","FOLEY","CHASE","GATES","VINCENT","MATHEWS","HODGE","GARRISON","TREVINO","VILLARREAL","HEATH","DALTON","VALENCIA","CALLAHAN","HENSLEY","ATKINS","HUFFMAN","ROY","BOYER","SHIELDS","LIN","HANCOCK","GRIMES","GLENN","CLINE","DELACRUZ","CAMACHO","DILLON","PARRISH","ONEILL","MELTON","BOOTH","KANE","BERG","HARRELL","PITTS","SAVAGE","WIGGINS","BRENNAN","SALAS","MARKS","RUSSO","SAWYER","BAXTER","GOLDEN","HUTCHINSON","LIU","WALTER","MCDOWELL","WILEY","RICH","HUMPHREY","JOHNS","KOCH","SUAREZ","HOBBS","BEARD","GILMORE","IBARRA","KEITH","MACIAS","KHAN","ANDRADE","WARE","STEPHENSON","HENSON","WILKERSON","DYER","MCCLURE","BLACKWELL","MERCADO","TANNER","EATON","CLAY","BARRON","BEASLEY","ONEAL","PRESTON","SMALL","WU","ZAMORA","MACDONALD","VANCE","SNOW","MCCLAIN","STAFFORD","OROZCO","BARRY","ENGLISH","SHANNON","KLINE","JACOBSON","WOODARD","HUANG","KEMP","MOSLEY","PRINCE","MERRITT","HURST","VILLANUEVA","ROACH","NOLAN","LAM","YODER","MCCULLOUGH","LESTER","SANTANA","VALENZUELA","WINTERS","BARRERA","LEACH","ORR","BERGER","MCKEE","STRONG","CONWAY","STEIN","WHITEHEAD","BULLOCK","ESCOBAR","KNOX","MEADOWS","SOLOMON","VELEZ","ODONNELL","KERR","STOUT","BLANKENSHIP","BROWNING","KENT","LOZANO","BARTLETT","PRUITT","BUCK","BARR","GAINES","DURHAM","GENTRY","MCINTYRE","SLOAN","MELENDEZ","ROCHA","HERMAN","SEXTON","MOON","HENDRICKS","RANGEL","STARK","LOWERY","HARDIN","HULL","SELLERS","ELLISON","CALHOUN","GILLESPIE","MORA","KNAPP","MCCALL","MORSE","DORSEY","WEEKS","NIELSEN","LIVINGSTON","LEBLANC","MCLEAN","BRADSHAW","GLASS","MIDDLETON","BUCKLEY","SCHAEFER","FROST","HOWE","HOUSE","MCINTOSH","HO","PENNINGTON","REILLY","HEBERT","MCFARLAND","HICKMAN","NOBLE","SPEARS","CONRAD","ARIAS","GALVAN","VELAZQUEZ","HUYNH","FREDERICK","RANDOLPH","CANTU","FITZPATRICK","MAHONEY","PECK","VILLA","MICHAEL","DONOVAN","MCCONNELL","WALLS","BOYLE","MAYER","ZUNIGA","GILES","PINEDA","PACE","HURLEY","MAYS","MCMILLAN","CROSBY","AYERS","CASE","BENTLEY","SHEPARD","EVERETT","PUGH","DAVID","MCMAHON","DUNLAP","BENDER","HAHN","HARDING","ACEVEDO","RAYMOND","BLACKBURN","DUFFY","LANDRY","DOUGHERTY","BAUTISTA","SHAH","POTTS","ARROYO","VALENTINE","MEZA","GOULD","VAUGHAN","FRY","RUSH","AVERY","HERRING","DODSON","CLEMENTS","SAMPSON","TAPIA","BEAN","LYNN","CRANE","FARLEY","CISNEROS","BENTON","ASHLEY","MCKAY","FINLEY","BEST","BLEVINS","FRIEDMAN","MOSES","SOSA","BLANCHARD","HUBER","FRYE","KRUEGER","BERNARD","ROSARIO","RUBIO","MULLEN","BENJAMIN","HALEY","CHUNG","MOYER","CHOI","HORNE","YU","WOODWARD","ALI","NIXON","HAYDEN","RIVERS","ESTES","MCCARTY","RICHMOND","STUART","MAYNARD","BRANDT","OCONNELL","HANNA","SANFORD","SHEPPARD","CHURCH","BURCH","LEVY","RASMUSSEN","COFFEY","PONCE","FAULKNER","DONALDSON","SCHMITT","NOVAK","COSTA","MONTES","BOOKER","CORDOVA","WALLER","ARELLANO","MADDOX","MATA","BONILLA","STANTON","COMPTON","KAUFMAN","DUDLEY","MCPHERSON","BELTRAN","DICKSON","MCCANN","VILLEGAS","PROCTOR","HESTER","CANTRELL","DAUGHERTY","CHERRY","BRAY","DAVILA","ROWLAND","LEVINE","MADDEN","SPENCE","GOOD","IRWIN","WERNER","KRAUSE","PETTY","WHITNEY","BAIRD","HOOPER","POLLARD","ZAVALA","JARVIS","HOLDEN","HAAS","HENDRIX","MCGRATH","BIRD","LUCERO","TERRELL","RIGGS","JOYCE","MERCER","ROLLINS","GALLOWAY","DUKE","ODOM","ANDERSEN","DOWNS","HATFIELD","BENITEZ","ARCHER","HUERTA","TRAVIS","MCNEIL","HINTON","ZHANG","HAYS","MAYO","FRITZ","BRANCH","MOONEY","EWING","RITTER","ESPARZA","FREY","BRAUN","GAY","RIDDLE","HANEY","KAISER","HOLDER","CHANEY","MCKNIGHT","GAMBLE","VANG","COOLEY","CARNEY","COWAN","FORBES","FERRELL","DAVIES","BARAJAS","SHEA","OSBORN","BRIGHT","CUEVAS","BOLTON","MURILLO","LUTZ","DUARTE","KIDD","KEY","COOKE"];
var initials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O.", "P.", "Q.", "R.","S.", "T.", "U.","V.", "W.", "X.", "Y.", "Z.", "A","B","C","D","E","F","G","H","I", "J","K","L","M","N","O","P","Q","R","S","T","U", "V","W","X", "Y", "Z"];
var excluded = ["Of", "of", "Forbes", "Jr", "Junior", "Senior", "Sr", "Le", "le", "la", "La", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "VIIII", "X", "S", "s", "COVID", "Medical", "Prize", "San", "New", "O", "area", "Center", "Building", "Street", "Zoo", "Santa", "Saint", "St", "St.", "Sea", "New", "Centre", "Îles", "Lake", "County", "School", "High", "Secondary", "Primary", "College", "Port", "Hurricane", "Complex", "Management", "Mountain", "River", "Park", "Institute", "School", "Expedition", "Area", "University", "Center", "Building", "Circle", "Street", "Zoo", "San", "Saint", "Santa", "City", "Island", "Islands", "Award", "award", "awards", "Highway", "Mountain", "Mount", "Mt", "College", "University","A", "Not", "Is", "Are", "The", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Expedition"];

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

var turnMr = false;


var regex_word = new RegExp( "\\b" + Object.keys( word_dict ).join("\\b|\\b"), "gi" );
var regex_name = new RegExp( "\\b" + Object.keys( name_dict ).join("|"), "g" );

var all_words = Object.assign( {}, name_dict, word_dict );
//var all_male_words = Object.keys( word_dict).concat( Object.keys( name_dict ) );;
//var all_female_words = Object.values( word_dict ).concat( Object.values( name_dict ) );;
var all_male_words = Object.keys( word_dict);
var all_female_words = Object.values( word_dict );

var m_count = 0, f_count = 0;
var m_percent = 100, f_percent = 0;
var processed = false;
var highlighting = false;

var mfnames = [];
var ffnames = [];




var notnames = ["April", "May", "June", "August", "America", "India", "China", "Israel", "Louis"];
var prepos = ["In", "During", "On", "Of", "From", "Beginning", "in", "during", "on", "of", "from", "beginning"];

//var femalefirstnames = Object.values(name_dict);
//console.log(femalefirstnames);
//var malefirstnames = Object.keys(name_dict);
var femalefirstnames = window.femaleNames;
//console.log(femalefirstnames);
var malefirstnames = window.maleNames;

var strip = new RegExp(/-ad-|ad|audio|author|media|video|ai2html|banner|breadcrumbs|caption|citation|combx|comment|community|cover-wrap|disqus|discussion|external|extra|footer|gdpr|head|header|legends|menu|navigation|nav|other|reference|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|sponsored|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/gi);
var ads = new RegExp(/ad-content|comment/gi);



for ( var i = 0; i < all_male_words.length; i ++ ) {

    all_male_words[ i ] = all_male_words[ i ].toLowerCase();

}

for ( var i = 0; i < all_female_words.length; i ++ ) {

    all_female_words[ i ] = all_female_words[ i ].toLowerCase();

}

//
var temp_male_words = [];
var temp_female_words = [];
var temp_male_last_names = [];
var temp_female_last_names = [];
var counts = 0;

function changeLang(word_dict) {	
    all_words = Object.assign( {}, name_dict, word_dict );	
    regex_word = new RegExp( "\\b" + Object.keys( word_dict ).join("\\b|\\b"), "gi" );	
    regex_name = new RegExp( "\\b" + Object.keys( name_dict ).join("|"), "g" );	
    all_male_words = [];
    temp_male_words = [];
    //all_male_words = Object.keys( word_dict).concat( Object.keys( name_dict ) );;
    all_male_words = Object.keys (word_dict);
    console.log("ALL MALE WORDS", all_male_words);
    all_female_words = [];
    temp_female_words = [];
    //all_female_words = Object.values( word_dict ).concat( Object.values( name_dict ) );;
    all_female_words = Object.values (word_dict);
}

let language = 'English';
chrome.storage.sync.get('language', data => {
  languageDict(data.language);
  console.log(data.language);
});
chrome.storage.onChanged.addListener(changes => {
  if (changes.language) {
    languageDict(changes.language.newValue);
    console.log(changes.language.newValue);
  }
});

function languageDict(lang) {
  if (!lang || lang === language) return;
  language = lang;
  if (language === "English") {
      changeLang(window.english_word_dict);
      applyContent();
  } else if (language === "German") {
      changeLang(window.german_word_dict);	
      applyContent();	
  } else if (language === "French") {	
      all_male_words = [];
      all_female_words = [];
      temp_male_words = [];
      temp_female_words = [];
      changeLang(window.french_word_dict);
      var frenchfemale = Object.values(window.french_names_dict);
      femalefirstnames = femalefirstnames.concat(frenchfemale);
      var dale = femalefirstnames.indexOf('Dale');
      femalefirstnames.splice(dale,1);
      var roya = femalefirstnames.indexOf('Roya');
      femalefirstnames.splice(roya,1);
      //femalefirstnames = frenchfemale;
      var frenchmale = Object.keys(window.french_names_dict);
      malefirstnames = malefirstnames.concat(frenchmale);
      //malefirstnames = frenchmale;
      //applyContent();
      var ele= document.getElementsByName("malehighlight");
var len = ele.length;
/*if (len > 0) {
var parentNode = ele[0].parentNode;
for(var i=0; i<len; i++)
{
  parentNode.removeChild(ele[0]);
}
}
      highlight();*/
  } else if (language === "Spanish") {
  
      all_male_words = [];
      all_female_words = [];
      temp_male_words = [];
      temp_female_words = [];
      changeLang(window.spanish_word_dict);
      var spanishfemale = Object.values(window.spanish_names_dict);
      femalefirstnames = femalefirstnames.concat(spanishfemale);
      var dale = femalefirstnames.indexOf('Dale');
      femalefirstnames.splice(dale,1);
      var roya = femalefirstnames.indexOf('Roya');
      femalefirstnames.splice(roya,1);
      //femalefirstnames = spanishfemale;
      var spanishmale = Object.keys(window.spanish_names_dict);
      malefirstnames = malefirstnames.concat(spanishmale);
      //malefirstnames = spanishmale;
      applyContent();
      
      var ele= document.getElementsByName("malehighlight");
      var len = ele.length;
      if (len > 0) {
            var parentNode = ele[0].parentNode;
            for(var i=0; i<len; i++)
            {
              parentNode.removeChild(ele[0]);
            }
        }
      highlight();
  } else {
      Error; //other languages must be filled in here once available
  }
}

// doesn't work
function applyGoogleDocContent () {

    //console.log(window.location.href);
    //<meta property="og:description">
    m_count = 0;
    f_count = 0;
    //processed = false;
    temp_female_last_names = [];
    temp_male_last_names = [];
    temp_female_words = [];
    temp_male_words = [];
  
    if ( processed ) return;

    var contentElement = document.querySelectorAll('meta[property="og:description"]');
    var str = contentElement[0].getAttribute('content');
    console.log(str);
        
    /*}).replaceWith( function () {

        var str = this.nodeValue;*/
        
        var temp_words = str.split(/('|:|;|\/|\s+)/);
        var words = [];

        for ( var i = 0; i < temp_words.length; i ++ ) {

            var current_word = temp_words[i].trim().replace( /[.,\/#!$%\^&\*;:{}=\_`'"?~()]/g, "" );

            if ( current_word != '' ) {

                words[ words.length ] = current_word;

            }

        }

        if ( words.length == 0 ) {

            return str;

        }

        // Delete surname after Mr, Ms, M, Mme, Lady, Lord

        for ( var i = 0; i < words.length; i ++ ) {

            var w = words[ i ].replace( /[!?,.;`' ]/, '' );

            if ( w === 'Mr' || w === 'Ms' || w === 'M' || w === 'Mme' || w === 'Lady' || w === 'Lord' ) {

                words.splice( i + 1, 1 );

            }

        }
        
        for (var i = 0; i < words.length - 1; i ++){
            
            if ((femalefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Ms' || words[i] === 'Mrs' || words[i] === 'Miss') && words[i + 1].length > 1){
                
                if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
               // if( intials.indexOf(words[i + 1]) === -1)
                     temp_female_last_names.push(words[i+1]);           
            
            }
        }
        
         for (var i = 0; i < words.length - 1; i ++){
            
            if ((malefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Mr' || words[i] === 'Mister') && words[i + 1].length > 1){
            
               if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
              // if( intials.indexOf(words[i + 1]) === -1)   
                    temp_male_last_names.push(words[i+1]);
              
           }
            
        }
        
        //account for middle names/initials
        for (var i = 0; i < words.length - 1; i ++){
            
            if (femalefirstnames.indexOf(words[i]) >= 0 && initials.indexOf(words[i+1]) >= 0)
            
                temp_female_last_names.push(words[i+2]);
                         
            
        }
        


        for ( var i = 0; i < words.length; i ++ ) {

            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i]) >= 0) {

                m_count ++;
                //numObservations++;
                temp_male_words.push(words[i]);

            }

            if ( all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i] ) >= 0) {

                f_count ++;
                //numObservations++;
                temp_female_words.push(words[i]);

            }

        }

    
    m_percent = Math.round( m_count / (m_count + f_count) * 100 );
    f_percent = Math.round( f_count / (m_count + f_count) * 100 );
    
    if (m_percent + f_percent > 100 ) {
        f_percent = f_percent - 1;
    }
    

    processed = true;
  

//});
    //console.log("FEMALE", temp_female_words);
    //console.log("MALE", temp_male_words);
    return f_percent;
  
};

function applyContent (windowObject) {

    console.log(window.isDone);
    //numObservations = 0;
    m_count = 0;
    f_count = 0;
    //processed = false;
    //window.isDone = false;
    temp_female_last_names = [];
    temp_male_last_names = [];
  
    if ( window.isDone ) return;

    $(windowObject).find("a, p, i, div,span, h1, h2, h3, h4, h5, li, label").contents().filter( function () {
        
        var res = [];
        var res1 = [];
        if (this.nodeType === 3)
        {
        }
        else {
            return false;
        }

        return true;
        
        
    }).replaceWith( function () {

        
        var hasit = this.parentNode.hasAttribute('passed');
        
        var att = document.createAttribute("passed");       // Create a "class" attribute
                att.value = "alreadypassed";
        this.parentNode.setAttributeNode(att);
        
        var str = this.nodeValue;
        console.log(str);

        var temp_words = str.split(/('|\(|,|-|:|;|\.|\/|\s+)/);
        var words = [];
        
        var split = false;
        var rest = '';

        for ( var i = 0; i < temp_words.length; i ++ ) {

            var current_word = temp_words[i].trim().replace( /[\/#!$%\^&\*;:{}=\_`'"?~)]/g, "" );

            if (current_word.charCodeAt(0) === 8216 || current_word.charCodeAt(0) === 8220 || current_word.charCodeAt(0) === 171) {
                //console.log('is a single quote');
                current_word = current_word.substr(1);
                //console.log(current_word);
              }
              
              for (var j = 0; j < current_word.length; j++) {
              
                if (current_word.charCodeAt(j) === 8217) {
                
                    rest = current_word.substr(j+1);
                    current_word = current_word.substr(0, j);
                    split = true;
                
                }
                
              
              }
            
            if ( current_word != '' ) {

                words[ words.length ] = current_word;

            }
            
            if (split === true) {
                words[words.length] = rest;
                split = false;
            }

        }

        if ( words.length == 0 ) {

            return str;

        }
        
        console.log(words);

        // Delete surname after Mr, Ms, M, Mme, Lady, Lord

        for ( var i = 0; i < words.length; i ++ ) {

            var w = words[ i ].replace( /[!?,.;`' ]/, '' );

            if ( w === 'Mr' || w === 'Lord' && /[A-Z]/.test(words[i+1]) ) {

                temp_male_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }
            
            if ( (w === 'Ms'  || w === 'Mme' || w === 'Lady') && /[A-Z]/.test(words[i+1]) ) {

                temp_female_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }

        }
        

        var allUppercase = false;

        if (words.length > 3) {

                allUppercase = true;

                for (var i = 0; i < words.length; i++) {
        
                    if (words[i].length > 3) {
                    
                        if (!(/[A-Z]/.test((words[i])[0])) && !(/[0-9]/.test((words[i])[0]))){
                        
                                allUppercase = false;
                                break;
                        }
                    
                    }
        
                }
        }
        
        //find last names
        
        if (allUppercase === false) {
        
        var f_l_begin = 0;
        
        if (words.length > 2) {
        
        for (var i = 0; i < words.length - 2; i ++){
            
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], f_l_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], f_l_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = str.substr(n_next - 1, 1);
            
            //var nextNextLength = (words[i+2]).length;
            //regexNextNext = new RegExp('\\' + words[i+2], "g");
            //var n_next_next = str.search(regexNextNext);
            //var substring_next_next = str.substr(n_next_next, nextNextLength + 1);
            //var next_next_last = substring_next_next[substring_next_next.length - 1];
            

            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_l_begin = n;

            
            //if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && nextWord.length > 1){
            if ((femalefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Ms' || words[i] === 'Mrs' || words[i] === 'Miss') && words[i-1] !== 'The' && excluded.indexOf(nextWord) === -1 && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' && last !== '!' && last !== '?' && last !== ',' && last !== ';' && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) && (!(/[A-Z]/.test(nextNextWord[0])) || nextNextWord === undefined || next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' )){
                

                //if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
               // if( intials.indexOf(words[i + 1]) === -1)
                     temp_female_last_names.push(words[i+1]);           
            
            }
            
            if (femalefirstnames.indexOf(words[words.length - 2]) >= 0 && /[A-Z]/.test((words[words.length - 1])[0]) && str.substr(str.indexOf(words[words.length-1]) - 1, 1) !== '(' && next_last !== '/' && str.substr(str.indexOf(words[words.length - 2]) + (words[words.length - 2]).length, 1) !== ':') {
                        temp_female_last_names.push(words[words.length - 1]);
           }
        }
        }
        else if (words.length === 2) {
                if (femalefirstnames.indexOf(words[0]) >=0 && excluded.indexOf(words[1]) === -1 && /[A-Z]/.test((words[1])[0]) && str.substr(str.indexOf(words[1]) - 1, 1) !== '(' && str.substr(str.indexOf(words[0]) + (words[0]).length, 1) !== ':') {
                        temp_female_last_names.push(words[1]);
                }
        }
        
        var m_l_begin = 0;
        
        if (words.length > 2) {
         for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], m_l_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], m_l_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = str.substr(n_next - 1, 1);
            
            
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_l_begin = n;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && nextWord.length > 1){
            if ((malefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Mr' || words[i] === 'Mister') && words[i-1] !== 'The' 
            && excluded.indexOf(nextWord) === -1 && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' 
            && last !== '!' && last !== '?' && last !== ',' && last !== ';' && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) 
            && (!(/[A-Z]/.test(nextNextWord[0])) || nextNextWord === undefined || next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' ) && ( words[i-1] !== 'Lake' && words[i+1] !== 'County' && words[i+1] !== 'Lake' && words[i+1] !== 'School' 
            && words[i+1] !== 'High' && words[i+1] !== 'Secondary' && words[i+1] !== 'Primary' && words[i+1] !== 'College' && words[i-1] !== 'Port' && words[i+1] !== 'Mountain' && words[i-2] !== 'City' && words[i-2] !== 'city' && words[i+1] !== 'City' && words[i+1] !== 'Highway' 
            && words[i+1] !== 'Islands' && words[i+1] !== 'award' && words[i+1] !== 'awards'  && words[i+1] !== 'Park' && words[i+1] !== 'Institute' && words[i+1] !== 'School' && words[i+1] !== 'area' && words[i+1] !== 'University' && words[i+1] !== 'Center' && words[i+1] !== 'Building' && words[i+1] !== 'Circle' 
            && words[i+1] !== 'Street' && words[i+1] !== 'Zoo' && words[i-1] !== 'San' && words[i-1] !== 'Saint' && words[i-1] !== 'Santa' && words[i-1] !== 'St' 
            && words[i-1] !== 'St.' && words[i-1] !== 'Sao' && words[i-1] !== 'New' && words[i-1] !== 'O' && words[i-1] !== 's')) {
            
               //if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
              // if( intials.indexOf(words[i + 1]) === -1)   
                    temp_male_last_names.push(words[i+1]);
                    console.log('PUSHING LAST NAME (I+1)');
              
           }
           
           if (malefirstnames.indexOf(words[words.length - 2]) >= 0 && /[A-Z]/.test((words[words.length - 1])[0]) && str.substr(str.indexOf(words[words.length-1]) - 1, 1) !== '(' && next_last !== '/' && str.substr(str.indexOf(words[words.length - 2]) + (words[words.length - 2]).length, 1)) {
                        temp_male_last_names.push(words[words.length - 1]);
           }
            
        }
        }
        else if (words.length === 2) {
                if (malefirstnames.indexOf(words[0]) >=0 && excluded.indexOf(words[1]) === -1 && /[A-Z]/.test((words[1])[0]) && str.substr(str.indexOf(words[1]) - 1, 1) !== '(' && str.substr(str.indexOf(words[0]) + (words[0]).length, 1) !== ':') {
                     temp_male_last_names.push(words[1]);
                }
        }
        
        var f_m_begin = 0;
        
        //account for middle names/initials
        for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], f_m_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], f_m_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = substring_next[0];
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_m_begin = n_next;
            
            //if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]) )
            if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >=0))
            
            {
                console.log("NEXT FIRST", next_first);
                console.log("NEXT LAST", next_last);
                
                if (words[i+1] !== 'Is' && words[i+1] !== 'And' && words[i+1] !== 'Or' && words[i+1] !== 'Are' && words[i+1] !== 'Was'){

                    temp_female_last_names.push(words[i+2]);
                }
                         
            }
        }
        
        var m_m_begin = 0;
        
         for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], m_m_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], m_m_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = substring_next[0];
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_m_begin = n_next;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]))
            if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && words[i-1] !== 'The' 
            && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' 
            && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >= 0)){
            
                console.log("NEXT FIRST", next_first);
                console.log("NEXT LAST", next_last);
                if (words[i+1] !== 'Is' && words[i+1] !== 'And' && words[i+1] !== 'Or' && words[i+1] !== 'Are' && words[i+1] !== 'Was'){
                    temp_male_last_names.push(words[i+2]);
                }
                        
            }
            
        }
        
        }
        
         for ( var i = 0; i < words.length; i ++ ) {

            if ( all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || femalefirstnames.indexOf(capitalize(words[i])) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                if (femalefirstnames.indexOf(words[i]) >= 0 && ( words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                    female_do_not_count++;
                    female_name_no_count = words[i];
                }
                else if (excluded.indexOf(words[i]) > 0) {
                
                }
                else {
                    f_count ++;
                    numObservations++;
                    console.log('num observations ++ female', words[i]);
                    temp_female_words.push(words[i]);
                }

            }
            
            
            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || malefirstnames.indexOf(capitalize(words[i])) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                //if (temp_female_words.indexOf(words[i]) === -1) {
                
                    if (malefirstnames.indexOf(words[i]) >= 0 && (words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' 
                    || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i+1] === 'Park' 
                    || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' 
                    || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' 
                    || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'St.' || words[i-1] === 'Sao' 
                    || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                        male_do_not_count++;
                        male_name_no_count.add(words[i].toUpperCase());
                    }
                    else if (words[i] === 'Everest' && (words[i-1] === 'the' || words[i-1] === 'climb')) {
                    
                    }
                    else if (excluded.indexOf(words[i]) > 0) {
                    
                    }
                    else {
                
                        m_count ++;
                        numObservations++;
                        console.log('num observations ++ male', words[i]);
                        temp_male_words.push(words[i]);
                    }
                //}

            }

        }

    if (m_count + f_count != 0) {
    
        m_percent = Math.round( m_count / (m_count + f_count) * 100 );
        f_percent = Math.round( f_count / (m_count + f_count) * 100 );
        
    }
    
    if (m_percent + f_percent > 100) {
        f_percent = f_percent - 1;
    }
    

    //processed = true;
  

});
    console.log("FEMALE", temp_female_words);
    console.log("MALE", temp_male_words);
    console.log("MALE NO COUNT");
    console.log(male_name_no_count);

    window.isDone = true;

    const male_filtered = temp_male_words.filter(x => !male_name_no_count.has(x.toUpperCase()));
    temp_male_words = male_filtered;
    console.log(temp_male_words);
    //console.log("Male out", male_filtered);

    //const diff = temp_male_words.filter(x => !male_filtered.includes(x));
    //console.log(diff);

    if (temp_male_words.length + temp_female_words.length != 0) {
    
        m_percent = Math.round( temp_male_words.length / (temp_male_words.length + temp_female_words.length) * 100 );
        f_percent = Math.round( temp_female_words.length / (temp_male_words.length + temp_female_words.length) * 100 );
    
    }
    
    if (m_percent + f_percent > 100) {
        f_percent = f_percent - 1;
    }

    console.log(m_percent);
    console.log(f_percent);

    return f_percent;
  
};

var links_m_count = 0;
var links_f_count = 0;
var links_f_percent = 0;
var links_m_percent = 0;
var links_temp_female_last_names = [];
var links_temp_male_last_names = [];
var links_temp_female_words = [];
var links_temp_male_words = [];

function applyLinks (windowObject) {

    console.log(window.isDone);
    //numObservations = 0;
    links_m_count = 0;
    links_f_count = 0;
    //processed = false;
    //window.isDone = false;
    links_temp_female_last_names = [];
    links_temp_male_last_names = [];
    links_f_percent = 0;
    links_m_percent = 0;
    links_temp_female_words = [];
    links_temp_male_words = [];
  
    //if ( window.isDone ) return;

    $(windowObject).find("p, i, div,span, h1, h2, h3, h4, h5, li, label").contents().filter( function () {
    //$(windowObject).contents().filter( function () {

        /*if (this.parentNode.nodeName === "SCRIPT" || this.parentNode.nodeName ==="STYLE" || this.parentNode.nodeName === "IMG"
            || this.parentNode.nodeName === "LI" || this.parentNode.nodeName === "UL" || this.parentNode.nodeName === "IFRAME"
            || this.parentNode.nodeName === "NOSCRIPT" || this.parentNode.nodeName === "CITE"){
            return false;
        }*/
        
        var res = [];
        var res1 = [];
        if (this.nodeType === 3)
        {
        
            /*var parentTag = this.parentNode.tagName;
            if (parentTag === 'H1' || parentTag === 'H2' || parentTag === 'H3' || parentTag === 'H4' || parentTag === 'H5') {
                return false;
            }*/
            
            /*if (this.parentNode.nodeName === "A") {
                if (this.nodeValue.length < 3) {
                }
                else {
                    return false;
                }
            }
            
            if (this.parentNode.parentNode.nodeName === "LI" || this.parentNode.parentNode.parentNode.nodeName === "LI"){
                return false;
            }
            
            var outertag = this.parentNode.outerHTML;
            outertag = outertag.substring(0, outertag.indexOf('>'));
            res = outertag.match(strip);
            
            var outertag1 = this.parentNode.parentNode.outerHTML;
            outertag1 = outertag1.substring(0, outertag1.indexOf('>'));
            res1 = outertag1.match(strip);
            
            if (Array.isArray(res1) && res1.length > 0){
                
                return false;
            }*/
        }
        else {
            return false;
        }
        
        /*if (Array.isArray(res) && res.length > 0) {
            return false;
        }*/

        return true;
        
        
        
        //return this.nodeType === 3 && this.id !== 'adContent' && this.id !== 'dockedBanner' && this.id !== 'google_image_div';

    }).replaceWith( function () {

        /*var str = this.nodeValue;
        var temp_words = str.split(/('|-|:|;|\/|\s+)/);
        var words = [];

        for ( var i = 0; i < temp_words.length; i ++ ) {

            var current_word = temp_words[i].trim().replace( /[.,\/#!$%\^&\*;:{}=\_`'"?~()]/g, "" );

            if ( current_word != '' ) {

                words[ words.length ] = current_word;

            }

        }

        if ( words.length == 0 ) {

            return str;

        }

        // Delete surname after Mr, Ms, M, Mme, Lady, Lord

        for ( var i = 0; i < words.length; i ++ ) {

            var w = words[ i ].replace( /[!?,.;`' ]/, '' );

            if ( w === 'Mr' || w === 'Ms' || w === 'M' || w === 'Mme' || w === 'Lady' || w === 'Lord' ) {

                words.splice( i + 1, 1 );

            }

        }
        
        for ( var i = 0; i < words.length; i ++ ) {

             if ( all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i] ) >= 0) {

                f_count ++;
                numObservations++;
                temp_female_words.push(words[i]);

            }
            
            
            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i] ) >= 0) {

                if (temp_female_words.indexOf(words[i]) === -1) {
                    m_count ++;
                    numObservations++;
                    temp_male_words.push(words[i]);
                }

            }

        }*/
        
        var hasit = this.parentNode.hasAttribute('passed');
        //console.log(hasit);
        /*if (hasit === true) {
                var attr = this.parentNode.getAttributeNode("passed").value;
            
                if (attr === 'alreadypassed') {
                        //console.log('yes');
                        return;
                }
          }*/
        
        var att = document.createAttribute("passed");       // Create a "class" attribute
                att.value = "alreadypassed";
        this.parentNode.setAttributeNode(att);
        
        var str = this.nodeValue;
        console.log(str);

        var temp_words = str.split(/('|\(|,|-|:|;|\.|\/|\s+)/);
        var words = [];
        
        var split = false;
        var rest = '';

        for ( var i = 0; i < temp_words.length; i ++ ) {

            var current_word = temp_words[i].trim().replace( /[\/#!$%\^&\*;:{}=\_`'"?~)]/g, "" );

            if (current_word.charCodeAt(0) === 8216 || current_word.charCodeAt(0) === 8220 || current_word.charCodeAt(0) === 171) {
                //console.log('is a single quote');
                current_word = current_word.substr(1);
                //console.log(current_word);
              }
              
              for (var j = 0; j < current_word.length; j++) {
              
                if (current_word.charCodeAt(j) === 8217) {
                
                    rest = current_word.substr(j+1);
                    current_word = current_word.substr(0, j);
                    split = true;
                
                }
                
              
              }
            
            if ( current_word != '' ) {

                words[ words.length ] = current_word;

            }
            
            if (split === true) {
                words[words.length] = rest;
                split = false;
            }

        }

        if ( words.length == 0 ) {

            return str;

        }
        
        console.log(words);

        // Delete surname after Mr, Ms, M, Mme, Lady, Lord

        for ( var i = 0; i < words.length; i ++ ) {

            var w = words[ i ].replace( /[!?,.;`' ]/, '' );

            if ( w === 'Mr' || w === 'Lord' && /[A-Z]/.test(words[i+1]) ) {

                links_temp_male_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }
            
            if ( (w === 'Ms'  || w === 'Mme' || w === 'Lady') && /[A-Z]/.test(words[i+1]) ) {

                links_temp_female_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }

        }
        
        //console.log(words);

        /*var isHeading = false;

        var parentTag = this.parentNode.tagName;
            if (parentTag === 'H1' || parentTag === 'H2' || parentTag === 'H3' || parentTag === 'H4' || parentTag === 'H5') {
                isHeading = true;
            }
            
        var parentParentTag = this.parentNode.parentNode.tagName;
            if (parentParentTag === 'H1' || parentParentTag === 'H2' || parentParentTag === 'H3' || parentParentTag === 'H4' || parentParentTag === 'H5') {
                isHeading = true;
            }*/
        

        var allUppercase = false;

        /*if (isHeading === false) {
            allUppercase = false;
        }*/

        //if (isHeading === true) {
        if (words.length > 3) {

                allUppercase = true;

                for (var i = 0; i < words.length; i++) {
        
                    if (words[i].length > 3) {
                    
                        if (!(/[A-Z]/.test((words[i])[0])) || !(/[0-9]/.test((words[i])[0]))){
                        
                                allUppercase = false;
                                break;
                        }
                    
                    }
        
                }
        }
        
        //find last names
        
        if (allUppercase === false) {
        
        var f_l_begin = 0;
        
        if (words.length > 2) {
        
        for (var i = 0; i < words.length - 2; i ++){
            
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], f_l_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], f_l_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = str.substr(n_next - 1, 1);
            
            //var nextNextLength = (words[i+2]).length;
            //regexNextNext = new RegExp('\\' + words[i+2], "g");
            //var n_next_next = str.search(regexNextNext);
            //var substring_next_next = str.substr(n_next_next, nextNextLength + 1);
            //var next_next_last = substring_next_next[substring_next_next.length - 1];
            

            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_l_begin = n;

            
            //if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && nextWord.length > 1){
            if ((femalefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Ms' || words[i] === 'Mrs' || words[i] === 'Miss') && words[i-1] !== 'The' && excluded.indexOf(nextWord) === -1 && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' && last !== '!' && last !== '?' && last !== ',' && last !== ';' && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) && (!(/[A-Z]/.test(nextNextWord[0])) || nextNextWord === undefined || next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' )){
                

                //if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
               // if( intials.indexOf(words[i + 1]) === -1)
                     links_temp_female_last_names.push(words[i+1]);           
            
            }
            
            if (femalefirstnames.indexOf(words[words.length - 2]) >= 0 && /[A-Z]/.test((words[words.length - 1])[0]) && str.substr(str.indexOf(words[words.length-1]) - 1, 1) !== '(' && next_last !== '/' && str.substr(str.indexOf(words[words.length - 2]) + (words[words.length - 2]).length, 1) !== ':') {
                        links_temp_female_last_names.push(words[words.length - 1]);
           }
        }
        }
        else if (words.length === 2) {
                if (femalefirstnames.indexOf(words[0]) >=0 && excluded.indexOf(words[1]) === -1 && /[A-Z]/.test((words[1])[0]) && str.substr(str.indexOf(words[1]) - 1, 1) !== '(' && str.substr(str.indexOf(words[0]) + (words[0]).length, 1) !== ':') {
                        links_temp_female_last_names.push(words[1]);
                }
        }
        
        var m_l_begin = 0;
        
        if (words.length > 2) {
         for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], m_l_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], m_l_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = str.substr(n_next - 1, 1);
            
            
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_l_begin = n;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && nextWord.length > 1){
            if ((malefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Mr' || words[i] === 'Mister') && words[i-1] !== 'The' 
            && excluded.indexOf(nextWord) === -1 && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' && last !== '!' && last !== '?' && last !== ',' && last !== ';' 
            && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) && (!(/[A-Z]/.test(nextNextWord[0])) || nextNextWord === undefined 
            | next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' ) && ( words[i-1] !== 'Lake' && words[i+1] !== 'County' && words[i+1] !== 'Lake' && words[i+1] !== 'School' 
            && words[i+1] !== 'High' && words[i+1] !== 'Secondary' && words[i+1] !== 'Primary' && words[i+1] !== 'College' 
            && words[i-1] !== 'Port' && words[i+1] !== 'Mountain' && words[i-2] !== 'city' && words[i-2] !== 'City' && words[i+1] !== 'City' && words[i+1] !== 'Highway' && words[i+1] !== 'River' && words[i+1] !== 'Islands' && words[i+1] !== 'award' && words[i+1] !== 'awards'  
            && words[i+1] !== 'Park' && words[i+1] !== 'Institute' && words[i+1] !== 'School' && words[i+1] !== 'area' && words[i+1] !== 'University' && words[i+1] !== 'Center' && words[i+1] !== 'Building' && words[i+1] !== 'Circle' && words[i+1] !== 'Street' && words[i+1] !== 'Zoo' && words[i-1] !== 'San' && words[i-1] !== 'Saint' && words[i-1] !== 'Santa' 
            && words[i-1] !== 'St' && words[i-1] !== 'Sao' && words[i-1] !== 'New' && words[i-1] !== 'O' && words[i-1] !== 's')) {
            
               //if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
              // if( intials.indexOf(words[i + 1]) === -1)   
                    links_temp_male_last_names.push(words[i+1]);
                    console.log('PUSHING LAST NAME (I+1)');
                console.log(words[i+1]);
                console.log(words[i]);
              
           }
           
           if (malefirstnames.indexOf(words[words.length - 2]) >= 0 && /[A-Z]/.test((words[words.length - 1])[0]) && str.substr(str.indexOf(words[words.length-1]) - 1, 1) !== '(' && next_last !== '/' && str.substr(str.indexOf(words[words.length - 2]) + (words[words.length - 2]).length, 1)) {
                        links_temp_male_last_names.push(words[words.length - 1]);
           }
            
        }
        }
        else if (words.length === 2) {
                if (malefirstnames.indexOf(words[0]) >=0 && excluded.indexOf(words[1]) === -1 && /[A-Z]/.test((words[1])[0]) && str.substr(str.indexOf(words[1]) - 1, 1) !== '(' && str.substr(str.indexOf(words[0]) + (words[0]).length, 1) !== ':') {
                     links_temp_male_last_names.push(words[1]);
                }
        }
        
        var f_m_begin = 0;
        
        //account for middle names/initials
        for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], f_m_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], f_m_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = substring_next[0];
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_m_begin = n_next;
            
            //if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]) )
            if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >=0))
            
            {
                console.log("NEXT FIRST", next_first);
                console.log("NEXT LAST", next_last);
                links_temp_female_last_names.push(words[i+2]);
                         
            }
        }
        
        var m_m_begin = 0;
        
         for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], m_m_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], m_m_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = substring_next[0];
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_m_begin = n_next;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]))
            if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >= 0)){
            
                console.log("NEXT FIRST", next_first);
                console.log("NEXT LAST", next_last);
                links_temp_male_last_names.push(words[i+2]);
                console.log('PUSHING LAST NAME (I+2)');
                console.log(words[i+2]);
                console.log(words[i+1]);
                console.log(words[i]);
                        
            }
            
        }
        
        }
        
         for ( var i = 0; i < words.length; i ++ ) {

            if ( all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || femalefirstnames.indexOf(capitalize(words[i])) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                if (femalefirstnames.indexOf(words[i]) >= 0 && ( words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                    female_do_not_count++;
                    female_name_no_count = words[i];
                }
                else {
                    links_f_count ++;
                    //numObservations++;
                    links_temp_female_words.push(words[i]);
                }

            }
            
            
            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || malefirstnames.indexOf(capitalize(words[i])) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                //if (temp_female_words.indexOf(words[i]) === -1) {
                
                    if (malefirstnames.indexOf(words[i]) >= 0 && (words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' 
                    || words[i+1] === 'Secondary' || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' 
                    || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i+1] === 'Park' || words[i+1] === 'Institute' 
                    || words[i+1] === 'School' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' 
                    || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' 
                    || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' 
                    || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' 
                    || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' 
                    || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                        male_do_not_count++;
                        male_name_no_count = words[i];
                    }
                    else if (words[i] === 'Everest' && (words[i-1] === 'the' || words[i-1] === 'climb')) {
                    
                    }
                    else {
                
                        links_m_count ++;
                        //numObservations++;
                        links_temp_male_words.push(words[i]);
                    }
                //}

            }

        }
        
        //console.log(temp_female_words);
        //console.log(temp_male_words);
        
        //console.log(temp_female_last_names);
        //console.log(temp_male_last_names);

    
    links_m_percent = Math.round( links_m_count / (links_m_count + links_f_count) * 100 );
    links_f_percent = Math.round( links_f_count / (links_m_count + links_f_count) * 100 );
    
    if (links_m_percent + links_f_percent > 100) {
        links_f_percent = links_f_percent - 1;
    }
    

    //processed = true;
  

});
    console.log("FEMALE", links_temp_female_words);
    console.log("MALE", links_temp_male_words);

    window.isDone = true;
    
    links_m_percent = Math.round( links_temp_male_words.length / (links_temp_male_words.length + links_temp_female_words.length) * 100 );
    links_f_percent = Math.round( links_temp_female_words.length / (links_temp_male_words.length + links_temp_female_words.length) * 100 );
    
    if (links_m_percent + links_f_percent > 100) {
        links_f_percent = links_f_percent - 1;
    }

    console.log(links_m_percent);
    console.log(links_f_percent);

    return links_f_percent;
  
};

var male_do_not_count = 0;
var male_name_no_count = new Set();
var female_do_not_count = 0;
var female_name_no_count = [];
var counter = 0;

function highlight () {

    console.log('highlighting');
    temp_female_words = [];
    temp_male_words = [];
    if (counter === 0) {
        temp_female_last_names = [];
        temp_male_last_names = [];
    }
    counter++;
        $('body').not(".ghost .thumbcaption .infobox vcard td").find("a, p, b, div, span, h1, h2, h3, h4, h5, label").contents().filter( function () {

        
        var parentClass = this.parentNode.getAttribute('class');
            
            if (parentClass === 'makeitshe ignore-css replacement' || parentClass === 'ignore-css tooltiptext' || parentClass === 'ghost' || parentClass === 'infobox vcard' || parentClass === 'thumbcaption') {
                
                return false;
                
            }
            
        var parentTag = this.parentNode.tagName;
        console.log(window.location.hostname);
        
        if (window.location.hostname.includes('wikipedia')) {
            if (parentTag === 'DIV' || parentTag === 'SPAN') {
                return false;
            }
        }
            
        var parentClassVisibility = this.parentNode.style.visibility;
        
            if (parentClassVisibility === 'hidden') {
                return false;
            }
        
        var thisElement = this;
        
        
        if (!isElementInViewport(thisElement.parentNode))
            return false;
            
            
        
        return this.nodeType === 3 && this.id !== 'adContent' && this.id !== 'dockedBanner' && this.id !== 'google_image_div';

    }).replaceWith( function () {

        
        var str = this.nodeValue;
        console.log(str);

        var temp_words = str.split(/('|\(|,|-|:|;|\.|\/|\s+)/);
        var words = [];
        
        var split = false;
        var rest = '';

        for ( var i = 0; i < temp_words.length; i ++ ) {

            var current_word = temp_words[i].trim().replace( /[\/#!$%\^\*;:{}=\_`'"?~)]/g, "" );

            if (current_word.charCodeAt(0) === 8216 || current_word.charCodeAt(0) === 8220 || current_word.charCodeAt(0) === 171) {
                //console.log('is a single quote');
                current_word = current_word.substr(1);
                //console.log(current_word);
              }
              
              for (var j = 0; j < current_word.length; j++) {
              
                if (current_word.charCodeAt(j) === 8217) {
                
                    rest = current_word.substr(j+1);
                    current_word = current_word.substr(0, j);
                    split = true;
                
                }
                
              
              }
            
            if ( current_word != '' ) {

                words[ words.length ] = current_word;

            }
            
            if (split === true) {
                words[words.length] = rest;
                split = false;
            }

        }

        if ( words.length == 0 ) {

            return str;

        }
        
        console.log(words);

        // Delete surname after Mr, Ms, M, Mme, Lady, Lord

        for ( var i = 0; i < words.length; i ++ ) {

            var w = words[ i ].replace( /[!?,.;`' ]/, '' );

            if ( w === 'Mr' || w === 'Lord' ) {

                temp_male_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }
            
            if ( w === 'Ms'  || w === 'Mme' || w === 'Lady'  ) {

                temp_female_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }

        }

        var allUppercase = false;

        if (words.length > 3) {

                allUppercase = true;

                for (var i = 0; i < words.length; i++) {
        
                    if (words[i].length > 3) {
                    
                        if (!(/[A-Z]/.test((words[i])[0])) && !(/[0-9]/.test((words[i])[0]))){
                        
                                allUppercase = false;
                                break;
                        }
                    
                    }
        
                }
        }
        
        //find last names
        
        if (allUppercase === false) {
        
        var f_l_begin = 0;
        
        if (words.length > 2) {
        
        for (var i = 0; i < words.length - 2; i ++){
            
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], f_l_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], f_l_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = str.substr(n_next - 1, 1);
            

            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_l_begin = n;

            
            if ((femalefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Ms' || words[i] === 'Mrs' || words[i] === 'Miss') && temp_male_last_names.indexOf(words[i+1]) === -1 && words[i-1] !== 'The' && excluded.indexOf(nextWord) === -1 && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' && last !== '!' && last !== '?' && last !== ',' && last !== ';' && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) && (!(/[A-Z]/.test(nextNextWord[0])) || nextNextWord === undefined || next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' )){

                     temp_female_last_names.push(words[i+1]);           
            
            }
            
            if (femalefirstnames.indexOf(words[words.length - 2]) >= 0 && /[A-Z]/.test((words[words.length - 1])[0]) && str.substr(str.indexOf(words[words.length-1]) - 1, 1) !== '(' && temp_male_last_names.indexOf(words[words.length - 1]) === -1 && next_last !== '/' && str.substr(str.indexOf(words[words.length - 2]) + (words[words.length - 2]).length, 1) !== ':') {
                        temp_female_last_names.push(words[words.length - 1]);
           }
        }
        }
        else if (words.length === 2) {
                if (femalefirstnames.indexOf(words[0]) >=0 && excluded.indexOf(words[1]) === -1 && /[A-Z]/.test((words[1])[0]) && str.substr(str.indexOf(words[1]) - 1, 1) !== '(' && temp_male_last_names.indexOf(words[1]) === -1 && str.substr(str.indexOf(words[0]) + (words[0]).length, 1) !== ':') {
                        temp_female_last_names.push(words[1]);
                }
        }
        
        var m_l_begin = 0;
        
        if (words.length > 2) {
         for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], m_l_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], m_l_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            var next_first = str.substr(n_next - 1, 1);
            
            
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_l_begin = n;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && nextWord.length > 1){
            if ((malefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Mr' || words[i] === 'Mister') && words[i-1] !== 'The' 
            && temp_female_last_names.indexOf(words[i+1]) === -1 && excluded.indexOf(nextWord) === -1 
            && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' && last !== '!' && last !== '?' 
            && last !== ',' && last !== ';' && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) && (!(/[A-Z]/.test(nextNextWord[0])) 
            || nextNextWord === undefined || next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' ) 
            && ( words[i-1] !== 'Lake' && words[i+1] !== 'County' && words[i+1] !== 'Lake' && words[i+1] !== 'School' && words[i+1] !== 'High' 
            && words[i+1] !== 'Secondary' && words[i+1] !== 'Primary' && words[i+1] !== 'College' && words[i-1] !== 'Port' && words[i+1] !== 'Mountain' 
            && words[i-2] !== 'city' && words[i-2] !== 'City' && words[i+1] !== 'City' && words[i+1] !== 'Highway' && words[i+1] !== 'River' 
            && words[i+1] !== 'Islands' && words[i+1] !== 'award' && words[i+1] !== 'awards' && words[i+1] !== 'area' && words[i+1] !== 'Park' 
            && words[i+1] !== 'Institute' && words[i+1] !== 'School' && words[i+1] !== 'University' && words[i+1] !== 'Center' && words[i+1] !== 'Building' 
            && words[i+1] !== 'Circle' && words[i+1] !== 'Street' && words[i+1] !== 'Zoo' && words[i-1] !== 'San' && words[i-1] !== 'Saint' 
            && words[i-1] !== 'Santa' && words[i-1] !== 'St' && words[i-1] !== 'Sao' && words[i-1] !== 'New' && words[i-1] !== 'O' && words[i-1] !== 's')) {

                    temp_male_last_names.push(words[i+1]);
                    console.log('PUSHING LAST NAME (I+1)');
                console.log(words[i+1]);
                console.log(words[i]);
              
           }
           
           if (malefirstnames.indexOf(words[words.length - 2]) >= 0 && /[A-Z]/.test((words[words.length - 1])[0]) && temp_female_last_names.indexOf(words[words.length - 1]) === -1 && str.substr(str.indexOf(words[words.length-1]) - 1, 1) !== '(' && next_last !== '/' && str.substr(str.indexOf(words[words.length - 2]) + (words[words.length - 2]).length, 1)) {
                        temp_male_last_names.push(words[words.length - 1]);
           }
            
        }
        }
        else if (words.length === 2) {
                if (malefirstnames.indexOf(words[0]) >=0 && excluded.indexOf(words[1]) === -1 && /[A-Z]/.test((words[1])[0]) && temp_female_last_names.indexOf(words[1]) === -1 &&  str.substr(str.indexOf(words[1]) - 1, 1) !== '(' && str.substr(str.indexOf(words[0]) + (words[0]).length, 1) !== ':') {
                     temp_male_last_names.push(words[1]);
                }
        }
        
        var f_m_begin = 0;
        
        //account for middle names/initials
        for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;

            var n = str.indexOf(words[i], f_m_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            var n_next = str.indexOf(words[i+1], f_m_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            
            var nextnextlength = (words[i+2]).length;
            var n_nextnext = str.indexOf(words[i+2], f_m_begin);
            var substring_nextnext = str.substr(n_nextnext - 2, nextnextlength + 1);
            var next_first = substring_nextnext[0];
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_m_begin = n_next;
            
            if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && next_first !== '«' && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >=0))
            {
                console.log("NEXT FIRST", next_first);
                console.log("NEXT LAST", next_last);
                temp_female_last_names.push(words[i+2]);
                         
            }
        }
        
        var m_m_begin = 0;
        
         for (var i = 0; i < words.length - 2; i ++){
            
             var thisLength = words[i].length;
            //var regexThis = new RegExp('\\' + words[i], "g");
            //var n = str.search(regexThis);
            var n = str.indexOf(words[i], m_m_begin);
            var substring = str.substr(n, thisLength + 1);
            var last = substring[substring.length - 1];
            
            var nextLength = (words[i+1]).length;
            //regexNext = new RegExp('\\' + words[i+1], "g");
            var n_next = str.indexOf(words[i+1], m_m_begin);
            var substring_next = str.substr(n_next, nextLength + 1);
            var next_last = substring_next[substring_next.length - 1];
            
            var nextnextlength = (words[i+2]).length;
            var n_nextnext = str.indexOf(words[i+2], m_m_begin);
            var substring_nextnext = str.substr(n_nextnext - 2, nextnextlength + 1);
            var next_first = substring_nextnext[0];
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_m_begin = n_next;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]))
            if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && next_first !== '«' && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >= 0)){
            
                console.log("NEXT FIRST", next_first);
                console.log("NEXT LAST", next_last);
                temp_male_last_names.push(words[i+2]);
                console.log('PUSHING LAST NAME (I+2)');
                console.log(words[i+2]);
                console.log(words[i+1]);
                console.log(words[i]);
                        
            }
            
        }
        
        }
        
        var namesInBoth = temp_female_last_names.filter (value => temp_male_last_names.includes(value));
        console.log("NAMES IN BOTH", namesInBoth);
        var m_last_count = 0;
        var f_last_count = 0;
        
         for ( var i = 0; i < words.length; i ++ ) {

            if ( typeof words[i] !== "undefined" && all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                if (femalefirstnames.indexOf(words[i]) >= 0 && ( words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                    female_do_not_count++;
                    female_name_no_count = words[i];
                }
                else {
                    f_count ++;
                    temp_female_words.push(words[i]);
                }

            }
            
            
            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                //if (temp_female_words.indexOf(words[i]) === -1) {
                
                    if (malefirstnames.indexOf(words[i]) >= 0 && ( words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' 
                    || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' || words[i+1] === 'Primary' 
                    || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' 
                    || words[i+1] === 'Mountain' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' 
                    || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' 
                    || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' 
                    || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' 
                    || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' 
                    || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                        male_do_not_count++;
                        male_name_no_count = words[i];
                    }
                    else if (words[i] === 'Everest' && (words[i-1] === 'the' || words[i-1] === 'climb')) {
                    
                    }
                    else {
                
                        m_count ++;
                        temp_male_words.push(words[i]);
                    }
                //}

            }

        }
        
        
        //var regex_word = new RegExp( "\\b" + Object.keys( word_dict ).join("\\b|\\b") + Object.values( word_dict ).join("\\b|\\b") + temp_female_last_names.join("|") + temp_male_last_names.join("|"), "gi" );
        var regex_word = new RegExp( "\\b" + Object.keys( word_dict ).join("\\b|\\b") + Object.values( word_dict ).join("\\b|\\b"), "gi");
        var regex_lastname = new RegExp( "\\b" + temp_female_last_names.join("|\\b") + temp_male_last_names.join("|"), "gi" );
        var regex_name = new RegExp( "\\b" + malefirstnames.join("|\\b") +  femalefirstnames.join("|"), "g" );
        var regex_trial = new RegExp("\\b" + temp_female_words.join("\\b|\\b") + "|" + "\\b" + temp_male_words.join("\\b|\\b"), "g");

        var start = 0;

        str = str.replace( regex_trial, function ( matched, index, input ) {
            
            console.log(matched);

            var lastSymbol = input[ index + matched.length ] || '';
            
            if (lastSymbol.charCodeAt(0) === 8217) {
            
            
            }
     

             else if ( lastSymbol !== '"' && lastSymbol !== '`' && lastSymbol !== "'" && lastSymbol !== '' && lastSymbol !== ',' && lastSymbol !== '.' && lastSymbol !== ')' && lastSymbol !== ';' && lastSymbol !== '!' && lastSymbol !== '?' && lastSymbol !== ' ' && lastSymbol !== '/' && lastSymbol !== ')' && lastSymbol !== ':') {

                return matched;

            }

            if ( matched === 'Mr' || matched === 'M' || matched === 'Lord' ) {

                // Delete surname after Mr, Ms, M, Mme, Lady, Lord
                turnMr = true;

            }
            

          if ( words.indexOf( matched ) >= 0  && (temp_male_words.indexOf(matched) >= 0) && highlighting === true && excluded.indexOf(matched) === -1 ) {
                var i = words.indexOf(matched, start);
                start = i + 1;
                console.log("Previous word", words[i-1]);
                
                if (words[i-1] === 'Dr' || words[i-1] === 'Doctor')
                    return '<span class="makeitshe ignore-css replacement" name="malehighlight">' + matched +  '</span>';//'<span class="ignore-css tooltiptext">' + matched +  '</span></span>';

                
                if (words[i] === 'King' && words[i-1] === 'Burger')
                    return matched;
                    
                if (words[i] === 'Bill' && /[A-Z]/.test(words[i-1]))
                    return matched;
                    
                if (words[i] === 'Duke' && (words[i-1] !== 'the' || words[i+1] !== 'of'))
                    return matched;
                    
                if (words[i] === 'Joe' && words[i-1] === 'Trader')
                    return matched;
                
                if (language === 'French' && all_male_words.indexOf(words[i]) >= 0 && (words[i-1] !== 'un' && words[i-1] !== 'une' && words[i-1] !== 'le' && words[i-1] !== 'la' && words[i-1] !== 'l' && words[i-1] !== 'Un' && words[i-1] !== 'Une' && words[i-1] !== 'Le' && words[i-1] !== 'La' && words[i-1] !== 'L'  && words[i-1] !== 'Les' && words[i-1] !== 'les'))
                    {console.log(words[i]);
                    console.log(words[i-1]);
                    return matched;
                    }
                    
                if (language === 'French' && words[i+1] === 'tempête')
                    return matched;
                    
                
                else if (all_male_words.indexOf(words[i]) >= 0 && ( words[i+1] === 'e' || words[i+1] === 'ée' || words[i+1] === 'ées' || words[i+1] === 'es' ) )
                    return matched;
                    
                else if (words[i] === 'Paulo' && words[i-1] === 'São')
                    return matched;
                
                else if (malefirstnames.indexOf(words[i]) >= 0 && (  words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i+1] === 'Complex' || words[i+1] === 'Management' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i-2] === 'city' || words[i-2] === 'City' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'Expedition' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'in' || words[i-1] === 'at' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) 
                    return matched;
                else if (words[i] === 'Everest' && (words[i-1] === 'the' || words[i-1] === 'climb'))
                    return matched;
                //else if (do_not_count > 4) {
                     else if (male_do_not_count > 4 && words[i] === male_name_no_count && malefirstnames.indexOf(words[i-1]) === -1)
                        return matched;
                //}
                else if (malefirstnames.indexOf(words[i]) >= 0 && temp_female_last_names.indexOf(words[i]) >= 0)
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched +  '</span></span>';
                else if (words[i] === 'Rodham')
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched +  '</span></span>';
                else if (i !== 0 && (words[i - 1] === 'Ms' || words[i - 1] === 'Mrs' || words[i - 1] === 'Miss' || femalefirstnames.indexOf(words[i-1]) >= 0 ))
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched +  '</span></span>';
                else
                    return '<span class="makeitshe ignore-css replacement" name="malehighlight">' + matched + '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';

            }
          
            else if (words.indexOf( matched ) >= 0 && (temp_female_words.indexOf(matched) >= 0) && highlighting === true && excluded.indexOf(matched) === -1 ) {
            //if ( words.indexOf( matched ) >= 0 && (all_female_words.indexOf(matched) >= 0) && highlighting === true ) {
                var i = words.indexOf(matched, start);
                console.log(matched);
                console.log("Previous word", words[i-1]);
                start = i + 1;
                
                if (words[i-1] === 'Dr' || words[i-1] === 'Doctor')
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched + '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';

                
                if (language === 'French' && all_female_words.indexOf(words[i]) >= 0 && (words[i-1] !== 'un' && words[i-1] !== 'une' && words[i-1] !== 'le' && words[i-1] !== 'la' && words[i-1] !== 'l' && words[i-1] !== 'Un' && words[i-1] !== 'Une' && words[i-1] !== 'Le' && words[i-1] !== 'La' && words[i-1] !== 'L'  && words[i-1] !== 'Les' && words[i-1] !== 'les'))
                    {console.log(words[i]);
                    console.log(words[i-1]);
                    return matched;
                    }
                
                if (words[i] === 'Queen' && (words[i+1] !== 'of' || words[i+1] !== 's'))
                    return matched;
                
                if (words[i] === 'Grace' && words[i-1] === 'Amazing')
                    return matched;
                    
                if (words[i] === 'Carol' && words[i-1] === 'Christmas')
                    return matched;
                    
                if (words[i] === 'Macy' && words[i+1] === 's')
                    return matched;
                    
                if (words[i] === 'Morgan' && words[i-1] === 'JP')
                    return matched;
                    
                if (words[i] === 'Diaz' && words[i-1] === 'Cameron') 
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';

                if (words[i] === 'Cameron' && words[i+1] === 'Diaz')
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';

                if (femalefirstnames.indexOf(words[i]) >= 0 && ( words[i-1] === 'Lake' || words[i+1] === 'County' || words[i+1] === 'Lake' || words[i+1] === 'School' || words[i+1] === 'High' || words[i+1] === 'Secondary' || words[i+1] === 'Primary' || words[i+1] === 'College' || words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i+1] === 'Complex' || words[i+1] === 'Management' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i-2] === 'city' || words[i-1] === 
                'City' || words[i+1] === 'City' || words[i+1] === 'Highway' || words[i+1] === 'Islands' || words[i+1] === 'River' || words[i+1] === 'award' || words[i+1] === 'awards' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Expedition' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'in' || words[i-1] === 'at' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) 
                    return matched;
                else if (female_do_not_count > 4 && words[i] === female_name_no_count && femalefirstnames.indexOf(words[i-1]) === -1)
                        return matched;
                else if (femalefirstnames.indexOf(words[i]) >= 0 && temp_male_last_names.indexOf(words[i]) >= 0 ) 
                    return '<span class="makeitshe ignore-css replacement" name="malehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';
                else if (i !== 0 && (words[i - 1] === 'Mr' || words[i - 1] === 'Mister' || malefirstnames.indexOf(words[i-1]) >= 0))
                    return '<span class="makeitshe ignore-css replacement" name="malehighlight">' + matched +  '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';
                else
                    //return matched;
                    return '<span class="makeitshe ignore-css replacement" name="femalehighlight">' + matched + '</span><span class="ignore-css tooltiptext">' + matched + '</span></span>';

            }
            
            else {

                return matched;

            }

        });

        return str;

    });


};

var highlightFlag = false;
function highlightNew() {
    if (!highlightFlag) {
        let fem_words = new Set(temp_female_words);
        fem_words.forEach(function(word) {
            let regex = new RegExp('\\b(' + word + ')\\b', "g");
            $("body").children().each(function () {
                $(this).html($(this).html().replace(regex, `<span class='fem-highlight'>${word}</span>`));
            });
            /*document.body.innerHTML = document.body.innerHTML.replace(regex, 
                `<span class='fem-highlight'>${word}</span>`);*/
        });
        let male_words = new Set(temp_male_words);
        male_words.forEach(function(word) {
            let regex = new RegExp('\\b(' + word + ')\\b', "g");
            $("body").children().each(function () {
                $(this).html($(this).html().replace(regex, `<span class='male-highlight'>${word}</span>`));
            });
            /*document.body.innerHTML = document.body.innerHTML.replace(regex, 
                `<span class='male-highlight'>${word}</span>`);*/
        });
    }
    else {
        var femalehighlight = $('[class=no-fem-highlight]');
        var malehighlight = $('[class=no-male-highlight]');
        for (var i = 0; i < femalehighlight.length; i++) {
                femalehighlight[i].className = femalehighlight[i].className.replace(/no-fem-highlight/, 'fem-highlight');
        }
        for (var i = 0; i < malehighlight.length; i++) {
            malehighlight[i].className = malehighlight[i].className.replace(/no-male-highlight/, 'male-highlight');
        }
    }
    /*
    for (let i = 0; i < fem_words.length; i++) {
        let regex = new RegExp('\\b(' + temp_female_words[i] + ')\\b', "g");
        document.body.innerHTML = document.body.innerHTML.replace(regex, 
            `<span class='fem-highlight'>${temp_female_words[i]}</span>`);
    }
                    } 
    }
    for (let i = 0; i < temp_male_words.length; i++) {
        let regex = new RegExp('\\b(' + temp_male_words[i] + ')\\b', "g");
        document.body.innerHTML = document.body.innerHTML.replace(regex, 
            `<span class='male-highlight'>${temp_male_words[i]}</span>`);
    }*/
};

function unHighlight() {
    var femalehighlight = $('[class=fem-highlight]');
    var malehighlight = $('[class=male-highlight]');
    for (var i = 0; i < femalehighlight.length; i++) {
            femalehighlight[i].className = femalehighlight[i].className.replace(/fem-highlight/, 'no-fem-highlight');
    }
    for (var i = 0; i < malehighlight.length; i++) {
        malehighlight[i].className = malehighlight[i].className.replace(/male-highlight/, 'no-male-highlight');
    }
};

var number = 0;
var links = [];

function getLinks () {
    
    console.log('framing');

    var htmlString = "";
    //$('a[href*="http"],a[href*=".html"]').each( function () {
    $('a').each( function () {
        
        var thisElement = this;
        //console.log(this);
        
        if ($(thisElement).find('figure').length) {
            return true;
        }
        
        if (this.parentNode.nodeName === 'PICTURE') {
            return true;
        }
        
        if (isElementInViewport(this) ) {
        var protocol = window.location.protocol;
        var hostname = window.location.host;
        var slashes = "//";
        var link = "";

                if (links.indexOf(this.getAttribute('href')) === -1) {
                    links.push(this.getAttribute('href'));
                }
                else {
                    return true;
                }
                
                var linkstring = this.getAttribute('href');
                var currentElement = this;

            $.get(linkstring, function(data) {
            
            //var linkstring = links_array[i];

            var parser = new DOMParser();
            var doc = parser.parseFromString(data, "text/html");
            
            var fMajority = applyLinks(doc);
            //console.log(fMajority);

            
            var outertag = currentElement.outerHTML;
            outertag = outertag.substring(0, outertag.indexOf('>'));
            //console.log(outertag);
            //var adArray = outertag.match(ads);
            var adArray = [];
            
            if (Array.isArray(adArray) && adArray.length > 0){
                
            }
            else {
            
                
                /*if (fMajority === 0){
                
                }*/
                if (fMajority >= 50) {
                    
                    var att = document.createAttribute("name");
                    att.value = "femaleframe";
                    currentElement.parentNode.setAttributeNode(att);
                    counts = counts + 1;
                    //counts++;
                    
                    //console.log(this.firstChild.nodeValue + " is changed to green.");
                    
                }
                else if (fMajority < 50) {
                    
                    var att = document.createAttribute("name");
                    att.value = "maleframe";
                    currentElement.parentNode.setAttributeNode(att);
                    counts = counts + 1;
                    //counts++;
                    //console.log(this.firstChild.nodeValue + " is changed to purple.");

                }
                
            }
            

            
        });

    }    
});

}

function showFrames() {
    var maleframe = $('[name=maleframe]');
    console.log(maleframe);
    for (var i = 0; i < maleframe.length; i++) {
      if (isElementInViewport(maleframe[i])) {  
      maleframe[i].style.border = 'solid lightskyblue 2px';
      }
    }
    var femaleframe = $('[name=femaleframe]');
    console.log(femaleframe);
    for (var i = 0; i < femaleframe.length; i++) {
        if (isElementInViewport(femaleframe[i])) {  

        femaleframe[i].style.border = 'solid green 2px';
      }
    }
}

function hideFrames() {
    var maleframe = $('[name=maleframe]');
    //console.log(maleframe);
    for (var i = 0; i < maleframe.length; i++) {
      maleframe[i].style.border = 'none';
    }
    var femaleframe = $('[name=femaleframe]');
    //console.log(femaleframe);
    for (var i = 0; i < femaleframe.length; i++) {
      femaleframe[i].style.border = 'none';
    }
}

function isElementInViewport (el) {

    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /* or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /* or $(window).width() */
    );
}

function onVisibilityChange(el, callback) {
    var old_visible;
    return function () {
        var visible = isElementInViewport(el);
        if (visible != old_visible) {
            old_visible = visible;
            if (typeof callback == 'function') {
                callback();
            }
        }
    }
}


function showHighlighting() {
    if (highlighting == true) {
        console.log('showing highlighting');
        var malehighlight = $('[name=malehighlight]');
        console.log(malehighlight);
        console.log("yes");
        for (var i = 0; i < malehighlight.length; i++) {
            //if (isElementInViewport(malehighlight[i])){
                malehighlight[i].style.backgroundColor = 'lightskyblue';
        //}
        }
        var femalehighlight = $('[name=femalehighlight]');
        console.log(femalehighlight);
        for (var i = 0; i < femalehighlight.length; i++) {
            //if (isElementInViewport(femalehighlight[i])){
                femalehighlight[i].style.backgroundColor = 'lightgreen';
            //}
        }
    }
}

function hideHighlighting() {
    console.log('hiding highlighting');
}

//

chrome.runtime.onMessage.addListener( function ( msg, sender, sendResponse ) {

    if ( ( msg.from === 'popup' ) && ( msg.action === 'getStats' )  ) {

        //location.reload();
        //applyGoogleDocContent();
        //location.reload();

        var stats = {
            male: m_percent.toFixed(2),
            female: f_percent.toFixed(2),
            done: window.isDone,
            num: numObservations
        };
        
        sendResponse({
            stats: stats,
        });
        return true;

    } else if( (msg.from === 'popup' ) && ( msg.action === 'getUrl' ) ){

           var url = window.location.href;
           var content = {
              url: url,
              all_male_words: all_male_words,
              all_female_words: all_female_words,
              name_dict: name_dict,
              word_dict: word_dict
           }
           sendResponse({
            content: content
           });

       return true;

    } else if( (msg.from === 'popup' ) && ( msg.action === 'getLanguage' ) ){

        recalculateP(currLang);

       return true;
    }

    if ( msg.activate ) {

        if (window.location.href.includes('docs.google')) {
        
            //setInterval(applyGoogleDocContent(), 200);
            //location.reload();
            applyGoogleDocContent();
            console.log("FEMALE", temp_female_words);
            console.log("MALE", temp_male_words);
            
        }
        else {
        
            applyContent(document.body);
            //getLinks();
            
        }
        
    } 

    else {

        $('.makeitshe').each( function ( index, el ) {

            var original_html = $( '.tooltiptext', $( this ) ).html();
            el.textContent = original_html;

        });

        processed = false;

    }

});


///////////////// TODO /////////////////
// Fix... This takes ALL text areas and adds this label to them:
// $('textarea').attr("id","email-message");
// $('textarea').attr('class','autocomplete');

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {

    var laststring = this.value.split(' ').pop();

      var valueSuggestion, a, b, i, val = laststring.toLowerCase();
        
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/

       if(message_suggestions.hasOwnProperty(val)){

              valueSuggestion=message_suggestions[val];

              b = document.createElement("DIV");
              /*make the matching letters bold:*/
              b.textContent = "<strong>" + valueSuggestion + "</strong>";
              /*insert a input field that will hold the current array item's value:*/
              b.textContent += "<input type='hidden' value='" + valueSuggestion + "'>";
              /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
                  /*insert the value for the autocomplete text field:*/
                   message  = $('#email-message').val();

                   var lastIndex = message.lastIndexOf(" ");

                   message = message.substring(0, lastIndex);

                   if(message=='')
                      inp.value = message;
                   else
                      inp.value = message+' ';

                   inp.value += this.getElementsByTagName("input")[0].value;
                  /*close the list of autocompleted values,
                  (or any other open lists of autocompleted values:*/
                  closeAllLists();
          });
              

                 a.appendChild(b);  


        }else{

           console.log('Key is not exist in Object!');
        }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

$("#email-message").keyup(function(){

   autocomplete(document.getElementById("email-message"), message_suggestions); 

});

//document.addEventListener("DOMContentLoaded", highlight);


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
        if (request.greeting == "highlighting"){
            alert ("Green Frames: The article has a majority of female words\nBlue Frames: The article has a majority of male words\n\nTo remove the frames from the page, just uncheck the highlight button");

            highlighting = true;
            //highlight();
            highlightNew();
            //getLinks();
            //showHighlighting();
            showFrames();
            //hideTooltip();
            //console.log('removing highlights');
            $(window).scroll(function () {
                //applyContent(document.body);
                //highlight();
                //showHighlighting();
                //getLinks();
                //showFrames();
            });
        
            sendResponse({farewell: "goodbye"});
        }

        if (request.greeting == "nohighlighting"){
            alert("Unhighlighting")
            //highlighting = false;
            highlightFlag = true;
            unHighlight();
            $(window).unbind('scroll');
            //showHighlighting();
            //hideHighlighting();
            //hideFrames();
            console.log('hiding highlighting');
            sendResponse({farewell: "goodbye"});
        }
  });


 var message_suggestions = {
   "he": "they",
    "she": "they",
    "his": "theirs",
    "hers": "theirs", 
    "congressman": "congressperson",
    "congressmen": "congresspersons",
    "policeman": "policeperson",
    "policemen": "policepersons",
    "chairman": "chairperson",
    "chairmen": "chairpersons",
    "fireman": "fireperson",
    "firemen": "firepersons",
    "waterman": "waterperson",
    "watermen": "waterpersons",
    "nozzleman": "nozzleperson",
    "nozzlemen": "nozzlepersons",
    "adman": "adperson",
    "admen": "adpersons",
    "agribusinessman": "agribusinessperson",
    "agribusinessmen": "agribusinesspersons",
    "aidman": "aidperson",
    "airmen": "aidpersons",
    "alderman": "alderperson",
    "aldermen": "alderpersons",
    "almsman": "almsperson",
    "almsmen": "almspersons",
    "anchorman": "anchorperson",
    "anchormen": "anchorpersons",
    "antiman": "antiperson",
    "antimen": "antipersons",
    "artilleryman": "artilleryperson",
    "artillerymen": "artillerypersons",
    "ashmen": "ashpersons",
    "assemblyman": "assemblyperson",
    "assemblymen": "assemblypersons",
    "ataman": "ataperson",
    "atamen": "atapersons",
    "attackman": "attackperson",
    "attackmen": "attackpersons",
    "automan": "autoperson",
    "automae": "autopersons",
    "axeman": "axeperson",
    "axemen": "axepersons",
    "axman": "axperson",
    "axmen": "axpersons",
    "backcourtman": "backcourtperson",
    "backcourtmen": "backcourtpersons",
    "backwoodsman": "backwoodsperson",
    "backwoodsmen": "backwoodspersons",
    "badman": "badperson",
    "badmen": "badpersons",
    "bagman": "bagperson",
    "bagmen": "bagpersons",
    "bandsman": "bandsperson",
    "bandsmen": "bandspersons",
    "bargeman": "bargeperson",
    "bargemen": "bargepersons",
    "barman": "barperson",
    "barmen": "barpersons",
    "baseman": "baseperson",
    "basemen": "basepersons",
    "batman": "batperson",
    "batmen": "batpersons",
    "batsman": "batsperson",
    "batsmen": "batspersons",
    "bayman": "bayperson",
    "baymen": "baypersons",
    "beadsman": "beadsperson",
    "beadsmen": "beadspersons",
    "bedesman": "bedesperson",
    "bedesmen": "bedespersons",
    "bellman": "bellperson",
    "bellmen": "bellpersons",
    "birdman": "birdperson",
    "birdmen": "birdpersons",
    "bluesman": "bluesperson",
    "bluesmen": "bluespersons",
    "boardman": "boardperson",
    "boardmen": "boardpersons",
    "boatman": "boatperson",
    "boatmen": "boatpersons",
    "boatsman": "boatsperson",
    "boatsmen": "boatspersons",
    "bogyman": "bogyperson",
    "bogymen": "bogypersons",
    "bondman": "bondperson",
    "bondmen": "bondpersons",
    "bondsman": "bondspersons",
    "bondsmen": "bondsperson",
    "boogerman": "boogerperson",
    "boogermen": "boogerpersons",
    "boogeyman": "boogeyperson",
    "boogeymen": "boogeypersons",
    "boogyman": "boogyperson",
    "boogymen": "boogypersons",
    "bookman": "bookperson",
    "bookmen": "bookpersons",
    "bowmen": "bowpersons",
    "brakeman": "brakeperson",
    "brakemen": "brakepersons",
    "bushman": "bushperson",
    "bushmen": "bushpersons",
    "businessman": "businessperson",
    "businessmen": "businesspersons",
    "busman": "busperson",
    "busmen": "buspersons",
    "cabman": "cabperson",
    "cabmen": "cabpersons",
    "cameraman": "cameraperson",
    "cameramen": "camerapersons",
    "carman": "carperson",
    "carmen": "carpersons",
    "cattleman": "cattleperson",
    "cattlemen": "cattlepersons",
    "cavalryman": "cavalryperson",
    "cavalrymen": "cavalrypersons",
    "caveman": "caveperson",
    "cavemen": "caveperson",
    "cayman": "cayperson",
    "caymen": "caypersons",
    "chainman": "chainperson",
    "chainmen": "chainpersons",
    "chairmen": "chairpersons",
    "chapmen": "chappersons",
    "chessman": "chessperson",
    "chessmen": "chesspersons",
    "choreman": "choreperson",
    "choremen": "chorepersons",
    "churchman": "churchperson",
    "churchmen": "churchpersons",
    "clansman": "clansperson",
    "clansmen": "clanspersons",
    "clergyman": "clergyperson",
    "clergymen": "clergypersons",
    "clubman": "clubperson",
    "clubmen": "clubpersons",
    "coachman": "coachperson",
    "coachmen": "coachpersons",
    "coastguardman": "coastguardperson",
    "coastguardmen": "coastguardpersons",
    "coastguardsman": "coastguardsperson",
    "coastguardsmen": "coastguardspersons",
    "cochairman": "cochairperson",
    "cochairmen": "cochairpersons",
    "colorman": "colorperson",
    "colormen": "colorpersons",
    "committeeman": "committeeperson",
    "committeemen": "committeepersons",
    "cornerman": "cornerperson",
    "cornermen": "cornerpersons",
    "corpsman": "corpsperson",
    "corpsmen": "corpspersons",
    "councilman": "councilperson",
    "councilmen": "councilpersons",
    "counterman": "counterperson",
    "countermen": "counterpersons",
    "countryman": "countryperson",
    "countrymen": "countrypersons",
    "cowman": "cowperson",
    "cowmen": "cowpersons",
    "cracksman": "cracksperson",
    "cracksmen": "crackspersons",
    "craftsman": "craftsperson",
    "craftsmen": "craftspersons",
    "cragsman": "cragsperson",
    "cragsmen": "cragspersons",
    "crewman": "crewperson",
    "crewmen": "crewpersons",
    "crossbowman": "crossbowperson",
    "crossbowmen": "crossbowpersons",
    "dairyman": "dairyperson",
    "dairymen": "dairypersons",
    "dalesmen": "dalespersons",
    "damen": "dapersons",
    "daysman": "daysperson",
    "daysmen": "dayspersons",
    "deathsman": "deathsperson",
    "deathsmen": "deathspersons",
    "decumen": "decupersons",
    "everyman": "everyperson",
    "everymen": "everypersons",
    "exciseman": "exciseperson",
    "excisemen": "excisepersons",
    "expressman": "expressperson",
    "expressmen": "expresspersons",
    "firmen": "firpersons",
    "fisherman": "fisherperson",
    "fishermen": "fisherpersons",
    "footman": "footperson",
    "footmen": "footpersons",
    "frontman": "frontperson",
    "frontmen": "frontpersons",
    "funnyman": "funnyperson",
    "funnymen": "funnypersons",
    "guardsman": "guardsperson",
    "guardsmen": "guardspersons",
    "highwayman": "highwayperson",
    "highwaymen": "highwaypersons",
    "horseman": "horseperson",
    "horsemen": "horsepersons",
    "hotelman": "hotelperson",
    "hotelmen": "hotelpersons",
    "houseman": "houseperson",
    "housemen": "housepersons",
    "iceman": "iceperson",
    "icemen": "icepersons",
    "jazzman": "jazzperson",
    "jazzmen": "jazzpersons",
    "journeyman": "journeyperson",
    "journeymen": "journeypersons",
    "kinsman": "kinsperson",
    "kinsmen": "kinspersons",
    "landman": "landperson",
    "landmen": "landpersons",
    "lobsterman": "lobsterperson",
    "lobstermen": "lobsterpersons",
    "madman": "madperson",
    "madmen": "madpersons",
    "mailman": "mailperson",
    "mailmen": "mailpersons",
    "marksman": "marksperson",
    "marksmen": "markspersons",
    "meatman": "meatperson",
    "meatmen": "meatpersons",
    "merchantman": "merchantperson",
    "merchantmen": "merchantpersons",
    "merman": "merperson",
    "mermen": "merpersons",
    "messman": "messperson",
    "messmen": "messpersons",
    "middleman": "middleperson",
    "middlemen": "middlepersons",
    "midshipman": "midshipperson",
    "midshipmen": "midshippersons",
    "militiaman": "militiaperson",
    "militiamen": "militiapersons",
    "milkman": "milkperson",
    "milkmen": "milkpersons",
    "minuteman": "minuteperson",
    "minutemen": "minutepersons",
    "missileman": "missileperson",
    "missilemen": "missilepersons",
    "moneyman": "moneyperson",
    "moneymen": "moneypersons",
    "motorman": "motorperson",
    "motormen": "motorpersons",
    "newsman": "newsperson",
    "newsmen": "newspersons",
    "newspaperman": "newspaperperson",
    "newspapermen": "newspaperpersons",
    "nobleman": "nobleperson",
    "noblemen": "noblepersons",
    "nonman": "nonperson",
    "nonmen": "nonpersons",
    "ottomen": "ottopersons",
    "outdoorsman": "outdoorsperson",
    "outdoorsmen": "outdoorspersons",
    "overman": "overperson",
    "pivotman": "pivotperson",
    "placeman": "placeperson",
    "plainclothesman": "plainclothesperson",
    "plainsman": "plainsperson",
    "plantsman": "plantsperson",
    "plowman": "plowperson",
    "pointman": "pointperson",
    "postman": "postperson",
    "potman": "potperson",
    "poultryman": "poultryperson",
    "prefreshman": "prefreshperson",
    "quarryman": "quarryperson",
    "radioman": "radioperson",
    "raftsman": "raftsperson",
    "ragman": "ragperson",
    "ranchman": "ranchperson",
    "reinsman": "reinsperson",
    "repairman": "repairperson",
    "rifleman": "rifleperson",
    "rodsman": "rodsperson",
    "roundsman": "roundsperson",
    "routeman": "routeperson",
    "safetyman": "safetyperson",
    "sagaman": "sagaperson",
    "salaryman": "salaryperson",
    "salesman": "salesperson",
    "sandman": "sandperson",
    "schoolman": "schoolperson",
    "seaman": "seaperson",
    "seedsman": "seedsperson",
    "selectman": "selectperson",
    "shopman": "shopperson",
    "showman": "showperson",
    "sideman": "sideperson",
    "signalman": "signalperson",
    "skyman": "skyperson",
    "snowman": "snowperson",
    "spaceman": "spaceperson",
    "spokesman": "spokesperson",
    "sportfisherman": "sportfisherperson",
    "sportsman": "sportsperson",
    "statesman": "statesperson",
    "stickman": "stickperson",
    "stillman": "stillperson",
    "stockman": "stockperson",
    "outmen": "outpersons",
    "overmen": "overpersons",
    "pivotmen": "pivotpersons",
    "placemen": "placepersons",
    "plainclothesmen": "plainclothespersons",
    "plainsmen": "plainspersons",
    "plantsmen": "plantspersons",
    "plowmen": "plowpersons",
    "pointmen": "pointpersons",
    "policemen": "policepersons",
    "postmen": "postpersons",
    "potmen": "potpersons",
    "poultrymen": "poultrypersons",
    "prefreshmen": " prefreshpersons",
    "pullmen": "pullpersons",
    "quarrymen": "quarrypersons",
    "radiomen": "radiopersons",
    "raftsenn": "raftspersons",
    "ragmen": "ragpersons",
    "ranchmen": "ranchpersons",
    "reedmen": "reedpersons",
    "reinsmen": "reinspersons",
    "remen": "repersons",
    "repairmen": "repairpersons",
    "riflemen": "riflepersons",
    "rodmen": "rodpersons",
    "rodsmen": "rodspersons",
    "romen": "ropersons",
    "roundsmen": "roundspersons",
    "routemen": "routepersons",
    "safetymen": "safetypersons",
    "sagamen": "sagapersons",
    "salarymen": "salarypersons",
    "salesmen": "salespersons",
    "sandmen": "sandpersons",
    "schoolmen": "schoolpersons",
    "seamen": "seapersons",
    "seedsmen": "seedspersons",
    "selectmen": "selectpersons",
    "shipmen": "shippersons",
    "shopmen": "shoppersons",
    "showmen": "showpersons",
    "sidemen": "sidepersons",
    "signalmen": "signalpersons",
    "skymen": "skypersons",
    "snowmen": "snowpersons",
    "sockmen": "sockpersons",
    "soundmen": "soundman",
    "spacemen": "spaceman",
    "spokesmen": "spokesman",
    "sportfishermen": "sportfisherman",
    "sportsmen": "sportsman",
    "statesmen": "statesman",
    "stickmen": "stickman",
    "stockmen": "stockman",
    "strongman": "strongwoman",
    "superman": "superperson",
    "supermen": "superpersons",
    "supersalesman": "supersalesperson",
    "supersalesmen": "supersalespersons",
    "vanman": "vanperson",
    "vanmen": "vanpersons",
    "venireman": "venireperson",
    "veniremen": "venirepersons",
    "workingman": "workingperson",
    "workingmen": "workingpersons",
    "workman": "workperson",
    "workmen": "workpersons",
    "yachtman": "yachtperson",
    "yachtmen": "yachtpersons",
    "yachtsman": "yachtsperson",
    "yachtsmen": "yachtspersons",
    "yardman": "yardperson",
    "yardmen": "yardpersons "
   
};

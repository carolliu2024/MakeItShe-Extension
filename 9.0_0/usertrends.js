// Copyright(c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Event listner for clicks on links in a browser action popup.
// Open the link in a new tab of the current window.
//var url_malecount = 0;
//var url_femalecount = 0;

function capitalize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

var initials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O.", "P.", "Q.", "R.","S.", "T.", "U.","V.", "W.", "X.", "Y.", "Z.", "A","B","C","D","E","F","G","H","I", "J","K","L","M","N","O","P","Q","R","S","T","U", "V","W","X", "Y", "Z"];
var excluded = ["Le", "le", "la", "La", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "VIIII", "X", "S", "s", "COVID", "Medical", "Prize", "San", "New", "O", "area", "Center", "Building", "Street", "Zoo", "Santa", "Saint", "St", "City", "Island", "Islands", "Highway", "Mountain", "Mount", "Mt", "College", "University","A", "Not", "Is", "Are", "The", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Expedition"];

var female_do_not_count = 0;
var male_do_not_count = 0;

var female_name_no_count = '';
var male_name_no_count = '';

var public_suffix = {};

public_suffix.TLD_TREE = JSON.parse('{"ne":{},"gg":{"sch":{},"org":{},"net":{},"co":{},"gov":{}},"tr":{"!nic":{},"*":{},"nc":{"gov":{}}},"mm":{"*":{}},"ki":{"info":{},"edu":{},"org":{},"biz":{},"net":{},"com":{},"gov":{}},"みんな":{},"biz":{"selfip":{},"for-better":{},"for-the":{},"webhop":{},"for-more":{},"for-some":{},"dyndns":{}},"срб":{},"my":{"edu":{},"mil":{},"org":{},"name":{},"net":{},"gov":{},"com":{}},"hn":{"edu":{},"gob":{},"mil":{},"org":{},"net":{},"com":{}},"gl":{},"email":{},"تونس":{},"tel":{},"ro":{"info":{},"nom":{},"www":{},"store":{},"org":{},"blogspot":{},"rec":{},"firm":{},"nt":{},"tm":{},"arts":{},"com":{}},"tn":{"rns":{},"nat":{},"edunet":{},"net":{},"perso":{},"mincom":{},"rnu":{},"fin":{},"agrinet":{},"info":{},"tourism":{},"ind":{},"intl":{},"org":{},"defense":{},"turen":{},"gov":{},"ens":{},"rnrt":{},"com":{}},"business":{},"coffee":{},"co":{"nom":{},"info":{},"org":{},"int":{},"rec":{},"firm":{},"net":{},"gov":{},"web":{},"arts":{},"edu":{},"mil":{},"com":{}},"삼성":{},"br":{"esp":{},"trd":{},"not":{},"tmp":{},"far":{},"odo":{},"qsl":{},"jor":{},"mus":{},"eti":{},"coop":{},"tur":{},"inf":{},"med":{},"edu":{},"b":{},"wiki":{},"vet":{},"adv":{},"nom":{},"leg":{},"ntr":{},"vlog":{},"agr":{},"cng":{},"psc":{},"ind":{},"art":{},"ppg":{},"imb":{},"ato":{},"ggf":{},"radio":{},"gov":{},"adm":{},"psi":{},"bmd":{},"com":{"blogspot":{}},"cim":{},"teo":{},"srv":{},"g12":{},"net":{},"ecn":{},"etc":{},"eco":{},"bio":{},"org":{},"flog":{},"slg":{},"cnt":{},"eng":{},"jus":{},"mil":{},"mat":{},"taxi":{},"pro":{},"fm":{},"fnd":{},"fst":{},"fot":{},"am":{},"arq":{},"tv":{},"emp":{},"rec":{},"zlg":{},"blog":{},"lel":{}},"reviews":{},"cy":{"*":{}},"coop":{},"bo":{"org":{},"int":{},"net":{},"gov":{},"edu":{},"gob":{},"mil":{},"tv":{},"com":{}},"ck":{"!www":{},"*":{}},"امارات":{},"tc":{},"marketing":{},"ke":{"*":{}},"technology":{},"aero":{"gliding":{},"club":{},"rotorcraft":{},"journalist":{},"skydiving":{},"aeroclub":{},"caa":{},"air-traffic-control":{},"accident-prevention":{},"educator":{},"agents":{},"trainer":{},"engineer":{},"freight":{},"charter":{},"trading":{},"union":{},"equipment":{},"recreation":{},"cargo":{},"author":{},"design":{},"aerobatic":{},"scientist":{},"group":{},"production":{},"student":{},"press":{},"association":{},"conference":{},"journal":{},"hanggliding":{},"leasing":{},"aircraft":{},"services":{},"modelling":{},"airport":{},"trader":{},"championship":{},"crew":{},"flight":{},"air-surveillance":{},"logistics":{},"broker":{},"exchange":{},"fuel":{},"accident-investigation":{},"ballooning":{},"res":{},"express":{},"media":{},"consultant":{},"repbody":{},"paragliding":{},"government":{},"show":{},"civilaviation":{},"marketplace":{},"airtraffic":{},"insurance":{},"microlight":{},"passenger-association":{},"ambulance":{},"engine":{},"taxi":{},"workinggroup":{},"aerodrome":{},"works":{},"research":{},"entertainment":{},"federation":{},"amusement":{},"safety":{},"council":{},"emergency":{},"parachuting":{},"dgca":{},"maintenance":{},"pilot":{},"catering":{},"airline":{},"control":{},"magazine":{},"consulting":{},"certification":{},"navigation":{},"software":{},"groundhandling":{},"homebuilt":{}},"asia":{},"computer":{},"voting":{},"dm":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"contractors":{},"km":{"nom":{},"prd":{},"tm":{},"pharmaciens":{},"gouv":{},"org":{},"veterinaire":{},"coop":{},"gov":{},"edu":{},"ass":{},"mil":{},"asso":{},"notaires":{},"medecin":{},"com":{},"presse":{}},"bf":{"gov":{}},"af":{"edu":{},"org":{},"net":{},"com":{},"gov":{}},"mv":{"pro":{},"info":{},"org":{},"int":{},"biz":{},"name":{},"coop":{},"net":{},"gov":{},"edu":{},"mil":{},"aero":{},"museum":{},"com":{}},"ls":{"org":{},"co":{}},"tm":{"nom":{},"org":{},"net":{},"gov":{},"edu":{},"mil":{},"co":{},"com":{}},"jm":{"*":{}},"pg":{"*":{}},"ky":{"edu":{},"org":{},"net":{},"com":{},"gov":{}},"ga":{},"pn":{"edu":{},"org":{},"net":{},"co":{},"gov":{}},"sv":{"edu":{},"org":{},"gob":{},"red":{},"com":{}},"career":{},"mq":{},"hu":{"lakas":{},"bolt":{},"media":{},"ingatlan":{},"co":{},"konyvelo":{},"video":{},"utazas":{},"org":{},"erotika":{},"games":{},"szex":{},"tozsde":{},"tm":{},"forum":{},"jogasz":{},"city":{},"film":{},"2000":{},"reklam":{},"suli":{},"info":{},"blogspot":{},"erotica":{},"sex":{},"hotel":{},"casino":{},"shop":{},"priv":{},"agrar":{},"sport":{},"news":{}},"za":{"*":{}},"ventures":{},"gal":{},"land":{},"se":{"bd":{},"a":{},"d":{},"lanbib":{},"y":{},"u":{},"naturbruksgymn":{},"kommunalforbund":{},"k":{},"g":{},"t":{},"e":{},"parti":{},"org":{},"komvux":{},"s":{},"c":{},"b":{},"z":{},"w":{},"r":{},"x":{},"brand":{},"tm":{},"sshn":{},"h":{},"press":{},"f":{},"i":{},"n":{},"blogspot":{},"fhv":{},"ac":{},"m":{},"pp":{},"fhsk":{},"l":{},"p":{},"komforb":{},"fh":{},"o":{}},"viajes":{},"uy":{"edu":{},"org":{},"mil":{},"gub":{},"net":{},"com":{}},"iq":{"edu":{},"org":{},"mil":{},"net":{},"com":{},"gov":{}},"ai":{"org":{},"off":{},"net":{},"com":{}},"sexy":{},"ve":{"info":{},"org":{},"net":{},"gov":{},"web":{},"edu":{},"mil":{},"e12":{},"co":{},"com":{}},"na":{"pro":{},"ws":{},"mx":{},"cc":{},"or":{},"in":{},"tv":{},"us":{},"school":{},"co":{},"info":{},"org":{},"name":{},"dr":{},"ca":{},"mobi":{},"com":{}},"com":{"is-a-lawyer":{},"cloudcontrolled":{},"is-a-chef":{},"is-a-therapist":{},"is-a-anarchist":{},"writesthisblog":{},"from-sc":{},"ro":{},"is-with-theband":{},"from-nv":{},"dyndns-home":{},"is-a-geek":{},"from-mi":{},"is-a-nurse":{},"br":{},"hobby-site":{},"is-a-conservative":{},"selfip":{},"is-a-libertarian":{},"is-a-doctor":{},"is-a-bulls-fan":{},"gr":{},"is-into-anime":{},"herokuapp":{},"from-ms":{},"likes-pie":{},"gb":{},"from-fl":{},"est-mon-blogueur":{},"from-ga":{},"dyndns-wiki":{},"is-a-landscaper":{},"hu":{},"za":{},"is-into-cartoons":{},"is-a-cubicle-slave":{},"is-a-blogger":{},"is-a-financialadvisor":{},"se":{},"betainabox":{},"is-a-personaltrainer":{},"uy":{},"from-pa":{},"from-ia":{},"appspot":{},"from-or":{},"from-wa":{},"dreamhosters":{},"from-ky":{},"no":{},"from-ne":{},"is-an-actor":{},"from-sd":{},"from-va":{},"from-mt":{},"is-into-cars":{},"dyndns-server":{},"from-dc":{},"is-an-accountant":{},"is-a-llama":{},"issmarterthanyou":{},"from-al":{},"cloudcontrolapp":{},"herokussl":{},"dontexist":{},"dyndns-at-work":{},"dyndns-free":{},"sells-for-u":{},"is-a-student":{},"us":{},"googleapis":{},"is-a-socialist":{},"is-a-caterer":{},"from-tx":{},"dyndns-work":{},"blogspot":{},"is-a-democrat":{},"is-a-designer":{},"is-a-teacher":{},"from-mn":{},"dyndns-office":{},"doesntexist":{},"from-il":{},"dyndns-blog":{},"is-a-player":{},"cn":{},"from-ca":{},"neat-url":{},"ru":{},"from-nj":{},"servebbs":{},"rhcloud":{},"is-an-anarchist":{},"from-in":{},"space-to-rent":{},"amazonaws":{"compute":{"sa-east-1":{},"eu-west-1":{},"ap-southeast-1":{},"ap-northeast-1":{},"us-west-2":{},"us-gov-west-1":{},"ap-southeast-2":{},"us-west-1":{}},"s3-website-ap-southeast-2":{},"s3-ap-northeast-1":{},"us-east-1":{},"s3-website-ap-northeast-1":{},"s3-ap-southeast-1":{},"s3-us-west-1":{},"s3-website-us-east-1":{},"s3-website-ap-southeast-1":{},"s3-website-eu-west-1":{},"s3-website-us-west-1":{},"s3-ap-southeast-2":{},"s3":{},"s3-website-us-west-2":{},"s3-eu-west-1":{},"s3-us-gov-west-1":{},"compute-1":{"z-1":{},"z-2":{}},"s3-sa-east-1":{},"s3-fips-us-gov-west-1":{},"elb":{},"s3-website-sa-east-1":{},"s3-website-us-gov-west-1":{},"s3-us-west-2":{}},"dyndns-remote":{},"from-ks":{},"is-gone":{},"from-ri":{},"from-tn":{},"dyn-o-saur":{},"is-an-artist":{},"is-into-games":{},"from-id":{},"googlecode":{},"from-pr":{},"iamallama":{},"is-a-rockstar":{},"from-nc":{},"homeunix":{},"from-md":{},"from-wy":{},"likescandy":{},"est-a-la-maison":{},"eu":{},"est-le-patron":{},"is-a-hard-worker":{},"is-a-guru":{},"is-slick":{},"sells-for-less":{},"is-an-engineer":{},"teaches-yoga":{},"codespot":{},"from-de":{},"is-a-hunter":{},"simple-url":{},"from-hi":{},"from-nm":{},"dyndns-ip":{},"is-a-liberal":{},"is-a-nascarfan":{},"is-a-techie":{},"uk":{},"is-a-musician":{},"qc":{},"cechire":{},"kr":{},"from-ma":{},"is-a-bookkeeper":{},"isa-geek":{},"from-oh":{},"sa":{},"dnsalias":{},"from-nd":{},"from-mo":{},"is-a-republican":{},"is-an-actress":{},"dynalias":{},"elasticbeanstalk":{},"from-vt":{},"saves-the-whales":{},"is-a-painter":{},"dnsdojo":{},"doomdns":{},"de":{},"blogdns":{},"from-wi":{},"is-an-entertainer":{},"from-ut":{},"is-uberleet":{},"from-ak":{},"from-ct":{},"from-ok":{},"from-nh":{},"is-leet":{},"from-ar":{},"est-a-la-masion":{},"is-certified":{},"dyndns-at-home":{},"homelinux":{},"is-a-photographer":{},"is-not-certified":{},"jpn":{},"gotdns":{},"dyndns-pics":{},"isa-hockeynut":{},"is-a-cpa":{},"operaunite":{},"ar":{},"is-a-green":{},"from-wv":{},"dyndns-web":{},"dyndns-mail":{},"getmyip":{}},"photography":{},"ਭਾਰਤ":{},"سورية":{},"democrat":{},"ba":{"rs":{},"unbi":{},"org":{},"unsa":{},"net":{},"gov":{},"edu":{},"mil":{},"co":{},"com":{}},"ph":{"ngo":{},"org":{},"net":{},"gov":{},"edu":{},"mil":{},"com":{},"i":{}},"xxx":{},"no":{"åseral":{},"hábmer":{},"osøyro":{},"tr":{"gs":{}},"sarpsborg":{},"baidar":{},"halsa":{},"honefoss":{},"lierne":{},"porsanger":{},"sf":{"gs":{}},"vaksdal":{},"oygarden":{},"gáŋgaviika":{},"sirdal":{},"akrehamn":{},"sunndal":{},"kommune":{},"bájddar":{},"karmoy":{},"orkanger":{},"stat":{},"osteroy":{},"snoasa":{},"aseral":{},"of":{"gs":{}},"davvenjárga":{},"áltá":{},"tm":{"gs":{}},"bahccavuotna":{},"haugesund":{},"sauherad":{},"sør-fron":{},"hurum":{},"gangaviika":{},"vardo":{},"andebu":{},"høyanger":{},"nærøy":{},"ostre-toten":{},"bryne":{},"kongsberg":{},"solund":{},"bodø":{},"vaapste":{},"lenvik":{},"royken":{},"nordre-land":{},"bronnoy":{},"sørreisa":{},"karasjok":{},"hattfjelldal":{},"rissa":{},"rennebu":{},"ivgu":{},"evenášši":{},"eidfjord":{},"skjervøy":{},"harstad":{},"troandin":{},"kautokeino":{},"nesset":{},"sogne":{},"grue":{},"tromsø":{},"floro":{},"orskog":{},"jølster":{},"røyken":{},"langevåg":{},"unjárga":{},"askøy":{},"notodden":{},"alta":{},"porsgrunn":{},"hemnes":{},"badaddja":{},"kvalsund":{},"priv":{},"jørpeland":{},"hadsel":{},"ah":{"gs":{}},"kongsvinger":{},"dønna":{},"orsta":{},"telemark":{"bø":{},"bo":{}},"vestvågøy":{},"trogstad":{},"stordal":{},"sykkylven":{},"flå":{},"ralingen":{},"værøy":{},"rl":{"gs":{}},"alvdal":{},"trondheim":{},"báhccavuotna":{},"frogn":{},"dyrøy":{},"hamar":{},"amli":{},"surnadal":{},"jevnaker":{},"austevoll":{},"ráhkkerávju":{},"beardu":{},"oksnes":{},"habmer":{},"vossevangen":{},"nååmesjevuemie":{},"gjovik":{},"skaun":{},"lødingen":{},"frøya":{},"fylkesbibl":{},"kirkenes":{},"museum":{},"grane":{},"farsund":{},"mjøndalen":{},"snåsa":{},"drammen":{},"gausdal":{},"hámmárfeasta":{},"gjøvik":{},"bronnoysund":{},"skjåk":{},"skiervá":{},"sor-aurdal":{},"engerdal":{},"bálát":{},"rendalen":{},"verdal":{},"leirfjord":{},"nedre-eiker":{},"naamesjevuemie":{},"bjarkoy":{},"matta-varjjat":{},"bievát":{},"divtasvuodna":{},"bjerkreim":{},"lindås":{},"etne":{},"radøy":{},"fm":{"gs":{}},"várggát":{},"tranøy":{},"davvenjarga":{},"budejju":{},"fla":{},"eidsvoll":{},"skanland":{},"sel":{},"kristiansand":{},"lund":{},"halden":{},"skánit":{},"drobak":{},"lyngen":{},"báhcavuotna":{},"snåase":{},"klabu":{},"laakesvuemie":{},"hægebostad":{},"tjome":{},"sandoy":{},"granvin":{},"egersund":{},"røst":{},"oppegård":{},"svalbard":{"gs":{}},"søndre-land":{},"oppdal":{},"orland":{},"siljan":{},"malatvuopmi":{},"navuotna":{},"hasvik":{},"meraker":{},"måsøy":{},"krødsherad":{},"sørfold":{},"rollag":{},"berlevåg":{},"høylandet":{},"oslo":{"gs":{}},"sor-fron":{},"ski":{},"ákŋoluokta":{},"tranoy":{},"porsáŋgu":{},"tjøme":{},"osoyro":{},"alaheadju":{},"fauske":{},"osen":{},"ørskog":{},"aejrie":{},"fusa":{},"vestfold":{"sande":{}},"snaase":{},"lindas":{},"evje-og-hornnes":{},"krokstadelva":{},"horten":{},"giske":{},"vik":{},"steigen":{},"nordreisa":{},"nord-odal":{},"nannestad":{},"lillesand":{},"bokn":{},"stavern":{},"nesna":{},"sandnessjøen":{},"ås":{},"sund":{},"giehtavuoatna":{},"ørland":{},"orkdal":{},"ballangen":{},"sømna":{},"raisa":{},"stathelle":{},"bærum":{},"røyrvik":{},"tysvær":{},"romsa":{},"skedsmokorset":{},"sokndal":{},"eidsberg":{},"ruovat":{},"nittedal":{},"kviteseid":{},"sorum":{},"åmot":{},"ha":{},"sandefjord":{},"malvik":{},"sveio":{},"klepp":{},"flakstad":{},"alstahaug":{},"naustdal":{},"odda":{},"mr":{"gs":{}},"somna":{},"deatnu":{},"sør-aurdal":{},"blogspot":{},"tysnes":{},"trøgstad":{},"tynset":{},"vagsoy":{},"masfjorden":{},"lurøy":{},"ålesund":{},"slattum":{},"hurdal":{},"vardø":{},"vadso":{},"nissedal":{},"skien":{},"lunner":{},"elverum":{},"tysfjord":{},"svelvik":{},"ibestad":{},"gulen":{},"stavanger":{},"berlevag":{},"sogndal":{},"hyllestad":{},"lavangen":{},"råde":{},"bykle":{},"flora":{},"stranda":{},"tokke":{},"loabát":{},"ovre-eiker":{},"leka":{},"beiarn":{},"bådåddjå":{},"láhppi":{},"ol":{"gs":{}},"hønefoss":{},"muosát":{},"flatanger":{},"tromsa":{},"inderoy":{},"bajddar":{},"finnoy":{},"agdenes":{},"selje":{},"balsfjord":{},"vestre-slidre":{},"osterøy":{},"hareid":{},"ringebu":{},"rennesøy":{},"algard":{},"vågsøy":{},"stor-elvdal":{},"langevag":{},"aknoluokta":{},"eidskog":{},"berg":{},"gol":{},"čáhcesuolo":{},"hapmir":{},"cahcesuolo":{},"østre-toten":{},"leikanger":{},"modum":{},"lyngdal":{},"skiptvet":{},"mil":{},"oyer":{},"meløy":{},"hammarfeasta":{},"aurland":{},"jessheim":{},"moskenes":{},"amot":{},"fjaler":{},"andøy":{},"gjerdrum":{},"rana":{},"muosat":{},"leksvik":{},"storfjord":{},"hápmir":{},"mátta-várjjat":{},"rade":{},"meråker":{},"røros":{},"kråanghke":{},"brumunddal":{},"etnedal":{},"averøy":{},"asnes":{},"nl":{"gs":{}},"volda":{},"guovdageaidnu":{},"tolga":{},"omasvuotna":{},"galsa":{},"vestby":{},"fitjar":{},"skånland":{},"aurskog-holand":{},"vanylven":{},"arendal":{},"enebakk":{},"bearalváhki":{},"lavagis":{},"tranby":{},"nøtterøy":{},"fetsund":{},"donna":{},"finnøy":{},"co":{},"skierva":{},"rømskog":{},"vgs":{},"fuossko":{},"vennesla":{},"kárášjohka":{},"øvre-eiker":{},"seljord":{},"iveland":{},"askoy":{},"forsand":{},"midsund":{},"lardal":{},"gjerstad":{},"varoy":{},"balat":{},"bu":{"gs":{}},"time":{},"aukra":{},"stange":{},"kvanangen":{},"vestvagoy":{},"gaular":{},"søgne":{},"fyresdal":{},"royrvik":{},"fedje":{},"stjordal":{},"folldal":{},"málatvuopmi":{},"rennesoy":{},"stjørdalshalsen":{},"lom":{},"askvoll":{},"grimstad":{},"ål":{},"tromso":{},"jorpeland":{},"gratangen":{},"nordkapp":{},"vang":{},"hemne":{},"sola":{},"sauda":{},"bievat":{},"froya":{},"tønsberg":{},"hedmark":{"våler":{},"valer":{},"os":{}},"stjørdal":{},"sortland":{},"narviika":{},"rost":{},"rahkkeravju":{},"gálsá":{},"randaberg":{},"vega":{},"akershus":{"nes":{}},"rindal":{},"unjarga":{},"vegarshei":{},"vadsø":{},"lodingen":{},"roan":{},"gloppen":{},"haram":{},"hof":{},"rygge":{},"stryn":{},"balestrand":{},"ålgård":{},"åkrehamn":{},"bømlo":{},"sorfold":{},"jondal":{},"ringerike":{},"åsnes":{},"kvafjord":{},"molde":{},"hornindal":{},"sondre-land":{},"arna":{},"tvedestrand":{},"kragero":{},"hvaler":{},"báidár":{},"fuoisku":{},"loabat":{},"al":{},"ulvik":{},"hoyanger":{},"tinn":{},"bjarkøy":{},"hagebostad":{},"kåfjord":{},"vestre-toten":{},"kopervik":{},"nt":{"gs":{}},"nord-aurdal":{},"sør-varanger":{},"strand":{},"tysvar":{},"torsken":{},"skedsmo":{},"hitra":{},"gjemnes":{},"norddal":{},"marnardal":{},"notteroy":{},"ringsaker":{},"audnedaln":{},"hole":{},"kvam":{},"utsira":{},"luroy":{},"bergen":{},"salangen":{},"frana":{},"moareke":{},"ullensaker":{},"hammerfest":{},"fjell":{},"kvinnherad":{},"levanger":{},"barum":{},"sørum":{},"ørsta":{},"drangedal":{},"holmestrand":{},"trysil":{},"mosvik":{},"lesja":{},"dyroy":{},"gran":{},"klæbu":{},"kafjord":{},"stokke":{},"bindal":{},"midtre-gauldal":{},"askim":{},"dovre":{},"andoy":{},"åmli":{},"lindesnes":{},"råholt":{},"vågan":{},"risor":{},"meldal":{},"dep":{},"gildeskal":{},"romskog":{},"jan-mayen":{"gs":{}},"davvesiida":{},"vevelstad":{},"leangaviika":{},"sor-odal":{},"verran":{},"hjartdal":{},"karasjohka":{},"løten":{},"spjelkavik":{},"karmøy":{},"samnanger":{},"gamvik":{},"meloy":{},"spydeberg":{},"malselv":{},"træna":{},"krodsherad":{},"modalen":{},"årdal":{},"smøla":{},"salat":{},"nesseby":{},"kvæfjord":{},"gildeskål":{},"hamaroy":{},"skanit":{},"skodje":{},"tingvoll":{},"gjesdal":{},"hokksund":{},"kvinesdal":{},"lærdal":{},"skjervoy":{},"bardu":{},"st":{"gs":{}},"tjeldsund":{},"hm":{"gs":{}},"ullensvang":{},"loten":{},"dielddanuorri":{},"mosjøen":{},"mandal":{},"moåreke":{},"averoy":{},"va":{"gs":{}},"sandnes":{},"melhus":{},"bygland":{},"kristiansund":{},"nore-og-uvdal":{},"songdalen":{},"lorenskog":{},"lerdal":{},"narvik":{},"lier":{},"idrett":{},"sigdal":{},"mosjoen":{},"brønnøysund":{},"aarborte":{},"åfjord":{},"tonsberg":{},"frei":{},"sør-odal":{},"andasuolo":{},"hemsedal":{},"aure":{},"porsangu":{},"inderøy":{},"more-og-romsdal":{"sande":{},"heroy":{}},"førde":{},"asker":{},"øyer":{},"selbu":{},"risør":{},"hobol":{},"holtålen":{},"vefsn":{},"suldal":{},"fosnes":{},"florø":{},"vaga":{},"grong":{},"karlsoy":{},"snasa":{},"forde":{},"moss":{},"øygarden":{},"ostfold":{"valer":{}},"návuotna":{},"hl":{"gs":{}},"møre-og-romsdal":{"herøy":{},"sande":{}},"hol":{},"bearalvahki":{},"varggat":{},"leirvik":{},"kvænangen":{},"froland":{},"frosta":{},"bodo":{},"larvik":{},"meland":{},"fredrikstad":{},"trana":{},"lillehammer":{},"batsfjord":{},"brønnøy":{},"hjelmeland":{},"sálat":{},"gáivuotna":{},"masoy":{},"ráisa":{},"vagan":{},"kragerø":{},"radoy":{},"holtalen":{},"smola":{},"saltdal":{},"rødøy":{},"aa":{"gs":{}},"gaivuotna":{},"siellak":{},"hå":{},"afjord":{},"sula":{},"steinkjer":{},"austrheim":{},"folkebibl":{},"jolster":{},"skjak":{},"hoylandet":{},"ardal":{},"vågå":{},"leaŋgaviika":{},"vindafjord":{},"fræna":{},"sandøy":{},"overhalla":{},"nesoddtangen":{},"herad":{},"flesberg":{},"flekkefjord":{},"sandnessjoen":{},"evenassi":{},"namdalseid":{},"tydal":{},"valle":{},"hobøl":{},"álaheadju":{},"oppegard":{},"østfold":{"våler":{}},"namsskogan":{},"buskerud":{"nes":{}},"bremanger":{},"divttasvuotna":{},"kraanghke":{},"kvitsoy":{},"aurskog-høland":{},"målselv":{},"rauma":{},"luster":{},"loppa":{},"nord-fron":{},"vf":{"gs":{}},"voagat":{},"rælingen":{},"vikna":{},"eid":{},"namsos":{},"fet":{},"kvitsøy":{},"lahppi":{},"nordland":{"herøy":{},"bø":{},"bo":{},"heroy":{}},"eigersund":{},"roros":{},"nesodden":{},"sálát":{},"rodoy":{},"evenes":{},"bjugn":{},"sor-varanger":{},"mjondalen":{},"hordaland":{"os":{}},"vestnes":{},"alesund":{},"øystre-slidre":{},"sorreisa":{},"bamble":{},"stord":{},"øksnes":{},"aremark":{},"stjordalshalsen":{},"oystre-slidre":{},"lørenskog":{},"bahcavuotna":{},"marker":{},"mo-i-rana":{},"raholt":{},"tananger":{},"voss":{},"drøbak":{},"rakkestad":{},"bomlo":{},"fhs":{},"snillfjord":{},"lebesby":{},"tana":{},"naroy":{},"båtsfjord":{},"birkenes":{},"vegårshei":{}},"builders":{},"lv":{"org":{},"conf":{},"asn":{},"net":{},"gov":{},"edu":{},"mil":{},"id":{},"com":{}},"tf":{},"mango":{},"kz":{"edu":{},"mil":{},"org":{},"net":{},"com":{},"gov":{}},"systems":{},"ma":{"org":{},"press":{},"ac":{},"net":{},"co":{},"gov":{}},"in":{"ind":{},"org":{},"blogspot":{},"nic":{},"firm":{},"ac":{},"net":{},"gov":{},"res":{},"edu":{},"mil":{},"co":{},"gen":{}},"red":{},"გე":{},"id":{"sch":{},"biz":{},"my":{},"ac":{},"net":{},"go":{},"web":{},"mil":{},"or":{},"co":{}},"si":{},"المغرب":{},"re":{"nom":{},"asso":{},"blogspot":{},"com":{}},"me":{"org":{},"ac":{},"net":{},"gov":{},"edu":{},"priv":{},"co":{},"its":{}},"om":{"pro":{},"org":{},"net":{},"med":{},"gov":{},"edu":{},"museum":{},"co":{},"com":{}},"by":{"mil":{},"of":{},"com":{},"gov":{}},"fi":{"iki":{},"blogspot":{},"aland":{}},"gs":{},"فلسطين":{},"ir":{"sch":{},"org":{},"ac":{},"net":{},"gov":{},"ايران":{},"ایران":{},"id":{},"co":{}},"сайт":{},"li":{},"tz":{"ne":{},"info":{},"sc":{},"me":{},"ac":{},"hotel":{},"go":{},"or":{},"mil":{},"tv":{},"co":{},"mobi":{}},"td":{"blogspot":{}},"support":{},"cg":{},"政务":{},"pa":{"nom":{},"org":{},"abo":{},"ing":{},"ac":{},"net":{},"med":{},"edu":{},"gob":{},"com":{},"sld":{}},"singles":{},"am":{},"tv":{"on-the-web":{},"better-than":{},"worse-than":{},"dyndns":{}},"jo":{"sch":{},"org":{},"name":{},"net":{},"gov":{},"edu":{},"mil":{},"com":{}},"bi":{"edu":{},"org":{},"or":{},"co":{},"com":{}},"ee":{"org":{},"med":{},"gov":{},"edu":{},"riik":{},"fie":{},"lib":{},"pri":{},"aip":{},"com":{}},"ලංකා":{},"cd":{"gov":{}},"pk":{"info":{},"gok":{},"org":{},"biz":{},"gon":{},"net":{},"gov":{},"web":{},"gop":{},"edu":{},"gob":{},"fam":{},"gos":{},"com":{}},"onl":{},"சிங்கப்பூர்":{},"مصر":{},"mn":{"edu":{},"org":{},"nyc":{},"gov":{}},"gd":{},"موقع":{},"nz":{"*":{},"co":{"blogspot":{}}},"as":{"gov":{}},"monash":{},"lc":{"edu":{},"org":{},"co":{},"net":{},"gov":{},"com":{}},"ae":{"sch":{},"mil":{},"org":{},"ac":{},"net":{},"co":{},"gov":{}},"immobilien":{},"international":{},"rs":{"edu":{},"org":{},"in":{},"ac":{},"co":{},"gov":{}},"公益":{},"cn":{"hi":{},"ah":{},"yn":{},"sc":{},"hn":{},"net":{},"ln":{},"qh":{},"hb":{},"sh":{},"jl":{},"gz":{},"网络":{},"hk":{},"org":{},"xz":{},"tj":{},"bj":{},"jx":{},"edu":{},"fj":{},"gs":{},"mil":{},"js":{},"mo":{},"sn":{},"nm":{},"sd":{},"tw":{},"ha":{},"hl":{},"gx":{},"sx":{},"網絡":{},"cq":{},"nx":{},"he":{},"ac":{},"gov":{},"gd":{},"xj":{},"zj":{},"公司":{},"com":{}},"集团":{},"club":{},"ag":{"nom":{},"org":{},"co":{},"net":{},"com":{}},"mx":{"edu":{},"gob":{},"org":{},"blogspot":{},"net":{},"com":{}},"lighting":{},"sy":{"edu":{},"org":{},"mil":{},"net":{},"com":{},"gov":{}},"cx":{"ath":{},"gov":{}},"cr":{"fi":{},"or":{},"ed":{},"sa":{},"ac":{},"co":{},"go":{}},"السعودیۃ":{},"vi":{"org":{},"k12":{},"net":{},"co":{},"com":{}},"新加坡":{},"sg":{"edu":{},"org":{},"blogspot":{},"per":{},"net":{},"gov":{},"com":{}},"academy":{},"bm":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"kh":{"*":{}},"台灣":{},"nr":{"info":{},"edu":{},"org":{},"biz":{},"net":{},"com":{},"gov":{}},"قطر":{},"estate":{},"bz":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"онлайн":{},"vu":{},"kw":{"*":{}},"gf":{},"al":{"edu":{},"org":{},"mil":{},"net":{},"gov":{},"com":{}},"السعوديه":{},"uz":{"org":{},"net":{},"co":{},"com":{}},"equipment":{},"cw":{"edu":{},"org":{},"net":{},"com":{}},"int":{"eu":{}},"ninja":{},"ht":{"rel":{},"pro":{},"net":{},"perso":{},"gouv":{},"pol":{},"adult":{},"info":{},"org":{},"art":{},"firm":{},"coop":{},"med":{},"shop":{},"edu":{},"asso":{},"com":{}},"mw":{"org":{},"int":{},"biz":{},"coop":{},"ac":{},"net":{},"gov":{},"edu":{},"museum":{},"co":{},"com":{}},"gm":{},"臺灣":{},"bg":{"a":{},"7":{},"d":{},"2":{},"j":{},"y":{},"1":{},"u":{},"k":{},"g":{},"t":{},"e":{},"v":{},"s":{},"c":{},"q":{},"b":{},"z":{},"w":{},"r":{},"x":{},"h":{},"0":{},"f":{},"i":{},"6":{},"n":{},"3":{},"9":{},"m":{},"8":{},"l":{},"p":{},"4":{},"o":{},"5":{}},"gu":{"*":{}},"info":{"for-our":{},"webhop":{},"groks-this":{},"selfip":{},"barrel-of-knowledge":{},"groks-the":{},"knowsitall":{},"barrell-of-knowledge":{},"dyndns":{},"here-for-more":{}},"institute":{},"education":{},"aw":{"com":{}},"gy":{"net":{},"co":{},"com":{}},"ac":{"edu":{},"org":{},"mil":{},"net":{},"gov":{},"com":{}},"ca":{"qc":{},"nt":{},"nu":{},"on":{},"nb":{},"gc":{},"bc":{},"co":{},"yk":{},"blogspot":{},"mb":{},"nl":{},"ns":{},"ab":{},"sk":{},"pe":{},"nf":{}},"domains":{},"careers":{},"ভারত":{},"sk":{"blogspot":{}},"museum":{"bushey":{},"london":{},"coal":{},"chesapeakebay":{},"cinema":{},"jamison":{},"military":{},"palace":{},"usdecorativearts":{},"newport":{},"anthro":{},"usculture":{},"savannahga":{},"assassination":{},"village":{},"gemological":{},"fundacio":{},"celtic":{},"trust":{},"miners":{},"planetarium":{},"hembygdsforbund":{},"whaling":{},"press":{},"americanart":{},"coloradoplateau":{},"timekeeping":{},"panama":{},"can":{},"bristol":{},"virtual":{},"naturhistorisches":{},"elvendrell":{},"birdart":{},"mill":{},"grandrapids":{},"vantaa":{},"archaeological":{},"läns":{},"national":{},"pilots":{},"portal":{},"gorge":{},"luzern":{},"seaport":{},"uvic":{},"williamsburg":{},"project":{},"indiana":{},"schokoladen":{},"denmark":{},"missoula":{},"virginia":{},"philadelphiaarea":{},"nature":{},"brunel":{},"judygarland":{},"ontario":{},"western":{},"theater":{},"birthplace":{},"journalism":{},"madrid":{},"glas":{},"crafts":{},"astronomy":{},"neues":{},"histoire":{},"family":{},"illustration":{},"bible":{},"california":{},"essex":{},"newspaper":{},"lewismiller":{},"georgia":{},"scienceandindustry":{},"graz":{},"sciencehistory":{},"uhren":{},"nyny":{},"spy":{},"museet":{},"education":{},"sydney":{},"landes":{},"historisches":{},"alaska":{},"wildlife":{},"minnesota":{},"axis":{},"state":{},"otago":{},"cincinnati":{},"embroidery":{},"bauern":{},"livinghistory":{},"virtuel":{},"satx":{},"botanicgarden":{},"steam":{},"chicago":{},"freemasonry":{},"york":{},"communications":{},"ירושלים":{},"workshop":{},"watchandclock":{},"saintlouis":{},"roma":{},"farmers":{},"columbia":{},"palmsprings":{},"bellevue":{},"anthropology":{},"arts":{},"pharmacy":{},"sologne":{},"windmill":{},"lancashire":{},"childrensgarden":{},"delmenhorst":{},"versailles":{},"artcenter":{},"tcm":{},"helsinki":{},"stateofdelaware":{},"canada":{},"uscountryestate":{},"oregontrail":{},"contemporary":{},"computerhistory":{},"salem":{},"barcelona":{},"and":{},"karikatur":{},"ski":{},"bahn":{},"heritage":{},"association":{},"naval":{},"station":{},"art":{},"trolley":{},"marburg":{},"farmstead":{},"historyofscience":{},"vlaanderen":{},"settlement":{},"marylhurst":{},"pasadena":{},"online":{},"nrw":{},"cambridge":{},"wales":{},"sherbrooke":{},"square":{},"historical":{},"horology":{},"wallonie":{},"karate":{},"iron":{},"muncie":{},"utah":{},"castle":{},"sciencecenter":{},"medizinhistorisches":{},"aquarium":{},"comunicações":{},"artanddesign":{},"nationalfirearms":{},"building":{},"circus":{},"muenster":{},"berlin":{},"bus":{},"baseball":{},"columbus":{},"heimatunduhren":{},"science":{},"shell":{},"railway":{},"koebenhavn":{},"schoenbrunn":{},"labor":{},"chattanooga":{},"santafe":{},"stpetersburg":{},"botany":{},"railroad":{},"quebec":{},"bruxelles":{},"rochester":{},"environmentalconservation":{},"pubol":{},"undersea":{},"civilization":{},"finearts":{},"farm":{},"philadelphia":{},"stadt":{},"decorativearts":{},"copenhagen":{},"usgarden":{},"niepce":{},"collection":{},"architecture":{},"dinosaur":{},"film":{},"school":{},"house":{},"assisi":{},"posts-and-telecommunications":{},"oceanographic":{},"cymru":{},"florida":{},"iraq":{},"museumcenter":{},"glass":{},"freiburg":{},"washingtondc":{},"cultural":{},"broadcast":{},"medical":{},"riodejaneiro":{},"missile":{},"hellas":{},"music":{},"airguard":{},"field":{},"coldwar":{},"annefrank":{},"harvestcelebration":{},"surrey":{},"phoenix":{},"baghdad":{},"delaware":{},"giessen":{},"philately":{},"steiermark":{},"society":{},"arteducation":{},"dallas":{},"oceanographique":{},"research":{},"salvadordali":{},"center":{},"muenchen":{},"amber":{},"artgallery":{},"bilbao":{},"dolls":{},"jerusalem":{},"capebreton":{},"badajoz":{},"contemporaryart":{},"humanities":{},"space":{},"hamburg":{},"force":{},"civilisation":{},"isleofman":{},"amsterdam":{},"ulm":{},"torino":{},"corporation":{},"historichouses":{},"burghof":{},"north":{},"atlanta":{},"meeres":{},"colonialwilliamsburg":{},"svizzera":{},"history":{},"chocolate":{},"discovery":{},"living":{},"nebraska":{},"usarts":{},"mansion":{},"technology":{},"coastaldefence":{},"computer":{},"exhibition":{},"fineart":{},"time":{},"maritimo":{},"indian":{},"epilepsy":{},"mulhouse":{},"british":{},"handson":{},"corvette":{},"alabama":{},"lucerne":{},"newyork":{},"plants":{},"cartoonart":{},"health":{},"mining":{},"entomology":{},"monticello":{},"resistance":{},"naturalsciences":{},"nativeamerican":{},"creation":{},"pittsburgh":{},"photography":{},"rockart":{},"tank":{},"geelvinck":{},"portlligat":{},"jewelry":{},"silk":{},"valley":{},"ethnology":{},"naturalhistorymuseum":{},"ddr":{},"detroit":{},"museumvereniging":{},"cyber":{},"michigan":{},"sweden":{},"egyptian":{},"labour":{},"oregon":{},"gateway":{},"lans":{},"motorcycle":{},"santabarbara":{},"southcarolina":{},"fortworth":{},"aviation":{},"naturalhistory":{},"public":{},"farmequipment":{},"dali":{},"louvre":{},"nyc":{},"salzburg":{},"sciences":{},"starnberg":{},"eisenbahn":{},"yosemite":{},"britishcolumbia":{},"moscow":{},"clock":{},"plaza":{},"jfk":{},"countryestate":{},"tree":{},"usantiques":{},"arboretum":{},"figueres":{},"children":{},"agriculture":{},"scienceandhistory":{},"sibenik":{},"botanicalgarden":{},"brandywinevalley":{},"archaeology":{},"academy":{},"estate":{},"localhistory":{},"schlesisches":{},"mansions":{},"jewish":{},"naumburg":{},"brussels":{},"иком":{},"boston":{},"judaica":{},"transport":{},"chiropractic":{},"baths":{},"baltimore":{},"castres":{},"england":{},"bonn":{},"design":{},"maritime":{},"christiansburg":{},"moma":{},"settlers":{},"juedisches":{},"norfolk":{},"nationalheritage":{},"costume":{},"cadaques":{},"american":{},"natuurwetenschappen":{},"newjersey":{},"watch-and-clock":{},"town":{},"correios-e-telecomunicações":{},"jefferson":{},"television":{},"frankfurt":{},"indianmarket":{},"intelligence":{},"kunstsammlung":{},"sciencecenters":{},"kids":{},"cheltenham":{},"americanantiques":{},"ambulance":{},"plantation":{},"maryland":{},"modern":{},"halloffame":{},"francaise":{},"oxford":{},"stockholm":{},"newmexico":{},"science-fiction":{},"university":{},"jewishart":{},"casadelamoneda":{},"fribourg":{},"lincoln":{},"stalbans":{},"suisse":{},"environment":{},"trustee":{},"civilwar":{},"midatlantic":{},"stuttgart":{},"communication":{},"automotive":{},"educational":{},"beeldengeluid":{},"austin":{},"asmatart":{},"omaha":{},"historisch":{},"frog":{},"kunst":{},"scotland":{},"county":{},"koeln":{},"linz":{},"touch":{},"basel":{},"kunstunddesign":{},"uslivinghistory":{},"preservation":{},"geology":{},"beauxarts":{},"bill":{},"manchester":{},"newhampshire":{},"clinton":{},"losangeles":{},"luxembourg":{},"culturalcenter":{},"ushistory":{},"elburg":{},"culture":{},"botanical":{},"imageandsound":{},"schweiz":{},"sanfrancisco":{},"finland":{},"skole":{},"topology":{},"money":{},"ushuaia":{},"war":{},"exeter":{},"mad":{},"portland":{},"larsson":{},"texas":{},"guernsey":{},"montreal":{},"flanders":{},"bergbau":{},"encyclopedic":{},"filatelia":{},"memorial":{},"mesaverde":{},"paderborn":{},"textile":{},"artsandcrafts":{},"russia":{},"indianapolis":{},"viking":{},"australia":{},"artdeco":{},"presidio":{},"lajolla":{},"convent":{},"franziskaner":{},"manx":{},"surgeonshall":{},"foundation":{},"donostia":{},"soundandvision":{},"brussel":{},"westfalen":{},"childrens":{},"youth":{},"furniture":{},"garden":{},"carrier":{},"cranbrook":{},"saskatchewan":{},"zoological":{},"sciencesnaturelles":{},"nuremberg":{},"eastafrica":{},"database":{},"bale":{},"hawaii":{},"depot":{},"antiques":{},"gallery":{},"eastcoast":{},"juif":{},"cody":{},"fortmissoula":{},"usa":{},"volkenkunde":{},"community":{},"telekommunikation":{},"zoology":{},"media":{},"bern":{},"paris":{},"interactive":{},"durham":{},"santacruz":{},"southwest":{},"sandiego":{},"stjohn":{},"mallorca":{},"pacific":{},"brasil":{},"americana":{},"openair":{},"historicalsociety":{},"loyalist":{},"yorkshire":{},"monmouth":{},"berkeley":{},"nuernberg":{},"air":{},"paleo":{}},"游戏":{},"السعودیة":{},"ax":{},"இந்தியா":{},"es":{"nom":{},"edu":{},"gob":{},"org":{},"com":{"blogspot":{}}},"kp":{"edu":{},"org":{},"tra":{},"rep":{},"gov":{},"com":{}},"tattoo":{},"bb":{"info":{},"store":{},"org":{},"biz":{},"net":{},"gov":{},"edu":{},"com":{}},"sa":{"sch":{},"org":{},"net":{},"med":{},"gov":{},"edu":{},"pub":{},"com":{}},"et":{"*":{}},"ie":{"blogspot":{},"gov":{}},"tl":{"gov":{}},"org":{"misconfused":{},"kicks-ass":{},"is-saved":{},"doesntexist":{},"is-a-chef":{},"servebbs":{},"isa-geek":{},"is-very-nice":{},"is-a-geek":{},"dnsalias":{},"is-very-sweet":{},"stuff-4-sale":{},"is-a-bruinsfan":{},"is-a-linux-user":{},"dynalias":{},"hobby-site":{},"dnsdojo":{},"selfip":{},"doomdns":{},"is-a-soxfan":{},"blogdns":{},"is-a-patsfan":{},"dyndns":{"home":{},"go":{}},"readmyblog":{},"is-found":{},"is-very-good":{},"is-lost":{},"homeunix":{},"dontexist":{},"sellsyourhome":{},"blogsite":{},"endoftheinternet":{},"us":{},"homelinux":{},"is-a-candidate":{},"boldlygoingnowhere":{},"is-a-knight":{},"serveftp":{},"gotdns":{},"homedns":{},"from-me":{},"webhop":{},"dvrdns":{},"game-host":{},"za":{},"endofinternet":{},"servegame":{},"homeftp":{},"podzone":{},"is-very-bad":{},"ae":{},"is-a-celticsfan":{},"is-very-evil":{}},"বাংলা":{},"tj":{"test":{},"org":{},"int":{},"nic":{},"biz":{},"name":{},"ac":{},"net":{},"gov":{},"go":{},"web":{},"edu":{},"mil":{},"co":{},"com":{}},"cf":{"blogspot":{}},"social":{},"im":{"org":{},"tv":{},"ac":{},"tt":{},"net":{},"co":{"plc":{},"ltd":{}},"com":{}},"guru":{},"mk":{"edu":{},"org":{},"name":{},"inf":{},"net":{},"gov":{},"com":{}},"graphics":{},"de":{"isteingeek":{},"leitungsen":{},"istmein":{},"blogspot":{},"traeumtgerade":{},"lebtimnetz":{},"fuettertdasnetz":{},"com":{}},"moe":{},"bike":{},"shoes":{},"pro":{"law":{},"jur":{},"bar":{},"cpa":{},"aca":{},"eng":{},"med":{}},"md":{},"fm":{},"cl":{"mil":{},"gob":{},"co":{},"gov":{}},"jp":{"aomori":{"misawa":{},"aomori":{},"towada":{},"tsugaru":{},"shichinohe":{},"sannohe":{},"kuroishi":{},"itayanagi":{},"gonohe":{},"takko":{},"noheji":{},"hiranai":{},"rokunohe":{},"shingo":{},"hashikami":{},"hirosaki":{},"nakadomari":{},"hachinohe":{},"mutsu":{},"oirase":{},"owani":{},"tsuruta":{}},"ne":{},"okinawa":{"ishikawa":{},"okinawa":{},"kitanakagusuku":{},"yonaguni":{},"ginoza":{},"yomitan":{},"onna":{},"nago":{},"motobu":{},"kumejima":{},"nanjo":{},"uruma":{},"itoman":{},"kin":{},"hirara":{},"zamami":{},"kunigami":{},"urasoe":{},"ginowan":{},"haebaru":{},"tokashiki":{},"kadena":{},"naha":{},"yaese":{},"tomigusuku":{},"izena":{},"kitadaito":{},"tarama":{},"shimoji":{},"higashi":{},"nishihara":{},"ogimi":{},"tonaki":{},"gushikami":{},"yonabaru":{},"nakijin":{},"taketomi":{},"ishigaki":{},"iheya":{},"minamidaito":{},"aguni":{},"nakagusuku":{}},"mie":{"kisosaki":{},"asahi":{},"udono":{},"shima":{},"taiki":{},"kumano":{},"kameyama":{},"taki":{},"miyama":{},"misugi":{},"toba":{},"tamaki":{},"ise":{},"nabari":{},"inabe":{},"yokkaichi":{},"suzuka":{},"kiwa":{},"ureshino":{},"watarai":{},"komono":{},"mihama":{},"kuwana":{},"tsu":{},"kawagoe":{},"minamiise":{},"kiho":{},"matsusaka":{},"meiwa":{},"tado":{}},"gifu":{"anpachi":{},"hichiso":{},"hashima":{},"tomika":{},"shirakawa":{},"sekigahara":{},"kasamatsu":{},"gifu":{},"sakahogi":{},"ibigawa":{},"motosu":{},"tajimi":{},"kasahara":{},"yoro":{},"higashishirakawa":{},"mitake":{},"ginan":{},"kitagata":{},"godo":{},"hida":{},"minokamo":{},"seki":{},"mino":{},"ogaki":{},"toki":{},"kakamigahara":{},"wanouchi":{},"takayama":{},"tarui":{},"ikeda":{},"kawaue":{},"gujo":{},"mizunami":{},"yamagata":{},"kani":{},"nakatsugawa":{},"ena":{},"yaotsu":{}},"toyama":{"asahi":{},"namerikawa":{},"fukumitsu":{},"funahashi":{},"uozu":{},"toyama":{},"oyabe":{},"taira":{},"nanto":{},"kurobe":{},"unazuki":{},"tonami":{},"himi":{},"kamiichi":{},"toga":{},"fuchu":{},"johana":{},"nyuzen":{},"yamada":{},"tateyama":{},"inami":{},"imizu":{},"nakaniikawa":{},"takaoka":{}},"nagasaki":{"matsuura":{},"kuchinotsu":{},"obama":{},"futsu":{},"iki":{},"nagasaki":{},"isahaya":{},"seihi":{},"goto":{},"hasami":{},"omura":{},"shimabara":{},"tsushima":{},"kawatana":{},"saikai":{},"togitsu":{},"oseto":{},"chijiwa":{},"hirado":{},"unzen":{},"shinkamigoto":{},"sasebo":{}},"gunma":{"katashina":{},"chiyoda":{},"takasaki":{},"maebashi":{},"ora":{},"isesaki":{},"higashiagatsuma":{},"oizumi":{},"naganohara":{},"tsukiyono":{},"tatebayashi":{},"tomioka":{},"shimonita":{},"tsumagoi":{},"fujioka":{},"numata":{},"nanmoku":{},"shibukawa":{},"itakura":{},"annaka":{},"yoshioka":{},"nakanojo":{},"kanra":{},"takayama":{},"showa":{},"kiryu":{},"ota":{},"kusatsu":{},"midori":{},"shinto":{},"ueno":{},"minakami":{},"kawaba":{},"meiwa":{},"tamamura":{},"kanna":{}},"co":{},"tottori":{"chizu":{},"wakasa":{},"yazu":{},"kotoura":{},"koge":{},"kawahara":{},"sakaiminato":{},"misasa":{},"nanbu":{},"yonago":{},"nichinan":{},"hino":{},"tottori":{}},"tochigi":{"kuroiso":{},"karasuyama":{},"sano":{},"tsuga":{},"sakura":{},"ohira":{},"ichikai":{},"haga":{},"mashiko":{},"yaita":{},"ashikaga":{},"nasushiobara":{},"shioya":{},"oyama":{},"ohtawara":{},"mibu":{},"tochigi":{},"shimotsuke":{},"nasu":{},"nikko":{},"ujiie":{},"iwafune":{},"utsunomiya":{},"nogi":{},"moka":{},"takanezawa":{},"kaminokawa":{},"bato":{},"nishikata":{},"motegi":{},"kanuma":{}},"nara":{"tenri":{},"kashiba":{},"uda":{},"shimokitayama":{},"gose":{},"yamatotakada":{},"takatori":{},"tawaramoto":{},"shimoichi":{},"oyodo":{},"kanmaki":{},"yamatokoriyama":{},"ikaruga":{},"katsuragi":{},"ouda":{},"sakurai":{},"nara":{},"oji":{},"mitsue":{},"yoshino":{},"yamazoe":{},"heguri":{},"kawai":{},"higashiyoshino":{},"kurotaki":{},"nosegawa":{},"sango":{},"miyake":{},"kamikitayama":{},"ando":{},"tenkawa":{},"ikoma":{},"shinjo":{},"soni":{},"kawanishi":{},"koryo":{},"kawakami":{},"kashihara":{}},"chiba":{"sakae":{},"asahi":{},"shisui":{},"tako":{},"sakura":{},"yokaichiba":{},"ichikawa":{},"yachiyo":{},"togane":{},"inzai":{},"shirako":{},"chosei":{},"noda":{},"ichinomiya":{},"mihama":{},"kashiwa":{},"kimitsu":{},"chonan":{},"otaki":{},"onjuku":{},"ichihara":{},"katori":{},"kyonan":{},"oamishirasato":{},"yotsukaido":{},"isumi":{},"narita":{},"hanamigawa":{},"sodegaura":{},"shimofusa":{},"kamagaya":{},"tohnosho":{},"choshi":{},"kujukuri":{},"chuo":{},"katsuura":{},"kozaki":{},"omigawa":{},"kisarazu":{},"kamogawa":{},"minamiboso":{},"mobara":{},"mutsuzawa":{},"futtsu":{},"yokoshibahikari":{},"midori":{},"matsudo":{},"nagara":{},"sosa":{},"abiko":{},"nagareyama":{},"tateyama":{},"narashino":{},"tomisato":{},"urayasu":{},"funabashi":{},"yachimata":{},"shiroi":{}},"hiroshima":{"takehara":{},"osakikamijima":{},"hatsukaichi":{},"sera":{},"onomichi":{},"jinsekikogen":{},"saka":{},"kumano":{},"asaminami":{},"shinichi":{},"shobara":{},"naka":{},"fukuyama":{},"otake":{},"miyoshi":{},"mihara":{},"etajima":{},"higashihiroshima":{},"fuchu":{},"seranishi":{},"hongo":{},"kure":{},"kaita":{},"daiwa":{},"kui":{}},"sapporo":{"!city":{},"*":{}},"iwate":{"kuji":{},"ichinohe":{},"iwaizumi":{},"kitakami":{},"takizawa":{},"rikuzentakata":{},"oshu":{},"kanegasaki":{},"yahaba":{},"otsuchi":{},"noda":{},"yamada":{},"iwate":{},"fujisawa":{},"fudai":{},"joboji":{},"miyako":{},"kawai":{},"ofunato":{},"hiraizumi":{},"hirono":{},"kamaishi":{},"kunohe":{},"morioka":{},"kuzumaki":{},"sumita":{},"tanohata":{},"shizukuishi":{},"shiwa":{},"tono":{},"hanamaki":{},"mizusawa":{},"ninohe":{},"karumai":{},"ichinoseki":{}},"kawasaki":{"!city":{},"*":{}},"kanagawa":{"oiso":{},"chigasaki":{},"miura":{},"tsukui":{},"kaisei":{},"odawara":{},"ayase":{},"isehara":{},"ebina":{},"atsugi":{},"yamato":{},"hiratsuka":{},"hakone":{},"aikawa":{},"minamiashigara":{},"ninomiya":{},"matsuda":{},"kiyokawa":{},"samukawa":{},"zushi":{},"yokosuka":{},"yugawara":{},"yamakita":{},"fujisawa":{},"zama":{},"sagamihara":{},"oi":{},"nakai":{},"hadano":{},"kamakura":{}},"fukushima":{"nishiaizu":{},"ishikawa":{},"futaba":{},"date":{},"yanaizu":{},"shirakawa":{},"otama":{},"kitakata":{},"soma":{},"samegawa":{},"hanawa":{},"nango":{},"aizuwakamatsu":{},"bandai":{},"inawashiro":{},"tamakawa":{},"kitashiobara":{},"hirata":{},"taishin":{},"namie":{},"koriyama":{},"yabuki":{},"miharu":{},"ono":{},"okuma":{},"omotego":{},"aizumisato":{},"iwaki":{},"furudono":{},"tenei":{},"fukushima":{},"mishima":{},"izumizaki":{},"showa":{},"kaneyama":{},"hirono":{},"asakawa":{},"higashi":{},"yamato":{},"tanagura":{},"shimogo":{},"aizubange":{},"kagamiishi":{},"yamatsuri":{},"iitate":{},"kunimi":{},"koori":{},"yugawa":{},"kawamata":{},"sukagawa":{},"nishigo":{}},"gr":{},"shimane":{"hikimi":{},"shimane":{},"okinoshima":{},"gotsu":{},"nishinoshima":{},"hamada":{},"okuizumo":{},"matsue":{},"yatsuka":{},"yakumo":{},"tsuwano":{},"ama":{},"izumo":{},"masuda":{},"yasugi":{},"tamayu":{},"misato":{},"hikawa":{},"higashiizumo":{},"kakinoki":{},"ohda":{},"unnan":{},"akagi":{}},"shiga":{"nagahama":{},"kosei":{},"hikone":{},"toyosato":{},"koto":{},"torahime":{},"aisho":{},"koka":{},"ryuoh":{},"gamo":{},"higashiomi":{},"moriyama":{},"ritto":{},"otsu":{},"kusatsu":{},"notogawa":{},"nishiazai":{},"takashima":{},"omihachiman":{},"yasu":{},"konan":{},"takatsuki":{},"maibara":{}},"hyogo":{"tamba":{},"sasayama":{},"sumoto":{},"yokawa":{},"sannan":{},"kamigori":{},"asago":{},"ako":{},"harima":{},"awaji":{},"ichikawa":{},"akashi":{},"kamikawa":{},"shinonsen":{},"sayo":{},"ono":{},"miki":{},"kasai":{},"nishinomiya":{},"nishiwaki":{},"ashiya":{},"yabu":{},"toyooka":{},"inagawa":{},"taka":{},"amagasaki":{},"itami":{},"shiso":{},"taishi":{},"aogaki":{},"tatsuno":{},"takarazuka":{},"goshiki":{},"yoka":{},"sanda":{},"takasago":{},"shingu":{},"himeji":{},"yashiro":{},"takino":{},"minamiawaji":{},"aioi":{},"kasuga":{},"kakogawa":{},"fukusaki":{},"kawanishi":{}},"niigata":{"myoko":{},"izumozaki":{},"gosen":{},"seiro":{},"ojiya":{},"tainai":{},"yahiko":{},"joetsu":{},"tokamachi":{},"minamiuonuma":{},"tochio":{},"itoigawa":{},"muika":{},"sekikawa":{},"yuzawa":{},"kariwa":{},"sado":{},"tagami":{},"yoita":{},"tsubame":{},"niigata":{},"tsunan":{},"omi":{},"sanjo":{},"kamo":{},"murakami":{},"nagaoka":{},"mitsuke":{},"uonuma":{},"aga":{},"agano":{},"kashiwazaki":{},"shibata":{},"seirou":{}},"osaka":{"nishi":{},"matsubara":{},"kanan":{},"osakasayama":{},"higashisumiyoshi":{},"misaki":{},"fujiidera":{},"shijonawate":{},"kita":{},"moriguchi":{},"yao":{},"toyonaka":{},"kashiwara":{},"minoh":{},"minato":{},"izumi":{},"hannan":{},"sayama":{},"higashiosaka":{},"kishiwada":{},"tadaoka":{},"sennan":{},"kadoma":{},"izumiotsu":{},"tajiri":{},"kaizuka":{},"suita":{},"sakai":{},"shimamoto":{},"tondabayashi":{},"daito":{},"ikeda":{},"kumatori":{},"settsu":{},"neyagawa":{},"taishi":{},"habikino":{},"chuo":{},"katano":{},"takaishi":{},"ibaraki":{},"kawachinagano":{},"higashiyodogawa":{},"takatsuki":{},"abeno":{},"nose":{},"toyono":{},"hirakata":{},"izumisano":{},"chihayaakasaka":{}},"kochi":{"ochi":{},"susaki":{},"otsuki":{},"tosashimizu":{},"nishitosa":{},"motoyama":{},"hidaka":{},"aki":{},"muroto":{},"toyo":{},"otoyo":{},"nahari":{},"tsuno":{},"umaji":{},"ino":{},"yasuda":{},"kochi":{},"mihara":{},"sukumo":{},"higashitsuno":{},"sakawa":{},"niyodogawa":{},"nakamura":{},"kagami":{},"okawa":{},"kitagawa":{},"yusuhara":{},"tosa":{},"nankoku":{},"geisei":{},"kami":{}},"yokohama":{"!city":{},"*":{}},"ac":{},"nagoya":{"!city":{},"*":{}},"miyagi":{"ogawara":{},"osaki":{},"natori":{},"tomiya":{},"matsushima":{},"kesennuma":{},"wakuya":{},"onagawa":{},"kakuda":{},"zao":{},"misato":{},"shiroishi":{},"kawasaki":{},"shichikashuku":{},"yamamoto":{},"furukawa":{},"murata":{},"semine":{},"ishinomaki":{},"ohira":{},"higashimatsushima":{},"rifu":{},"shiogama":{},"marumori":{},"tome":{},"minamisanriku":{},"shibata":{},"watari":{},"tagajo":{},"iwanuma":{},"shikama":{},"taiwa":{},"kami":{}},"ibaraki":{"sowa":{},"asahi":{},"hitachiota":{},"takahagi":{},"mito":{},"ushiku":{},"toride":{},"kasama":{},"kamisu":{},"daigo":{},"ryugasaki":{},"oarai":{},"ami":{},"tomobe":{},"yachiyo":{},"hitachiomiya":{},"yuki":{},"shimodate":{},"bando":{},"tone":{},"chikusei":{},"shimotsuma":{},"miho":{},"hitachinaka":{},"tsuchiura":{},"tokai":{},"itako":{},"joso":{},"sakai":{},"uchihara":{},"suifu":{},"naka":{},"inashiki":{},"ogawa":{},"tamatsukuri":{},"koga":{},"tsukuba":{},"shirosato":{},"sakuragawa":{},"kashima":{},"yamagata":{},"namegata":{},"ibaraki":{},"fujishiro":{},"ina":{},"hitachi":{},"iwama":{},"moriya":{},"omitama":{},"yawara":{},"kasumigaura":{}},"nagano":{"sakae":{},"asahi":{},"nozawaonsen":{},"suwa":{},"miyota":{},"iida":{},"ooshika":{},"togakushi":{},"nagiso":{},"yasaka":{},"chino":{},"nakano":{},"wada":{},"takamori":{},"otaki":{},"kiso":{},"okaya":{},"iiyama":{},"karuizawa":{},"ikeda":{},"minamiaiki":{},"ogawa":{},"tatsuno":{},"mochizuki":{},"togura":{},"saku":{},"hiraya":{},"nagawa":{},"tomi":{},"chikuma":{},"otari":{},"azumino":{},"kitaaiki":{},"ookuwa":{},"kisofukushima":{},"minamiminowa":{},"nagano":{},"komagane":{},"anan":{},"chikuhoku":{},"sakaki":{},"shiojiri":{},"ueda":{},"agematsu":{},"minowa":{},"achi":{},"matsumoto":{},"obuse":{},"minamimaki":{},"miyada":{},"nakagawa":{},"hara":{},"komoro":{},"aoki":{},"takagi":{},"ikusaka":{},"matsukawa":{},"hakuba":{},"omachi":{},"suzaka":{},"fujimi":{},"sakuho":{},"iijima":{},"takayama":{},"tateshina":{},"omi":{},"shimosuwa":{},"yamanouchi":{},"miasa":{},"iizuna":{},"yamagata":{},"ina":{},"shinanomachi":{},"kawakami":{},"yasuoka":{}},"ishikawa":{"shika":{},"kanazawa":{},"noto":{},"kaga":{},"nonoichi":{},"uchinada":{},"nanao":{},"tsubata":{},"tsurugi":{},"anamizu":{},"hakusan":{},"komatsu":{},"kawakita":{},"kahoku":{},"hakui":{},"suzu":{},"wajima":{},"nomi":{},"nakanoto":{}},"oita":{"himeshima":{},"hita":{},"bungoono":{},"usa":{},"oita":{},"kokonoe":{},"kamitsue":{},"kuju":{},"saiki":{},"hasama":{},"bungotakada":{},"tsukumi":{},"beppu":{},"kunisaki":{},"taketa":{},"usuki":{},"hiji":{},"kusu":{},"yufu":{}},"miyazaki":{"mimata":{},"takaharu":{},"kitakata":{},"miyazaki":{},"morotsuka":{},"tsuno":{},"nichinan":{},"hyuga":{},"kijo":{},"shiiba":{},"takanabe":{},"aya":{},"kawaminami":{},"kushima":{},"ebino":{},"shintomi":{},"kadogawa":{},"nishimera":{},"kitagawa":{},"saito":{},"takazaki":{},"nobeoka":{},"kitaura":{},"kunitomi":{},"miyakonojo":{},"gokase":{},"kobayashi":{}},"or":{},"ehime":{"masaki":{},"uwajima":{},"uchiko":{},"honai":{},"ainan":{},"tobe":{},"matsuno":{},"kamijima":{},"shikokuchuo":{},"seiyo":{},"niihama":{},"namikata":{},"saijo":{},"toon":{},"imabari":{},"iyo":{},"yawatahama":{},"ikata":{},"kumakogen":{},"kihoku":{},"matsuyama":{},"ozu":{}},"tokushima":{"naruto":{},"sanagochi":{},"shishikui":{},"anan":{},"minami":{},"kainan":{},"tokushima":{},"itano":{},"miyoshi":{},"komatsushima":{},"aizumi":{},"ichiba":{},"mima":{},"matsushige":{},"wajiki":{},"nakagawa":{},"mugi":{}},"hokkaido":{"sunagawa":{},"shimizu":{},"shimokawa":{},"date":{},"taiki":{},"ozora":{},"otofuke":{},"matsumae":{},"kimobetsu":{},"hamatonbetsu":{},"assabu":{},"yakumo":{},"aibetsu":{},"chippubetsu":{},"obihiro":{},"takikawa":{},"kushiro":{},"kamisunagawa":{},"ashoro":{},"kiyosato":{},"toyako":{},"erimo":{},"ebetsu":{},"takinoue":{},"shimamaki":{},"asahikawa":{},"wakkanai":{},"utashinai":{},"tomakomai":{},"rankoshi":{},"tsukigata":{},"imakane":{},"rishiri":{},"mikasa":{},"shari":{},"saroma":{},"okoppe":{},"ishikari":{},"rebun":{},"shakotan":{},"mukawa":{},"kamifurano":{},"mombetsu":{},"kitami":{},"takasu":{},"tomari":{},"wassamu":{},"shiraoi":{},"haboro":{},"teshikaga":{},"kamikawa":{},"horonobe":{},"hakodate":{},"koshimizu":{},"nakagawa":{},"uryu":{},"otaru":{},"akkeshi":{},"shikabe":{},"nayoro":{},"kunneppu":{},"biei":{},"pippu":{},"toyoura":{},"hokuryu":{},"kuriyama":{},"kamishihoro":{},"kuromatsunai":{},"shinshinotsu":{},"esashi":{},"bihoro":{},"iwamizawa":{},"otoineppu":{},"minamifurano":{},"biratori":{},"oumu":{},"ashibetsu":{},"kayabe":{},"hidaka":{},"sarufutsu":{},"tsubetsu":{},"akabira":{},"furano":{},"higashikagura":{},"kyowa":{},"kikonai":{},"abashiri":{},"sobetsu":{},"urakawa":{},"fukushima":{},"shibecha":{},"nemuro":{},"eniwa":{},"naie":{},"shiriuchi":{},"toya":{},"ikeda":{},"oketo":{},"rishirifuji":{},"kamoenai":{},"horokanai":{},"shiranuka":{},"obira":{},"nakasatsunai":{},"nakatombetsu":{},"nanae":{},"tohma":{},"niki":{},"mashike":{},"nanporo":{},"kembuchi":{},"honbetsu":{},"shibetsu":{},"kutchan":{},"nishiokoppe":{},"otobe":{},"esan":{},"numata":{},"urausu":{},"toyotomi":{},"atsuma":{},"noboribetsu":{},"iwanai":{},"hokuto":{},"shikaoi":{},"yoichi":{},"chitose":{},"moseushi":{},"muroran":{},"kitahiroshima":{},"fukagawa":{},"rikubetsu":{},"bifuka":{},"higashikawa":{},"shintoku":{},"tobetsu":{},"abira":{},"furubira":{},"hiroo":{},"embetsu":{},"bibai":{},"niikappu":{}},"kyoto":{"tanabe":{},"nagaokakyo":{},"maizuru":{},"yamashina":{},"nantan":{},"kizu":{},"kameoka":{},"yawata":{},"fukuchiyama":{},"seika":{},"miyazu":{},"joyo":{},"higashiyama":{},"ayabe":{},"uji":{},"minami":{},"kyotango":{},"muko":{},"nakagyo":{},"kyotamba":{},"kamo":{},"kita":{},"ine":{},"ujitawara":{},"sakyo":{},"oyamazaki":{},"kyotanabe":{},"minamiyamashiro":{},"ide":{},"wazuka":{},"kumiyama":{}},"yamaguchi":{"toyota":{},"mitou":{},"tokuyama":{},"nagato":{},"yuu":{},"abu":{},"shunan":{},"iwakuni":{},"hikari":{},"kudamatsu":{},"tabuse":{},"ube":{},"hofu":{},"oshima":{},"shimonoseki":{},"hagi":{}},"kagoshima":{"kouyama":{},"hioki":{},"kinko":{},"isen":{},"makurazaki":{},"tarumizu":{},"nakatane":{},"akune":{},"minamitane":{},"kagoshima":{},"matsumoto":{},"amami":{},"yusui":{},"izumi":{},"satsumasendai":{},"kanoya":{},"isa":{},"kawanabe":{},"nishinoomote":{},"soo":{}},"wakayama":{"tanabe":{},"nachikatsuura":{},"hidaka":{},"kamitonda":{},"taiji":{},"kainan":{},"gobo":{},"kozagawa":{},"aridagawa":{},"kudoyama":{},"arida":{},"wakayama":{},"kimino":{},"katsuragi":{},"koza":{},"koya":{},"shirahama":{},"shingu":{},"kitayama":{},"kushimoto":{},"misato":{},"kinokawa":{},"mihama":{},"inami":{},"hashimoto":{},"yura":{},"yuasa":{},"iwade":{},"hirogawa":{}},"saga":{"arita":{},"kanzaki":{},"hamatama":{},"omachi":{},"karatsu":{},"hizen":{},"tosu":{},"kouhoku":{},"taku":{},"ogi":{},"kitahata":{},"kiyama":{},"saga":{},"kashima":{},"kitagata":{},"imari":{},"shiroishi":{},"genkai":{},"ariake":{},"yoshinogari":{},"tara":{},"ouchi":{},"kamimine":{},"fukudomi":{},"kyuragi":{},"nishiarita":{}},"saitama":{"kasukabe":{},"ogano":{},"hidaka":{},"ryokami":{},"ogose":{},"higashimatsuyama":{},"iwatsuki":{},"yono":{},"yashio":{},"soka":{},"namegawa":{},"shiraoka":{},"fujimino":{},"misato":{},"hanyu":{},"asaka":{},"otaki":{},"yokoze":{},"arakawa":{},"tsurugashima":{},"kumagaya":{},"kawaguchi":{},"ogawa":{},"toda":{},"tokigawa":{},"niiza":{},"warabi":{},"kuki":{},"matsubushi":{},"satte":{},"yoshimi":{},"kawagoe":{},"kamiizumi":{},"yorii":{},"yoshida":{},"iruma":{},"kamisato":{},"kawajima":{},"kazo":{},"hatoyama":{},"koshigaya":{},"kitamoto":{},"sakado":{},"honjo":{},"kounosu":{},"kamikawa":{},"okegawa":{},"hatogaya":{},"chichibu":{},"miyashiro":{},"hanno":{},"saitama":{},"sayama":{},"yoshikawa":{},"higashichichibu":{},"urawa":{},"ranzan":{},"fujimi":{},"nagatoro":{},"sugito":{},"minano":{},"fukaya":{},"miyoshi":{},"hasuda":{},"shiki":{},"tokorozawa":{},"moroyama":{},"omiya":{},"ina":{}},"okayama":{"shoo":{},"soja":{},"kasaoka":{},"yakage":{},"akaiwa":{},"misaki":{},"niimi":{},"takahashi":{},"maniwa":{},"kibichuo":{},"tsuyama":{},"asakuchi":{},"kurashiki":{},"nagi":{},"kagamino":{},"satosho":{},"hayashima":{},"shinjo":{},"setouchi":{},"ibara":{},"okayama":{},"wake":{},"tamano":{},"kumenan":{},"bizen":{},"nishiawakura":{}},"ed":{},"kumamoto":{"nagasu":{},"kosa":{},"sumoto":{},"aso":{},"yatsushiro":{},"uki":{},"kikuchi":{},"minamata":{},"yamato":{},"nishihara":{},"yamaga":{},"mashiki":{},"minamioguni":{},"amakusa":{},"kashima":{},"takamori":{},"gyokuto":{},"mifune":{},"choyo":{},"kumamoto":{},"ozu":{},"arao":{},"uto":{},"oguni":{},"kamiamakusa":{},"hitoyoshi":{}},"shizuoka":{"shimizu":{},"izunokuni":{},"shimada":{},"gotemba":{},"yoshida":{},"kikugawa":{},"susono":{},"numazu":{},"izu":{},"matsuzaki":{},"iwata":{},"fukuroi":{},"yaizu":{},"morimachi":{},"kawanehon":{},"ito":{},"kannami":{},"arai":{},"shizuoka":{},"omaezaki":{},"hamamatsu":{},"higashiizu":{},"fujieda":{},"mishima":{},"kosai":{},"kawazu":{},"makinohara":{},"minamiizu":{},"fuji":{},"shimoda":{},"nishiizu":{},"haibara":{},"atami":{},"kakegawa":{},"fujinomiya":{},"fujikawa":{}},"lg":{},"fukuoka":{"nishi":{},"dazaifu":{},"toyotsu":{},"chikuho":{},"toho":{},"hisayama":{},"takata":{},"umi":{},"minami":{},"yukuhashi":{},"mizumaki":{},"kurate":{},"hirokawa":{},"yanagawa":{},"sasaguri":{},"kurogi":{},"hakata":{},"yamada":{},"nakagawa":{},"tsuiki":{},"okawa":{},"nakama":{},"saigawa":{},"buzen":{},"kaho":{},"okagaki":{},"miyako":{},"ashiya":{},"iizuka":{},"nogata":{},"tagawa":{},"kawara":{},"chikujo":{},"inatsuki":{},"ukiha":{},"shonai":{},"oto":{},"keisen":{},"miyama":{},"omuta":{},"kurume":{},"chuo":{},"munakata":{},"onga":{},"higashi":{},"soeda":{},"kasuya":{},"miyawaka":{},"koga":{},"tachiarai":{},"sue":{},"yame":{},"onojo":{},"fukuchi":{},"chikuzen":{},"shingu":{},"ogori":{},"chikugo":{},"shinyoshitomi":{},"kasuga":{},"oki":{},"chikushino":{},"usui":{}},"ad":{},"aichi":{"komaki":{},"takahama":{},"togo":{},"shitara":{},"okazaki":{},"anjo":{},"oharu":{},"isshiki":{},"aisai":{},"yatomi":{},"seto":{},"higashiura":{},"inazawa":{},"toyone":{},"asuke":{},"tsushima":{},"ama":{},"chiryu":{},"konan":{},"ichinomiya":{},"toyohashi":{},"tokoname":{},"mihama":{},"kariya":{},"shikatsu":{},"iwakura":{},"tokai":{},"toyoake":{},"toyota":{},"kota":{},"hekinan":{},"kira":{},"shinshiro":{},"fuso":{},"tobishima":{},"toyokawa":{},"hazu":{},"gamagori":{},"nisshin":{},"miyoshi":{},"toei":{},"tahara":{},"nagakute":{},"kanie":{},"kasugai":{},"chita":{},"kiyosu":{},"handa":{},"nishio":{},"inuyama":{},"obu":{},"oguchi":{},"owariasahi":{}},"kitakyushu":{"!city":{},"*":{}},"kagawa":{"kanonji":{},"higashikagawa":{},"mitoyo":{},"manno":{},"utazu":{},"takamatsu":{},"sanuki":{},"zentsuji":{},"naoshima":{},"uchinomi":{},"tadotsu":{},"marugame":{},"tonosho":{},"kotohira":{},"ayagawa":{}},"akita":{"semboku":{},"honjyo":{},"yokote":{},"kamikoani":{},"kosaka":{},"oga":{},"yurihonjo":{},"kyowa":{},"ogata":{},"nikaho":{},"akita":{},"kitaakita":{},"kazuno":{},"fujisato":{},"honjo":{},"kamioka":{},"mitane":{},"katagami":{},"ikawa":{},"odate":{},"noshiro":{},"misato":{},"hachirogata":{},"higashinaruse":{},"happou":{},"moriyoshi":{},"gojome":{},"daisen":{}},"tokyo":{"shibuya":{},"musashimurayama":{},"hinohara":{},"chiyoda":{},"hachijo":{},"taito":{},"edogawa":{},"inagi":{},"ome":{},"katsushika":{},"mitaka":{},"adachi":{},"toshima":{},"tama":{},"chofu":{},"kita":{},"kokubunji":{},"kouzushima":{},"higashimurayama":{},"nakano":{},"bunkyo":{},"fuchu":{},"minato":{},"akiruno":{},"kiyose":{},"itabashi":{},"aogashima":{},"shinagawa":{},"oshima":{},"nerima":{},"sumida":{},"akishima":{},"koganei":{},"fussa":{},"mizuho":{},"meguro":{},"arakawa":{},"tachikawa":{},"koto":{},"hinode":{},"chuo":{},"hamura":{},"hino":{},"ogasawara":{},"ota":{},"kunitachi":{},"kodaira":{},"musashino":{},"higashikurume":{},"machida":{},"hachioji":{},"higashiyamato":{},"shinjuku":{},"setagaya":{},"suginami":{},"komae":{},"okutama":{}},"sendai":{"!city":{},"*":{}},"blogspot":{},"yamagata":{"asahi":{},"funagata":{},"mamurogawa":{},"nakayama":{},"obanazawa":{},"shirataka":{},"ohkura":{},"sakata":{},"sagae":{},"yuza":{},"tsuruoka":{},"tendo":{},"oishida":{},"yonezawa":{},"murayama":{},"nishikawa":{},"oguni":{},"iide":{},"kaminoyama":{},"tozawa":{},"shonai":{},"oe":{},"kaneyama":{},"yamanobe":{},"higashine":{},"mikawa":{},"sakegawa":{},"nanyo":{},"nagai":{},"shinjo":{},"yamagata":{},"kahoku":{},"kawanishi":{},"takahata":{}},"go":{},"yamanashi":{"otsuki":{},"yamanakako":{},"minami-alps":{},"hayakawa":{},"fuefuki":{},"tabayama":{},"fujiyoshida":{},"doshi":{},"narusawa":{},"koshu":{},"kai":{},"showa":{},"minobu":{},"oshino":{},"kosuge":{},"nakamichi":{},"chuo":{},"nishikatsura":{},"tsuru":{},"fujikawaguchiko":{},"ichikawamisato":{},"yamanashi":{},"uenohara":{},"nirasaki":{},"nanbu":{},"fujikawa":{},"hokuto":{},"kofu":{}},"fukui":{"katsuyama":{},"wakasa":{},"takahama":{},"minamiechizen":{},"sakai":{},"eiheiji":{},"tsuruga":{},"ono":{},"echizen":{},"ikeda":{},"mihama":{},"obama":{},"fukui":{},"sabae":{},"ohi":{}},"kobe":{"!city":{},"*":{}}},"florist":{},"sx":{"gov":{}},"bn":{"*":{}},"vn":{"pro":{},"info":{},"int":{},"org":{},"biz":{},"name":{},"ac":{},"health":{},"net":{},"gov":{},"edu":{},"com":{}},"gp":{"edu":{},"asso":{},"org":{},"mobi":{},"net":{},"com":{}},"menu":{},"中信":{},"sm":{},"ar":{"org":{},"int":{},"tur":{},"net":{},"edu":{},"gob":{},"mil":{},"com":{"blogspot":{}}},"dj":{},"भारत":{},"bd":{"*":{}},"clothing":{},"mc":{"asso":{},"tm":{}},"ug":{"ne":{},"sc":{},"org":{},"ac":{},"go":{},"or":{},"co":{},"com":{}},"nu":{"merseine":{},"shacknet":{},"mine":{}},"ci":{"md":{},"int":{},"org":{},"aéroport":{},"ac":{},"net":{},"go":{},"edu":{},"asso":{},"or":{},"ed":{},"gouv":{},"co":{},"presse":{},"com":{}},"dk":{"blogspot":{}},"nc":{"asso":{}},"rw":{"int":{},"ac":{},"net":{},"gov":{},"edu":{},"mil":{},"gouv":{},"co":{},"com":{}},"futbol":{},"aq":{},"kiwi":{},"укр":{},"name":{"his":{"forgot":{}},"her":{"forgot":{}}},"st":{"saotome":{},"store":{},"org":{},"embaixada":{},"net":{},"principe":{},"gov":{},"consulado":{},"edu":{},"mil":{},"co":{},"com":{}},"hm":{},"dance":{},"mo":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"gq":{},"ps":{"edu":{},"org":{},"sec":{},"net":{},"plo":{},"com":{},"gov":{}},"ge":{"edu":{},"mil":{},"org":{},"pvt":{},"net":{},"gov":{},"com":{}},"ao":{"it":{},"ed":{},"gv":{},"pb":{},"co":{},"og":{}},"gr":{"edu":{},"org":{},"blogspot":{},"net":{},"gov":{},"com":{}},"va":{},"kaufen":{},"is":{"cupcake":{},"edu":{},"int":{},"org":{},"net":{},"gov":{},"com":{}},"移动":{},"uno":{},"mt":{"*":{}},"gi":{"edu":{},"org":{},"ltd":{},"mod":{},"gov":{},"com":{}},"la":{"info":{},"org":{},"int":{},"per":{},"net":{},"gov":{},"c":{},"edu":{},"com":{}},"bh":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"ms":{},"bt":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"diamonds":{},"wf":{},"it":{"lucca":{},"sp":{},"tr":{},"iglesias-carbonia":{},"vicenza":{},"torino":{},"pordenone":{},"caserta":{},"ro":{},"tn":{},"pv":{},"fc":{},"vv":{},"la-spezia":{},"co":{},"reggioemilia":{},"br":{},"modena":{},"bo":{},"venice":{},"dell-ogliastra":{},"olbiatempio":{},"cremona":{},"cs":{},"tranibarlettaandria":{},"campidano-medio":{},"sassari":{},"bergamo":{},"ri":{},"ct":{},"pg":{},"cagliari":{},"pn":{},"mi":{},"sv":{},"reggio-emilia":{},"milano":{},"andria-trani-barletta":{},"trapani":{},"ve":{},"na":{},"benevento":{},"ba":{},"no":{},"mantova":{},"grosseto":{},"frosinone":{},"carraramassa":{},"genoa":{},"si":{},"bozen":{},"parma":{},"re":{},"me":{},"terni":{},"novara":{},"fi":{},"varese":{},"li":{},"medio-campidano":{},"verbania":{},"arezzo":{},"pa":{},"aosta":{},"urbinopesaro":{},"tv":{},"teramo":{},"asti":{},"bi":{},"vibo-valentia":{},"treviso":{},"lodi":{},"tempio-olbia":{},"ravenna":{},"massacarrara":{},"go":{},"mn":{},"prato":{},"vr":{},"ot":{},"lc":{},"bari":{},"sondrio":{},"avellino":{},"cn":{},"verona":{},"salerno":{},"ag":{},"bologna":{},"viterbo":{},"cr":{},"vi":{},"brindisi":{},"vb":{},"crotone":{},"bz":{},"pistoia":{},"cesena-forli":{},"al":{},"alto-adige":{},"monza-brianza":{},"biella":{},"altoadige":{},"pc":{},"balsan":{},"enna":{},"napoli":{},"monza":{},"forli-cesena":{},"bg":{},"caltanissetta":{},"taranto":{},"pavia":{},"catanzaro":{},"ca":{},"cosenza":{},"mediocampidano":{},"perugia":{},"vercelli":{},"sa":{},"latina":{},"forlicesena":{},"im":{},"trani-andria-barletta":{},"en":{},"pd":{},"chieti":{},"florence":{},"fm":{},"cl":{},"firenze":{},"como":{},"ogliastra":{},"vibovalentia":{},"palermo":{},"bn":{},"reggio-calabria":{},"pz":{},"ascolipiceno":{},"roma":{},"pu":{},"mb":{},"carrara-massa":{},"trieste":{},"ar":{},"pisa":{},"fermo":{},"cesenaforli":{},"bl":{},"vt":{},"mc":{},"urbino-pesaro":{},"siena":{},"le":{},"carbonia-iglesias":{},"olbia-tempio":{},"nu":{},"ci":{},"fe":{},"nuoro":{},"ta":{},"barletta-trani-andria":{},"milan":{},"aq":{},"andriatranibarletta":{},"campobasso":{},"brescia":{},"mo":{},"ge":{},"campidanomedio":{},"av":{},"ao":{},"alessandria":{},"va":{},"gr":{},"is":{},"aquila":{},"mt":{},"ms":{},"bt":{},"monzaebrianza":{},"macerata":{},"ragusa":{},"trento":{},"rc":{},"siracusa":{},"isernia":{},"suedtirol":{},"naples":{},"andria-barletta-trani":{},"lu":{},"laquila":{},"pt":{},"piacenza":{},"dellogliastra":{},"rimini":{},"og":{},"cb":{},"rome":{},"fr":{},"ra":{},"massa-carrara":{},"rovigo":{},"sr":{},"trani-barletta-andria":{},"pescara":{},"turin":{},"ud":{},"imperia":{},"ascoli-piceno":{},"foggia":{},"rm":{},"blogspot":{},"rn":{},"barlettatraniandria":{},"savona":{},"gorizia":{},"belluno":{},"iglesiascarbonia":{},"traniandriabarletta":{},"ferrara":{},"agrigento":{},"aoste":{},"lo":{},"po":{},"cuneo":{},"udine":{},"ts":{},"edu":{},"carboniaiglesias":{},"pr":{},"ap":{},"lecco":{},"trentino":{},"padua":{},"reggiocalabria":{},"bs":{},"to":{},"ch":{},"messina":{},"matera":{},"oristano":{},"monzabrianza":{},"lecce":{},"gov":{},"pesarourbino":{},"pe":{},"an":{},"laspezia":{},"tp":{},"kr":{},"or":{},"ss":{},"pesaro-urbino":{},"genova":{},"monzaedellabrianza":{},"livorno":{},"bolzano":{},"so":{},"cz":{},"lt":{},"vc":{},"padova":{},"ce":{},"rg":{},"venezia":{},"tempioolbia":{},"at":{},"pi":{},"te":{},"rieti":{},"potenza":{},"catania":{},"andriabarlettatrani":{},"ancona":{},"vs":{},"fg":{},"monza-e-della-brianza":{}},"sb":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"build":{},"nagoya":{},"ly":{"sch":{},"org":{},"plc":{},"net":{},"med":{},"gov":{},"edu":{},"id":{},"com":{}},"tips":{},"ceo":{},"ng":{"sch":{},"org":{},"name":{},"net":{},"gov":{},"edu":{},"mil":{},"mobi":{},"com":{}},"buzz":{},"today":{},"construction":{},"gt":{"edu":{},"org":{},"mil":{},"ind":{},"gob":{},"net":{},"com":{}},"السعودية":{},"我爱你":{},"இலங்கை":{},"lu":{},"il":{"*":{},"co":{"blogspot":{}}},"pt":{"nome":{},"publ":{},"int":{},"org":{},"blogspot":{},"net":{},"gov":{},"edu":{},"com":{}},"mh":{},"eg":{"org":{},"name":{},"net":{},"gov":{},"edu":{},"sci":{},"mil":{},"eun":{},"com":{}},"kg":{"edu":{},"mil":{},"org":{},"net":{},"gov":{},"com":{}},"pf":{"edu":{},"org":{},"com":{}},"post":{},"plumbing":{},"香港":{},"中國":{},"fr":{"nom":{},"geometre-expert":{},"prd":{},"tm":{},"aeroport":{},"gouv":{},"chambagri":{},"cci":{},"blogspot":{},"veterinaire":{},"assedic":{},"port":{},"notaires":{},"huissier-justice":{},"asso":{},"pharmacien":{},"avoues":{},"medecin":{},"greta":{},"chirurgiens-dentistes":{},"experts-comptables":{},"avocat":{},"presse":{},"com":{}},"camp":{},"sr":{},"한국":{},"اليمن":{},"guide":{},"recipes":{},"enterprises":{},"holdings":{},"vg":{},"中国":{},"fj":{"*":{}},"py":{"edu":{},"org":{},"mil":{},"coop":{},"net":{},"gov":{},"com":{}},"pm":{},"sn":{"perso":{},"edu":{},"org":{},"art":{},"univ":{},"gouv":{},"com":{}},"sd":{"info":{},"org":{},"net":{},"gov":{},"med":{},"edu":{},"tv":{},"com":{}},"berlin":{},"pink":{},"training":{},"au":{"qld":{},"oz":{},"nt":{},"asn":{},"net":{},"sa":{},"id":{},"wa":{},"act":{},"info":{},"org":{},"tas":{},"nsw":{},"conf":{},"vic":{},"gov":{"qld":{},"tas":{},"sa":{},"nt":{},"wa":{},"vic":{},"act":{}},"edu":{"qld":{},"tas":{},"nt":{},"nsw":{},"vic":{},"sa":{},"wa":{},"act":{}},"csiro":{},"com":{"blogspot":{}}},"sl":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"voyage":{},"gh":{"edu":{},"mil":{},"org":{},"gov":{},"com":{}},"us":{"vt":{"cc":{},"lib":{},"k12":{}},"ne":{"cc":{},"lib":{},"k12":{}},"ks":{"cc":{},"lib":{},"k12":{}},"il":{"cc":{},"lib":{},"k12":{}},"hi":{"cc":{},"lib":{}},"sc":{"cc":{},"lib":{},"k12":{}},"nh":{"cc":{},"lib":{},"k12":{}},"ia":{"cc":{},"lib":{},"k12":{}},"wy":{"cc":{},"lib":{},"k12":{}},"or":{"cc":{},"lib":{},"k12":{}},"ma":{"cc":{},"lib":{},"k12":{"chtr":{},"paroch":{},"pvt":{}}},"vi":{"cc":{},"lib":{},"k12":{}},"tn":{"cc":{},"lib":{},"k12":{}},"in":{"cc":{},"lib":{},"k12":{}},"az":{"cc":{},"lib":{},"k12":{}},"id":{"cc":{},"lib":{},"k12":{}},"nc":{"cc":{},"lib":{},"k12":{}},"co":{"cc":{},"lib":{},"k12":{}},"land-4-sale":{},"dc":{"cc":{},"lib":{},"k12":{}},"dni":{},"stuff-4-sale":{},"nd":{"cc":{},"lib":{},"k12":{}},"me":{"cc":{},"lib":{},"k12":{}},"kids":{},"fed":{},"al":{"cc":{},"lib":{},"k12":{}},"ak":{"cc":{},"lib":{},"k12":{}},"de":{"cc":{},"lib":{},"k12":{}},"wv":{"cc":{},"lib":{},"k12":{}},"nm":{"cc":{},"lib":{},"k12":{}},"mo":{"cc":{},"lib":{},"k12":{}},"pr":{"cc":{},"lib":{},"k12":{}},"nj":{"cc":{},"lib":{},"k12":{}},"sd":{"cc":{},"lib":{}},"md":{"cc":{},"lib":{},"k12":{}},"va":{"cc":{},"lib":{},"k12":{}},"ri":{"cc":{},"lib":{},"k12":{}},"ut":{"cc":{},"lib":{},"k12":{}},"nsn":{},"ct":{"cc":{},"lib":{},"k12":{}},"pa":{"cc":{},"lib":{},"k12":{}},"ok":{"cc":{},"lib":{},"k12":{}},"mt":{"cc":{},"lib":{},"k12":{}},"ky":{"cc":{},"lib":{},"k12":{}},"ga":{"cc":{},"lib":{},"k12":{}},"la":{"cc":{},"lib":{},"k12":{}},"oh":{"cc":{},"lib":{},"k12":{}},"ms":{"cc":{},"lib":{},"k12":{}},"wi":{"cc":{},"lib":{},"k12":{}},"wa":{"cc":{},"lib":{},"k12":{}},"gu":{"cc":{},"lib":{},"k12":{}},"mi":{"cc":{},"lib":{},"k12":{}},"is-by":{},"tx":{"cc":{},"lib":{},"k12":{}},"fl":{"cc":{},"lib":{},"k12":{}},"ca":{"cc":{},"lib":{},"k12":{}},"ar":{"cc":{},"lib":{},"k12":{}},"mn":{"cc":{},"lib":{},"k12":{}},"ny":{"cc":{},"lib":{},"k12":{}},"nv":{"cc":{},"lib":{},"k12":{}},"as":{"cc":{},"lib":{},"k12":{}},"isa":{}},"company":{},"سوريا":{},"mr":{"blogspot":{},"gov":{}},"ye":{"*":{}},"dz":{"art":{},"org":{},"net":{},"gov":{},"edu":{},"asso":{},"pol":{},"com":{}},"kn":{"edu":{},"org":{},"net":{},"gov":{}},"cm":{"gov":{}},"bw":{"org":{},"co":{}},"arpa":{"urn":{},"e164":{},"in-addr":{},"iris":{},"ip6":{},"uri":{}},"lk":{"ngo":{},"sch":{},"org":{},"int":{},"ltd":{},"net":{},"hotel":{},"gov":{},"web":{},"edu":{},"grp":{},"soc":{},"assn":{},"com":{}},"mg":{"nom":{},"org":{},"prd":{},"tm":{},"gov":{},"edu":{},"mil":{},"com":{}},"tk":{},"su":{},"sc":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"شبكة":{},"ruhr":{},"الاردن":{},"ru":{"fareast":{},"komi":{},"dagestan":{},"koenig":{},"tyumen":{},"lipetsk":{},"ptz":{},"kemerovo":{},"stv":{},"jamal":{},"yekaterinburg":{},"perm":{},"krasnoyarsk":{},"vladimir":{},"tambov":{},"palana":{},"joshkar-ola":{},"stavropol":{},"marine":{},"syzran":{},"rubtsovsk":{},"kustanai":{},"vrn":{},"oryol":{},"kuban":{},"astrakhan":{},"yuzhno-sakhalinsk":{},"khv":{},"tver":{},"saratov":{},"com":{},"vladivostok":{},"kursk":{},"k-uralsk":{},"voronezh":{},"simbirsk":{},"arkhangelsk":{},"magadan":{},"udmurtia":{},"tomsk":{},"msk":{},"nkz":{},"chelyabinsk":{},"yamal":{},"vladikavkaz":{},"nsk":{},"tom":{},"mari":{},"baikal":{},"nakhodka":{},"yakutia":{},"kostroma":{},"vologda":{},"snz":{},"novosibirsk":{},"tula":{},"vdonsk":{},"penza":{},"spb":{},"kchr":{},"ivanovo":{},"pskov":{},"ryazan":{},"ulan-ude":{},"edu":{},"karelia":{},"rnd":{},"mari-el":{},"mordovia":{},"nov":{},"int":{},"buryatia":{},"norilsk":{},"irkutsk":{},"kuzbass":{},"kms":{},"cbg":{},"amursk":{},"chita":{},"tuva":{},"magnitka":{},"ac":{},"mytis":{},"pp":{},"gov":{},"kazan":{},"khabarovsk":{},"nalchik":{},"tsaritsyn":{},"test":{},"vyatka":{},"grozny":{},"pyatigorsk":{},"net":{},"chel":{},"sakhalin":{},"bryansk":{},"altai":{},"kamchatka":{},"izhevsk":{},"cmw":{},"yaroslavl":{},"org":{},"dudinka":{},"samara":{},"chukotka":{},"belgorod":{},"kurgan":{},"udm":{},"mil":{},"kirov":{},"kalmykia":{},"murmansk":{},"kaluga":{},"adygeya":{},"tatarstan":{},"surgut":{},"omsk":{},"orenburg":{},"bir":{},"volgograd":{},"e-burg":{},"oskol":{},"amur":{},"nnov":{},"chuvashia":{},"mosreg":{},"bashkiria":{},"khakassia":{},"tsk":{},"jar":{},"zgrad":{},"smolensk":{}},"kim":{},"рф":{},"TOKYO":{},"travel":{},"عمان":{},"az":{"pro":{},"info":{},"org":{},"int":{},"biz":{},"name":{},"pp":{},"net":{},"gov":{},"edu":{},"mil":{},"com":{}},"台湾":{},"ec":{"pro":{},"info":{},"org":{},"net":{},"gov":{},"med":{},"edu":{},"mil":{},"gob":{},"fin":{},"k12":{},"com":{}},"mz":{"!teledata":{},"*":{}},"lb":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"ml":{"edu":{},"org":{},"gouv":{},"net":{},"presse":{},"gov":{},"com":{}},"bj":{"barreau":{},"asso":{},"blogspot":{},"gouv":{}},"farm":{},"edu":{},"gift":{},"wiki":{},"pr":{"info":{},"pro":{},"org":{},"biz":{},"isla":{},"name":{},"ac":{},"net":{},"gov":{},"prof":{},"est":{},"edu":{},"com":{}},"fk":{"*":{}},"lr":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"cab":{},"nf":{"info":{},"store":{},"rec":{},"firm":{},"per":{},"net":{},"web":{},"arts":{},"other":{},"com":{}},"np":{"*":{}},"codes":{},"do":{"org":{},"art":{},"net":{},"gov":{},"web":{},"edu":{},"gob":{},"mil":{},"sld":{},"com":{}},"wed":{},"mp":{},"bs":{"edu":{},"org":{},"net":{},"gov":{},"com":{}},"cat":{},"to":{"edu":{},"mil":{},"org":{},"net":{},"gov":{},"com":{}},"cu":{"edu":{},"org":{},"inf":{},"net":{},"gov":{},"com":{}},"ايران":{},"ch":{"blogspot":{}},"eu":{},"mu":{"or":{},"org":{},"ac":{},"co":{},"net":{},"gov":{},"com":{}},"世界":{},"ni":{"*":{}},"house":{},"moda":{},"pw":{"belau":{},"ne":{},"ed":{},"or":{},"co":{},"go":{}},"pl":{"targi":{},"biz":{},"lukow":{},"mazury":{},"aid":{},"poznan":{},"polkowice":{},"grajewo":{},"co":{},"babia-gora":{},"starachowice":{},"kaszuby":{},"kolobrzeg":{},"swidnica":{},"katowice":{},"legnica":{},"nom":{},"podhale":{},"gmina":{},"krakow":{},"ilawa":{},"zarow":{},"klodzko":{},"tm":{},"slask":{},"ostrowiec":{},"ostroda":{},"wolomin":{},"czest":{},"bielawa":{},"stargard":{},"mazowsze":{},"art":{},"wodzislaw":{},"gniezno":{},"turystyka":{},"agro":{},"tychy":{},"ostrowwlkp":{},"opole":{},"com":{},"gdansk":{},"rel":{},"swinoujscie":{},"tgory":{},"mielno":{},"wroc":{},"irc":{},"nowaruda":{},"zakopane":{},"pomorskie":{},"nysa":{},"siedlce":{},"podlasie":{},"jaworzno":{},"sanok":{},"skoczow":{},"mielec":{},"cieszyn":{},"zgorzelec":{},"bialowieza":{},"suwalki":{},"olecko":{},"ketrzyn":{},"beskidy":{},"czeladz":{},"stalowa-wola":{},"opoczno":{},"lapy":{},"6bone":{},"tarnobrzeg":{},"pisz":{},"pulawy":{},"sex":{},"radom":{},"gda":{},"karpacz":{},"shop":{},"auto":{},"priv":{},"olkusz":{},"lomza":{},"bedzin":{},"malbork":{},"konin":{},"augustow":{},"wlocl":{},"olawa":{},"malopolska":{},"travel":{},"kalisz":{},"sklep":{},"gsm":{},"miasta":{},"szkola":{},"med":{},"kutno":{},"edu":{},"gdynia":{},"naklo":{},"sosnowiec":{},"lowicz":{},"szczecin":{},"ustka":{},"lebork":{},"gliwice":{},"pc":{},"konskowola":{},"sopot":{},"gorlice":{},"walbrzych":{},"szczytno":{},"sos":{},"bytom":{},"pruszkow":{},"zgora":{},"info":{},"przeworsk":{},"warszawa":{},"tourism":{},"bialystok":{},"rybnik":{},"gov":{"so":{},"uw":{},"upow":{},"ug":{},"um":{},"starostwo":{},"pa":{},"po":{},"sr":{}},"pila":{},"wroclaw":{},"realestate":{},"boleslawiec":{},"mragowo":{},"wielun":{},"jelenia-gora":{},"zagan":{},"dlugoleka":{},"bydgoszcz":{},"net":{},"limanowa":{},"mbone":{},"powiat":{},"media":{},"kazimierz-dolny":{},"prochowice":{},"usenet":{},"jgora":{},"org":{},"kobierzyce":{},"elblag":{},"turek":{},"sejny":{},"slupsk":{},"waw":{},"mil":{},"nieruchomosci":{},"rawa-maz":{},"olsztyn":{},"kartuzy":{},"lubin":{},"zachpomor":{},"mail":{},"rzeszow":{},"ngo":{},"glogow":{},"pomorze":{},"kepno":{},"warmia":{},"elk":{},"wloclawek":{},"wegrow":{},"bieszczady":{},"ostroleka":{},"atm":{},"lezajsk":{},"swiebodzin":{}},"repair":{},"camera":{},"gov":{},"gallery":{},"ایران":{},"pe":{"nom":{},"edu":{},"org":{},"mil":{},"gob":{},"net":{},"com":{}},"glass":{},"an":{"edu":{},"org":{},"net":{},"com":{}},"ua":{"odesa":{},"cn":{},"chernovtsy":{},"if":{},"rivne":{},"donetsk":{},"cr":{},"chernivtsi":{},"kh":{},"co":{},"poltava":{},"kherson":{},"vinnica":{},"vinnytsia":{},"krym":{},"ck":{},"uzhgorod":{},"zp":{},"rv":{},"rovno":{},"kharkiv":{},"cherkassy":{},"edu":{},"uz":{},"lutsk":{},"ivano-frankivsk":{},"sebastopol":{},"km":{},"sumy":{},"mykolaiv":{},"zaporizhzhia":{},"ternopil":{},"cherkasy":{},"chernihiv":{},"sb":{},"pl":{},"pp":{},"gov":{},"odessa":{},"od":{},"kirovograd":{},"kv":{},"com":{},"dn":{},"ks":{},"crimea":{},"volyn":{},"zaporizhzhe":{},"kyiv":{},"kr":{},"net":{},"khmelnytskyi":{},"lv":{},"lugansk":{},"zt":{},"in":{},"zhytomyr":{},"yalta":{},"dnipropetrovsk":{},"org":{},"kharkov":{},"mk":{},"chernigov":{},"lt":{},"kiev":{},"sevastopol":{},"dnepropetrovsk":{},"cv":{},"dp":{},"lg":{},"nikolaev":{},"vn":{},"zhitomir":{},"te":{},"dominic":{},"lviv":{},"sm":{},"khmelnitskiy":{}},"uk":{"!jet":{},"sch":{"*":{}},"!nel":{},"!british-library":{},"!mod":{},"*":{},"!parliament":{},"!nic":{},"!bl":{},"!nls":{},"co":{"blogspot":{}},"!national-library-scotland":{}},"الجزائر":{},"gw":{},"je":{"sch":{},"org":{},"net":{},"co":{},"gov":{}},"kr":{"ne":{},"jeonbuk":{},"sc":{},"kg":{},"es":{},"gyeongnam":{},"busan":{},"daejeon":{},"or":{},"ms":{},"chungnam":{},"chungbuk":{},"co":{},"hs":{},"blogspot":{},"jeonnam":{},"re":{},"seoul":{},"gwangju":{},"ac":{},"gyeonggi":{},"ulsan":{},"go":{},"mil":{},"gangwon":{},"jeju":{},"incheon":{},"daegu":{},"gyeongbuk":{},"pe":{}},"directory":{},"net":{"kicks-ass":{},"uk":{},"scrapper-site":{},"is-a-chef":{},"in-the-band":{},"servebbs":{},"isa-geek":{},"from-az":{},"is-a-geek":{},"dnsalias":{},"dynalias":{},"fastly":{"ssl":{"global":{},"a":{},"b":{}},"prod":{"global":{},"a":{}}},"dnsdojo":{},"selfip":{},"broke-it":{},"at-band-camp":{},"blogdns":{},"does-it":{},"sells-it":{},"jp":{},"buyshouses":{},"office-on-the":{},"gets-it":{},"homeunix":{},"dontexist":{},"homeip":{},"cloudfront":{},"from-la":{},"gb":{},"homelinux":{},"dynathome":{},"serveftp":{},"ham-radio-op":{},"thruhere":{},"webhop":{},"hu":{},"za":{},"endofinternet":{},"homeftp":{},"podzone":{},"se":{},"from-ny":{},"from-co":{}},"tt":{"pro":{},"int":{},"biz":{},"net":{},"jobs":{},"travel":{},"co":{},"info":{},"org":{},"coop":{},"name":{},"gov":{},"edu":{},"aero":{},"museum":{},"mobi":{},"com":{}},"kitchen":{},"fo":{},"wien":{},"yt":{},"jobs":{},"cc":{"scrapping":{},"ftpaccess":{},"myphotos":{},"game-server":{}},"sh":{"mil":{},"org":{},"net":{},"gov":{},"com":{}},"otsuka":{},"zm":{"*":{}},"io":{"github":{},"com":{}},"hk":{"箇人":{},"net":{},"網络":{},"網絡":{},"个人":{},"网络":{},"個人":{},"敎育":{},"org":{},"blogspot":{},"组織":{},"組織":{},"组织":{},"idv":{},"gov":{},"組织":{},"教育":{},"网絡":{},"edu":{},"公司":{},"政府":{},"com":{}},"th":{"or":{},"in":{},"ac":{},"net":{},"co":{},"mi":{},"go":{}},"holiday":{},"在线":{},"so":{"org":{},"net":{},"com":{}},"ભારત":{},"er":{"*":{}},"భారత్":{},"بھارت":{},"luxury":{},"cz":{"blogspot":{}},"lt":{"gov":{}},"hr":{"from":{},"name":{},"iz":{},"com":{}},"gn":{"edu":{},"org":{},"ac":{},"net":{},"gov":{},"com":{}},"mil":{},"be":{"blogspot":{},"ac":{}},"qa":{"sch":{},"org":{},"name":{},"net":{},"gov":{},"edu":{},"mil":{},"com":{}},"management":{},"mobi":{},"photos":{},"cv":{"blogspot":{}},"vc":{"edu":{},"mil":{},"org":{},"net":{},"gov":{},"com":{}},"بازار":{},"wang":{},"solar":{},"tw":{"org":{},"blogspot":{},"商業":{},"ebiz":{},"組織":{},"網路":{},"club":{},"idv":{},"net":{},"gov":{},"edu":{},"mil":{},"game":{},"com":{}},"solutions":{},"中文网":{},"ws":{"mypets":{},"edu":{},"org":{},"dyndns":{},"net":{},"gov":{},"com":{}},"center":{},"blue":{},"ad":{"nom":{}},"sz":{"org":{},"ac":{},"co":{}},"at":{"info":{},"or":{},"priv":{},"biz":{},"gv":{},"ac":{},"co":{"blogspot":{}}},"tg":{},"zw":{"*":{}},"企业":{},"limo":{},"ไทย":{},"nl":{"bv":{},"blogspot":{},"co":{}}}');


/* 
   get_root_domain(domain)

   Returns the root domain for a given domain.
   Examples:
        get_root_domain('news.bbc.co.uk')    returns 'bbc.co.uk'
        get_root_domain('www.google.com.pt') returns 'google.com.pt'
        get_root_domain('www.google.com')    returns 'google.com'
*/

public_suffix.get_root_domain = function(domain) {
    if (!domain) {
        return;
    }

    var domain_levels = domain.split('.');
    var tld = domain_levels.pop();

    // The root domain is comprised of a suffix plus 
    // one domain level above it.
    var suffix;

    var current_tree = public_suffix.TLD_TREE[ tld ];
    var current_suffix = tld;

    // top-level domain must exist
    if (!current_tree) {
        return;
    }

    if (public_suffix.size(current_tree) == 0) {
        suffix = tld;
    }

    while (!suffix && domain_levels.length) {
        var level = domain_levels.pop();
        if (!level) {
            break;
        }

        // if we can't go any deeper into the tree, we've got a complete suffix
        if (current_tree[ level ] && public_suffix.size(current_tree[ level ]) == 0) {
            suffix = level + '.' + current_suffix;
        }
        // check for wildcards and exceptions
        else if (current_tree[ '*' ]) {
            // look for exceptions to the wildcard
            var is_exception = 0;
            for (var key in current_tree) {
                if (key.match(/^!/)) {
                    if (level == key.substr(1)) {
                        is_exception++;
                    }
                }
            }
            if (is_exception) {
                // an exception means we're done, but we've gone one level too deep
                domain_levels.push(level);
                suffix = current_suffix;
            }
            else {
                // no exceptions, so we found a complete suffix
                suffix = level + '.' + current_suffix;
            }
        }
        // if the current level doesn't match anything in the next level,
        // we're done, but we've gone one level too deep.
        else if (!current_tree[ level ]) {
            domain_levels.push(level);
            suffix = current_suffix;
        }
        else {
            // no matches yet, so keep going down the tree
            current_suffix = level + '.' + current_suffix;
            current_tree = current_tree[ level ];
        }
    }

    // Leave if we still haven't found a complete suffix
    if (!suffix) {
        return;
    }

    // root domain is the suffix + one level up
    return domain_levels.pop() + '.' + suffix;
}

// See http://stackoverflow.com/questions/5223/length-of-javascript-associative-array
public_suffix.size = function(obj) {
    var size = 0, key;
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};



function matchesAllFilters(visitItem, url, filters) {
    var matchCount = 0;
    var filterCount = 0;
    
    if (filters.url != undefined) {
        // To have gotten this far means the URL is a match
        ++filterCount;
        ++matchCount;
    }
    
    if (filters.domain != undefined) {
        // To have gotten this far means the domain is a match
        ++filterCount;
        ++matchCount;
    }
    
    if (filters.transition != undefined) {
        ++filterCount;
        if (filters.transition == visitItem.transition) {
            ++matchCount;
        }
    }

    var visitDate = new Date(visitItem.visitTime);
    
    if (filters.hour != undefined) {
        ++filterCount;
        var hour24 = convert_12_to_24(filters.hour);
        if (hour24 == visitDate.getHours()) {
            ++matchCount;
        }
    }

    if (filters.weekday != undefined) {
        ++filterCount;

        if (weekday_mapping[filters.weekday] == visitDate.getDay()) {
            ++matchCount;
        }
    }

    if (filters.monthDay != undefined) {
        ++filterCount;
        if (filters.monthDay == visitDate.getDate()) {
            ++matchCount;
        }
    }

    if (filters.month != undefined) {
        ++filterCount;
        
        if (month_mapping[filters.month] == visitDate.getMonth()) {
            ++matchCount;
        }
    }
    
    if (filters.date != undefined) {
        ++filterCount;
        if (filters.date == visitDate.toDateString()) {
            ++matchCount;
        }
    }
    
    return( matchCount && filterCount == matchCount );
}



function getFilters() {
    var filters = JSON.parse(window.sessionStorage.getItem("filters"));
    var count = 0;
    for (var key in filters) {
        ++count;
    }
    return count ? filters : null;
}

function saveFilters(newFilters) {
    window.sessionStorage.setItem("filters", JSON.stringify(newFilters));
}

function addFilter(key, value) {
    var filters = getFilters() || {};
    filters[key] = value;
    saveFilters(filters);
}


function removeFilter(key) {
    var filters = getFilters() || {};
    delete filters[key];
    var count = 0;
    for (var key in filters) {
        ++count;
    }
    saveFilters(count ? filters : null);
}


function removeAllFilters() {
    saveFilters(null);
}


function getFilterText(key, value) {
    var text = '';
    switch(key) {
        case "url":
            text = 'URL';
            break;
        default:
            text = value;
    }
    return text;
}

function stripSubDomain(host) {
    if (host == public_suffix.get_root_domain(host)) {
        return;
    }
    var matches = host.match(/^[^.]+\.([^.]+\..+)$/);
    return matches ? matches[1] : undefined;
}

/* 
    getActiveTab()
    
    Returns the active tab.  Defaults to 'tab1' if no active tab is set. 
*/

function getActiveTab() {
    var activeTab = window.sessionStorage.getItem('activeTab');
    if (!activeTab || (activeTab != 'tab1' && activeTab != 'tab2' && activeTab != 'tab3')) {
        activeTab = 'tab1';
        window.sessionStorage.setItem('activeTab', activeTab);
    }
    return activeTab;
}

/*
    getDomainPortion(host, baseDomain)
    
    For the given host, returns a portion of the domain name.
    If baseDomain is empty, returns the root domain.
    If baseDomain is populated, returns the baseDomain plus the next subdomain, if it exists.
    
    Examples:  
        getDomainPortion('www.blog.example.com') returns 'example.com'
        getDomainPortion('www.blog.example.com', 'example.com') returns 'blog.example.com'
        getDomainPortion('www.blog.example.com', 'blog.example.com') returns 'www.blog.example.com'
*/

function getDomainPortion(host, baseDomain) {
    var domain;
    host = host || '';
    baseDomain = baseDomain || '';
    
    if (baseDomain.length) {
        var regex = new RegExp('[^.]*\\.?' + escapeDots(baseDomain) + '$');
        var matches = host.match(regex);
        domain = matches ? matches[0] : undefined;
    }
    else {
        domain = public_suffix.get_root_domain(host);
    }
    
    return domain;
}


/*
    extractHost(url)
  
    Returns the hostname portion of the given url.
    Example:
        extractHost('http://www.example.com/?x=1') returns 'www.example.com'
 */
function extractHost(url) {
    var matches = url.match(/^.+?:\/\/(?:[^:@]+:[^@]+@)?([^\/?:]+)/);
    return matches ? matches[1] : undefined;
}


/*
    domainMatch(host, domain_filter)

    Returns true if host matches the given domain_filter.
    If no domain_filter is given, returns true.

    Examples:
        domainMatch('news.google.com', 'news.google.com') returns true
        domainMatch('news.google.com', 'google.com') returns true
        domainMatch('news.google.com', 'example.com') returns false
*/

function domainMatch(host, domain_filter) {
    host = host || '';

    if (!domain_filter) {
        return 1;
    }
    
    if (host == domain_filter) {
        // matched full domain
        return 1;
    }
    else {
        // matched partial domain
        var regex = new RegExp(escapeDots('.' + domain_filter) + '$');
        return regex.test(host);
    }
}


function escapeDots(string) {
    return string.replace(/\./g, '\\.');
}


/* Statistics utilities */

function calcMedian(values) {
    var median;

    if (!values.length) {
        return;
    }
    else if (values.length % 2 == 0) {
        var middle = values.length / 2;
        var lower_middle = values[ middle - 1 ];
        var upper_middle = values[ middle ];
        median = calcMean([lower_middle, upper_middle]);
    }
    else {
        var middle = Math.floor( values.length / 2 );
        median = values[middle];
    }

    return median;
}


function calcMean(values) {
    if (!values.length) {
        return;
    }
    
    var sum = 0;
    for (var i = 0; i < values.length; i++) {
        sum += values[i];
    }
    return( Math.round(sum/values.length, 0) );
}


/* Time Conversion utilities */

// For example, convert '3pm' to '15'
function convert_12_to_24(hour12) {
    var hour24;
    if (hour12 == '12am') {
        hour24 = 0;
    }
    else if (hour12 == '12pm') {
        hour24 = 12;
    }
    else {
        var offset = hour12.substr(-2,2) == 'am' ? 0 : 12;
        hour12 = parseInt(hour12.replace(/(am|pm)/, ''));
        hour24 = hour12 + offset;
    }

    return hour24;
}


/* Number formatting */

function addCommas(nStr) {
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}



var urlArray = [];
var counts = 0;
var url_malecount = 0;
var url_femalecount = 0;
var femaleMentions = [];
var maleMentions = [];
var isDone = false;
var femaleMentions1 = [];
var maleMentions1 = [];
var femaleMentions2 = [];
var maleMentions2 = [];
var femaleMentions3 = [];
var maleMentions3 = [];
var femaleMentions4 = [];
var maleMentions4 = [];
var femaleMentions5 = [];
var maleMentions5 = [];
var femaleMentions6 = [];
var maleMentions6 = [];
var femaleMentions7 = [];
var maleMentions7 = [];
var femaleMentions8 = [];
var maleMentions8 = [];
var femaleMentions9 = [];
var maleMentions9 = [];
var femaleMentions10 = [];
var maleMentions10 = [];
var femaleMentions11 = [];
var maleMentions11 = [];
var femaleMentions12 = [];
var maleMentions12 = [];
var femaleMentions13 = [];
var maleMentions13 = [];
var femaleMentions14 = [];
var maleMentions14 = [];
var femaleMentions15 = [];
var maleMentions15 = [];
var femaleMentions16 = [];
var maleMentions16 = [];
var femaleMentions17 = [];
var maleMentions17 = [];
var femaleMentions18 = [];
var maleMentions18 = [];
var femaleMentions19 = [];
var maleMentions19 = [];



function onAnchorClick(event) {
  chrome.tabs.create({
    selected: true,
    url: event.srcElement.href
  });
  return false;
}
// Given an array of URLs, build a DOM list of those URLs in the
// browser action popup.
function buildPopupDom(divName, data) {
  var popupDiv = document.getElementById(divName);
  var ul = document.createElement('ul');
  popupDiv.appendChild(ul);
  for (var i = 0, ie = data.length; i < 20; ++i) {
    
    console.log('adding DOM elements');
    /*var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    var yahoourl = [];


      
      chrome.history.search({
            'text': data[i],              // Return every history item....
            'startTime': oneWeekAgo  // that was accessed less than one week ago.
          },
          function(historyItems) {
          
            console.log(data[i]);
            for (var i = 0; i < historyItems.length; ++i) {
              var url_femalecount = 0;
              var url_malecount = 0;
              var malecountarray = [];
              var femalecountarray = [];
              var url = historyItems[i].url;
              console.log(url);
              yahoourl.push(url);
              $.get(url, function(data) {
              
              console.log(url);
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
              
              var fMajority = applyContent(doc);
              console.log(fMajority);
              counts++;
              
              if (fMajority >= 0) {

                if (fMajority >= 50) {
                    
                    femalecountarray.push(fMajority);
                    url_femalecount = url_femalecount + 1;
                    console.log("FEMALE COUNT", url_femalecount);
                    
                }
                else if (fMajority < 50) {
                    
                    malecountarray.push(fMajority);
                    url_malecount = url_malecount + 1;
                    console.log("MALE COUNT", url_malecount);
                    
                }   
              }
           

          if (counts === (historyItems.length)){

            var totalnum = malecountarray.length + femalecountarray.length;
            var male_pct = Math.round(malecountarray.length / totalnum) * 100;
            var female_pct = femalecountarray.length / totalnum;
         
          }
              

        });
        

        
            }
        
          console.log("------------");
      });
      counts = 0;*/
    var dropdown = document.getElementById('userTrends');
    
    if ( i < 10) {
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(data[i]));

    //option.appendChild(button);
    dropdown.appendChild(option);
    }

    
    var a = document.createElement('a');
    a.href = data[i];
    a.id = 0;
    a.name = 0;
    var span = document.createElement('span');
    //span.appendChild(document.createTextNode("female count: " + fcount));
    //span.innerHTML = "<br>female count: " + fcount + "<br>";
    a.appendChild(document.createTextNode(data[i]));
    a.addEventListener('click', onAnchorClick);
    var div = document.createElement('div');
    div.style.width = '100%';
    div.style.height = '300px';
    div.style.display = 'none';
    //a.after(span);
    div.appendChild(a);
    //var img = document.createElement('img');
    //div.appendChild(img);
    //img.outerHTML = '<br><img src="Spinner-1s-200px.gif" alt="NotesReport" class="loader" style="width:50px;">'
    //li.appendChild(span);
    ul.appendChild(div);
  }
}
// Search history to find up to ten links that a user has typed in,
// and show those links in a popup.

var justDomain = [];

function buildTypedUrlList(divName, callback) {
    console.log('in building function');
  // To look for history items visited in the last week,
  // subtract a week of microseconds from the current time.
  var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
  var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
  // Track the number of callbacks from chrome.history.getVisits()
  // that we expect to get.  When it reaches zero, we have all results.
  var microsecondsPerYear = 1000 * 60 * 60 * 24 * 365;
    var oneYearAgo = (new Date).getTime() - microsecondsPerYear;
  var numRequestsOutstanding = 0;
  
  var filters = getFilters();
  
  chrome.history.search({
      'text': '',              // Return every history item....
      'startTime': oneYearAgo  // that was accessed less than one week ago.
    },
    function(historyItems) {
      // For each history item, get details on all visits.
      console.log("getting details");
      for (var i = 0; i < historyItems.length; ++i) {
        var url = historyItems[i].url;
        
        // skip this url if it doesn't match the url filter
            if (filters && filters.url && filters.url != url) {
                continue;
            }

            // skip this url if it doesn't match the domain filter
            var host = extractHost(url);
            if (!domainMatch(host, filters ? filters.domain : undefined)) {
                continue;
            }

            // Get the next domain level
            var domain = getDomainPortion(host, filters ? filters.domain : undefined);
        
        var processVisitsWithUrl = function(url, domain, filters) {
          // We need the url of the visited item to process the visit.
          // Use a closure to bind the  url into the callback's args.
          return function(visitItems) {
            processVisits(url, domain, filters, visitItems);
          };
        };
        chrome.history.getVisits({url: url}, processVisitsWithUrl(url, domain, filters));
        numRequestsOutstanding++;
      }
      if (!numRequestsOutstanding) {
        onAllVisitsProcessed();
      }
    });
  // Maps URLs to a count of the number of times the user typed that URL into
  // the omnibox.
 var trends = {
        "historyItems": 0, 
        "visitItems": 0,
        "byTransition": {},
        "byHour": [],
        "byDay": [],
        "byDayOfMonth": [],
        "byMonth": [],
        "byBusiestDay": {},
        "topDays": [],
        "topUrls": [],
        "topDomains": [],
        "topUniqueVisits": []
    };
  
    var byUrlHash = [];
    var byDomainHash = [];
    var byUniqueVisitsHash = [];

    // Mass initialization
    for (var i = 0; i < 24; i++)  { trends.byHour[i]   = 0; }
    for (var i = 0; i < 7; i++)   { trends.byDay[i]    = 0; }
    for (var i = 1; i <= 31; i++) { trends.byDayOfMonth[i]   = 0; }
    for (var i = 0; i < 12; i++)  { trends.byMonth[i]  = 0; }

    // Callback for chrome.history.getVisits().
    var processVisits = function(url, domain, filters, visitItems) {
        var hasMatch = 0;
                
        for (var i = 0, ie = visitItems.length; i < ie; ++i) {
            if (filters && !matchesAllFilters(visitItems[i], url, filters)) {
                continue;
            }
            trends.visitItems++;
            hasMatch = 1;
            
            if (!byUrlHash[url]) {
                byUrlHash[url] = 0;
            }
            byUrlHash[url]++;
            
            if (domain) {
                if (!byDomainHash[domain]) {
                    byDomainHash[domain] = 0;
                }
                byDomainHash[domain]++;

                if (!byUniqueVisitsHash[domain]) {
                    byUniqueVisitsHash[domain] = { url_count: 0, visit_count: 0 };
                }
                byUniqueVisitsHash[domain]['visit_count']++;
            }
            
            var visitDate = new Date(visitItems[i].visitTime);
            trends.byHour[ visitDate.getHours() ]++;
            trends.byDay[ visitDate.getDay() ]++;
            trends.byDayOfMonth[ visitDate.getDate() ]++;
            trends.byMonth[ visitDate.getMonth() ]++;
      
            if (!trends.byTransition[visitItems[i].transition]) {
                trends.byTransition[visitItems[i].transition] = 0;
            }
            trends.byTransition[visitItems[i].transition]++;
      
            if (!trends.byBusiestDay[visitDate.toDateString()]) {
                trends.byBusiestDay[visitDate.toDateString()] = 0;
            }
            trends.byBusiestDay[visitDate.toDateString()]++;
        }
        
        if (hasMatch) {
            trends.historyItems++;
            if (domain) {
                byUniqueVisitsHash[domain]['url_count']++;
            }
        }
        
        // If this is the final outstanding call to processVisits(),
        // then we have the final results.  Use them to calculate final stats.
        if (!--numRequestsOutstanding) {
            onAllVisitsProcessed();
        }

        return;
    };

  // This function is called when we have the final list of URls to display.
  var onAllVisitsProcessed = function() {
    // Get the top scorring urls.
    
    var sortBySecondPosition = function(a, b) {
            return b[1] - a[1];
        }
    
    /*urlArray = [];
    for (var url in urlToCount) {
      urlArray.push(url);
    }*/
    
    var domainArray = [];
    console.log('DOMAIN HASH', byDomainHash);
        for (var domain in byDomainHash) {
            domainArray.push([ domain, byDomainHash[domain] ]);
        }
    
    // Sort the URLs by the number of times the user typed them.
    domainArray.sort(sortBySecondPosition);
    var sorted = domainArray.slice(0,20);
    console.log('SORTED', sorted);
    //var justDomain = [];
    for (var i = 0; i < sorted.length; i++) {
        justDomain.push(sorted[i][0]);
    }
    console.log(justDomain);

    //buildPopupDom(divName, urlArray.slice(0, 10), fcount);
    buildPopupDom(divName, justDomain);
    //callback(urlArray);
    callback();
  };
  //callback();
}

var final_pct;

function print() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}

var removeCount = 10;

var links = [];

function doNothing () {

    console.log("doing nothing");
    links = $('a');
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    var microsecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
    var oneMonthAgo = (new Date).getTime() - microsecondsPerMonth;
    var today = (new Date).getTime();
    
    for (var i = 0; i < months.length; i++) {
  
  months[i] = new Array(2);
  months[i][0] = oneMonthAgo;
  months[i][1] = today;
  today = today - microsecondsPerMonth;
  oneMonthAgo = oneMonthAgo - microsecondsPerMonth;
  
}
    
}



document.addEventListener('DOMContentLoaded', function () {
  //buildTypedUrlList("typedUrl_div", collectData);
  //buildTypedUrlList("typedUrl_div", getLinks);
  console.log('hello');

  //buildTypedUrlList("typedUrl_div", trialGetLinks);
  buildTypedUrlList("typedUrl_div", doNothing);
  
  document.getElementById("userTrends").addEventListener( "change",  updateChart);
  
  document.getElementById("remove").addEventListener( "click", add);
  
  function remove() {
  var x = document.getElementById("userTrends");
  x.remove(x.selectedIndex);
  hasRun9 = true;
  
  var trendChart = document.getElementById('trendContainer');
  trendChart.style.display = 'none';
  
  var dropdown = document.getElementById('userTrends');
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(justDomain[removeCount]));
    removeCount++;

    //option.appendChild(button);
    dropdown.appendChild(option);
}

  function add() {
  var x = document.getElementById("userTrends");
  //x.add(x.selectedIndex);
  hasRun9 = true;
  
  var trendChart = document.getElementById('trendContainer');
  trendChart.style.display = 'none';
  
  var dropdown = document.getElementById('userTrends');
    var option = document.createElement('option');
    option.appendChild(document.createTextNode(justDomain[removeCount]));
    removeCount++;

    //option.appendChild(button);
    dropdown.appendChild(option);
}

var hasRun = false;
var hasRun1 = false;
var hasRun2 = false;
var hasRun3 = false;
var hasRun4 = false;
var hasRun5 = false;
var hasRun6 = false;
var hasRun7 = false;
var hasRun8 = false;
var hasRun9 = false;
var hasRun10 = false;
var hasRun11 = false;
var hasRun12 = false;
var hasRun13 = false;
var hasRun14 = false;
var hasRun15 = false;
var hasRun16 = false;
var hasRun17 = false;
var hasRun18 = false;
var hasRun19 = false;

function updateChart() {
  var trendChart = document.getElementById('trendContainer');
  trendChart.style.display = 'none';
  $('#trendContainer').hide();
  var link = document.getElementById("userTrends").value;
  console.log(link);
  var element =$('a[href='+CSS.escape(link)+']');
  var currentElement = element[0];
  //var links = $('a');
  console.log(links);
  var index = links.index(currentElement);
  console.log(index);
  if (index === 0) {
    console.log("in index", index);
    if (hasRun === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[0], haha);
    hasRun = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions, maleMentions, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions, maleMentions, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 1) {
  console.log("in index", index);
    if (hasRun1 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[1], haha);
    hasRun1 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions1, maleMentions1, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions1, maleMentions1, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 2) {
  console.log("in index", index);
  console.log(femaleMentions2);
  console.log(maleMentions2);
  if (hasRun2 === false) {
  var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doSomething(links[2], haha);
    hasRun2 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions2, maleMentions2, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
    var trendChart = trendGraph(femaleMentions2, maleMentions2, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 3) {
  console.log("in index", index);
  
  if (hasRun3 === false) {
  var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[3] , haha);
    hasRun3 = true;
  }
  else {
    var trendChart = trendGraph(femaleMentions3, maleMentions3, 1, currentElement);
    trendChart.render();
    }
    
    function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions3, maleMentions3, 1, currentElement);
    trendChart.render();
}
    
    
    return;
  }
  else if (index === 4) {
  console.log("in index", index);
  if (hasRun4 === false) {
  var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[4], haha);
    hasRun4 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions4, maleMentions4, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions4, maleMentions4, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 5) {
  console.log("in index", index);
    if (hasRun5 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[5], haha);
    hasRun5 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions5, maleMentions5, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions5, maleMentions5, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 6) {
  console.log("in index", index);
  if (hasRun6 === false) {
  var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[6], haha);
    hasRun6 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions6, maleMentions6, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions6, maleMentions6, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 7) {
  console.log("in index", index);
    if (hasRun7 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[7], haha);
    hasRun7 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions7, maleMentions7, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions7, maleMentions7, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 8) {
  console.log("in index", index);
    if (hasRun8 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[8], haha);
    hasRun8 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions8, maleMentions8, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions8, maleMentions8, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 9) {
  console.log("in index", index);
  if (hasRun9 === false) {
  var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[9], haha);
    hasRun9 = true;
 }
  else {
    var trendChart = trendGraph(femaleMentions9, maleMentions9, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions9, maleMentions9, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 10) {
  console.log("in index", index);
  if (hasRun10 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[10], haha);
    hasRun10 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions10, maleMentions10, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions10, maleMentions10, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 11) {
  console.log("in index", index);
    if (hasRun11 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[11], haha);
    hasRun11 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions11, maleMentions11, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions11, maleMentions11, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 12) {
  console.log("in index", index);
    if (hasRun12 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[12], haha);
    hasRun12 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions12, maleMentions12, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions12, maleMentions12, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 13) {
  console.log("in index", index);
    if (hasRun13 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[13], haha);
    hasRun13 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions13, maleMentions13, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions13, maleMentions13, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 14) {
  console.log("in index", index);
    if (hasRun14 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[14], haha);
    hasRun14 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions14, maleMentions14, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions14, maleMentions14, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 15) {
  console.log("in index", index);
    if (hasRun15 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[15], haha);
    hasRun15 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions15, maleMentions15, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions15, maleMentions15, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 16) {
  console.log("in index", index);
    if (hasRun16 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[16], haha);
    hasRun16 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions16, maleMentions16, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions16, maleMentions16, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 17) {
  console.log("in index", index);
    if (hasRun17 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[17], haha);
    hasRun17 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions17, maleMentions17, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions17, maleMentions17, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 18) {
  console.log("in index", index);
    if (hasRun18 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[18], haha);
    hasRun18 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions18, maleMentions18, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions18, maleMentions18, 1, currentElement);
    trendChart.render();
}
    return;
  }
  else if (index === 19) {
  console.log("in index", index);
    if (hasRun19 === false) {
    var loader = document.getElementById('loader');
        loader.style.display = 'inline';
    doGeneral(links[19], haha);
    hasRun19 = true;
 }
   else {
    var trendChart = trendGraph(femaleMentions19, maleMentions19, 1, currentElement);
    trendChart.render();
}
  
  function haha () {
    console.log('haha');
    var trendChart = trendGraph(femaleMentions19, maleMentions19, 1, currentElement);
    trendChart.render();
}
    return;
  }
  
  /*chart.options.data = [];
  if(!isNaN(numberOfSeries))
    for( var i = 0; i < numberOfSeries; i++){
      chart.options.data.push(dataSeries[i]);	
    }
  chart.render();*/
}
  
  /*var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            title: {
                text: "Average % mentions of men and women in the past week",
            },
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"%\"",
                indexLabelFontSize: 13,
                yValueFormatString: "##0.00\"%\"",
                indexLabel: "{label} {y}",
                dataPoints: [
                    { y: 20, label: "Men", color: "purple" },
                    { y: 80, label: "Women", color: "green" }
                ]
            }]
        });
        chart.render();*/


  //collectData();  
  
  //calculateTrends();
  
  

    
});




function buildChart(female, male, id, link) {
  var chart = new CanvasJS.Chart(id, {
            height: 200,
            animationEnabled: true,
            title: {
                text: link + " : Average % mentions of men and women in the past week",
            },
            data: [{
                type: "pie",
                startAngle: 240,
                yValueFormatString: "##0.00\"%\"",
                indexLabelFontSize: 13,
                yValueFormatString: "##0.00\"%\"",
                indexLabel: "{label} {y}",
                dataPoints: [
                    { y: male, label: "Men", color: "cornflowerblue" },
                    { y: female, label: "Women", color: "green" }
                ]
            }]
        });
        chart.render();
}

var count = 0;
var fMajority;
var femalecount;
var malecount;
var totalFemaleMentions;
var totalMaleMentions;

function getLinks() {
  var links = $('a');
  console.log(links);
  
  $('a').each( function () {
      
    var linkstring = this.getAttribute('href');
    var currentElement = this;
    count = 0;
    url_femalecount = 0;
    url_malecount = 0;
    console.log(linkstring);
    
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    var microsecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
    var oneMonthAgo = (new Date).getTime() - microsecondsPerMonth;
    var today = (new Date).getTime();
    
    for (var i = 0; i < 12; i++) {
    
    var paras = document.getElementsByClassName('removable');
    
    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
    
     chrome.history.search({
            'text': linkstring,              // Return every history item....
            'startTime': oneMonthAgo,  // that was accessed less than one week ago.
            'endTime': today,
            'maxResults': 1000000
          },
          function(historyItems) {
          
            for (var i = 0; i < historyItems.length; ++i) {
              var url = historyItems[i].url;
              //console.log(url);
              var a = document.createElement('a');
              document.body.appendChild(a);
              a.outerHTML = "<a class='removable' style=display:none href=" + url + ">";
              
            }
            
            url_femalecount = 0;
            url_malecount = 0;
            totalFemaleMentions = 0;
            count = 0;
            totalMaleMentions = 0;
    $('a[href*='+CSS.escape(linkstring)+']').each( function () {
          
          //console.log(this.getAttribute('href'));
          var jArray = $('a[href*='+CSS.escape(linkstring)+']');
          var array_length = jArray.length;
          console.log(array_length);
          var link = this.getAttribute('href');
          
    
          $.get(link, function(data) {
                    
              console.log("LINK IS", link);
               malecount = 0;
               femalecount = 0;
               
              url_femalecount = 0;
              url_malecount = 0;
              
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
              
               fMajority = applyContent(doc);
              //console.log(fMajority);
              count++;
              var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
              var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);
              
              /*if (fMajority >= 0) {
                count++;
                if (fMajority >= 50) {
                    
                    
                    url_femalecount = url_femalecount + 1;
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    
                    femalecount++;

                    
                }
                else if (fMajority < 50) {
                    
                    malecountarray.push(fMajority);
                    
                    url_malecount = url_malecount + 1;
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);

                    
                    malecount++;

                }
              
              }*/
              //if (count === array_length) {
              /*var jArray = $('a[href*='+CSS.escape(linkstring)+']');
              var array_length = jArray.length;
              console.log("LENGTH", linkstring, array_length);
              if (linkstring === 'https://www.yahoo.com/') {
                array_length = array_length - 3;
              }*/
  
              
              /*var span = document.createElement('span');
              
              var females = parseInt(currentElement.getAttribute('id'));
              var finalcount = parseInt(currentElement.getAttribute('name'));
              //if (finalcount === array_length) {
              var f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
              var m_pct = 100.0 - f_pct;
              span.innerHTML = "<br>Average female %: " + f_pct + "%    Average male %: " + m_pct + "%<br>";
              currentElement.parentNode.appendChild(span);
              console.log(linkstring, finalcount);
              buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
              femaleMentions.push(f_pct);
              maleMentions.push(m_pct);*/
              /*if (femaleMentions.length === 12 && maleMentions.length === 12) {
                calculateTrends();
                }*/
              //}
              }).fail(function() {
                console.log("error");
                fMajority = 50;
                }).then( function () {
                if (fMajority >= 0) {
                if (fMajority >= 50) {
                    
                    
                    url_femalecount = url_femalecount + 1;
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    
                    femalecount++;

                    
                }
                else if (fMajority < 50) {
                    
                    malecountarray.push(fMajority);
                    
                    url_malecount = url_malecount + 1;
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
              
              }
              
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log("LENGTH", linkstring, array_length);
                /*if (linkstring === 'https://www.yahoo.com/') {
                  array_length = array_length - 1;
                }*/
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                var f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                //if (finalcount === array_length){
                femaleMentions.push(f_pct);
                maleMentions.push(m_pct);
                console.log('FEMALE ARRAY');
                console.log(femaleMentions);
                console.log('MALE ARRAY');
                console.log(maleMentions);
                //}
                //}
                console.log('this is the current count');
                console.log(linkstring);
                console.log(finalcount);
                console.log(array_length);
                if (finalcount === array_length - 1) {
                    console.log('building chart');
                    console.log(linkstring);
                    console.log(totalFemaleMentions);
                    console.log(count);
                    
                  var realf_pct = Math.round((totalFemaleMentions /(count * 100.0)) * 100);
                  var realm_pct = 100.0 - realf_pct;
                  buildChart(realf_pct, realm_pct, currentElement.getAttribute('id'), linkstring);
                }

                console.log("FEMALE MENTIONS", femaleMentions.length);
                console.log("MALE MENTIONS", maleMentions.length);
                
                if (femaleMentions.length === 12 && maleMentions.length === 12) {
                    
                    console.log(currentElement.getAttribute('id'));
                    calculateTrends(currentElement.getAttribute('id'));
                    femaleMentions = [];
                    maleMentions = [];
                    
                }
                });
                
            });
      });
      
      
      
      /*if (femaleMentions.length > 8 && maleMentions.length > 8) {
                    
                    console.log(currentElement.getAttribute('id'));
                    calculateTrends(currentElement.getAttribute('id'));
                    femaleMentions = [];
                    maleMentions = [];
                    
                }*/

      today = today - oneMonthAgo;
      oneMonthAgo = oneMonthAgo - 1000*60*60*24*30;
      //femaleMentions = [];
      //maleMentions = [];
      }

      
     
    
    /*var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
      
      chrome.history.search({
            'text': linkstring,              // Return every history item....
            'startTime': oneWeekAgo  // that was accessed less than one week ago.
          },
          function(historyItems) {
          
            for (var i = 0; i < historyItems.length; ++i) {
              var url = historyItems[i].url;
              console.log(url);
              url_femalecount = 0;
              url_malecount = 0;
              
              $.get(url, function(data) {
              
              var malecount = 0;
              var femalecount = 0;
              
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
              
              var fMajority = applyContent(doc);
              console.log(fMajority);
              count++;
              
              if (fMajority >= 0) {
                if (fMajority >= 50) {
                    
                    femalecountarray.push(fMajority);
                    //console.log(femalecountarray.length);
                    
                    url_femalecount = url_femalecount + 1;
                    console.log( "FEMALE COUNT", url_femalecount);
                    
                    femalecount++;
                    
                }
                else if (fMajority < 50) {
                    
                    malecountarray.push(fMajority);
                    //console.log(malecountarray.length);
                    
                    url_malecount = url_malecount + 1;
                    console.log("MALE COUNT", url_malecount);
                    
                    malecount++;
                    
                }
              console.log(url, "FINAL FEMALE COUNT", url_femalecount);
              console.log(url, "FINAL MALE COUNT", url_malecount);
              //buildTypedUrlList("typedUrl_div", url_femalecount);
              //buildPopupDom("typedUrl_div", urlArray.slice(0, 10), url_femalecount);
              var span = document.createElement('span');
              span.innerHTML = "<br>female count: " + url_femalecount + "<br>";
              currentElement.parentNode.appendChild(span);
              }
             
             /*if (count === historyItems.length) {
              console.log(url, "FINAL FEMALE COUNT", url_femalecount);
              console.log(url, "FINAL MALE COUNT", url_malecount);
              //buildTypedUrlList("typedUrl_div", url_femalecount);
              //buildPopupDom("typedUrl_div", urlArray.slice(0, 10), url_femalecount);
              var span = document.createElement('span');
              span.innerHTML = "<br>female count: " + url_femalecount + "<br>";
              currentElement.parentNode.appendChild(span);

            }

              

        });
              //yahoourl.push(url);
            }
          
          //processLinks(yahoourl);
          
          
    });*/
    
    
});
}



function collectData(urlArray) {
    console.log('calling collectData');
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    
    for (var i = 0; i < 10; i++) {
    var yahoourl = [];
      console.log(urlArray[i]);
      
      chrome.history.search({
            'text': urlArray[i],              // Return every history item....
            'startTime': oneWeekAgo  // that was accessed less than one week ago.
          },
          function(historyItems) {
          
            for (var i = 0; i < historyItems.length; ++i) {
              var url = historyItems[i].url;
              //console.log(url);
              yahoourl.push(url);
            }
          
          processLinks(yahoourl);
          
          
    });
    
    }
}



/*var word_dict = window.english_word_dict;

var notnames = ["April", "May", "June", "August", "America", "India", "China"];
var prepos = ["In", "During", "On", "Of", "From", "Beginning", "in", "during", "on", "of", "from", "beginning"];

var femalefirstnames = Object.values(name_dict);
var malefirstnames = Object.keys(name_dict);
console.log(femalefirstnames);
console.log(malefirstnames);
console.log(word_dict);

var all_words = Object.assign( {}, name_dict, word_dict );

var strip = new RegExp(/-ad-|ad|audio|author|media|video|ai2html|banner|breadcrumbs|caption|citation|combx|comment|community|cover-wrap|disqus|discussion|external|extra|footer|gdpr|head|header|legends|menu|navigation|nav|other|reference|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|sponsored|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/gi);
var ads = new RegExp(/ad-content|comment/gi);

var m_count = 0, f_count = 0;
var m_percent = 0, f_percent = 0;
var processed = false;
var turnMr = false;

var all_male_words = (Object.keys( word_dict )).concat( Object.keys( name_dict ) );
var all_female_words = (Object.values( word_dict )).concat(Object.values(name_dict));


for ( var i = 0; i < all_male_words.length; i ++ ) {

    all_male_words[ i ] = all_male_words[ i ].toLowerCase();

}

for ( var i = 0; i < all_female_words.length; i ++ ) {

    all_female_words[ i ] = all_female_words[ i ].toLowerCase();

}

var mfnames = ["ETHAN", "CHRIS", "JOE", "NICK", "TOM", "ERIC", "JACOB", "RILEY", "GREG", "CLAY", "GRAHAM", "JUSTIN"];
var ffnames = ["ASHLYN", "CHRISTINA", "CAROLE", "JUSTINE", "ASHLEY", "JENNIFER", "BRITTANY", "ERIKA", "HAILEY"];

var temp_male_words = [];
var temp_female_words = [];
var temp_male_last_names = [];
var temp_female_last_names = [];

var numObservations = 0;*/

var turn_on = false; // Default
var name_dict = window.name_dict;
var word_dict = window.english_word_dict;
window.isDone = false;
var numObservations = 0;

var firstnames = fnames;
var lastnames = ["Smith","Johnson","Williams","Brown","Jones","Miller","Davis","Garcia","Goodman","Rodriguez","Wilson","Martinez","Anderson","Taylor","Zhu","Thomas","Hernandez","Moore","Martin","Jackson","Thompson","White","Lopez","Lee","Gonzalez","Harris","Clark","Lewis","Robinson","Walker","Perez","Hall","Young","Allen","Sanchez","Wright","King","Scott","Green","Baker","Adams","Nelson","Hill","Ramirez","Campbell","Mitchell","Roberts","Carter","Phillips","Evans","Turner","Torres","Parker","Collins","Edwards","Stewart","Flores","Morris","Nguyen","Murphy","Rivera","Cook","Rogers","Morgan","Peterson","Cooper","Reed","Bailey","Bell","Gomez","Kelly","Howard","Ward","Cox","Diaz","Richardson","Wood","Watson","Brooks","Bennett","Gray","James","Reyes","Cruz","Hughes","Price","Myers","Long","Foster","Sanders","Ross","Morales","Powell","Sullivan","Russell","Ortiz","Jenkins","Gutierrez","Perry","Butler","Barnes","Fisher","Henderson","Coleman","Simmons","Patterson","Jordan","Reynolds","Hamilton","Graham","Kim","Gonzales","Alexander","Ramos","Wallace","Griffin","West","Cole","Hayes","Chavez","Gibson","Bryant","Ellis","Stevens","Murray","Ford","Marshall","Owens","Mcdonald","Harrison","Ruiz","Kennedy","Wells","Alvarez","Woods","Mendoza","Castillo","Olson","Webb","Washington","Tucker","Freeman","Burns","Henry","Vasquez","Snyder","Simpson","Crawford","Jimenez","Porter","Mason","Shaw","Gordon","Wagner","Hunter","Romero","Hicks","ixon","Hunt","Palmer","Robertson","Black","Holmes","Stone","Meyer","Boyd","Mills","Warren","Fox","Rose","Rice","Moreno","Schmidt","Patel","Ferguson","Nichols","Herrera","Medina","Ryan","Fernandez","Weaver","Daniels","Stephens","Gardner","Payne","Kelley","Dunn","Pierce","Arnold","Tran","Spencer","Peters","Hawkins","Grant","Hansen","Castro","Hoffman","Hart","Elliott","Cunningham","Knight","Bradley","Carroll","Hudson","Duncan","Armstrong","Berry","Andrews","Johnston","Ray","Lane","Riley","Carpenter","Perkins","Aguilar","Silva","Richards","Willis","Matthews","Chapman","Lawrence","Garza","Vargas","Watkins","Wheeler","Larson","Carlson","Harper","George","Greene","Burke","Guzman","Morrison","Munoz","Jacobs","Obrien","Lawson","Franklin","Lynch","Bishop","Carr","Salazar","Austin","Mendez","Gilbert","Jensen","Williamson","Montgomery","Harvey","Oliver","Howell","Dean","Hanson","Weber","Garrett","Sims","Burton","Fuller","Soto","Mccoy","Welch","Chen","Schultz","Walters","Reid","Fields","Walsh","Little","Fowler","Bowman","Davidson","May","Day","Schneider","Newman","Brewer","Lucas","Holland","Wong","Banks","Santos","Curtis","Pearson","Delgado","Valdez","Pena","Rios","Douglas","Sandoval","Barrett","Hopkins","Keller","Guerrero","Stanley","Bates","Alvarado","Beck","Ortega","Wade","Estrada","Contreras","Barnett","Caldwell","Santiago","Lambert","Powers","Chambers","Nunez","Craig","Leonard","Lowe","Rhodes","Byrd","Gregory","Shelton","Frazier","Becker","Maldonado","Fleming","Vega","Sutton","Cohen","Jennings","Parks","Mcdaniel","Watts","Barker","Norris","Vaughn","Vazquez","Holt","Schwartz","Steele","Benson","Neal","Dominguez","Horton","Terry","Wolfe","Hale","Lyons","Graves","Haynes","Miles","Park","Warner","Padilla","Bush","Thornton","Mccarthy","Mann","Zimmerman","Erickson","Fletcher","Mckinney","Page","Dawson","Joseph","Marquez","Reeves","Klein","Espinoza","Baldwin","Moran","Love","Robbins","Higgins","Ball","Cortez","Le","Griffith","Bowen","Sharp","Cummings","Ramsey","Hardy","Swanson","Barber","Acosta","Luna","Chandler","Blair","Daniel","Cross","Simon","Dennis","Oconnor","Quinn","Gross","Navarro","Moss","Fitzgerald","Doyle","Mclaughlin","Rojas","Rodgers","Stevenson","Singh","Yang","Figueroa","Harmon","Newton","Paul","Manning","Garner","Mcgee","Reese","Francis","Burgess","Adkins","Goodman","Curry","Brady","Christensen","Potter","Walton","Goodwin","Mullins","Molina","Webster","Fischer","Campos","Avila","Sherman","Todd","Chang","Blake","Malone","Wolf","Hodges","Juarez","Gill","Farmer","Hines","Gallagher","Duran","Hubbard","Cannon","Miranda","Wang","Saunders","Tate","Mack","Hammond","Carrillo","Townsend","Wise","Ingram","Barton","Mejia","Ayala","Schroeder","Hampton","Rowe","Parsons","Frank","Waters","Strickland","Osborne","Maxwell","Chan","Deleon","Norman","Harrington","Casey","Patton","Logan","Bowers","Mueller","Glover","Floyd","Hartman","Buchanan","Cobb","French","Kramer","Mccormick","Clarke","Tyler","Gibbs","Moody","Conner","Sparks","Mcguire","Leon","Bauer","Norton","Pope","Flynn","Hogan","Robles","Salinas","Yates","Lindsey","Lloyd","Marsh","Mcbride","Owen","Solis","Pham","Lang","Pratt","Lara","Brock","Ballard","Trujillo","Shaffer","Drake","Roman","Aguirre","Morton","Stokes","Lamb","Pacheco","Patrick","Cochran","Shepherd","Cain","Burnett","Hess","Li","Cervantes","Olsen","Briggs","Ochoa","Cabrera","Velasquez","Montoya","Roth","Meyers","Cardenas","Fuentes","Weiss","Hoover","Wilkins","Nicholson","Underwood","Short","Carson","Morrow","Colon","Holloway","Summers","Bryan","Petersen","Mckenzie","Serrano","Wilcox","Carey","Clayton","Poole","Calderon","Gallegos","Greer","Rivas","Guerra","Decker","Collier","Wall","Whitaker","Bass","Flowers","Davenport","Conley","Houston","Huff","Copeland","Hood","Monroe","Massey","Roberson","Combs","Franco","Larsen","Pittman","Randall","Skinner","Wilkinson","Kirby","Cameron","Bridges","Anthony","Richard","Kirk","Bruce","Singleton","Mathis","Bradford","Boone","Abbott","Charles","Allison","Sweeney","Atkinson","Horn","Jefferson","Rosales","York","Christian","Phelps","Farrell","Castaneda","Nash","Dickerson","Bond","Wyatt","Foley","Chase","Gates","Vincent","Mathews","Hodge","Garrison","Trevino","Villarreal","Heath","Dalton","Valencia","Callahan","Hensley","Atkins","Huffman","Roy","Boyer","Shields","Lin","Hancock","Grimes","Glenn","Cline","Delacruz","Camacho","Dillon","Parrish","Oneill","Melton","Booth","Kane","Berg","Harrell","Pitts","Savage","Wiggins","Brennan","Salas","Marks","Russo","Sawyer","Baxter","Golden","Hutchinson","Liu","Walter","Mcdowell","Wiley","Rich","Humphrey","Johns","Koch","Suarez","Hobbs","Beard","Gilmore","Ibarra","Keith","Macias","Khan","Andrade","Ware","Stephenson","Henson","Wilkerson","Dyer","Mcclure","Blackwell","Mercado","Tanner","Eaton","Clay","Barron","Beasley","Oneal","Preston","Small","Wu","Zamora","Macdonald","Vance","Snow","Mcclain","Stafford","Orozco","Barry","English","Shannon","Kline","Jacobson","Woodard","Huang","Kemp","Mosley","Prince","Merritt","Hurst","Villanueva","Roach","Nolan","Lam","Yoder","Mccullough","Lester","Santana","Valenzuela","Winters","Barrera","Leach","Orr","Berger","Mckee","Strong","Conway","Stein","Whitehead","Bullock","Escobar","Knox","Meadows","Solomon","Velez","Odonnell","Kerr","Stout","Blankenship","Browning","Kent","Lozano","Bartlett","Pruitt","Buck","Barr","Gaines","Durham","Gentry","Mcintyre","Sloan","Melendez","Rocha","Herman","Sexton","Moon","Hendricks","Rangel","Stark","Lowery","Hardin","Hull","Sellers","Ellison","Calhoun","Gillespie","Mora","Knapp","Mccall","Morse","Dorsey","Weeks","Nielsen","Livingston","Leblanc","Mclean","Bradshaw","Glass","Middleton","Buckley","Schaefer","Frost","Howe","House","Mcintosh","Ho","Pennington","Reilly","Hebert","Mcfarland","Hickman","Noble","Spears","Conrad","Arias","Galvan","Velazquez","Huynh","Frederick","Randolph","Cantu","Fitzpatrick","Mahoney","Peck","Villa","Michael","Donovan","Mcconnell","Walls","Boyle","Mayer","Zuniga","Giles","Pineda","Pace","Hurley","Mays","Mcmillan","Crosby","Ayers","Case","Bentley","Shepard","Everett","Pugh","David","Mcmahon","Dunlap","Bender","Hahn","Harding","Acevedo","Raymond","Blackburn","Duffy","Landry","Dougherty","Bautista","Shah","Potts","Arroyo","Valentine","Meza","Gould","Vaughan","Fry","Rush","Avery","Herring","Dodson","Clements","Sampson","Tapia","Bean","Lynn","Crane","Farley","Cisneros","Benton","Ashley","Mckay","Finley","Best","Blevins","Friedman","Moses","Sosa","Blanchard","Huber","Frye","Krueger","Bernard","Rosario","Rubio","Mullen","Benjamin","Haley","Chung","Moyer","Choi","Horne","Yu","Woodward","Ali","Nixon","Hayden","Rivers","Estes","Mccarty","Richmond","Stuart","Maynard","Brandt","Oconnell","Hanna","Sanford","Sheppard","Church","Burch","Levy","Rasmussen","Coffey","Ponce","Faulkner","Donaldson","Schmitt","Novak","Costa","Montes","Booker","Cordova","Waller","Arellano","Maddox","Mata","Bonilla","Stanton","Compton","Kaufman","Dudley","Mcpherson","Beltran","Dickson","Mccann","Villegas","Proctor","Hester","Cantrell","Daugherty","Cherry","Bray","Davila","Rowland","Levine","Madden","Spence","Good","Irwin","Werner","Krause","Petty","Whitney","Baird","Hooper","Pollard","Zavala","Jarvis","Holden","Haas","Hendrix","Mcgrath","Bird","Lucero","Terrell","Riggs","Joyce","Mercer","Rollins","Galloway","Duke","Odom","Andersen","Downs","Hatfield","Benitez","Archer","Huerta","Travis","Mcneil","Hinton","Zhang","Hays","Mayo","Fritz","Branch","Mooney","Ewing","Ritter","Esparza","Frey","Braun","Gay","Riddle","Haney","Kaiser","Holder","Chaney","Mcknight","Gamble","Vang","Cooley","Carney","Cowan","Forbes","Ferrell","Davies","Barajas","Shea","Osborn","Bright","Cuevas","Bolton","Murillo","Lutz","Duarte","Kidd","Key","Cooke"];
//var lastnames_upper = ["SMITH","JOHNSON","WILLIAMS","BROWN","JONES","MILLER","DAVIS","GARCIA","RODRIGUEZ","WILSON","MARTINEZ","ANDERSON","TAYLOR","THOMAS","HERNANDEZ","MOORE","MARTIN","JACKSON","THOMPSON","WHITE","LOPEZ","LEE","GONZALEZ","HARRIS","CLARK","LEWIS","ROBINSON","WALKER","PEREZ","HALL","YOUNG","ALLEN","SANCHEZ","WRIGHT","KING","SCOTT","GREEN","BAKER","ADAMS","NELSON","HILL","RAMIREZ","CAMPBELL","MITCHELL","ROBERTS","CARTER","PHILLIPS","EVANS","TURNER","TORRES","PARKER","COLLINS","EDWARDS","STEWART","FLORES","MORRIS","NGUYEN","MURPHY","RIVERA","COOK","ROGERS","MORGAN","PETERSON","COOPER","REED","BAILEY","BELL","GOMEZ","KELLY","HOWARD","WARD","COX","DIAZ","RICHARDSON","WOOD","WATSON","BROOKS","BENNETT","GRAY","JAMES","REYES","CRUZ","HUGHES","PRICE","MYERS","LONG","FOSTER","SANDERS","ROSS","MORALES","POWELL","SULLIVAN","RUSSELL","ORTIZ","JENKINS","GUTIERREZ","PERRY","BUTLER","BARNES","FISHER","HENDERSON","COLEMAN","SIMMONS","PATTERSON","JORDAN","REYNOLDS","HAMILTON","GRAHAM","KIM","GONZALES","ALEXANDER","RAMOS","WALLACE","GRIFFIN","WEST","COLE","HAYES","CHAVEZ","GIBSON","BRYANT","ELLIS","STEVENS","MURRAY","FORD","MARSHALL","OWENS","MCDONALD","HARRISON","RUIZ","KENNEDY","WELLS","ALVAREZ","WOODS","MENDOZA","CASTILLO","OLSON","WEBB","WASHINGTON","TUCKER","FREEMAN","BURNS","HENRY","VASQUEZ","SNYDER","SIMPSON","CRAWFORD","JIMENEZ","PORTER","MASON","SHAW","GORDON","WAGNER","HUNTER","ROMERO","HICKS","IXON","HUNT","PALMER","ROBERTSON","BLACK","HOLMES","STONE","MEYER","BOYD","MILLS","WARREN","FOX","ROSE","RICE","MORENO","SCHMIDT","PATEL","FERGUSON","NICHOLS","HERRERA","MEDINA","RYAN","FERNANDEZ","WEAVER","DANIELS","STEPHENS","GARDNER","PAYNE","KELLEY","DUNN","PIERCE","ARNOLD","TRAN","SPENCER","PETERS","HAWKINS","GRANT","HANSEN","CASTRO","HOFFMAN","HART","ELLIOTT","CUNNINGHAM","KNIGHT","BRADLEY","CARROLL","HUDSON","DUNCAN","ARMSTRONG","BERRY","ANDREWS","JOHNSTON","RAY","LANE","RILEY","CARPENTER","PERKINS","AGUILAR","SILVA","RICHARDS","WILLIS","MATTHEWS","CHAPMAN","LAWRENCE","GARZA","VARGAS","WATKINS","WHEELER","LARSON","CARLSON","HARPER","GEORGE","GREENE","BURKE","GUZMAN","MORRISON","MUNOZ","JACOBS","OBRIEN","LAWSON","FRANKLIN","LYNCH","BISHOP","CARR","SALAZAR","AUSTIN","MENDEZ","GILBERT","JENSEN","WILLIAMSON","MONTGOMERY","HARVEY","OLIVER","HOWELL","DEAN","HANSON","WEBER","GARRETT","SIMS","BURTON","FULLER","SOTO","MCCOY","WELCH","CHEN","SCHULTZ","WALTERS","REID","FIELDS","WALSH","LITTLE","FOWLER","BOWMAN","DAVIDSON","MAY","DAY","SCHNEIDER","NEWMAN","BREWER","LUCAS","HOLLAND","WONG","BANKS","SANTOS","CURTIS","PEARSON","DELGADO","VALDEZ","PENA","RIOS","DOUGLAS","SANDOVAL","BARRETT","HOPKINS","KELLER","GUERRERO","STANLEY","BATES","ALVARADO","BECK","ORTEGA","WADE","ESTRADA","CONTRERAS","BARNETT","CALDWELL","SANTIAGO","LAMBERT","POWERS","CHAMBERS","NUNEZ","CRAIG","LEONARD","LOWE","RHODES","BYRD","GREGORY","SHELTON","FRAZIER","BECKER","MALDONADO","FLEMING","VEGA","SUTTON","COHEN","JENNINGS","PARKS","MCDANIEL","WATTS","BARKER","NORRIS","VAUGHN","VAZQUEZ","HOLT","SCHWARTZ","STEELE","BENSON","NEAL","DOMINGUEZ","HORTON","TERRY","WOLFE","HALE","LYONS","GRAVES","HAYNES","MILES","PARK","WARNER","PADILLA","BUSH","THORNTON","MCCARTHY","MANN","ZIMMERMAN","ERICKSON","FLETCHER","MCKINNEY","PAGE","DAWSON","JOSEPH","MARQUEZ","REEVES","KLEIN","ESPINOZA","BALDWIN","MORAN","LOVE","ROBBINS","HIGGINS","BALL","CORTEZ","LE","GRIFFITH","BOWEN","SHARP","CUMMINGS","RAMSEY","HARDY","SWANSON","BARBER","ACOSTA","LUNA","CHANDLER","BLAIR","DANIEL","CROSS","SIMON","DENNIS","OCONNOR","QUINN","GROSS","NAVARRO","MOSS","FITZGERALD","DOYLE","MCLAUGHLIN","ROJAS","RODGERS","STEVENSON","SINGH","YANG","FIGUEROA","HARMON","NEWTON","PAUL","MANNING","GARNER","MCGEE","REESE","FRANCIS","BURGESS","ADKINS","GOODMAN","CURRY","BRADY","CHRISTENSEN","POTTER","WALTON","GOODWIN","MULLINS","MOLINA","WEBSTER","FISCHER","CAMPOS","AVILA","SHERMAN","TODD","CHANG","BLAKE","MALONE","WOLF","HODGES","JUAREZ","GILL","FARMER","HINES","GALLAGHER","DURAN","HUBBARD","CANNON","MIRANDA","WANG","SAUNDERS","TATE","MACK","HAMMOND","CARRILLO","TOWNSEND","WISE","INGRAM","BARTON","MEJIA","AYALA","SCHROEDER","HAMPTON","ROWE","PARSONS","FRANK","WATERS","STRICKLAND","OSBORNE","MAXWELL","CHAN","DELEON","NORMAN","HARRINGTON","CASEY","PATTON","LOGAN","BOWERS","MUELLER","GLOVER","FLOYD","HARTMAN","BUCHANAN","COBB","FRENCH","KRAMER","MCCORMICK","CLARKE","TYLER","GIBBS","MOODY","CONNER","SPARKS","MCGUIRE","LEON","BAUER","NORTON","POPE","FLYNN","HOGAN","ROBLES","SALINAS","YATES","LINDSEY","LLOYD","MARSH","MCBRIDE","OWEN","SOLIS","PHAM","LANG","PRATT","LARA","BROCK","BALLARD","TRUJILLO","SHAFFER","DRAKE","ROMAN","AGUIRRE","MORTON","STOKES","LAMB","PACHECO","PATRICK","COCHRAN","SHEPHERD","CAIN","BURNETT","HESS","LI","CERVANTES","OLSEN","BRIGGS","OCHOA","CABRERA","VELASQUEZ","MONTOYA","ROTH","MEYERS","CARDENAS","FUENTES","WEISS","HOOVER","WILKINS","NICHOLSON","UNDERWOOD","SHORT","CARSON","MORROW","COLON","HOLLOWAY","SUMMERS","BRYAN","PETERSEN","MCKENZIE","SERRANO","WILCOX","CAREY","CLAYTON","POOLE","CALDERON","GALLEGOS","GREER","RIVAS","GUERRA","DECKER","COLLIER","WALL","WHITAKER","BASS","FLOWERS","DAVENPORT","CONLEY","HOUSTON","HUFF","COPELAND","HOOD","MONROE","MASSEY","ROBERSON","COMBS","FRANCO","LARSEN","PITTMAN","RANDALL","SKINNER","WILKINSON","KIRBY","CAMERON","BRIDGES","ANTHONY","RICHARD","KIRK","BRUCE","SINGLETON","MATHIS","BRADFORD","BOONE","ABBOTT","CHARLES","ALLISON","SWEENEY","ATKINSON","HORN","JEFFERSON","ROSALES","YORK","CHRISTIAN","PHELPS","FARRELL","CASTANEDA","NASH","DICKERSON","BOND","WYATT","FOLEY","CHASE","GATES","VINCENT","MATHEWS","HODGE","GARRISON","TREVINO","VILLARREAL","HEATH","DALTON","VALENCIA","CALLAHAN","HENSLEY","ATKINS","HUFFMAN","ROY","BOYER","SHIELDS","LIN","HANCOCK","GRIMES","GLENN","CLINE","DELACRUZ","CAMACHO","DILLON","PARRISH","ONEILL","MELTON","BOOTH","KANE","BERG","HARRELL","PITTS","SAVAGE","WIGGINS","BRENNAN","SALAS","MARKS","RUSSO","SAWYER","BAXTER","GOLDEN","HUTCHINSON","LIU","WALTER","MCDOWELL","WILEY","RICH","HUMPHREY","JOHNS","KOCH","SUAREZ","HOBBS","BEARD","GILMORE","IBARRA","KEITH","MACIAS","KHAN","ANDRADE","WARE","STEPHENSON","HENSON","WILKERSON","DYER","MCCLURE","BLACKWELL","MERCADO","TANNER","EATON","CLAY","BARRON","BEASLEY","ONEAL","PRESTON","SMALL","WU","ZAMORA","MACDONALD","VANCE","SNOW","MCCLAIN","STAFFORD","OROZCO","BARRY","ENGLISH","SHANNON","KLINE","JACOBSON","WOODARD","HUANG","KEMP","MOSLEY","PRINCE","MERRITT","HURST","VILLANUEVA","ROACH","NOLAN","LAM","YODER","MCCULLOUGH","LESTER","SANTANA","VALENZUELA","WINTERS","BARRERA","LEACH","ORR","BERGER","MCKEE","STRONG","CONWAY","STEIN","WHITEHEAD","BULLOCK","ESCOBAR","KNOX","MEADOWS","SOLOMON","VELEZ","ODONNELL","KERR","STOUT","BLANKENSHIP","BROWNING","KENT","LOZANO","BARTLETT","PRUITT","BUCK","BARR","GAINES","DURHAM","GENTRY","MCINTYRE","SLOAN","MELENDEZ","ROCHA","HERMAN","SEXTON","MOON","HENDRICKS","RANGEL","STARK","LOWERY","HARDIN","HULL","SELLERS","ELLISON","CALHOUN","GILLESPIE","MORA","KNAPP","MCCALL","MORSE","DORSEY","WEEKS","NIELSEN","LIVINGSTON","LEBLANC","MCLEAN","BRADSHAW","GLASS","MIDDLETON","BUCKLEY","SCHAEFER","FROST","HOWE","HOUSE","MCINTOSH","HO","PENNINGTON","REILLY","HEBERT","MCFARLAND","HICKMAN","NOBLE","SPEARS","CONRAD","ARIAS","GALVAN","VELAZQUEZ","HUYNH","FREDERICK","RANDOLPH","CANTU","FITZPATRICK","MAHONEY","PECK","VILLA","MICHAEL","DONOVAN","MCCONNELL","WALLS","BOYLE","MAYER","ZUNIGA","GILES","PINEDA","PACE","HURLEY","MAYS","MCMILLAN","CROSBY","AYERS","CASE","BENTLEY","SHEPARD","EVERETT","PUGH","DAVID","MCMAHON","DUNLAP","BENDER","HAHN","HARDING","ACEVEDO","RAYMOND","BLACKBURN","DUFFY","LANDRY","DOUGHERTY","BAUTISTA","SHAH","POTTS","ARROYO","VALENTINE","MEZA","GOULD","VAUGHAN","FRY","RUSH","AVERY","HERRING","DODSON","CLEMENTS","SAMPSON","TAPIA","BEAN","LYNN","CRANE","FARLEY","CISNEROS","BENTON","ASHLEY","MCKAY","FINLEY","BEST","BLEVINS","FRIEDMAN","MOSES","SOSA","BLANCHARD","HUBER","FRYE","KRUEGER","BERNARD","ROSARIO","RUBIO","MULLEN","BENJAMIN","HALEY","CHUNG","MOYER","CHOI","HORNE","YU","WOODWARD","ALI","NIXON","HAYDEN","RIVERS","ESTES","MCCARTY","RICHMOND","STUART","MAYNARD","BRANDT","OCONNELL","HANNA","SANFORD","SHEPPARD","CHURCH","BURCH","LEVY","RASMUSSEN","COFFEY","PONCE","FAULKNER","DONALDSON","SCHMITT","NOVAK","COSTA","MONTES","BOOKER","CORDOVA","WALLER","ARELLANO","MADDOX","MATA","BONILLA","STANTON","COMPTON","KAUFMAN","DUDLEY","MCPHERSON","BELTRAN","DICKSON","MCCANN","VILLEGAS","PROCTOR","HESTER","CANTRELL","DAUGHERTY","CHERRY","BRAY","DAVILA","ROWLAND","LEVINE","MADDEN","SPENCE","GOOD","IRWIN","WERNER","KRAUSE","PETTY","WHITNEY","BAIRD","HOOPER","POLLARD","ZAVALA","JARVIS","HOLDEN","HAAS","HENDRIX","MCGRATH","BIRD","LUCERO","TERRELL","RIGGS","JOYCE","MERCER","ROLLINS","GALLOWAY","DUKE","ODOM","ANDERSEN","DOWNS","HATFIELD","BENITEZ","ARCHER","HUERTA","TRAVIS","MCNEIL","HINTON","ZHANG","HAYS","MAYO","FRITZ","BRANCH","MOONEY","EWING","RITTER","ESPARZA","FREY","BRAUN","GAY","RIDDLE","HANEY","KAISER","HOLDER","CHANEY","MCKNIGHT","GAMBLE","VANG","COOLEY","CARNEY","COWAN","FORBES","FERRELL","DAVIES","BARAJAS","SHEA","OSBORN","BRIGHT","CUEVAS","BOLTON","MURILLO","LUTZ","DUARTE","KIDD","KEY","COOKE"];
var initials = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "I.", "J.", "K.", "L.", "M.", "N.", "O.", "P.", "Q.", "R.","S.", "T.", "U.","V.", "W.", "X.", "Y.", "Z.", "A","B","C","D","E","F","G","H","I", "J","K","L","M","N","O","P","Q","R","S","T","U", "V","W","X", "Y", "Z"];
var excluded = ["Le", "le", "la", "La", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "VIIII", "X", "S", "s", "COVID", "Medical", "Prize", "San", "New", "O", "area", "Center", "Building", "Street", "Zoo", "Santa", "Saint", "St", "City", "Island", "Islands", "Highway", "Mountain", "Mount", "Mt", "College", "University","A", "Not", "Is", "Are", "The", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Expedition"];

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
var m_percent = 0, f_percent = 0;
var processed = false;
var highlighting = false;

var mfnames = [];
var ffnames = [];




var notnames = ["April", "May", "June", "August", "America", "India", "China", "Israel"];
var prepos = ["In", "During", "On", "Of", "From", "Beginning", "in", "during", "on", "of", "from", "beginning"];

//var femalefirstnames = Object.values(name_dict);
//console.log(femalefirstnames);
//var malefirstnames = Object.keys(name_dict);
var femalefirstnames = window.femaleNames;
//console.log(femalefirstnames);
var malefirstnames = window.maleNames;

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


/*function applyContent (windowObject) {

    m_count = 0;
    f_count = 0;
    processed = false;
    temp_female_last_names = [];
    temp_male_last_names = [];
  
    if ( processed ) return;

    $(windowObject).find("a, p, div,span").contents().filter( function () {

        return this.nodeType === 3 && this.id !== 'adContent' && this.id !== 'dockedBanner' && this.id !== 'google_image_div';

    }).replaceWith( function () {

        var str = this.nodeValue;
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


        
        //Delete surname after male name
        
        for ( var i = 0; i < words.length - 1; i ++ ) {

            if ( mfnames.indexOf( words[ i ].toUpperCase() ) !== -1 || malefirstnames.indexOf (words[i]) !== -1 || name_dict[ words[ i ] ] && name_dict[ words[ i + 1 ] ] ) {

                nextWord = words[i+1];
                if (/[A-Z]/.test(nextWord[0]) && temp_male_last_names.indexOf(nextWord) === -1) {
                
                    temp_male_last_names.push(words[i + 1]);
                    words.splice( i + 1, 1 );
                    
                }

            }

        }


        


        for ( var i = 0; i < words.length; i ++ ) {

            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i].toUpperCase() ) >= 0) {

                m_count ++;
                numObservations++;
                temp_male_words.push(words[i]);

            }

            if ( all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i].toUpperCase() ) >= 0) {

                f_count ++;
                numObservations++;
                temp_female_words.push(words[i]);

            }

        }

    
    m_percent = Math.round( m_count / (m_count + f_count) * 100 );
    f_percent = Math.round( f_count / (m_count + f_count) * 100 );

    processed = true;
  

});
        if (m_percent !== 0 && f_percent !== 0) {
        return f_percent;
    }
};*/

function applyContent (windowObject) {

    //console.log(window.location.href);
    numObservations = 0;
    m_count = 0;
    f_count = 0;
    processed = false;
    temp_female_last_names = [];
    temp_male_last_names = [];
  
    if ( processed ) return;

    $(windowObject).find("a, p, div,span, h1, h2, h3, h4, label").contents().filter( function () {

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

            if ( w === 'Mr' || w === 'Lord' ) {

                temp_male_words.push(words[i+1]);
                //words.splice( i + 1, 1 );

            }
            
            if ( w === 'Ms'  || w === 'Mme' || w === 'Lady'  ) {

                temp_female_words.push(words[i+1]);
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
                    
                        if (!(/[A-Z]/.test((words[i])[0]))){
                        
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
            if ((malefirstnames.indexOf(words[i]) >= 0 || words[i] === 'Mr' || words[i] === 'Mister') && words[i-1] !== 'The' && excluded.indexOf(nextWord) === -1 && next_first !== '(' && initials.indexOf(nextWord) === -1 && last !== '.' && last !== '!' && last !== '?' && last !== ',' && last !== ';' && last !== ':' && last !== '/' &&  /[A-Z]/.test(nextWord[0]) && (!(/[A-Z]/.test(nextNextWord[0])) || nextNextWord === undefined || next_last === '.' || next_last === '!' || next_last === '?' || next_last === ',' || next_last === '/' ) && ( words[i-1] !== 'Port' && words[i+1] !== 'Mountain' && words[i+1] !== 'City' && words[i+1] !== 'Highway' && words[i+1] !== 'Islands' && words[i+1] !== 'Park' && words[i+1] !== 'Institute' && words[i+1] !== 'School' && words[i+1] !== 'area' && words[i+1] !== 'University' && words[i+1] !== 'Center' && words[i+1] !== 'Building' && words[i+1] !== 'Circle' && words[i+1] !== 'Street' && words[i+1] !== 'Zoo' && words[i-1] !== 'San' && words[i-1] !== 'Saint' && words[i-1] !== 'Santa' && words[i-1] !== 'St' && words[i-1] !== 'Sao' && words[i-1] !== 'New' && words[i-1] !== 'O' && words[i-1] !== 's')) {
            
               //if( lastnames.indexOf(words[i+1]) >= 0 || lastnames_upper.indexOf(words[i + 1]) >= 0)
              // if( intials.indexOf(words[i + 1]) === -1)   
                    temp_male_last_names.push(words[i+1]);
                    console.log('PUSHING LAST NAME (I+1)');
                console.log(words[i+1]);
                console.log(words[i]);
              
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
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            f_m_begin = n_next;
            
            //if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]) )
            if (femalefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >=0))
            
                temp_female_last_names.push(words[i+2]);
                         
            
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
            
            var nextWord = words[i+1];
            var nextNextWord = words[i+2];
            
            m_m_begin = n_next;
            
            //if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && initials.indexOf(nextWord) >= 0 && /[A-Z]/.test(nextNextWord[0]))
            if (malefirstnames.indexOf(words[i]) >= 0 && /[A-Z]/.test(nextWord[0]) && words[i-1] !== 'The' && last !== '/' && last !== ':' && /[A-Z]/.test(nextNextWord[0]) && !(/[A-Z]/.test(nextNextWord[1])) && (next_last !== '.' && next_last !== '!' && next_last !== '?' && next_last !== ',' && next_last !== '/' && next_last !== ':' && next_last !== ';' || initials.indexOf(nextWord) >= 0)){
            
                temp_male_last_names.push(words[i+2]);
                console.log('PUSHING LAST NAME (I+2)');
                console.log(words[i+2]);
                console.log(words[i+1]);
                console.log(words[i]);
                        
            }
            
        }
        
        }
        
         for ( var i = 0; i < words.length; i ++ ) {

            if ( all_female_words.indexOf( words[ i ].toLowerCase()) >= 0 || femalefirstnames.indexOf(words[i]) >= 0 || femalefirstnames.indexOf(capitalize(words[i])) >= 0 || temp_female_last_names.indexOf(words[i]) >= 0 || ffnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                if (femalefirstnames.indexOf(words[i]) >= 0 && ( words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                    female_do_not_count++;
                    female_name_no_count = words[i];
                }
                else {
                    f_count ++;
                    numObservations++;
                    temp_female_words.push(words[i]);
                }

            }
            
            
            if ( all_male_words.indexOf( words[ i ].toLowerCase() ) >= 0 || malefirstnames.indexOf(words[i]) >= 0 || malefirstnames.indexOf(capitalize(words[i])) >= 0 || temp_male_last_names.indexOf(words[i]) >= 0 || mfnames.indexOf(words[i].toUpperCase() ) >= 0 && excluded.indexOf(words[i]) === -1) {

                //if (temp_female_words.indexOf(words[i]) === -1) {
                
                    if (malefirstnames.indexOf(words[i]) >= 0 && (words[i-1] === 'Port' || words[i-1] === 'Hurricane' || words[i-1] === 's' || words[i+1] === 't' || words[i+1] === 'Mountain' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'City' || words[i+1] === 'Islands' || words[i+1] === 'Park' || words[i+1] === 'Institute' || words[i+1] === 'School' || words[i+1] === 'Highway' || words[i+1] === 'area' || words[i+1] === 'University' || words[i+1] === 'College' || words[i+1] === 'Center' || words[i+1] === 'Building' || words[i+1] === 'Circle' || words[i+1] === 'Street' || words[i+1] === 'Zoo' || words[i-1] === 'San' || words[i-1] === 'Saint' || words[i-1] === 'Santa' || words[i-1] === 'St' || words[i-1] === 'Sao' || words[i-1] === 'New' || words[i-1] === 'O' || words[i-1] === 'Mount' || words[i-1] === 'Saint' || words[i-1] === 'Centre' || words[i-1] === 'Îles' )) {
                        male_do_not_count++;
                        male_name_no_count = words[i];
                    }
                    else if (words[i] === 'Everest' && (words[i-1] === 'the' || words[i-1] === 'climb')) {
                    
                    }
                    else {
                
                        m_count ++;
                        numObservations++;
                        temp_male_words.push(words[i]);
                    }
                //}

            }

        }
        
        //console.log(temp_female_words);
        //console.log(temp_male_words);
        
        console.log(temp_female_last_names);
        console.log(temp_male_last_names);
        
        if (temp_female_words.length === 0 ){
            temp_female_words.push('she');
        }
        if (temp_male_words.length === 0 ) {
            temp_male_words.push('he');
        }

    
    m_percent = Math.round( m_count / (m_count + f_count) * 100 );
    f_percent = Math.round( f_count / (m_count + f_count) * 100 );
    

    processed = true;
  

});
    console.log("FEMALE", temp_female_words);
    console.log("MALE", temp_male_words);
    //m_percent = Math.round( temp_male_words.length / (m_count + f_count) * 100 );
    //f_percent = Math.round( temp_female_words.length / (temp_male_words.length + temp_female_words.length) * 100 );

    //console.log(f_percent);
    if (m_percent !== 0 && f_percent !== 0) {
        return f_percent;
    }
  
};

var malecountarray = [];
var femalecountarray = [];
var count = 0;


        

function processLinks (copyurlArray) {
    
    count = 0;
    url_femalecount = 0;
    url_malecount = 0;
    console.log("running process links");
    for (var i = 0; i < copyurlArray.length; i++ ){
    
            $.get(copyurlArray[i], function(data) {
              
              //console.log("THIS URL", urlArray[i]);
              var malecount = 0;
              var femalecount = 0;
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
              
              var fMajority = applyContent(doc);
              console.log(fMajority);
              count++;
              
              if (fMajority >= 0) {
                if (fMajority >= 50) {
                    
                    femalecountarray.push(fMajority);
                    //console.log(femalecountarray.length);
                    
                    url_femalecount = url_femalecount + 1;
                    console.log(copyurlArray[i], "FEMALE COUNT", url_femalecount);
                    
                    femalecount++;
                    
                }
                else if (fMajority < 50) {
                    
                    malecountarray.push(fMajority);
                    //console.log(malecountarray.length);
                    
                    url_malecount = url_malecount + 1;
                    console.log(copyurlArray[i], "MALE COUNT", url_malecount);
                    
                    malecount++;
                    
                }   
              }
             
             if (count === copyurlArray.length) {
              console.log("FINAL FEMALE COUNT", url_femalecount);
              console.log("FINAL MALE COUNT", url_malecount);
              //buildTypedUrlList("typedUrl_div", url_femalecount);
              buildPopupDom("typedUrl_div", urlArray.slice(0, 10), url_femalecount);
            }

              

        });
        
        

    }
    
            
}

function calculateTrends(element) {
  //if (femaleMentions.length > 8 && maleMentions.length > 8) {
  console.log('calculating trends');
  var id = element.getAttribute('id');
  var linkstring = element.getAttribute('href');
  //console.log(linkstring);
  //if (element.hasChildNodes()) {
  //}
  
  //var text = document.getElementById("trendButton").firstChild;
    //if (text.data == "Show Trends") {
      /*var years = document.getElementById("trendYears").value;
      var maleMentions = mentions(findData(years));
      var femaleMentions = new Array();
      var i = 0;
      while (i != maleMentions.length) {
        femaleMentions.push(100 - maleMentions[i]);
        i++;
      }*/
      //trendGraph(femaleMentions, maleMentions, years)
      var years = 1;
      var trendChart;
      //var trendChart = trendGraph([20,14,6,2,22,11,33,21,42,28,20,35], [80,86,94,98,78,89,67,79,58,72,80,65], years)
      if (linkstring === 'https://www.nytimes.com/'){
                     trendChart = trendGraph(femaleMentions1, maleMentions1, years, element);
    }
    else if (linkstring === 'https://www.cnn.com/') {
         trendChart = trendGraph(femaleMentions2, maleMentions2, years, element);
    }
    else {
        trendChart = trendGraph(femaleMentions, maleMentions, years, element);
    }
            
      //var trendChart = trendGraph(femaleMentions, maleMentions, years, id)
      trendChart.render();
      //}
    //} else {
      //$('#trendContainer').hide();
      //$('#chartContainer').show();
    //}
    //text.data = text.data == "Show Trends" ? "Close Trends" : "Show Trends";
}

function trendGraph(women, men, range, element) {
//var element = document.getElementById(id);
var parent = element.parentNode;
var link = element.getAttribute('href');
parent.setAttribute('id', link);
  
    var time = new Array();
    var label = new Array();
    if (range == 1) {
        time = arrRange(1, 13)
        label = arrMonths();
    } else {
        currYear = new Date().getFullYear();
        time = arrRange(currYear-range, currYear);
        label = time.map(String);
    }
    wdata = [], j=0, l = Math.min(women.length, time.length);
    for (j = 9; j < l; j++) {
        wdata.push({"x" : time[j], label: label[j], "y" : women[j]});
    }
    mdata = [], i=0, l = Math.min(men.length, time.length);
    for (i = 9; i < l; i++) {
        mdata.push({"x" : time[i], label: label[i], "y" : men[i]});
    }

    $('#trendContainer').show();
    var lineChart = new CanvasJS.Chart('trendContainer', {
        height: 400,
        animationEnabled: true, 
        title: {
          text: "Gender ratio on: " + link,
          horizontalAlign: "center"
          },
        subtitles:[
            {
            text: "gender ratio over the last three months on the pages you've visited", 
            horizontalAlign: "center",
            fontWeight: "thin"
            }
            ],
        axisY: {
            interval: 20,
            minimum: 0,
            maximum: 100,
            suffix: "%" },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "top",
            horizontalAlign: "right",
            dockInsidePlotArea: true, },
        data: [
         {
            type: "line",
            name: "Women",
            color: "Green",
            showInLegend: true,
            yValueFormatString: "##0\"%\"",
            markerSize: 10,
            dataPoints: wdata },
         {
            type: "line",
            name: "Men",
            color: "cornflowerblue",
            showInLegend: true,
            yValueFormatString: "##0\"%\"",
            markerSize: 10,
            dataPoints: mdata } ]
        }) ;
    //console.log("NUMBER OBSERVATIONS", numObservations);
    //numObservations = 0;
    return lineChart;

}

function arrRange(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}

function arrMonths() {

    var time = new Array();
    var months = new Array("Jan", "Febr", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    var today = new Date();
    var currMonth = today.getMonth();

    var i;
    for (i=0; i<12; i++) {
        time.push(months[currMonth])
        currMonth++;
        if (currMonth > 11) {
            currMonth = 0;
        }
    }

  return time;
}

var months = new Array (12);
var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
var microsecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
var oneMonthAgo = (new Date).getTime() - microsecondsPerMonth;
var today = (new Date).getTime();

/*for (var i = 0; i < months.length; i++) {
  
  months[i] = new Array(2);
  months[i][0] = oneMonthAgo;
  months[i][1] = today;
  today = today - microsecondsPerMonth;
  oneMonthAgo = oneMonthAgo - microsecondsPerMonth;
  
}*/

var monthCount = 0;
var f_array = [];
var m_array = [];
var ffpct;
var hist_array = [];
var links = [];

function trialGetLinks() {

    console.log('in get links function');
    links = $('a');
     console.log(links);
    
    var microsecondsPerWeek = 1000 * 60 * 60 * 24 * 7;
    var oneWeekAgo = (new Date).getTime() - microsecondsPerWeek;
    var microsecondsPerMonth = 1000 * 60 * 60 * 24 * 30;
    var oneMonthAgo = (new Date).getTime() - microsecondsPerMonth;
    var today = (new Date).getTime();
    
    for (var i = 0; i < months.length; i++) {
  
  months[i] = new Array(2);
  months[i][0] = oneMonthAgo;
  months[i][1] = today;
  today = today - microsecondsPerMonth;
  oneMonthAgo = oneMonthAgo - microsecondsPerMonth;
  
}
    
    /*var element = $('a[href="https://www.cnn.com/"]');
    var currentElement = element[0];
    
    var nelement = $('a[href="https://www.nytimes.com/"]');
    var nextElement = nelement[0];
    
    var nnelement = $('a[href="https://abcnews.go.com/"]');
    var nextNextElement = nnelement[0];*/

    
    //for (var i = 0; i < 12; i++) {
    
    //console.log("LOOP: ", i);
    //console.log("TODAY: ", today);
    //console.log("ONE MONTH AGO: ", oneMonthAgo);
    
    /*getInfo().then(function () {
        calculateTrends(currentElement[0].getAttribute('id'));
        });*/
        
    /* for (const value of months) {
        console.log(getHistory(value[0], value[1]));
    }*/
    
    //getInfo();
    //main();
    
    function main() {
        return Promise.resolve()
            .then (function () {
                console.log("calling 1");
                return getHistory(months[0][0], months[0][1]) 
            })
            .then ( function (results) {
                console.log('calling 2');
                //femaleMentions.push(results);
                return getHistory(months[1][0], months[1][1])
            })
            .then ( function (results) {
                console.log('calling 3');
                //femaleMentions.push(results);
                return getHistory(months[2][0], months[2][1])
            })
            .then ( function (results) {
                console.log('calling 4');
                //femaleMentions.push(results);
                //console.log("MAIN FEMALE MENTIONS", femaleMentions);
                return getHistory(months[3][0], months[3][1])
            })
        }
    
    //$('a').each ( function () {
        //var currentElement = this;

    //for (var i = 0; i < links.length;i++) {
    
        //var currentElement = links[i];
        //doGeneral();
/*doSomething(currentElement).then(function(result) {
    return doAnotherThing(nextElement);
});*/
//doGeneral();
                        doSomething(links[2], doAnotherThing);
//doAnotherThing(nextElement);
//
//recurse (1, 2, doGeneral);

/*for (var i = 1; i < 3; i++) {
    practice(links[i], doGeneral);
}*/




function practice(currentElement, callback) {
    callback(currentElement);
}

function recurse (start, end, callback) {
    callback(links[start]);
    if (end === 1){
        return 1;
    }

    else {
        return recurse(start + 1, end - 1, callback)
    }
}

function doSomething(currentElement, callback){
    getHistory(months[0][0], months[0][1], currentElement);
    var myVar1 = setInterval(function () {oneMonth(currentElement);}, 10);
    var myVar2 = setInterval(function () {twoMonth(currentElement);}, 10);
    var myVar3 = setInterval(function () {threeMonth(currentElement);}, 10);
    var myVar4 = setInterval(function () {fourMonth(currentElement);}, 10);
    var myVar5 = setInterval(function () {fiveMonth(currentElement);}, 10);
    var myVar6 = setInterval(function () {sixMonth(currentElement);}, 10);
    var myVar7 = setInterval(function () {sevenMonth(currentElement);}, 10);
    var myVar8 = setInterval(function () {eightMonth(currentElement);}, 10);
    var myVar9 = setInterval(function () {nineMonth(currentElement);}, 10);
    var myVar10 = setInterval(function () {tenMonth(currentElement);}, 10);
    var myVar11 = setInterval(function () {elevenMonth(currentElement);}, 10);
    var calc = setInterval(function () {calculate(currentElement);}, 10);
    
    function calculate(currentElement) {
        if (femaleMentions2.length === 12) {
            femaleMentions2 = femaleMentions2.reverse();
            maleMentions2 = maleMentions2.reverse();
            console.log(femaleMentions2);
            console.log(maleMentions2);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions2, maleMentions2, 1, currentElement);
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions2 = [];
                //maleMentions2 = [];
            clearInterval(calc);
            callback(links[1], doGeneral);
            //Promise.resolve();
            //i++;
        }
    }
    function oneMonth (currentElement) {
        if (femaleMentions2.length === 1) {
            getHistory(months[1][0], months[1][1], currentElement);
            clearInterval(myVar1);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function twoMonth (currentElement) {
        if (femaleMentions2.length === 2) {
            getHistory(months[2][0], months[2][1], currentElement);
            clearInterval(myVar2);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function threeMonth (currentElement) {
        if (femaleMentions2.length === 3) {
            getHistory(months[3][0], months[3][1], currentElement);
            clearInterval(myVar3);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fourMonth (currentElement) {
        if (femaleMentions2.length === 4) {
            getHistory(months[4][0], months[4][1], currentElement);
            clearInterval(myVar4);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fiveMonth (currentElement) {
        if (femaleMentions2.length === 5) {
            getHistory(months[5][0], months[5][1], currentElement);
            clearInterval(myVar5);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sixMonth (currentElement) {
        if (femaleMentions2.length === 6) {
            getHistory(months[6][0], months[6][1], currentElement);
            clearInterval(myVar6);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sevenMonth (currentElement) {
        if (femaleMentions2.length === 7) {
            getHistory(months[7][0], months[7][1], currentElement);
            clearInterval(myVar7);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function eightMonth (currentElement) {
        if (femaleMentions2.length === 8) {
            getHistory(months[8][0], months[8][1], currentElement);
            clearInterval(myVar8);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function nineMonth (currentElement) {
        if (femaleMentions2.length === 9) {
            getHistory(months[9][0], months[9][1], currentElement);
            clearInterval(myVar9);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function tenMonth (currentElement) {
        if (femaleMentions2.length === 10) {
            getHistory(months[10][0], months[10][1], currentElement);
            clearInterval(myVar10);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function elevenMonth (currentElement) {
        if (femaleMentions2.length === 11) {
            getHistory(months[11][0], months[11][1], currentElement);
            clearInterval(myVar11);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
}


function doAnotherThing(nextElement, callback){
console.log("in callback function");
    getHistory(months[0][0], months[0][1], nextElement);
    var myVar1 = setInterval(function () {oneMonth(nextElement);}, 10);
    var myVar2 = setInterval(function () {twoMonth(nextElement);}, 10);
    var myVar3 = setInterval(function () {threeMonth(nextElement);}, 10);
    var myVar4 = setInterval(function () {fourMonth(nextElement);}, 10);
    var myVar5 = setInterval(function () {fiveMonth(nextElement);}, 10);
    var myVar6 = setInterval(function () {sixMonth(nextElement);}, 10);
    var myVar7 = setInterval(function () {sevenMonth(nextElement);}, 10);
    var myVar8 = setInterval(function () {eightMonth(nextElement);}, 10);
    var myVar9 = setInterval(function () {nineMonth(nextElement);}, 10);
    var myVar10 = setInterval(function () {tenMonth(nextElement);}, 10);
    var myVar11 = setInterval(function () {elevenMonth(nextElement);}, 10);
    var calc = setInterval(function () {calculate(nextElement);}, 10);
    
    function calculate(nextElement) {
        if (femaleMentions1.length === 12) {
            femaleMentions1 = femaleMentions1.reverse();
            maleMentions1 = maleMentions1.reverse();
            console.log(femaleMentions1);
            console.log(maleMentions1);
            //calculateTrends(nextElement);
            trendGraph(femaleMentions1, maleMentions1, 1, nextElement);
                var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions1 = [];
                //maleMentions1 = [];
            clearInterval(calc);
            callback(links[0], callback);
            //i++;
        }
    }
    function oneMonth (nextElement) {
        if (femaleMentions1.length === 1) {
            getHistory(months[1][0], months[1][1], nextElement);
            clearInterval(myVar1);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function twoMonth (nextElement) {
        if (femaleMentions1.length === 2) {
            getHistory(months[2][0], months[2][1], nextElement);
            clearInterval(myVar2);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function threeMonth (nextElement) {
        if (femaleMentions1.length === 3) {
            getHistory(months[3][0], months[3][1], nextElement);
            clearInterval(myVar3);
        }
    }
    function fourMonth (nextElement) {
        if (femaleMentions1.length === 4) {
            getHistory(months[4][0], months[4][1], nextElement);
            clearInterval(myVar4);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fiveMonth (nextElement) {
        if (femaleMentions1.length === 5) {
            getHistory(months[5][0], months[5][1], nextElement);
            clearInterval(myVar5);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sixMonth (nextElement) {
        if (femaleMentions1.length === 6) {
            getHistory(months[6][0], months[6][1], nextElement);
            clearInterval(myVar6);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sevenMonth (nextElement) {
        if (femaleMentions1.length === 7) {
            getHistory(months[7][0], months[7][1], nextElement);
            clearInterval(myVar7);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function eightMonth (nextElement) {
        if (femaleMentions1.length === 8) {
            getHistory(months[8][0], months[8][1], nextElement);
            clearInterval(myVar8);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function nineMonth (nextElement) {
        if (femaleMentions1.length === 9) {
            getHistory(months[9][0], months[9][1], nextElement);
            clearInterval(myVar9);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function tenMonth (nextElement) {
        if (femaleMentions1.length === 10) {
            getHistory(months[10][0], months[10][1], nextElement);
            clearInterval(myVar10);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function elevenMonth (nextElement) {
        if (femaleMentions1.length === 11) {
            getHistory(months[11][0], months[11][1], nextElement);
            clearInterval(myVar11);
            var paras = document.getElementsByClassName(nextElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
}

var countlinks = 0;
    
function doGeneral(currentElement, callback){
    getHistory(months[0][0], months[0][1], currentElement);
    var myVar1 = setInterval(function () {oneMonth(currentElement);}, 1000);
    var myVar2 = setInterval(function () {twoMonth(currentElement);}, 1000);
    var myVar3 = setInterval(function () {threeMonth(currentElement);}, 1000);
    var myVar4 = setInterval(function () {fourMonth(currentElement);}, 1000);
    var myVar5 = setInterval(function () {fiveMonth(currentElement);}, 1000);
    var myVar6 = setInterval(function () {sixMonth(currentElement);}, 1000);
    var myVar7 = setInterval(function () {sevenMonth(currentElement);}, 1000);
    var myVar8 = setInterval(function () {eightMonth(currentElement);}, 1000);
    var myVar9 = setInterval(function () {nineMonth(currentElement);}, 1000);
    var myVar10 = setInterval(function () {tenMonth(currentElement);}, 1000);
    var myVar11 = setInterval(function () {elevenMonth(currentElement);}, 1000);
    var calc = setInterval(function () {calculate(currentElement);}, 1000);
    
    function calculate(currentElement) {
        //var link = currentElement.getAttribute('href');
        var index = links.index(currentElement);
        //console.log(index);
        if (index === 0) {
            if (femaleMentions.length === 12) {
            countlinks++;
            femaleMentions = femaleMentions.reverse();
            maleMentions = maleMentions.reverse();
            console.log(femaleMentions);
            console.log(maleMentions);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions, maleMentions, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 9) {
                callback(links[countlinks+2], callback);
            }
            //i++;
        }
        }
        if (index === 1) {
            if (femaleMentions1.length === 12) {
            countlinks++;
            femaleMentions1 = femaleMentions1.reverse();
            maleMentions1 = maleMentions1.reverse();
            console.log(femaleMentions1);
            console.log(maleMentions1);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions1, maleMentions1, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
            //i++;
        }
        }
        else if (index === 2) {
            if (femaleMentions2.length === 12) {
            countlinks++;
            femaleMentions2 = femaleMentions2.reverse();
            maleMentions2 = maleMentions2.reverse();
            console.log(femaleMentions2);
            console.log(maleMentions2);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions2, maleMentions2, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
            //i++;
        }
    }
        
        
        else if (index === 3 ) {
        if (femaleMentions3.length === 12) {
        countlinks++;
            femaleMentions3 = femaleMentions3.reverse();
            maleMentions3 = maleMentions3.reverse();
            console.log(femaleMentions3);
            console.log(maleMentions3);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions3, maleMentions3, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
            //i++;
        }
    
    }
    
    if (index === 4) {
    if (femaleMentions4.length === 12) {
    countlinks++;
        femaleMentions4 = femaleMentions4.reverse();
        maleMentions4 = maleMentions4.reverse();
        console.log("4", femaleMentions4);
        console.log("4", maleMentions4);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions4, maleMentions4, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
    }
}
if (index === 5) {
    if (femaleMentions5.length === 12) {
    countlinks++;
        femaleMentions5 = femaleMentions5.reverse();
        maleMentions5 = maleMentions5.reverse();
        console.log("5", femaleMentions5);
        console.log("5", maleMentions5);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions5, maleMentions5, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
    }
}
if (index === 6) {
    if (femaleMentions6.length === 12) {
    countlinks++;
        femaleMentions6 = femaleMentions6.reverse();
        maleMentions6 = maleMentions6.reverse();
        console.log("6", femaleMentions6);
        console.log("6", maleMentions6);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions6, maleMentions6, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
    }
}
if (index === 7) {
    if (femaleMentions7.length === 12) {
    countlinks++;
        femaleMentions7 = femaleMentions7.reverse();
        maleMentions7 = maleMentions7.reverse();
        console.log("7", femaleMentions7);
        console.log("7", maleMentions7);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions7, maleMentions7, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
    }
}
if (index === 8) {
    if (femaleMentions8.length === 12) {
    countlinks++;
        femaleMentions8 = femaleMentions8.reverse();
        maleMentions8 = maleMentions8.reverse();
        console.log("8", femaleMentions8);
        console.log("8", maleMentions8);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions8, maleMentions8, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
    }
}
if (index === 9) {
    if (femaleMentions9.length === 12) {
    countlinks++;
        femaleMentions9 = femaleMentions9.reverse();
        maleMentions9 = maleMentions9.reverse();
        console.log("9", femaleMentions9);
        console.log("9", maleMentions9);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions9, maleMentions9, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                callback(links[countlinks+2], callback);
            }
    }
}
    
    }
    function oneMonth (currentElement) {
        if (femaleMentions.length === 1 || femaleMentions3.length === 1 || femaleMentions4.length === 1 || femaleMentions5.length === 1 || femaleMentions6.length === 1 || femaleMentions7.length === 1 || femaleMentions8.length === 1 || femaleMentions9.length === 1) {
            getHistory(months[1][0], months[1][1], currentElement);
            clearInterval(myVar1);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function twoMonth (currentElement) {
            if (femaleMentions.length === 2 || femaleMentions3.length === 2 || femaleMentions4.length === 2 || femaleMentions5.length === 2 || femaleMentions6.length === 2 || femaleMentions7.length === 2 || femaleMentions8.length === 2 || femaleMentions9.length === 2) {

            getHistory(months[2][0], months[2][1], currentElement);
            clearInterval(myVar2);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function threeMonth (currentElement) {
            if (femaleMentions.length === 3 || femaleMentions3.length === 3 || femaleMentions4.length === 3 || femaleMentions5.length === 3 || femaleMentions6.length === 3 || femaleMentions7.length === 3 || femaleMentions8.length === 3 || femaleMentions9.length === 3) {

            getHistory(months[3][0], months[3][1], currentElement);
            clearInterval(myVar3);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fourMonth (currentElement) {
            if (femaleMentions.length === 4 || femaleMentions3.length === 4 || femaleMentions4.length === 4 || femaleMentions5.length === 4 || femaleMentions6.length === 4 || femaleMentions7.length === 4 || femaleMentions8.length === 4 || femaleMentions9.length === 4) {

            getHistory(months[4][0], months[4][1], currentElement);
            clearInterval(myVar4);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fiveMonth (currentElement) {
            if (femaleMentions.length === 5 || femaleMentions3.length === 5 || femaleMentions4.length === 5 || femaleMentions5.length === 5 || femaleMentions6.length === 5 || femaleMentions7.length === 5 || femaleMentions8.length === 5 || femaleMentions9.length === 5) {

            getHistory(months[5][0], months[5][1], currentElement);
            clearInterval(myVar5);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sixMonth (currentElement) {
            if (femaleMentions.length === 6 || femaleMentions3.length === 6 || femaleMentions4.length === 6 || femaleMentions5.length === 6 || femaleMentions6.length === 6 || femaleMentions7.length === 6 || femaleMentions8.length === 6 || femaleMentions9.length === 6) {

            getHistory(months[6][0], months[6][1], currentElement);
            clearInterval(myVar6);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sevenMonth (currentElement) {
            if (femaleMentions.length === 7 || femaleMentions3.length === 7 || femaleMentions4.length === 7 || femaleMentions5.length === 7 || femaleMentions6.length === 7 || femaleMentions7.length === 7 || femaleMentions8.length === 7 || femaleMentions9.length === 7) {

            getHistory(months[7][0], months[7][1], currentElement);
            clearInterval(myVar7);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function eightMonth (currentElement) {
            if (femaleMentions.length === 8 || femaleMentions3.length === 8 || femaleMentions4.length === 8 || femaleMentions5.length === 8 || femaleMentions6.length === 8 || femaleMentions7.length === 8 || femaleMentions8.length === 8 || femaleMentions9.length === 8) {

            getHistory(months[8][0], months[8][1], currentElement);
            clearInterval(myVar8);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function nineMonth (currentElement) {
            if (femaleMentions.length === 9 || femaleMentions3.length === 9 || femaleMentions4.length === 9 || femaleMentions5.length === 9 || femaleMentions6.length === 9 || femaleMentions7.length === 9 || femaleMentions8.length === 9 || femaleMentions9.length === 9) {

            getHistory(months[9][0], months[9][1], currentElement);
            clearInterval(myVar9);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function tenMonth (currentElement) {
            if (femaleMentions.length === 10 || femaleMentions3.length === 10 || femaleMentions4.length === 10 || femaleMentions5.length === 10 || femaleMentions6.length === 10 || femaleMentions7.length === 10 || femaleMentions8.length === 10 || femaleMentions9.length === 10) {

            getHistory(months[10][0], months[10][1], currentElement);
            clearInterval(myVar10);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function elevenMonth (currentElement) {
            if (femaleMentions.length === 11 || femaleMentions3.length === 11 || femaleMentions4.length === 11 || femaleMentions5.length === 11 || femaleMentions6.length === 11 || femaleMentions7.length === 11 || femaleMentions8.length === 11 || femaleMentions9.length === 11) {

            getHistory(months[11][0], months[11][1], currentElement);
            clearInterval(myVar11);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    }
    
    //});
    //}
    //getHistory(months[2][0], months[2][1]);
    //getHistory(months[3][0], months[3][1]);

    
    async function getInfo() {
        for (const value of months) {
            /*const f_value = await getHistory(value[0], value[1]);
            var m_value = 100.0 - f_value;
            console.log('F value', f_value);
            f_array.push(f_value);
            m_array.push(m_value);*/
            const items = await getHistory(value[0], value[1]);
            console.log(items);
                /*console.log('F value', f_value);
                f_array.push(10);
                        console.log('f array');
        console.log(f_array);
        console.log('m array');
        console.log(m_array);*/
            //});
        }
        /*console.log('time array');
        console.log(hist_array);*/
        
        /*for (const item of hist_array) {
            const f_value = await getFPct(item);
            var m_value = 100.0 - f_value;
            f_array.push(f_value);
            m_array.push(m_value);
        }*/

    }
    
    //months.forEach(function (item, index) {
     //   getHistory(item[0], item[1]);
    //});
    
      function getHistory(start, end, currentElement) {
        /*var result = 0;
        console.log("Month Count: ", monthCount);
        monthCount++;
        console.log("TODAY: ", end);
        console.log("ONE MONTH AGO: ", start);
        var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
        //var totalCount = parseInt(thisElement.getAttribute('name'));
        //totalCount++;
        thisElement.setAttribute('name', 0);
        thisElement.setAttribute('id', 0);
        var temp_array = [];*/
        //var f_pct;
        var linkstring = currentElement.getAttribute('href');
      chrome.history.search({
            'text': linkstring,              // Return every history item....
            'startTime': start,  // that was accessed less than one week ago.
            'endTime': end,
            'maxResults': 1000000
          },
         function(historyItems) {
            //return historyItems;
            console.log("getting history");
            console.log(start);
            console.log(end);
            //for (var i = 0; i < historyItems.length; i++) {
                //var url = historyItems[i].url;
                //console.log(await getFPct(url));
                //await getFPct(url);
                
                /*var processVisitsWithUrl = function (url) {
                    return function (visitItems) {
                        processVisits (url, visitItems);
                    };
                };*/
            //}
            
            
             getFPct(historyItems, currentElement);
            //chrome.history.getVisits({url: url}, processVisitsWithUrl(url));
            //console.log(historyItems);
            //getFPct(historyItems);
            //return historyItems;
        });
    }
    
    /*var processVisits = function (url, visitItems) {
        for (var i = 0, ie = visitItems.length; i < ie; i++) {
            console.log(getFPct(url));
            console.log('processing');
        
        }
    
    };  */
    }
    
    var f_pct;
     function getFPct (historyItems, currentElement) {
            console.log('getting FPCT');
            //var f_pct;
            //var currentElement = $('a[href="https://www.yahoo.com/"]');
            var linkstring = currentElement.getAttribute('href');
            //var links = $('a');
            var index = links.index(currentElement);
            
            if (historyItems.length === 0) {
                    f_pct = 0;
                    //femaleMentions.push(f_pct);
                    m_pct = 0;
                    //maleMentions.push(f_pct);
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                    buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                    //return;
                }
            
            $.each(historyItems, async function (index, value) {
                var url = value.url;
                var timeVisited = value.lastVisitTime;
                var a = document.createElement('a');
                document.body.appendChild(a);
                a.outerHTML = "<a class="+linkstring+" style=display:none href=" + url + ">";
                console.log("HISTORY LENGTH", historyItems.length);
                historylength = historyItems.length;
           
              
              
              /*var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
              var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);*/
              
           $.get(url, function(data) {
                    
              console.log("LINK IS", url);
              console.log("LINKSTRING", linkstring);
               malecount = 0;
               femalecount = 0;
               
              url_femalecount = 0;
              url_malecount = 0;
              
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
               var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
              /*var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);*/
              
               fMajority = applyContent(doc);
              
              }).fail(function() {
                console.log("error");
                var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                var totalCount = parseInt(thisElement.getAttribute('name'));
                totalCount++;
                thisElement.setAttribute('name', totalCount);
                fMajority = 50;
                if (fMajority >= 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    

                    
                }
                else if (fMajority < 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
                
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log(array_length);
                
                var index = links.index(currentElement);
                console.log("INDEX OF ", currentElement.getAttribute('href'), index);
                
                
                
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                
                
                 f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                /*if ( linkstring === 'https://www.yahoo.com/') {
                    historylength = historyItems.length - 20;
                }*/
                if (historylength === 1) {
                    historylength += 1;
                }
                
                if (array_length === 1) {
                    array_length++;
                }
                
                if (finalcount === array_length ){
                
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                //console.log('FEMALE ARRAY');
                //console.log(femaleMentions);
                //console.log('MALE ARRAY');
                //console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                console.log(f_pct);
                currentElement.setAttribute('id', 0);
                currentElement.setAttribute('name', 0);
                }
                }).then( function () {
                console.log('calculating percentages');
                var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);
              console.log(fMajority);
              if (isNaN(fMajority)) {
                fMajority = 0;
            }
            if (fMajority >= 0) {
                 var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    /*var totalCount = parseInt(thisElement.getAttribute('name'));
                    totalCount++;
                    thisElement.setAttribute('name', totalCount);*/
                if (fMajority >= 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    

                    
                }
                else if (fMajority < 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
                
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log(array_length);
                
                var index = links.index(currentElement);
                console.log("INDEX OF ", currentElement.getAttribute('href'), index);
                
                
                
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                
                
                 f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                /*if ( linkstring === 'https://www.yahoo.com/') {
                    historylength = historyItems.length - 20;
                }*/
                if (historylength === 1) {
                    historylength += 1;
                }
                
                if (array_length === 1) {
                    array_length++;
                }
                
                if (finalcount === array_length - 1){
                
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                //console.log('FEMALE ARRAY');
                //console.log(femaleMentions);
                //console.log('MALE ARRAY');
                //console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                console.log(f_pct);
                currentElement.setAttribute('id', 0);
                currentElement.setAttribute('name', 0);
                //return f_pct;
                //return Promise.resolve(f_pct);
                //return f_pct;
                //return result = f_pct;
                //}
                //return f_pct;
                //return f_pct;;
                //return Promise.resolve(f_pct);
                }
              
              }
              
                
              });
            
            });
        //});
        //return f_pct;
        //return 20;
        }
        
        //today = today - microsecondsPerMonth;
        //oneMonthAgo = oneMonthAgo - microsecondsPerMonth;
        //}
    //}
          
            /*for (var i = 0; i < historyItems.length; ++i) {
              var url = historyItems[i].url;
              var a = document.createElement('a');
              document.body.appendChild(a);
              a.outerHTML = "<a class='removable' style=display:none href=" + url + ">";
              
            }
            
            url_femalecount = 0;
            url_malecount = 0;
            totalFemaleMentions = 0;
            count = 0;
            totalMaleMentions = 0;
    $('a[href*='+CSS.escape('yahoo.com')+']').each( function () {
          
          var jArray = $('a[href*='+CSS.escape('yahoo.com')+']');
          var array_length = jArray.length;
          var link = this.getAttribute('href');
          
    
          $.get(link, function(data) {
                    
              console.log("LINK IS", link);
               malecount = 0;
               femalecount = 0;
               
              url_femalecount = 0;
              url_malecount = 0;
              
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
              
               fMajority = applyContent(doc);
              count++;
              var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
              var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);
              

              }).then( function () {
                if (fMajority >= 0) {
                if (fMajority >= 50) {
                    
                    
                    url_femalecount = url_femalecount + 1;
                    var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    
                    femalecount++;

                    
                }
                else if (fMajority < 50) {
                    
                    malecountarray.push(fMajority);
                    
                    url_malecount = url_malecount + 1;
                    var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
              
              }
              
                var jArray = $('a[href*='+CSS.escape('yahoo.com')+']');
                var array_length = jArray.length;
                console.log("LENGTH", 'https://www.yahoo.com/', array_length);

                
                var finalcount = parseInt(currentElement[0].getAttribute('name'));
                if (finalcount === array_length) {
                var females = parseInt(currentElement[0].getAttribute('id'));
                
                var f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                //if (finalcount === array_length){
                femaleMentions.push(f_pct);
                maleMentions.push(m_pct);
                console.log('FEMALE ARRAY');
                console.log(femaleMentions);
                console.log('MALE ARRAY');
                console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement[0].getAttribute('id'), 'https://www.yahoo.com/');
                //}
                }
                //console.log('this is the current count');
                //console.log(linkstring);
                //console.log(count);
                //console.log(array_length);
                /*if (finalcount === array_length) {
                    //console.log('building chart');
                    //console.log(linkstring);
                    //console.log(totalFemaleMentions);
                    //console.log(count);
                    
                  var realf_pct = Math.round((totalFemaleMentions /(count * 100.0)) * 100);
                  var realm_pct = 100.0 - realf_pct;
                  buildChart(realf_pct, realm_pct, currentElement.getAttribute('id'), linkstring);
                }

                console.log("FEMALE MENTIONS", femaleMentions.length);
                console.log("MALE MENTIONS", maleMentions.length);
                
                if (femaleMentions.length === 12 && maleMentions.length === 12) {
                    
                    //console.log(currentElement.getAttribute('id'));
                    calculateTrends(currentElement[0].getAttribute('id'));
                    //femaleMentions = [];
                    //maleMentions = [];
                    
                }
                });
                
            });
      });
      


      today = today - oneMonthAgo;
      oneMonthAgo = oneMonthAgo - 1000*60*60*24*30;
      //femaleMentions = [];
      //maleMentions = [];
      }


    
}*/

function doSomething(currentElement, callback){
    getHistory(months[0][0], months[0][1], currentElement);
    var myVar1 = setInterval(function () {oneMonth(currentElement);}, 10);
    var myVar2 = setInterval(function () {twoMonth(currentElement);}, 10);
    var myVar3 = setInterval(function () {threeMonth(currentElement);}, 10);
    var myVar4 = setInterval(function () {fourMonth(currentElement);}, 10);
    var myVar5 = setInterval(function () {fiveMonth(currentElement);}, 10);
    var myVar6 = setInterval(function () {sixMonth(currentElement);}, 10);
    var myVar7 = setInterval(function () {sevenMonth(currentElement);}, 10);
    var myVar8 = setInterval(function () {eightMonth(currentElement);}, 10);
    var myVar9 = setInterval(function () {nineMonth(currentElement);}, 10);
    var myVar10 = setInterval(function () {tenMonth(currentElement);}, 10);
    var myVar11 = setInterval(function () {elevenMonth(currentElement);}, 10);
    var calc = setInterval(function () {calculate(currentElement);}, 10);
    
    function calculate(currentElement) {
        if (femaleMentions2.length === 12) {
            femaleMentions2 = femaleMentions2.reverse();
            maleMentions2 = maleMentions2.reverse();
            console.log(femaleMentions2);
            console.log(maleMentions2);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions2, maleMentions2, 1, currentElement);
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions2 = [];
                //maleMentions2 = [];
            clearInterval(calc);
            //callback(links[1], doGeneral);
            callback();
            //Promise.resolve();
            //i++;
        }
    }
    function oneMonth (currentElement) {
        if (femaleMentions2.length === 1) {
            getHistory(months[1][0], months[1][1], currentElement);
            clearInterval(myVar1);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function twoMonth (currentElement) {
        if (femaleMentions2.length === 2) {
            getHistory(months[2][0], months[2][1], currentElement);
            clearInterval(myVar2);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function threeMonth (currentElement) {
        if (femaleMentions2.length === 3) {
            getHistory(months[3][0], months[3][1], currentElement);
            clearInterval(myVar3);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fourMonth (currentElement) {
        if (femaleMentions2.length === 4) {
            getHistory(months[4][0], months[4][1], currentElement);
            clearInterval(myVar4);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fiveMonth (currentElement) {
        if (femaleMentions2.length === 5) {
            getHistory(months[5][0], months[5][1], currentElement);
            clearInterval(myVar5);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sixMonth (currentElement) {
        if (femaleMentions2.length === 6) {
            getHistory(months[6][0], months[6][1], currentElement);
            clearInterval(myVar6);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sevenMonth (currentElement) {
        if (femaleMentions2.length === 7) {
            getHistory(months[7][0], months[7][1], currentElement);
            clearInterval(myVar7);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function eightMonth (currentElement) {
        if (femaleMentions2.length === 8) {
            getHistory(months[8][0], months[8][1], currentElement);
            clearInterval(myVar8);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function nineMonth (currentElement) {
        if (femaleMentions2.length === 9) {
            getHistory(months[9][0], months[9][1], currentElement);
            clearInterval(myVar9);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function tenMonth (currentElement) {
        if (femaleMentions2.length === 10) {
            getHistory(months[10][0], months[10][1], currentElement);
            clearInterval(myVar10);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function elevenMonth (currentElement) {
        if (femaleMentions2.length === 11) {
            getHistory(months[11][0], months[11][1], currentElement);
            clearInterval(myVar11);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    
    function getHistory(start, end, currentElement) {
        /*var result = 0;
        console.log("Month Count: ", monthCount);
        monthCount++;
        console.log("TODAY: ", end);
        console.log("ONE MONTH AGO: ", start);
        var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
        //var totalCount = parseInt(thisElement.getAttribute('name'));
        //totalCount++;
        thisElement.setAttribute('name', 0);
        thisElement.setAttribute('id', 0);
        var temp_array = [];*/
        //var f_pct;
        var linkstring = currentElement.getAttribute('href');
      chrome.history.search({
            'text': linkstring,              // Return every history item....
            'startTime': start,  // that was accessed less than one week ago.
            'endTime': end,
            'maxResults': 1000000
          },
         function(historyItems) {
            //return historyItems;
            console.log("getting history");
            console.log(start);
            console.log(end);
            //for (var i = 0; i < historyItems.length; i++) {
                //var url = historyItems[i].url;
                //console.log(await getFPct(url));
                //await getFPct(url);
                
                /*var processVisitsWithUrl = function (url) {
                    return function (visitItems) {
                        processVisits (url, visitItems);
                    };
                };*/
            //}
            
            
             getFPct(historyItems, currentElement);
            //chrome.history.getVisits({url: url}, processVisitsWithUrl(url));
            //console.log(historyItems);
            //getFPct(historyItems);
            //return historyItems;
        });
    }
    
    /*var processVisits = function (url, visitItems) {
        for (var i = 0, ie = visitItems.length; i < ie; i++) {
            console.log(getFPct(url));
            console.log('processing');
        
        }
    
    };  */
    }
    
    var f_pct;
     function getFPct (historyItems, currentElement) {
            console.log('getting FPCT');
            //var f_pct;
            //var currentElement = $('a[href="https://www.yahoo.com/"]');
            var linkstring = currentElement.getAttribute('href');
            //var links = $('a');
            var index = links.index(currentElement);
            
            if (historyItems.length === 0) {
                    f_pct = 0;
                    //femaleMentions.push(f_pct);
                    m_pct = 0;
                    //maleMentions.push(f_pct);
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                    buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                    //return;
                }
            
            $.each(historyItems, async function (index, value) {
                var url = value.url;
                var timeVisited = value.lastVisitTime;
                var a = document.createElement('a');
                document.body.appendChild(a);
                a.outerHTML = "<a class="+linkstring+" style=display:none href=" + url + ">";
                console.log("HISTORY LENGTH", historyItems.length);
                historylength = historyItems.length;
           
              
              
              /*var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
              var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);*/
              
           $.get(url, function(data) {
                    
              console.log("LINK IS", url);
              console.log("LINKSTRING", linkstring);
               malecount = 0;
               femalecount = 0;
               
              url_femalecount = 0;
              url_malecount = 0;
              
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
               var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
              /*var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);*/
              
               fMajority = applyContent(doc);
              
              }).fail(function() {
                console.log("error");
                var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                var totalCount = parseInt(thisElement.getAttribute('name'));
                totalCount++;
                thisElement.setAttribute('name', totalCount);
                fMajority = 50;
                if (fMajority >= 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    

                    
                }
                else if (fMajority < 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
                
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log(array_length);
                
                var index = links.index(currentElement);
                console.log("INDEX OF ", currentElement.getAttribute('href'), index);
                
                
                
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                
                
                 f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                /*if ( linkstring === 'https://www.yahoo.com/') {
                    historylength = historyItems.length - 20;
                }*/
                if (historylength === 1) {
                    historylength += 1;
                }
                
                if (array_length === 1) {
                    array_length++;
                }
                
                if (finalcount === array_length - 1 ){
                
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                //console.log('FEMALE ARRAY');
                //console.log(femaleMentions);
                //console.log('MALE ARRAY');
                //console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                console.log(f_pct);
                currentElement.setAttribute('id', 0);
                currentElement.setAttribute('name', 0);
                }
                }).then( function () {
                console.log('calculating percentages');
                var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);
              console.log(fMajority);
              if (isNaN(fMajority)) {
                fMajority = 0;
            }
             if (fMajority >= 0) {
                 var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    /*var totalCount = parseInt(thisElement.getAttribute('name'));
                    totalCount++;
                    thisElement.setAttribute('name', totalCount);*/
                if (fMajority >= 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    

                    
                }
                else if (fMajority < 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
                
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log(array_length);
                
                var index = links.index(currentElement);
                console.log("INDEX OF ", currentElement.getAttribute('href'), index);
                
                
                
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                
                
                 f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                /*if ( linkstring === 'https://www.yahoo.com/') {
                    historylength = historyItems.length - 20;
                }*/
                if (historylength === 1) {
                    historylength += 1;
                }
                
                if (array_length === 1) {
                    array_length++;
                }
                
                if (finalcount === array_length - 1){
                
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                //console.log('FEMALE ARRAY');
                //console.log(femaleMentions);
                //console.log('MALE ARRAY');
                //console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                console.log(f_pct);
                currentElement.setAttribute('id', 0);
                currentElement.setAttribute('name', 0);
                //return f_pct;
                //return Promise.resolve(f_pct);
                //return f_pct;
                //return result = f_pct;
                //}
                //return f_pct;
                //return f_pct;;
                //return Promise.resolve(f_pct);
                }
              
              }
              
                
              });
            
            });
        }

var countlinks = 0;

function doGeneral(currentElement, callback){
    getHistory(months[0][0], months[0][1], currentElement);
    var myVar1 = setInterval(function () {oneMonth(currentElement);}, 1000);
    var myVar2 = setInterval(function () {twoMonth(currentElement);}, 1000);
    var myVar3 = setInterval(function () {threeMonth(currentElement);}, 1000);
    var myVar4 = setInterval(function () {fourMonth(currentElement);}, 1000);
    var myVar5 = setInterval(function () {fiveMonth(currentElement);}, 1000);
    var myVar6 = setInterval(function () {sixMonth(currentElement);}, 1000);
    var myVar7 = setInterval(function () {sevenMonth(currentElement);}, 1000);
    var myVar8 = setInterval(function () {eightMonth(currentElement);}, 1000);
    var myVar9 = setInterval(function () {nineMonth(currentElement);}, 1000);
    var myVar10 = setInterval(function () {tenMonth(currentElement);}, 1000);
    var myVar11 = setInterval(function () {elevenMonth(currentElement);}, 1000);
    var calc = setInterval(function () {calculate(currentElement);}, 1000);
    
    function calculate(currentElement) {
        //var link = currentElement.getAttribute('href');
        var index = links.index(currentElement);
        //console.log(index);
        if (index === 0) {
            if (femaleMentions.length === 12) {
            countlinks++;
            femaleMentions = femaleMentions.reverse();
            maleMentions = maleMentions.reverse();
            console.log(femaleMentions);
            console.log(maleMentions);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions, maleMentions, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 9) {
                //callback(links[countlinks+2], callback);
                callback();
            }
            //i++;
        }
        }
        if (index === 1) {
            if (femaleMentions1.length === 12) {
            countlinks++;
            femaleMentions1 = femaleMentions1.reverse();
            maleMentions1 = maleMentions1.reverse();
            console.log(femaleMentions1);
            console.log(maleMentions1);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions1, maleMentions1, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
            //i++;
        }
        }
        else if (index === 2) {
            if (femaleMentions2.length === 12) {
            countlinks++;
            femaleMentions2 = femaleMentions2.reverse();
            maleMentions2 = maleMentions2.reverse();
            console.log(femaleMentions2);
            console.log(maleMentions2);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions2, maleMentions2, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
            //i++;
        }
    }
        
        
        else if (index === 3 ) {
        if (femaleMentions3.length === 12) {
        countlinks++;
            femaleMentions3 = femaleMentions3.reverse();
            maleMentions3 = maleMentions3.reverse();
            console.log(femaleMentions3);
            console.log(maleMentions3);
            //calculateTrends(currentElement);
            trendGraph(femaleMentions3, maleMentions3, 1, currentElement);
            var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
                var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
                while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
                //femaleMentions = [];
                //maleMentions = [];
            clearInterval(calc);
            //if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            //}
            //i++;
        }
    
    }
    
    if (index === 4) {
    if (femaleMentions4.length === 12) {
    countlinks++;
        femaleMentions4 = femaleMentions4.reverse();
        maleMentions4 = maleMentions4.reverse();
        console.log("4", femaleMentions4);
        console.log("4", maleMentions4);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions4, maleMentions4, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        //if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
          //  }
    }
}
if (index === 5) {
    if (femaleMentions5.length === 12) {
    countlinks++;
        femaleMentions5 = femaleMentions5.reverse();
        maleMentions5 = maleMentions5.reverse();
        console.log("5", femaleMentions5);
        console.log("5", maleMentions5);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions5, maleMentions5, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        //if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
          //  }
    }
}
if (index === 6) {
    if (femaleMentions6.length === 12) {
    countlinks++;
        femaleMentions6 = femaleMentions6.reverse();
        maleMentions6 = maleMentions6.reverse();
        console.log("6", femaleMentions6);
        console.log("6", maleMentions6);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions6, maleMentions6, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        //if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
           // }
    }
}
if (index === 7) {
    if (femaleMentions7.length === 12) {
    countlinks++;
        femaleMentions7 = femaleMentions7.reverse();
        maleMentions7 = maleMentions7.reverse();
        console.log("7", femaleMentions7);
        console.log("7", maleMentions7);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions7, maleMentions7, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        //if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
          //  }
    }
}
if (index === 8) {
    if (femaleMentions8.length === 12) {
    countlinks++;
        femaleMentions8 = femaleMentions8.reverse();
        maleMentions8 = maleMentions8.reverse();
        console.log("8", femaleMentions8);
        console.log("8", maleMentions8);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions8, maleMentions8, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
       // if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
         //   }
    }
}
if (index === 9) {
    if (femaleMentions9.length === 12) {
    countlinks++;
        femaleMentions9 = femaleMentions9.reverse();
        maleMentions9 = maleMentions9.reverse();
        console.log("9", femaleMentions9);
        console.log("9", maleMentions9);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions9, maleMentions9, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 10) {
    if (femaleMentions10.length === 12) {
    countlinks++;
        femaleMentions10 = femaleMentions10.reverse();
        maleMentions10 = maleMentions10.reverse();
        console.log("10", femaleMentions10);
        console.log("10", maleMentions10);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions10, maleMentions10, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 11) {
    if (femaleMentions11.length === 12) {
    countlinks++;
        femaleMentions11 = femaleMentions11.reverse();
        maleMentions11 = maleMentions11.reverse();
        console.log("11", femaleMentions11);
        console.log("11", maleMentions11);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions11, maleMentions11, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 12) {
    if (femaleMentions12.length === 12) {
    countlinks++;
        femaleMentions12 = femaleMentions12.reverse();
        maleMentions12 = maleMentions12.reverse();
        console.log("12", femaleMentions12);
        console.log("12", maleMentions12);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions12, maleMentions12, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 13) {
    if (femaleMentions13.length === 12) {
    countlinks++;
        femaleMentions13 = femaleMentions13.reverse();
        maleMentions13 = maleMentions13.reverse();
        console.log("13", femaleMentions13);
        console.log("13", maleMentions13);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions13, maleMentions13, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 14) {
    if (femaleMentions14.length === 12) {
    countlinks++;
        femaleMentions14 = femaleMentions14.reverse();
        maleMentions14 = maleMentions14.reverse();
        console.log("14", femaleMentions14);
        console.log("14", maleMentions14);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions14, maleMentions14, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 15) {
    if (femaleMentions15.length === 12) {
    countlinks++;
        femaleMentions15 = femaleMentions15.reverse();
        maleMentions15 = maleMentions15.reverse();
        console.log("15", femaleMentions15);
        console.log("15", maleMentions15);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions15, maleMentions15, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 16) {
    if (femaleMentions16.length === 12) {
    countlinks++;
        femaleMentions16 = femaleMentions16.reverse();
        maleMentions16 = maleMentions16.reverse();
        console.log("16", femaleMentions16);
        console.log("16", maleMentions16);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions16, maleMentions16, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 17) {
    if (femaleMentions17.length === 12) {
    countlinks++;
        femaleMentions17 = femaleMentions17.reverse();
        maleMentions17 = maleMentions17.reverse();
        console.log("17", femaleMentions17);
        console.log("17", maleMentions17);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions17, maleMentions17, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 18) {
    if (femaleMentions18.length === 12) {
    countlinks++;
        femaleMentions18 = femaleMentions18.reverse();
        maleMentions18 = maleMentions18.reverse();
        console.log("18", femaleMentions18);
        console.log("18", maleMentions18);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions18, maleMentions18, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}

if (index === 19) {
    if (femaleMentions19.length === 12) {
    countlinks++;
        femaleMentions19 = femaleMentions19.reverse();
        maleMentions19 = maleMentions19.reverse();
        console.log("19", femaleMentions19);
        console.log("19", maleMentions19);
        //calculateTrends(currentElement);
        trendGraph(femaleMentions19, maleMentions19, 1, currentElement);
        var loader = document.getElementById('loader');
        loader.style.display = 'none';
        $('#trendContainer').show();
        var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
        while (paras[0]) {
             paras[0].parentNode.removeChild(paras[0]);
        }
        clearInterval(calc);
        if (countlinks < 8) {
                //callback(links[countlinks+2], callback);
                callback();
            }
    }
}
    
    }
    
    function oneMonth (currentElement) {
        if (femaleMentions.length === 1 || femaleMentions3.length === 1 || femaleMentions4.length === 1 || femaleMentions5.length === 1 || femaleMentions6.length === 1 || femaleMentions7.length === 1 || femaleMentions8.length === 1 || femaleMentions9.length === 1 || femaleMentions10.length === 1 || femaleMentions11.length === 1 || femaleMentions12.length === 1 || femaleMentions13.length === 1 || femaleMentions14.length === 1 || femaleMentions15.length === 1 || femaleMentions16.length === 1 || femaleMentions17.length === 1 || femaleMentions18.length === 1 || femaleMentions19.length === 1) {
            getHistory(months[1][0], months[1][1], currentElement);
            clearInterval(myVar1);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function twoMonth (currentElement) {
            if (femaleMentions.length === 2 || femaleMentions3.length === 2 || femaleMentions4.length === 2 || femaleMentions5.length === 2 || femaleMentions6.length === 2 || femaleMentions7.length === 2 || femaleMentions8.length === 2 || femaleMentions9.length === 2 || femaleMentions10.length === 2 || femaleMentions11.length === 2 || femaleMentions12.length === 2 || femaleMentions13.length === 2 || femaleMentions14.length === 2 || femaleMentions15.length === 2 || femaleMentions16.length === 2 || femaleMentions17.length === 2 || femaleMentions18.length === 2 || femaleMentions19.length === 2) {

            getHistory(months[2][0], months[2][1], currentElement);
            clearInterval(myVar2);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function threeMonth (currentElement) {
            if (femaleMentions.length === 3 || femaleMentions3.length === 3 || femaleMentions4.length === 3 || femaleMentions5.length === 3 || femaleMentions6.length === 3 || femaleMentions7.length === 3 || femaleMentions8.length === 3 || femaleMentions9.length === 3 || femaleMentions10.length === 3 || femaleMentions11.length === 3 || femaleMentions12.length === 3 || femaleMentions13.length === 3 || femaleMentions14.length === 3 || femaleMentions15.length === 3 || femaleMentions16.length === 3 || femaleMentions17.length === 3 || femaleMentions18.length === 3 || femaleMentions19.length === 3) {

            getHistory(months[3][0], months[3][1], currentElement);
            clearInterval(myVar3);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fourMonth (currentElement) {
            if (femaleMentions.length === 4 || femaleMentions3.length === 4 || femaleMentions4.length === 4 || femaleMentions5.length === 4 || femaleMentions6.length === 4 || femaleMentions7.length === 4 || femaleMentions8.length === 4 || femaleMentions9.length === 4 || femaleMentions10.length === 4 || femaleMentions11.length === 4 || femaleMentions12.length === 4 || femaleMentions13.length === 4 || femaleMentions14.length === 4 || femaleMentions15.length === 4 || femaleMentions16.length === 4 || femaleMentions17.length === 4 || femaleMentions18.length === 4 || femaleMentions19.length === 4) {

            getHistory(months[4][0], months[4][1], currentElement);
            clearInterval(myVar4);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function fiveMonth (currentElement) {
            if (femaleMentions.length === 5 || femaleMentions3.length === 5 || femaleMentions4.length === 5 || femaleMentions5.length === 5 || femaleMentions6.length === 5 || femaleMentions7.length === 5 || femaleMentions8.length === 5 || femaleMentions9.length === 5 || femaleMentions10.length === 5 || femaleMentions11.length === 5 || femaleMentions12.length === 5 || femaleMentions13.length === 5 || femaleMentions14.length === 5 || femaleMentions15.length === 5 || femaleMentions16.length === 5 || femaleMentions17.length === 5 || femaleMentions18.length === 5 || femaleMentions19.length === 5) {

            getHistory(months[5][0], months[5][1], currentElement);
            clearInterval(myVar5);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sixMonth (currentElement) {
            if (femaleMentions.length === 6 || femaleMentions3.length === 6 || femaleMentions4.length === 6 || femaleMentions5.length === 6 || femaleMentions6.length === 6 || femaleMentions7.length === 6 || femaleMentions8.length === 6 || femaleMentions9.length === 6 || femaleMentions10.length === 6 || femaleMentions11.length === 6 || femaleMentions12.length === 6 || femaleMentions13.length === 6 || femaleMentions14.length === 6 || femaleMentions15.length === 6 || femaleMentions16.length === 6 || femaleMentions17.length === 6 || femaleMentions18.length === 6 || femaleMentions19.length === 6) {

            getHistory(months[6][0], months[6][1], currentElement);
            clearInterval(myVar6);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function sevenMonth (currentElement) {
            if (femaleMentions.length === 7 || femaleMentions3.length === 7 || femaleMentions4.length === 7 || femaleMentions5.length === 7 || femaleMentions6.length === 7 || femaleMentions7.length === 7 || femaleMentions8.length === 7 || femaleMentions9.length === 7 || femaleMentions10.length === 7 || femaleMentions11.length === 7 || femaleMentions12.length === 7 || femaleMentions13.length === 7 || femaleMentions14.length === 7 || femaleMentions15.length === 7 || femaleMentions16.length === 7 || femaleMentions17.length === 7 || femaleMentions18.length === 7 || femaleMentions19.length === 7) {

            getHistory(months[7][0], months[7][1], currentElement);
            clearInterval(myVar7);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function eightMonth (currentElement) {
            if (femaleMentions.length === 8 || femaleMentions3.length === 8 || femaleMentions4.length === 8 || femaleMentions5.length === 8 || femaleMentions6.length === 8 || femaleMentions7.length === 8 || femaleMentions8.length === 8 || femaleMentions9.length === 8 || femaleMentions10.length === 8 || femaleMentions11.length === 8 || femaleMentions12.length === 8 || femaleMentions13.length === 8 || femaleMentions14.length === 8 || femaleMentions15.length === 8 || femaleMentions16.length === 8 || femaleMentions17.length === 8 || femaleMentions18.length === 8 || femaleMentions19.length === 8) {

            getHistory(months[8][0], months[8][1], currentElement);
            clearInterval(myVar8);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function nineMonth (currentElement) {
            if (femaleMentions.length === 9 || femaleMentions3.length === 9 || femaleMentions4.length === 9 || femaleMentions5.length === 9 || femaleMentions6.length === 9 || femaleMentions7.length === 9 || femaleMentions8.length === 9 || femaleMentions9.length === 9|| femaleMentions10.length === 9 || femaleMentions11.length === 9 || femaleMentions12.length === 9 || femaleMentions13.length === 9 || femaleMentions14.length === 9 || femaleMentions15.length === 9 || femaleMentions16.length === 9 || femaleMentions17.length === 9 || femaleMentions18.length === 9 || femaleMentions19.length === 9) {

            getHistory(months[9][0], months[9][1], currentElement);
            clearInterval(myVar9);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function tenMonth (currentElement) {
            if (femaleMentions.length === 10 || femaleMentions3.length === 10 || femaleMentions4.length === 10 || femaleMentions5.length === 10 || femaleMentions6.length === 10 || femaleMentions7.length === 10 || femaleMentions8.length === 10 || femaleMentions9.length === 10 || femaleMentions10.length === 10 || femaleMentions11.length === 10 || femaleMentions12.length === 10 || femaleMentions13.length === 10 || femaleMentions14.length === 10 || femaleMentions15.length === 10 || femaleMentions16.length === 10 || femaleMentions17.length === 10 || femaleMentions18.length === 10 || femaleMentions19.length === 10) {

            getHistory(months[10][0], months[10][1], currentElement);
            clearInterval(myVar10);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    function elevenMonth (currentElement) {
            if (femaleMentions.length === 11 || femaleMentions3.length === 11 || femaleMentions4.length === 11 || femaleMentions5.length === 11 || femaleMentions6.length === 11 || femaleMentions7.length === 11 || femaleMentions8.length === 11 || femaleMentions9.length === 11 || femaleMentions10.length === 11 || femaleMentions11.length === 11 || femaleMentions12.length === 11 || femaleMentions13.length === 11 || femaleMentions14.length === 11 || femaleMentions15.length === 11 || femaleMentions16.length === 11 || femaleMentions17.length === 11 || femaleMentions18.length === 11 || femaleMentions19.length === 11) {

            getHistory(months[11][0], months[11][1], currentElement);
            clearInterval(myVar11);
            var paras = document.getElementsByClassName(currentElement.getAttribute('href'));
            while (paras[0]) {
                     paras[0].parentNode.removeChild(paras[0]);
                }
        }
    }
    
    
    function getHistory(start, end, currentElement) {
        /*var result = 0;
        console.log("Month Count: ", monthCount);
        monthCount++;
        console.log("TODAY: ", end);
        console.log("ONE MONTH AGO: ", start);
        var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
        //var totalCount = parseInt(thisElement.getAttribute('name'));
        //totalCount++;
        thisElement.setAttribute('name', 0);
        thisElement.setAttribute('id', 0);
        var temp_array = [];*/
        //var f_pct;
        var linkstring = currentElement.getAttribute('href');
      chrome.history.search({
            'text': linkstring,              // Return every history item....
            'startTime': start,  // that was accessed less than one week ago.
            'endTime': end,
            'maxResults': 1000000
          },
         function(historyItems) {
            //return historyItems;
            console.log("getting history");
            console.log(start);
            console.log(end);
            //for (var i = 0; i < historyItems.length; i++) {
                //var url = historyItems[i].url;
                //console.log(await getFPct(url));
                //await getFPct(url);
                
                /*var processVisitsWithUrl = function (url) {
                    return function (visitItems) {
                        processVisits (url, visitItems);
                    };
                };*/
            //}
            
            
             getFPct(historyItems, currentElement);
            //chrome.history.getVisits({url: url}, processVisitsWithUrl(url));
            //console.log(historyItems);
            //getFPct(historyItems);
            //return historyItems;
        });
    }
    
    /*var processVisits = function (url, visitItems) {
        for (var i = 0, ie = visitItems.length; i < ie; i++) {
            console.log(getFPct(url));
            console.log('processing');
        
        }
    
    };  */
    }
    
    var f_pct;
     function getFPct (historyItems, currentElement) {
            console.log('getting FPCT');
            //var f_pct;
            //var currentElement = $('a[href="https://www.yahoo.com/"]');
            var linkstring = currentElement.getAttribute('href');
            //var links = $('a');
            var index = links.index(currentElement);
            
            if (historyItems.length === 0) {
                    f_pct = 0;
                    //femaleMentions.push(f_pct);
                    m_pct = 0;
                    //maleMentions.push(f_pct);
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                else if (index === 10) {
                    femaleMentions10.push(f_pct);
                    maleMentions10.push(m_pct);
                    console.log("10", femaleMentions10);
                    console.log("10", maleMentions10);
                }
                else if (index === 11) {
                    femaleMentions11.push(f_pct);
                    maleMentions11.push(m_pct);
                    console.log("11", femaleMentions11);
                    console.log("11", maleMentions11);
                }
                else if (index === 12) {
                    femaleMentions12.push(f_pct);
                    maleMentions12.push(m_pct);
                    console.log("12", femaleMentions12);
                    console.log("12", maleMentions12);
                }
                else if (index === 13) {
                    femaleMentions13.push(f_pct);
                    maleMentions13.push(m_pct);
                    console.log("13", femaleMentions13);
                    console.log("13", maleMentions13);
                }
                else if (index === 14) {
                    femaleMentions14.push(f_pct);
                    maleMentions14.push(m_pct);
                    console.log("14", femaleMentions14);
                    console.log("14", maleMentions14);
                }
                else if (index === 15) {
                    femaleMentions15.push(f_pct);
                    maleMentions15.push(m_pct);
                    console.log("15", femaleMentions15);
                    console.log("15", maleMentions15);
                }
                else if (index === 16) {
                    femaleMentions16.push(f_pct);
                    maleMentions16.push(m_pct);
                    console.log("16", femaleMentions16);
                    console.log("16", maleMentions16);
                }
                else if (index === 17) {
                    femaleMentions17.push(f_pct);
                    maleMentions17.push(m_pct);
                    console.log("17", femaleMentions17);
                    console.log("17", maleMentions17);
                }
                else if (index === 18) {
                    femaleMentions18.push(f_pct);
                    maleMentions18.push(m_pct);
                    console.log("18", femaleMentions18);
                    console.log("18", maleMentions18);
                }
                else if (index === 19) {
                    femaleMentions19.push(f_pct);
                    maleMentions19.push(m_pct);
                    console.log("19", femaleMentions19);
                    console.log("19", maleMentions19);
                }
                
                    buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                    //return;
                }
            
            $.each(historyItems, async function (index, value) {
                var url = value.url;
                var timeVisited = value.lastVisitTime;
                var a = document.createElement('a');
                document.body.appendChild(a);
                a.outerHTML = "<a class="+linkstring+" style=display:none href=" + url + ">";
                console.log("HISTORY LENGTH", historyItems.length);
                historylength = historyItems.length;
           
              
              
              /*var thisElement = document.querySelector('[href='+CSS.escape('https://www.yahoo.com/')+']');
              var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);*/
              
           $.get(url, function(data) {
                    
              console.log("LINK IS", url);
              console.log("LINKSTRING", linkstring);
               malecount = 0;
               femalecount = 0;
               
              url_femalecount = 0;
              url_malecount = 0;
              
              var parser = new DOMParser();
              var doc = parser.parseFromString(data, "text/html");
               var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
              /*var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);*/
              
               fMajority = applyContent(doc);
              
              }).fail(function() {
                console.log("error");
                var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                var totalCount = parseInt(thisElement.getAttribute('name'));
                totalCount++;
                thisElement.setAttribute('name', totalCount);
                fMajority = 50;
                if (fMajority >= 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    

                    
                }
                else if (fMajority < 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
                
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log(array_length);
                
                var index = links.index(currentElement);
                console.log("INDEX OF ", currentElement.getAttribute('href'), index);
                
                
                
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                
                
                 f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                /*if ( linkstring === 'https://www.yahoo.com/') {
                    historylength = historyItems.length - 20;
                }*/
                if (historylength === 1) {
                    historylength += 1;
                }
                
                if (array_length === 1) {
                    array_length++;
                }
                
                if (finalcount === array_length - 1 ){
                
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                 else if (index === 10) {
                    femaleMentions10.push(f_pct);
                    maleMentions10.push(m_pct);
                    console.log("10", femaleMentions10);
                    console.log("10", maleMentions10);
                }
                 else if (index === 11) {
                    femaleMentions11.push(f_pct);
                    maleMentions11.push(m_pct);
                    console.log("11", femaleMentions11);
                    console.log("11", maleMentions11);
                }
                else if (index === 12) {
                    femaleMentions12.push(f_pct);
                    maleMentions12.push(m_pct);
                    console.log("12", femaleMentions12);
                    console.log("12", maleMentions12);
                }
                else if (index === 13) {
                    femaleMentions13.push(f_pct);
                    maleMentions13.push(m_pct);
                    console.log("13", femaleMentions13);
                    console.log("13", maleMentions13);
                }
                else if (index === 14) {
                    femaleMentions14.push(f_pct);
                    maleMentions14.push(m_pct);
                    console.log("14", femaleMentions14);
                    console.log("14", maleMentions14);
                }
                else if (index === 15) {
                    femaleMentions15.push(f_pct);
                    maleMentions15.push(m_pct);
                    console.log("15", femaleMentions15);
                    console.log("15", maleMentions15);
                }
                else if (index === 16) {
                    femaleMentions16.push(f_pct);
                    maleMentions16.push(m_pct);
                    console.log("16", femaleMentions16);
                    console.log("16", maleMentions16);
                }
                else if (index === 17) {
                    femaleMentions17.push(f_pct);
                    maleMentions17.push(m_pct);
                    console.log("17", femaleMentions17);
                    console.log("17", maleMentions17);
                }
                else if (index === 18) {
                    femaleMentions18.push(f_pct);
                    maleMentions18.push(m_pct);
                    console.log("18", femaleMentions18);
                    console.log("18", maleMentions18);
                }
                else if (index === 19) {
                    femaleMentions19.push(f_pct);
                    maleMentions19.push(m_pct);
                    console.log("19", femaleMentions19);
                    console.log("19", maleMentions19);
                }
                //console.log('FEMALE ARRAY');
                //console.log(femaleMentions);
                //console.log('MALE ARRAY');
                //console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                console.log(f_pct);
                currentElement.setAttribute('id', 0);
                currentElement.setAttribute('name', 0);
                }
                }).then( function () {
                console.log('calculating percentages');
                var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                var totalCount = parseInt(thisElement.getAttribute('name'));
              totalCount++;
              thisElement.setAttribute('name', totalCount);
              console.log(fMajority);
              if (isNaN(fMajority)) {
                fMajority = 0;
            }
             if (fMajority >= 0) {
                 var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    /*var totalCount = parseInt(thisElement.getAttribute('name'));
                    totalCount++;
                    thisElement.setAttribute('name', totalCount);*/
                if (fMajority >= 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                    var countVal = parseInt(thisElement.getAttribute('id'));
   
                    
                    countVal = countVal + fMajority;
                    thisElement.setAttribute('id', countVal);
                    totalFemaleMentions += fMajority;
                    

                    
                }
                else if (fMajority < 50) {
                    
                    
                    var thisElement = document.querySelector('[href='+CSS.escape(linkstring)+']');
                     var countVal = parseInt(thisElement.getAttribute('id'));
                     countVal = countVal + fMajority;
                     thisElement.setAttribute('id', countVal);
                     totalFemaleMentions += fMajority;

                    
                    malecount++;

                }
                
                var jArray = $('a[href*='+CSS.escape(linkstring)+']');
                var array_length = jArray.length;
                console.log(array_length);
                
                var index = links.index(currentElement);
                console.log("INDEX OF ", currentElement.getAttribute('href'), index);
                
                
                
                var finalcount = parseInt(currentElement.getAttribute('name'));
                //if (finalcount === array_length) {
                var females = parseInt(currentElement.getAttribute('id'));
                
                
                
                 f_pct = Math.round((females / (finalcount * 100.0) ) * 100);
                var m_pct = 100.0 - f_pct;
                /*if ( linkstring === 'https://www.yahoo.com/') {
                    historylength = historyItems.length - 20;
                }*/
                if (historylength === 1) {
                    historylength += 1;
                }
                
                if (array_length === 1) {
                    array_length++;
                }
                
                if (finalcount === array_length - 1){
                
                if ( index === 0 ) {
                    femaleMentions.push(f_pct);
                    maleMentions.push(m_pct);
                    console.log("0", femaleMentions);
                    console.log("0", maleMentions);
                }
                else if (index === 1){
                    femaleMentions1.push(f_pct);
                    maleMentions1.push(m_pct);
                    console.log("1", femaleMentions1);
                    console.log("1", maleMentions1);
                }
                else if (index === 2) {
                    femaleMentions2.push(f_pct);
                    maleMentions2.push(m_pct);
                    console.log("2", femaleMentions2);
                    console.log("2", maleMentions2);
                }
                else if (index === 3) {
                    femaleMentions3.push(f_pct);
                    maleMentions3.push(m_pct);
                    console.log("3", femaleMentions3);
                    console.log("3", maleMentions3);
                }
                else if (index === 4) {
                    femaleMentions4.push(f_pct);
                    maleMentions4.push(m_pct);
                    console.log("4", femaleMentions4);
                    console.log("4", maleMentions4);
                }
                else if (index === 5) {
                    femaleMentions5.push(f_pct);
                    maleMentions5.push(m_pct);
                    console.log("5", femaleMentions5);
                    console.log("5", maleMentions5);
                }
                else if (index === 6) {
                    femaleMentions6.push(f_pct);
                    maleMentions6.push(m_pct);
                    console.log("6", femaleMentions6);
                    console.log("6", maleMentions6);
                }
                else if (index === 7) {
                    femaleMentions7.push(f_pct);
                    maleMentions7.push(m_pct);
                    console.log("7", femaleMentions7);
                    console.log("7", maleMentions7);
                }
                else if (index === 8) {
                    femaleMentions8.push(f_pct);
                    maleMentions8.push(m_pct);
                    console.log("8", femaleMentions8);
                    console.log("8", maleMentions8);
                }
                else if (index === 9) {
                    femaleMentions9.push(f_pct);
                    maleMentions9.push(m_pct);
                    console.log("9", femaleMentions9);
                    console.log("9", maleMentions9);
                }
                 else if (index === 10) {
                    femaleMentions10.push(f_pct);
                    maleMentions10.push(m_pct);
                    console.log("10", femaleMentions10);
                    console.log("10", maleMentions10);
                }
                else if (index === 11) {
                    femaleMentions11.push(f_pct);
                    maleMentions11.push(m_pct);
                    console.log("11", femaleMentions11);
                    console.log("11", maleMentions11);
                }
                else if (index === 12) {
                    femaleMentions12.push(f_pct);
                    maleMentions12.push(m_pct);
                    console.log("12", femaleMentions12);
                    console.log("12", maleMentions12);
                }
                else if (index === 13) {
                    femaleMentions13.push(f_pct);
                    maleMentions13.push(m_pct);
                    console.log("13", femaleMentions13);
                    console.log("13", maleMentions13);
                }
                else if (index === 14) {
                    femaleMentions14.push(f_pct);
                    maleMentions14.push(m_pct);
                    console.log("14", femaleMentions14);
                    console.log("14", maleMentions14);
                }
                else if (index === 15) {
                    femaleMentions15.push(f_pct);
                    maleMentions15.push(m_pct);
                    console.log("15", femaleMentions15);
                    console.log("15", maleMentions15);
                }
                else if (index === 16) {
                    femaleMentions16.push(f_pct);
                    maleMentions16.push(m_pct);
                    console.log("16", femaleMentions16);
                    console.log("16", maleMentions16);
                }
                else if (index === 17) {
                    femaleMentions17.push(f_pct);
                    maleMentions17.push(m_pct);
                    console.log("17", femaleMentions17);
                    console.log("17", maleMentions17);
                }
                else if (index === 18) {
                    femaleMentions18.push(f_pct);
                    maleMentions18.push(m_pct);
                    console.log("18", femaleMentions18);
                    console.log("18", maleMentions18);
                }
                else if (index === 19) {
                    femaleMentions19.push(f_pct);
                    maleMentions19.push(m_pct);
                    console.log("19", femaleMentions19);
                    console.log("19", maleMentions19);
                }
                //console.log('FEMALE ARRAY');
                //console.log(femaleMentions);
                //console.log('MALE ARRAY');
                //console.log(maleMentions);
                buildChart(f_pct, m_pct, currentElement.getAttribute('id'), linkstring);
                console.log(f_pct);
                currentElement.setAttribute('id', 0);
                currentElement.setAttribute('name', 0);
                //return f_pct;
                //return Promise.resolve(f_pct);
                //return f_pct;
                //return result = f_pct;
                //}
                //return f_pct;
                //return f_pct;;
                //return Promise.resolve(f_pct);
                }
              
              }
              
                
              });
            
            });
    
    }




  
    
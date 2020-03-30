(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('泰来县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"230224","properties":{"name":"泰来县","cp":[123.416631,46.393694],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@CFCFCDMV_jOVCDQR[ZEFKJGHEDGHEFEFCF]`KNKLKNABwCBMPSV@@@@AB@@@BADADABAF@@AB@B@@BB@@DB@B@B@DBD@B@@@@AF@HB@B@@B@\\@R@b@@@B@B@Z@N@BCX@DAF@BGb@FABBB@D@B@@@@AP@@BBD@DBF@H@JBB@B@J@D@XDX@DBAL@DAD@J@@CN@@AJAB@HCL@@D@@@BB@BF@HBD@H@D@JBF@D@FBB@B@@@DU@A@EBA@AFQB@@ABG@@@@BAB@^DGTTBtHD@L@^FD@PB\\D@@D@@@DCDAFEBABA@AVOJKDBDEB@DBB@DC@@B@BBB@@BA@DBFBHCDCD@@BBBB@DBDB@@JDB@B@@@B@B@@BA@@B@@@B@@BB@BCJD@FBFBLD@@BBJDJBDBFBNFBB@FAF@DAL@B@DAJ@D@DB@BB@BED@@AB@D@@A@A@A@AB@@@B@@BBBBBB@B@B@B@@@BB@BB@@BB@BB@F@@@ZDH@B@PAX@DBTHFBL@DBD@BBPB@@BBFDVDBDFfDB@F@RBtDJ@B@@@@BB@@@B@B@FC@@B@@@B@@@B@@@@BABB@@@t@d@RBB@B@D@^@jB\\@V@J@D@@BB@BHHPFLFN@BDFBD@BBBB@BBD@BBFBDDB@BD@@@D@B@BAD@BADAHAB@@A@@B@BBBALAF@HAJ@BB@L@CN@HCRAD@FBBB@@@@@AD@JAN@@AB@B@B@BB@@@B@BBBBB@@@@B@B@DABC@K@S@U@G@CBE@ABC@CBADCBCDADAD@D@@@BDBNDD@LBF@FBHBB@FBDBJDLJDF@D@BCBEDIDCBMDABGDADCD@B@D@DBDBBDDDD@BDFBFBD@HADCBEBE@E@EAE@G@ABEBA@CBAAAAAAAA@ABG@MAA@E@A@@@A@AA@@ACACAACAAAA@A@A@CBCBCBABCDE@ABE@C@AACACCI@AAECCAACACAAAE@C@C@E@MBGBE@O@Q@KAEAGBG@CBABGDGFCDA@CDCBABCFCFAB@BBBAJBF@BDHBDFFHHDDBDBDBRDJHJBBDD@@BDBHDJ@BDD@BBBNPBDBBBD@D@F@FFLBF@F@B@@@BAB@@BHBDAJ@@A@@B@@BB@@@BB@@@@@@@BBB@@B@@@@BB@@@@@@@BB@@@@@@@@B@@@@BB@@@@BB@@@BB@@@@@BB@@@@@@BB@@@@@@@B@@@B@@@@@@BB@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@@@B@@@@@@@@@B@@B@@B@@@@@@@@@@@B@@@@@@B@@@@B@@@@@@@@@@@B@@@@@@@@@BB@@@@@@B@@@@@@@@@@BB@@@@@@@@@@@B@@B@@@@@@@@@@@@B@@@@@@@@B@@@@B@@@@@@@@BB@@@@BB@@@@@@B@@B@@B@@@B@@B@@B@@@B@@@@@@@B@@BB@@@@@B@@@@@B@@@@@BB@@B@@@BB@@BB@@@@@@@@@B@@@@@@@BB@@@@@@B@@@@@@@B@@@B@@BB@DFJFHLPHJBBDBFDDBF@B@DC@CDEBCFAFCFAD@FDFBBDBFBFBBFBBDBFBF@F@L@PBH@BAJAF@D@BBBLLHHBF@FCH@BD@F@L@F@D@@@@B@@B@DBHBD@DB@@BBB@BBBB@@@BBB@B@B@@BB@@@B@B@@B@BBB@@@@@@B@@BD@@@BB@B@BB@@B@@BDDBBBB@@@B@@@B@B@@@@@BB@B@B@F@D@DAB@@@@@D@F@F@D@@@@@H@H@J@BBFDFBDBB@BBF@H@D@F@D@BAD@D@F@F@B@FCFAFADADABABAB@B@DABAB@BABADCFEJI@@BABAFB@@JEBAECDAFAB@BCBC@AF@@CFA@ADC@AFEBAHADAD@B@B@B@@@B@@@B@@BB@BBB@@@@@@AB@@B@@B@@@BBDBD@D@BAB@BABABCAACAAA@@@ABCBI@@NCL@LAFA@C@A@C@CBC@AB@@A@A@C@E@C@E@C@E@E@@@A@@A@@ABA@@@A@@@A@ABA@A@@@AB@@@@A@ABA@@@A@@@@@@@A@@B@@A@@B@@@@@B@BAB@@@@@@@B@@A@@@@B@@@@@B@BA@@@@@@@@@@B@@A@@@@@@B@@@@@@@@A@@B@@@@@B@@@BA@@B@@A@@@A@@B@BAB@B@BADAB@BAB@B@BAD@BAB@BAB@@@FABAB@B@BA@@B@B@@AB@B@B@D@f@F@D@F@F@F@F@D@F@F@D@H@D@@EFAD@H@FAF@FAF@FAF@BBDBBBBBDBDDFD@@@@@@B@FADABGJEF@@@DI@@@A@@B@@ABA@CBABA@CBA@CBA@ABA@@@@@AAA@A@@@A@@AA@C@AAA@A@@@AAA@A@CAC@CAC@@@A@@AA@@CC@ACA@@A@CAAACAAA@AAAAAA@@AA@@AA@@AAA@@@A@@AA@@AA@AA@@AA@AA@@AA@@A@@@A@AA@@C@A@CAC@C@AAC@@AAAAAAAAAAAACAA@@@@AA@AA@@AAAAA@@@@AAACAACAACAAAA@AAACCAAACCAAA@A@@AA@C@AAC@AAC@C@AAC@A@AAC@A@@@ABC@A@A@AA@AA@@C@AAA@@@AAA@AAA@@AA@@AA@@@AA@@@A@AA@B@@A@@@A@@@@@A@@@@A@@@@AA@@@@@@@@@@A@A@@@A@A@@@A@@BA@AB@@AB@BA@AD@F@D@NCHADABA@ABC@@@ABA@@B@@AB@@@@@@@B@@@@@@ABA@A@@@AB@@A@CAA@@@AA@@A@@AAAA@@A@@@B@@@@A@@@A@@@@@AB@B@DAB@B@BAD@B@D@@@B@BA@@B@DAB@BAB@BAB@B@BAB@BAB@@@@@BABAB@B@@@@AB@@@B@BA@@@@B@@@BAB@@@B@BAD@BA@@@@B@BACAAA@CA@A@C@A@CA@@DCDCDCBA@@@AA@@C@ABA@A@@BA@ABAB@CC@A@CBCDCDADAH@F@DBFBF@DAHCDA@C@AE@E@E@I@EAEAACAC@CBADEBAAACACACC@E@E@CDEBCDC@@C@A@A@A@A@A@@@AAA@@@A@CAA@CACACAC@AAC@AAAACCAACAACCAAACACAAA@@C@A@@@AC@CACAG@A@@A@@@CBC@CBE@CBEBC@ABA@A@AAC@CAC@C@EACAC@EAA@A@@@AACAAACACAACCAECCCAACACACCCACAACCACACBC@ABGDGBIDEBGDGB@B@F@HAH@H@HAH@H@H@HAH@H@LA@GAGAEAI@GAQCIAE@A@@@@B@@A@@B@@@@AB@@@@@@AB@@@@AB@@@B@@A@K@M@GBM@K@G@A@C@AAC@GAC@AAA@B@BC@@BABA@@LQJKFGDE@E@@CCCECAECICGAAACAGECCAAAAAA@A@CBE@GBC@CBCDG@CDC@AFC@ABA@EAGGCEECCCG@AAC@CBALIJENADAFCNKJMDI@C@E@CDCF@JAJCDADCBG@E@G@CBCFCJGHEDCBEBEAA@C@CAA@AACIKIIGGEEAC@CCEEGEACC@CDEBCDEDCHAH@L@F@DADABC@E@EAEACCEKGGECC@CDG@ABABABAB@DAD@LAL@FADADCBCACCGIMCCAAEAACAA@CDCBCDADAD@HAHALAB@DAJCHEBCBG@CBAHCBCDABAA@A@@@AAACACCCACAC@A@ABADCHAD@BA@CBG@C@AAAACGCCAC@IACAA@GECEEEAG@E@A@CBCBCFCFCFA@AFEDG@@BG@CAECEACACAEAGMW@@AC@A@C@C@@BC@ADADCAAA@AAA@AA@@AAA@CAAACAAACAECA@@A@@@@A@AB@BA@@@@@A@@A@@@@@@@@@A@@@AB@@@@A@@@@@A@@A@@@@AA@@AA@@@A@@@AAA@A@@@AA@@A@@@@@A@@@@A@@@@A@@@A@@@A@A@@@A@AB@@A@@@@@A@@@@@A@@@A@@@A@A@@@@@A@A@@@@A@E@A@A@A@@AA@@A@A@A@A@@@@A@@AA@@C@AA@@A@ABA@@@AAA@@@AAA@AA@@@@@@@A@@@@@AA@@A@@@@@@@AA@@@@@A@@@A@@AA@@@A@@AA@@@@@A@@AA@@@A@@@A@@@A@@AA@@@A@@@A@@@A@A@@@A@@A@@A@@@@@A@@@A@A@@@A@A@@AA@A@A@@@A@@@A@A@AA@@@@@@A@@@A@@@@@@@@@A@@@@BA@A@@@AB@@A@@@A@@@@@@@@B@@@@@@A@@BA@A@A@A@@@A@@@A@@AA@@@AAA@@@AA@@A@@AA@@@A@AA@@A@AA@@A@A@@@AAA@@@A@@AA@@@A@A@@AA@@@@@A@ABA@A@@@A@@@A@A@@@@@A@A@@@ABA@A@@@A@A@A@A@@@A@@@@@A@@BC@@@A@A@@AA@@@A@@AA@@@A@@@A@@@AA@@@@@A@@A@@@A@A@@@A@A@A@@@A@@@A@@@A@@@@@A@@@AA@@A@@@A@A@@@A@@@@@A@@@A@A@@@A@@@@BA@@@@@@BA@@B@@@BA@@@@@AB@@A@A@@@A@@@A@A@A@A@A@@@@@A@A@@@A@AAA@@@A@@@AAA@@@AB@@A@@AA@A@@@A@A@A@@@A@@@A@@AA@@@A@@@A@A@@@@@A@A@@@A@A@@AA@@@A@@@A@A@A@@@A@AA@@A@@@A@A@A@@@A@A@@@AAA@A@A@A@@@A@A@@@A@@@A@@@A@A@@A@B@@A@@@@@A@A@@@A@A@@@A@@@A@@@@@A@@@A@A@@@@@A@@@A@A@@@AAA@@@@@@@@@@@@@@A@@@@@A@@B@@@@@A@@@@@@A@@A@@@@@@@@A@@@@@@@@A@@@@@AA@@@@@@@AA@@@A@@@A@@@@A@A@@AA@@AC@@@A@@B@@@@@@@BA@@@@@A@@@@@A@@@AC@@@A@@@@@@@@A@@@@BA@@A@@@A@@@A@@@A@AAA@@@A@@@@@@@A@@@@@@@AA@@A@@@A@A@@@@@@@A@@@A@@@A@@@A@A@@@A@@@@@AA@@@@A@@@@@A@@@A@@AA@@@@@A@@@@@@@@A@@A@@@@@@@A@@@@A@@A@@@@A@@@@A@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@AB@@@@A@@@@B@@@@A@@@@@@B@@@@@@A@@@@B@@A@@B@@@@AB@@@@@BA@@@@@@B@@@@@B@@@@AB@@@@@@@BB@@B@@@@@B@@A@@B@@A@@A@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@@@@A@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@A@@@A@@@@@A@@B@@@AA@@@A@@@@@AB@@@@@@@@AB@@@@A@@BA@@@@@@@@@A@@@@@A@@@@@@@@@A@@@@B@@A@@@@@@@AB@@@@@@@@A@@@@@@BA@@@A@@B@@A@@@@@@BA@@@@@@BA@@@@BA@@@@BA@@@@B@@@@AB@@@@@B@@@BA@@@@@A@@@A@@A@BA@@@A@@@@@AB@@A@@@@@A@@@@@A@@B@@CB@@@@@B@@@@A@@@@B@@A@@@A@@@AB@@A@@@@@A@@@A@@@@@@@AB@@@@A@@@@@ABA@A@@@AB@@@@A@@@A@@BA@@@A@@@@@@@A@@@@@AAA@AA@@@@A@@AA@@@CAA@AAA@@@@@A@@A@@A@@@@@@A@@A@@@@A@@@@AA@@@AA@@@A@@@A@@@A@@@A@@@A@@B@@@AA@@@@@@@@@BA@@BA@@BA@@@@@@A@A@@@A@@@@@@@@@@AB@@@@@@A@@@@@@@@@@AA@@@@A@@@@A@@@@@AA@@@A@@@AA@@A@@@A@@@@@ADA@@AA@@AA@AA@@A@@@@AAB@@@@@@A@@@A@@AA@AA@@@@AA@@B@@@@@@AA@@@@@AAA@@AA@@@@@A@@@@@@@A@@@@@AA@@A@@@@@@@A@@@@B@@@BA@@@@B@@AB@@@@A@@@A@@BA@@BA@@BA@@@@@@@A@@@@@@@@B@@A@@@@AA@@@@@A@@A@@@@A@@@@BA@@@AB@@@@A@@B@@A@@BA@@@@@A@@@A@@BA@@@A@@@A@@@@@A@@@@@@@A@@@@A@@A@@AA@@A@@A@@@A@@@@@A@A@@@A@@@A@@@A@@@ABA@@@@@@@@@AA@@@@@@@@A@@@A@@@@BA@@@@BA@@@A@@B@@A@@@@@@@ABA@@@A@@A@@@@@A@@@A@@@@AA@@@A@@@@A@A@@@A@@@@@A@@B@@A@@B@@A@@@AB@@A@@@@@@@A@@A@@@@@@A@@@@BA@@@@BA@@@@B@@A@@@@@A@@@A@@A@@@@@@@A@@@@@@@A@@A@@@A@@@A@@@A@@@@@@AA@@A@@@@@AB@@@@@BA@@@@B@@A@@@@A@@@A@@AA@@@A@@@@@A@@@@@@A@@@@@A@@@@@@@@B@@A@@B@@@B@@@B@A@@A@@@@@A@@@@@A@@@@AA@@A@@@@@@A@@@@@@A@@@@@@@A@@@@@AB@@@@A@@@@@@@@@@@AA@@@@@@@A@@@A@@@@AA@@@@A@@AA@@@A@@@A@A@@AA@@@A@A@@@@@@@A@@B@@A@@@A@@@ABA@A@@@A@A@AB@@A@A@@@A@@BE@@BA@@@C@@BB@@@@@B@@B@@B@B@@B@@A@@@@@@@@@AB@@B@@@@@A@@@@@A@@@@@@@@@A@@@@@A@@@@B@@B@@@B@@B@@@@@@@@@B@@A@@BA@@B@@A@@B@@A@@BA@@@@B@@@@AB@@@@@BA@@@@@@B@@@@@@@@@@@B@@A@BB@@A@@@@BA@@@@@A@@@A@@@AAA@AAA@@@A@@@@BA@@@@@@BA@@@@@A@@@@AA@@@@@A@@@@@A@@@@@@@@B@@A@@B@@@@@BAB@@A@A@@@C@@@@BA@@@@@@BA@@@@@@BA@@@@@@@A@@@@@A@@@@@A@@B@@A@@@@BA@@@@@@@AB@@@@@@@@A@@@A@@A@@@@B@@@@@@@@AB@@@@@@@@A@@A@@@@@A@@@@@AA@@A@@@A@@@A@@@A@@@A@@@@@A@@@A@@@@AA@@@A@@@@@A@@A@@A@@@A@@@A@@@A@A@@@A@@@@@@@A@@@@B@@A@@@@@A@@BA@A@@@@@A@@@@BA@@@@@@@A@@BA@@@@@A@@@AA@@@@A@@@AA@@A@@@@@@@A@@@A@@@@@@@@@A@@@@@AB@@@@@@@@@@AB@@@@A@@@@@AB@@@@A@@@@BA@@@@@@@@B@@B@@@@@B@@@A@@B@@A@@@A@@@@BA@@@@@@@@@@B@@@@@BB@@@@B@@@@@@@B@@@@@B@@B@@BA@@@@@@@A@@@@@AA@@@AA@@@@@@@ABA@A@@@AB@@A@A@@@ABA@@@A@@@@@AA@@A@@@@@A@@@@@A@@@@@@B@@@@@B@@@B@@@@@B@@@@A@A@@@A@@AA@@@A@@@@@A@@@@@@@A@@@AA@@@@A@@@A@@@@@@@@B@@@@@B@@@@@@@@@BA@@@A@@@ABAB@B@@AB@@@B@@A@@@@@@@A@A@@@A@@@A@@@A@AAA@@@A@A@A@A@A@A@@AA@A@@@@@A@@@A@@@A@@@A@@@@@A@A@@@A@@@A@A@@@A@@AA@A@@@A@@@AA@@@@A@@A@@A@@@@A@@A@@A@@A@@AA@@@@AA@@@@AA@@@@@AA@@@@A@@AA@@@A@@AA@@@A@@AA@@@A@AAA@@@AAA@@@AAA@@@A@@@AA@@A@@AA@@@A@AA@@A@AA@@@@A@@@AAA@@@AAA@@@@@MCA@"],"encodeOffsets":[[126135,47359]]}}],"UTF8Encoding":true});}));
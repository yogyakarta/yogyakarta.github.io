var app = {}; 

var tasks = new Bloodhound({
        datumTokenizer: function(d) { return             Bloodhound.tokenizers.whitespace(d.item); 
        },
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        //list of tasks used for autucomplete
         local: [

{item: "	1414395	Ailiya Amiroh	ايلييا اميرة	HD	ULYA D	"},
{item: "	1414471	Aini Ruhayati	عين روحية	T3	ULYA D	"},
{item: "	1414295	Aisyam Mardliyyah	أعيشام مرضيّة	AHC	ULYA D	"},
{item: "	1314096	Alifatun Nasyrochah	اليفة النشرحة	NR	ULYA D	"},
{item: "	1414460	Asih Nuranindra Islami	أسيه نورانيندرا اسلامى	NS	ULYA D	"},
{item: "	1414461	Asri Solikhati	أسرى صالحة	NS	ULYA D	"},
{item: "	1414541	Atiatul Afidah	أتية الافيدة	HK	ULYA D	"},
{item: "	1213104	Badrotus Solihah	بدرة الصالحة	HK	ULYA D	"},
{item: "	1213112	Dwi Mulyani	دوي مليانى	NS	ULYA D	"},
{item: "	1213113	Egawita Dila	ايكا ويتا ديلا	HK	ULYA D	"},
{item: "	1314089	Fauzul Murtafi'ah	فوز المرتفعة	NS	ULYA D	"},
{item: "	1414398	Husnul Khotimah	حسن الخاتمة	HD	ULYA D	"},
{item: "	1314077	Ismatul Izzati	عصمة العزّة	HD	ULYA D	"},
{item: "	1314088	Laeli Nasaika	ليلى نسائكا	NJ	ULYA D	"},
{item: "	1314095	Laila Hammada	ليلة حمّادا	NS	ULYA D	"},
{item: "	1314109	Lailatul Qodriyah	ليلة القدرية	T3	ULYA D	"},
{item: "	1314062	Laili Robingatun	ليلى رابعة	HK	ULYA D	"},
{item: "	1314094	Luluk Lailatul Mufidah	لؤلؤ ليلة المفيدة	NS	ULYA D	"},
{item: "	1213135	Maria Ulfa	مارية الفى	AHC	ULYA D	"},
{item: "	1314206	Mella Yulia Agustine	ميلا يوليا اكوستينى	HD	ULYA D	"},
{item: "	1314078	Mila Minkhatul Maula	ميل منحة المولى 	H5	ULYA D	"},
{item: "	1213138	Mir’atun Soraya	مرأة ثورايا	NJ	ULYA D	"},
{item: "	1213140	Mufidatul Hasanah	مفيدة الحسنة	HK	ULYA D	"},
{item: "	1414463	Muna Inas Mabruroh	منى اناث مبرورة	NS	ULYA D	"},
{item: "	1213067	Nilna Milhatan Nasihah	نلنا ملحة النصيحة	HD	ULYA D	"},
{item: "	1414472	Nur Kholifatun Nazilah	نور خالفة النزيلة	T3	ULYA D	"},
{item: "	1112083	Nur Miftahul Khoiriyah	نور مفتاح الخيريّة	NS	ULYA D	"},
{item: "	1213150	Nur Tanfidiyah	نورتنفيديّة	HK	ULYA D	"},
{item: "	1414397	Nuzulul Hikmah Balighoh	نزول حكمة بالغة	HD	ULYA D	"},
{item: "	1314085	Rena Rizki Nurfauzi	رينا رزكى نور فوزى	HK	ULYA D	"},

{item: "	1213098	Anik Nur Azizah	عنيق نور عزيزة	AHC	ULYA C	"},
{item: "	1314102	Ekalia Susanti	ايكا لييا سوسنتى	T3	ULYA C	"},
{item: "	1314103	Lutfi Yunial Ismi	لطفى زونيا السمى	T3	ULYA C	"},
{item: "	1213203	Nayli Ulya Khalisha	نيلى عليا خالصا	NJ	ULYA C	"},
{item: "	1213214	Nisday Umroh Mahfudhoh	نسدى عمرة مخفوظة	NR	ULYA C	"},
{item: "	1414417	Nuriyatus Sa'idah	نورية السعديّة	HK	ULYA C	"},
{item: "	1213152	Nurjanah 	نور جنة	HK	ULYA C	"},
{item: "	1414358	Rahmawati Dewi	رحماواتى ديوى	AHC2	ULYA C	"},
{item: "	1213157	Rini Susanti	رينى سوسانتى	NJ	ULYA C	"},
{item: "	1314182	Riqqatul Yumna	رقّة اليمنى	T3	ULYA C	"},
{item: "	1414418	Rizky Amalia	رزكى عمليّة	HK	ULYA C	"},
{item: "	1314104	Rofiqoh Wanuroh	رفيقة الونورة	T3	ULYA C	"},
{item: "	1414455	Suko Rina Adibatunabillah	سوقا رينا اديبة النبيلة	NR	ULYA C	"},
{item: "	1314232	Ulfah Lailiyah	الفة ليلية	NJ	ULYA C	"},
{item: "	1314284	Ulfa Diah Listyani	الفى دية ليستيانى	HK	ULYA C	"},
{item: "	1414473	Umdaturrosyidah 	عمدة الرشيدة	T3	ULYA C	"},
{item: "		Devi Eka Nur Nurviana		NJ	ULYA C	"},
{item: "		Wayan Siti Wardatul Jannah		NJ	ULYA C	"},

{item: "	1414386	Ainas Sa'adah	عين السعادة	H5	ULYA B	"},
{item: "	1314445	Arina Rahmatika	أرنا رحمتك	NR	ULYA B	"},
{item: "	1414517	Bingah Elda Silvianita	بيغاه الدا سيلفيانيتا	H5	ULYA B	"},
{item: "	1213114	Eka Wulan Sari 	ايكا وولانسارى	HK	ULYA B	"},
{item: "	1213208	Fatma Hidayati	فطمى هداياتى	HD	ULYA B	"},
{item: "	1414439	Fiki Muzakiya	فيكى مزكيا	NJ	ULYA B	"},
{item: "	1314180	Hikmah Maslahah	حكمة مصلحة 	HD T	ULYA B	"},
{item: "	1314080	Husna Mustajabah	حسنى مستجبة	HK	ULYA B	"},
{item: "	1414452	Iis Nuriyatin	ليس نورياتين	NR	ULYA B	"},
{item: "	1213047	Lailla Affianti Fauzi	ليلة عافيانتى فوزى	H5	ULYA B	"},
{item: "	1414462	Ma'rifatun Nashikhah	معرفة النعمة	NS	ULYA B	"},
{item: "	1213146	Ngizatun Asiah	عزّة اسيّة	HK	ULYA B	"},
{item: "	1414303	Nurilah Zahirotin	نور الله زاهرة	AHC1	ULYA B	"},
{item: "	1213153	Nurlaely Rohmah	نور ليل رحمة	HK	ULYA B	"},
{item: "	1213234	Nurul Isnaeni	نورالاثنينى	NJ	ULYA B	"},
{item: "	1314181	Nurul Khasanah	نور الحسنة	T3	ULYA B	"},
{item: "	1314074	Ranita Vindriyana	رانتا فيندريانا	AHC	ULYA B	"},
{item: "	1414357	Rida Arsita Dewi	ريدا ارشيتا دوى	AHC2	ULYA B	"},
{item: "	1213159	Risda Lailin Nadziroh	رشدة ليل الناظرة	NR	ULYA B	"},
{item: "	1314075	Rizki Riyandani	رزقى رياندارى	AHC	ULYA B	"},
{item: "	1414518	Siti Nurfadhilatur Romdhoniyah	سيتى نور فضيلة الرمضانيّة	H5	ULYA B	"},
{item: "	1213167	Sofwatul Basiroh	صفوة البصيرة	NJ	ULYA B	"},
{item: "	1414528	Ulfa Ramadhani Nasution	الفى رمضانى ناسوتيون	NS	ULYA B	"},
{item: "	1414453	Zahrotul Maknunah	زهرة المكمونة	NR	ULYA B	"},
{item: "		Roisah Fathiyatur Rohmah		T2	ULYA B	"},
{item: "		Ruqoyyah Atsna Rofi'ah		HK	ULYA B	"},

{item: "	1314203	Achmad Syaeful	احمد سيف	US	ULYA A	"},
{item: "	1414288	Ali Fikri Fauzi	على فكرى فوزى	AB	ULYA A	"},
{item: "	1213176	Arief Miftahudin	عارف مفتاح الدين	US	ULYA A	"},
{item: "	1314135	Choerun Najib	خير النجيب	AB	ULYA A	"},
{item: "	1112293	Fuad Amanu Mukti	فؤاد امان مكتى	NP	ULYA A	"},
{item: "	1213043	Khoirul Azam	خير العزم	US	ULYA A	"},
{item: "	1314204	Muchammad Abdul Aziz	محمّد عبد العزيز	AB	ULYA A	"},
{item: "	1414480	Moh. Afrizal	محمد افرزال	US	ULYA A	"},
{item: "	1414366	Muhammad Ilfan Fauzi	محمّد الفان فوزى	AR	ULYA A	"},
{item: "	1314133	Muhammad Maksum Azhari	محمّد معصوم ازهارى	AB	ULYA A	"},
{item: "	1314118	Mukhammad Murtadho	 محمّد مرتضى	AB	ULYA A	"},
{item: "	1314124	M. Dani Habibi	محمّد دان حبيبى		ULYA A	"},
{item: "	1414364	M. Fakhru Riza	محمّد فحرالريزا	AR	ULYA A	"},
{item: "	1414484	Riyan Sugiarto	رييان سوكيارطا	US	ULYA A	"},
{item: "	1213197	Suryo Hadi Kusumo	سوريا هادى كوسوما		ULYA A	"},
{item: "		AriefAzizy		AB	ULYA A	"},
{item: "		FarizAwaludinAlief		US	ULYA A	"},
{item: "		M. Luqman Hakim		US	ULYA A	"},
{item: "		MangsurHidayat		US	ULYA A	"},

{item: "	1213110	Dina Kurnia Al-Rachimi	دينا كرنيا الرحيمى	H5	PERANGKO	WUSTHO D	"},
{item: "	1213029	Fatin Afifah	فاطن عفيفة	AHC	NILAI UJIAN	WUSTHO D	"},
{item: "	1414396	Handika Fithri Nur Indasari	هنديكا فطرى نور اينداسرى	HD	-	WUSTHO D	"},
{item: "		Huril Aini	حورالعينى	AHC	PERANGKO	WUSTHO D	"},
{item: "	1213126	Ihdiyani Husna	اهديانى حسنى	HD T	NILAI UJIAN	WUSTHO D	"},
{item: "	1213233	Lathifah Vajarini	لطيفة فجرينى	NS		WUSTHO D	"},
{item: "	1314081	Laura Sofa Hanna	لورا صفى هنّا	HK		WUSTHO D	"},
{item: "	1414296	Madinatul Ilim	مدينة العلم	AHC	NILAI UJIAN	WUSTHO D	"},
{item: "	1314065	Milatun Nuril A'yuni	ملّة النور الأعينى	AHC	PERANGKO	WUSTHO D	"},
{item: "	1314067	Muhimmatul Khoiroh	مهمّة الخيرة	AHC	PERANGKO DAN NILAI UJIAN	WUSTHO D	"},
{item: "	1414302	Muhimmatus Syarifah	مهمّة الشارفة	AHC1	PERANGKO	WUSTHO D	"},
{item: "	1314070	Mulia Syaifidina Farida	موليا سيف دينا فاردا	AHC	PERANGKO	WUSTHO D	"},
{item: "	1213168	Syafira Aulia Mardiyah	شافرة اولياء مرضيّة	H5	-	WUSTHO D	"},

{item: "	1314031	Asih Dewi Lestari	اسيه ديوى لستارى	NS	WUSTHO D	"},
{item: "	1314097	Dita Probo Susanti	ديتا فروبو سوسانتى	NR	WUSTHO D	"},
{item: "	1314100	Erva Romzul Faujiyah	ارفا رمز الفوزيّة	NR	WUSTHO D	"},
{item: "	1314241	Fitriyatul Ummah	فطرية الامة	T2	WUSTHO D	"},
{item: "	1314028	Ifa Nikmatul Azizah	عفّة نعمة العزيزة	NJ	WUSTHO D	"},
{item: "	1314187	Indri Puspitarini	اندرى فسفيتارينى	HD-T	WUSTHO D	"},
{item: "	1314039	Isnaeni Rohmah	اثنين رحمة	HD-T	WUSTHO D	"},
{item: "	1314259	Isti Nurlaili Fauziah	استى نورليلى فوزيّة	NJ	WUSTHO D	"},
{item: "	1314200	Kanza Husnina	كنزى حسنينا	NJ	WUSTHO D	"},
{item: "	1314032	Mariatul Maghfiroh	مارية المغفرة	NS	WUSTHO D	"},
{item: "	1314242	Qurota A'yuni	قرّة العين	T2	WUSTHO D	"},
{item: "	1314009	Rizqi Khilda Amalia	رزقى حلدى عمليّة	AHC	WUSTHO D	"},
{item: "	1314029	Septi Rizana	سفتى رزانا	NJ	WUSTHO D	"},
{item: "	1314030	Siti Maryam	سيتى مريم	NJ	WUSTHO D	"},
{item: "	1314201	Tatik Istiqomah	تاتيك استقامة	NJ	WUSTHO D	"},
{item: "	1314024	Wulandari	وولاندارى	HK	WUSTHO D	"},
{item: "		Amin Rohmatin Fauzi		HK	WUSTHO D	"},
{item: "		Andin Nuraini		HK	WUSTHO D	"},
{item: "		Asy-Syifaur Roisah Rufaida		NJ	WUSTHO D	"},
{item: "		AyuLarasati		NJ	WUSTHO D	"},
{item: "		Eva Syarifatul Jamilah		HK	WUSTHO D	"},
{item: "		HarisatunNailaRofiah		HDT	WUSTHO D	"},
{item: "		Indika Farhatunnada 		HK	WUSTHO D	"},
{item: "		Lailatul Azizah		HK	WUSTHO D	"},
{item: "		Ma'rifatul Khoiriyah		NS	WUSTHO D	"},
{item: "		Maulida Lu'luur Rohmah		HDT	WUSTHO D	"},
{item: "		Nurul Badriyah		HK	WUSTHO D	"},
{item: "		Rifqi Azka Nisa		HDT	WUSTHO D	"},
{item: "		Rina Elistiana		NJ	WUSTHO D	"},
{item: "		Umi Atiqoh		HK	WUSTHO D	"},

{item: "		Ana Masruroh	انا مسرورة	NP		WUSTHO C	"},
{item: "	1213109	Diah Mahastuti	دية ماهاستوتى	HK	- 	WUSTHO C	"},
{item: "	1414520	Dian Lukluil Fithri	ديان لؤلؤ الفطرى	AHC	 -	WUSTHO C	"},
{item: "	1314276	Dzawati Muttaqiyyah	ذوات متّقيّة	NP		WUSTHO C	"},
{item: "		Eka Fitri Mulyani	ايكا فطرى مولياسرى			WUSTHO C	"},
{item: "	1414495	Febri Mardhiatus Sa'diyah	فبرى مرضيّة السعديّة		NILAI UJIAN 	WUSTHO C	"},
{item: "	1213122	Fina Fauziyah		HK	 NILAI UJIAN	WUSTHO C	"},
{item: "	1314108	Firda 'Alia Mayasari	فردا عالية ماياسارى	H5	 NILAI UJIAN	WUSTHO C	"},
{item: "	1414529	Firda Aulia Mahfudzoh	فردا اولياء مخفوظة	HD		WUSTHO C	"},
{item: "	1314111	Firda Rif'atun Nisa	فردا رفعة النساء	T3	 NILAI UJIAN	WUSTHO C	"},
{item: "	1414496	Fitriyatul Ummah	فطرية الامّة			WUSTHO C	"},
{item: "	1213051	Lia Istifadah	لييا استفادة	H5	PERANGKO DAN NILAI UJIAN 	WUSTHO C	"},
{item: "	1414454	Maylatul Aspiya	ميلة الاصفياء	NR	 -	WUSTHO C	"},
{item: "	1314093	Na'ilatul Fikriyah	نيلة الفكرية	NS	 -	WUSTHO C	"},
{item: "	1314087	Novi Erkana	نوفى اركانا	NJ	NILAI UJIAN 	WUSTHO C	"},
{item: "	1314090	Nur Hasanah	نور حسنة	NS	 NILAI UJIAN	WUSTHO C	"},
{item: "	1314092	Reny Virgiani	رينى فركيانى	NS	 NILAI UJIAN	WUSTHO C	"},
{item: "	1112092	Rifa'atul Afifah	رفاعة العفيفة	HD		WUSTHO C	"},
{item: "	1213232	S. Cistra Noor Aisyah	س. جسترا نور عائشة	H5		WUSTHO C	"},
{item: "	1213165	Siti Ngazizah	سيتى عائشة	HK	NILAI UJIAN 	WUSTHO C	"},
{item: "	1314110	Siti Robingah	سيتى رابعة	T3	 NILAI UJIAN	WUSTHO C	"},
{item: "	1314105	Siti Rozikah	سيتى رازقة	PB		WUSTHO C	"},
{item: "	1213220	Umu Fadhilah	امّ فضيلة	H5	 PERANGKO DAN NILAI UJIAN	WUSTHO C	"},
{item: "	1414542	Uzlifatil Jannah	ازلفت الجنّة	AHC	 NILAI UJIAN	WUSTHO C	"},
{item: "	1314107	Ziana Walidah	زييانا والدة		 PERANGKO DAN NILAI UJIAN	WUSTHO C	"},

{item: "	1414361	Aini Nadiah Iftinan	عين نادية افتنان	AHC2	WUSTHO C	"},
{item: "	1414339	Alfia Nahdiana	الفية نهضيانا	AHC2	WUSTHO C	"},
{item: "	1414340	Alviani Wahyu Agustina	الفيانى وحيو اكوستنا	AHC2	WUSTHO C	"},
{item: "	1414341	Annisa Nur Fitriyani	النساء نور فطريانى	AHC2	WUSTHO C	"},
{item: "	1414342	Arlin Nur 'Ainina M	ارلين نور عيننا م.	AHC2	WUSTHO C	"},
{item: "	1414343	Asyifa Lana Kholida	الشفاء لنا خالدا	AHC2	WUSTHO C	"},
{item: "	1414344	Awaliya Rahmawati 	اوليا رحمواتى	AHC2	WUSTHO C	"},
{item: "	1414345	Azima Prisma Vera	عازمة فريسما فيرا	AHC2	WUSTHO C	"},
{item: "	1414346	Dewi Fittriya	دوي فطرية	AHC2	WUSTHO C	"},
{item: "	1414523	Eka Nur Fauziah	ايكا نور فوزيّة	AHC2	WUSTHO C	"},
{item: "	1414469	Eliana Fauziyah	عليانا فوزيّة 	T3	WUSTHO C	"},
{item: "	1414465	Emaliana Zainun Nafi	عمليّانا زين النافع 	T2	WUSTHO C	"},
{item: "	1414470	Indah Ayu Pratiwi	انداه ايو فراتيوى	T3	WUSTHO C	"},
{item: "	1414525	Jannatun Na'imah	جنّة النعمة	HK	WUSTHO C	"},
{item: "	1414347	Khusna Nurul Laila	حسنى نور الليّلة	AHC2	WUSTHO C	"},
{item: "	1414385	Kurnia Irmala Sari	كرنيا ارمالا سارى	H5	WUSTHO C	"},
{item: "	1414348	Laila Nurul Falah	ليل نور الفلاح	AHC2	WUSTHO C	"},
{item: "	1414393	Latifah Nur 'Aini	لطيفة نور عينى	HD	WUSTHO C	"},
{item: "	1414349	Lia Mamba'atu Salamatir Rifah	لييا منبعة السلامة الرفاح	AHC2	WUSTHO C	"},
{item: "		Lukluk Marifatussakhiya'	لؤلؤ معرقة السخياء	NS	WUSTHO C	"},
{item: "	1414350	Mar'atul Amanah	مرأة امنة	AHC2	WUSTHO C	"},
{item: "	1414394	Mar'atun Sholiha	مرأةالصالحة	HD	WUSTHO C	"},
{item: "	1414351	Minatul Chomisah	منة الخامسة	AHC2	WUSTHO C	"},
{item: "	1414450	Mirtafaiqqohini Ulinuhaya	مرتا فائقهينى اولىالنهايا	NR	WUSTHO C	"},
{item: "	1414352	Muna Nuzulia Rahma	منى نزوليا رحمة	AHC2	WUSTHO C	"},
{item: "	1414293	Nailah	نائلة	AHC	WUSTHO C	"},
{item: "	1414524	Nur Hasanah	نور حسنة	AHC2	WUSTHO C	"},
{item: "	1414294	Nurhayati	نور حيتى	AHC	WUSTHO C	"},
{item: "	1414354	Rifqiyyatush Sholihah Al-Mahiroh	رفقية الصالحة الماهرة	HD	WUSTHO C	"},
{item: "	1414522	Saifunnisa	سيف النساء	AHC2	WUSTHO C	"},
{item: "	1414355	Siti Cholisoh	سيتى خالصة	AHC2	WUSTHO C	"},
{item: "	1414451	Siti Farikhatun 	سيتى فارحة	NR	WUSTHO C	"},
{item: "	1414416	Ummul Ummatul Fatimah	امّ الامة الفاطمة	HK	WUSTHO C	"},
{item: "	1414494	Wahyu Mabruroh	وحيو مبرورة	T3	WUSTHO C	"},
{item: "		Afifah Putri Ratnasari		AHC	WUSTHO C	"},
{item: "		Aryna Alvi Sa'adah		HK	WUSTHO C	"},
{item: "		Dewi Munadlirotul Alfi		HK	WUSTHO C	"},
{item: "		Imro'atul Khasanah		AHC	WUSTHO C	"},
{item: "		Istaqim Lailal M		HD	WUSTHO C	"},
{item: "		MuthiaUzlifa		H5	WUSTHO C	"},
{item: "		Naeli Nuraeni		AHC2	WUSTHO C	"},
{item: "		Putri Elfa Nur Izza		AHC	WUSTHO C	"},
{item: "		Sikha Amalia		T3	WUSTHO C	"},
{item: "		Siti Robiatul Ula Al-Adawiyah		T3	WUSTHO C	"},
{item: "		SitiNurBaidahShodiqin		HDT	WUSTHO C	"},
{item: "		YuniLuthfiYani		HDT	WUSTHO C	"},

{item: "	1112010	Ahmad Luthfie Hakim	احمد لطفى حكيم	US	KURANG SYARAT UJIAN DAN NILAI UJIAN	WUSTHO A	"},
{item: "	1213008	Akhmad Silakhudin	احمد صلاح الدين	US	KURANG SYARAT UJIAN	WUSTHO A	"},
{item: "	1213178	Aris Ashari	اريس اشهرى	US	-	WUSTHO A	"},
{item: "	1213179	Asngat Hidayat	اسعد هداية	US	KURANG SYARAT UJIAN DAN NILAI UJIAN	WUSTHO A	"},
{item: "		Farzaq Minhajul A				WUSTHO A	"},
{item: "	1213273	M. Auliya Rahman	محمّد اولياء رحمن	US	-	WUSTHO A	"},
{item: "		M. Yahya Muzaki	محمّد يحيى مزكّى			WUSTHO A	"},
{item: "	1314128	Muh. Royan Rois	محمّد رّيان رائس			WUSTHO A	"},
{item: "	1414483	Muhammad Arif Abdul Aziz 	محمد عارف عبد العزيز	US	KURANG SYARAT UJIAN	WUSTHO A	"},
{item: "		Muhammad Fajar Is Toriqunnajah	محمد فجر طريق النجاح	AB		WUSTHO A	"},
{item: "	1314122	Muhammad Toha Yahya	محمّد طه يحيى	AB		WUSTHO A	"},
{item: "	1314286	Nur M. Irsyadunnas	نور محمّد ارشاد الناس	AB		WUSTHO A	"},
{item: "	1414289	Rizky Muhammad Habibi	رزكى محمّد حبيبى	AB		WUSTHO A	"},
{item: "		Saifun Nurkhafid				WUSTHO A	"},
{item: "	1314134	Wahid Ridho	واحد رضا			WUSTHO A	"},
{item: "	1314044	Muhammad Azhar	محمد ازهار	FR	WUSTHO A	"},	
{item: "	1414381	Nasih Ulwan	ناصح علوان	GZ	WUSTHO A	"},	
{item: "	1314049	RH Al-Hadid	ر.ها. الحديد		WUSTHO A	"},	
{item: "		Ahmad Abu Bakar		UM	WUSTHO A	"},	
{item: "		Deny EndikaSutejo		US	WUSTHO A	"},	
{item: "		Hakam Al Ma'mun		 MI	WUSTHO A	"},	
{item: "		Muhammad Rifqi Yusuf		LY	WUSTHO A	"},	
{item: "		Syahrul Huda		MI	WUSTHO A	"},	
							
{item: "	1414407	Aenatus Salamah	اعينة السلامة	HK	ULA E	"},	
{item: "	1414534	Arina Manasikana	ارنا مناسكانا	AHC2	ULA E	"},	
{item: "	1414307	Asti Ariszki	استى ارزقى	AHC2	ULA E	"},	
{item: "	1414290	Aulia Lina Nashihah	اولياء لينا ناصحه	AHC	ULA E	"},	
{item: "	1414458	Cella Mita	جيلا ميتا	NS	ULA E	"},	
{item: "	1414308	Dawamul Ngubudiyah	دوام العبوديه	AHC2	ULA E	"},	
{item: "	1414430	Dewi Faiqotul Himmah	ديوى فائقة الهمة	NJ	ULA E	"},	
{item: "	1414310	Dinda Diniatus Sholikhah	ديندا دينية الصالحه	AHC2	ULA E	"},	
{item: "	1414431	Dya Nida A'yunin	ديية نداء اعينين	NJ	ULA E	"},	
{item: "	1414330	Enok Milhah Malihatusolihah	اينوك ملحة مليحة الصالحة	AHC2	ULA E	"},	
{item: "	1414532	Fitria Harum Mawarti	فطرية هاروم موارتى 	HK	ULA E	"},	
{item: "	1414333	Itoh	ايطاح	AHC2	ULA E	"},	
{item: "	1414411	Lisdiyana Nurul Jannati	لسديانا نورالجنة	HK	ULA E	"},	
{item: "	1414317	Machmudah Asrifatun 	محمودة اشرفة	AHC2	ULA E	"},	
{item: "	1414432	Mega Zulfy Lestari	ميكا زلفى لستارى	NJ	ULA E	"},	
{item: "	1414320	Muslikhah Nurbaiti	مصلحة نور بيتى	AHC2	ULA E	"},	
{item: "	1414321	Nailul Hikmah	نيل الحكمة	AHC2	ULA E	"},	
{item: "	1414459	Nelly Ifada	نيل افادة	NS	ULA E	"},	
{item: "	1414383	Nova Amalia Rufaida	نوفا عملية رفيدة	H5	ULA E	"},	
{item: "	1414404	Nur Haniah	نور هنيئة	HK	ULA E	"},	
{item: "	1414337	Nur Hidayah	نور هداية	AHC2	ULA E	"},	
{item: "	1414322	Nur Utami Darojah	نور اوتامى درجة	AHC2	ULA E	"},	
{item: "	1414392	Nuris Firori Humida	نورس فرارى حوميدا	HD	ULA E	"},	
{item: "	1414446	Rika Istiqomah	ريكا استقامة	NR	ULA E	"},	
{item: "	1414323	Rosyidatul Faizzah	رشيدة الفائزة	AHC2	ULA E	"},	
{item: "	1414324	Sera Aulia Farha	سيرا اولياء فرحة	AHC2	ULA E	"},	
{item: "	1414325	Siti Barokah Azizatun	سيتى بركة عزيزة	AHC2	ULA E	"},	
{item: "	1414413	Siti Rofingah	سيتى رافقة	HK	ULA E	"},	
{item: "	1414405	Sofi Salma Latifah	صافى سلمى لطيفة	HK	ULA E	"},	
{item: "	1414406	Tsalitsa Kamalina	ثالثة كمالنا	HK	ULA E	"},	
{item: "	1414538	Ulfiyatun Nadzifah	الفية النظيفة	AHC2	ULA E	"},	
{item: "	1414448	Yeni Liani	يينى ليانى	NR	ULA E	"},	

{item: "	1314040	Afikah	عفيقة	T3	NILAI IMTIHAN	ULA D	"},
{item: "		Alfianti	الفيانتى	AHC	TULIS	ULA D	"},
{item: "	1314007	Binti Nur Aisyah	بنت نور عائشة	AHC	-	ULA D	"},
{item: "	1314202	Eri Susanti	ايرى سوسانتى	ND		ULA D	"},
{item: "	1314274	Fina Nurdiani	فينا نورديانا	HK	-	ULA D	"},
{item: "	1314026	Fitri Budilestari	فطر بودى لستاى	NJ	NILAI IMTIHAN	ULA D	"},
{item: "	1314217	Lathifah Isnaini Fauzi	لطيفة اثنين فوزى	HD	PERANGKO	ULA D	"},
{item: "	1314013	Lathifah Widiyastuti	لطيفة ويدياستوتى	NR	-	ULA D	"},
{item: "		Lilik Hambali	ليليك حنبلى	NR		ULA D	"},
{item: "	1314017	Maria Ulfa Sutriani	مارية الفى سوتريان	HK		ULA D	"},
{item: "		Musyarofah	مشارفة	H5	HAFALAN DAN NILAI UJIAN	ULA D	"},
{item: "	1314004	Naja Nusaibah	نجا نسيبة	AHC	TULIS	ULA D	"},
{item: "	1213147	Novia Niken Zahrotin	نوفيا نيكين زهرة	T2	NILAI IMTIHAN	ULA D	"},
{item: "	1314091	Nur Laili Fitriyani	نور ليل فطريانى	NS		ULA D	"},
{item: "	1414464	Rizka Amalia	رزقا عمليا	T2	-	ULA D	"},
{item: "	1314283	Rizka Nur Laila Dewi	رزقا نور ليلا ديوى	NJ		ULA D	"},
{item: "	1314196	Siti Munadah	سيتى منادة	HK		ULA D	"},
{item: "	1314020	Siti Musyarofah	سيتى مشارفة	HK	PERANGKO DAN NILAI UJIAN	ULA D	"},
{item: "	1314011	Uly Ma'surotut Darien	اولى ماءسورة الدارين	AHC	TULIS DAN NILAI UJIAN	ULA D	"},
{item: "	1314023	Umi Nur Khanifah	ام نور حنيفة	HK	-	ULA D	"},
{item: "	1314001	Uswatun Khasanah	اسوة حسنة	NJ	PERANGKO	ULA D	"},
{item: "	1314033	Yeni Jamilatuz Zuhairah	زينى جميلة الزهيرة	NS	TULIS	ULA D	"},
{item: "	1314002	Yustin Hasna Nur Izzah	يستين حسنى نور عزة	HK	NILAI IMTIHAN	ULA D	"},
{item: "	1414305	Alfiana Rizqiani Tohariah	الفيانا رزقيانى طهاريّه	AHC2	ULA D	"},	
{item: "	1414306	Arina Fiqriyatul Azizah	ارنا فكريّة العزيزه	AHC2	ULA D	"},	
{item: "	1414309	Dewi Rohmah Arifani	ديوى رحمة عارفيانى	AHC2	ULA D	"},	
{item: "	1414311	Farihatul Istiqomah	فارحة الاستقامة	AHC2	ULA D	"},	
{item: "	1414539	Ferlina Amidah Sari	فرلينا عامدة سارى	HK	ULA D	"},	
{item: "	1414467	Iftia Fianisah	افتيا فييانسة	T3	ULA D	"},	
{item: "	1414313	Kamaliyatunni'mah	كماليّة النعمة	AHC2	ULA D	"},	
{item: "	1414300	Khoiri Nisak Permatasari Dewi	جير النساء فرماتا سارى ديوى	AHC1	ULA D	"},	
{item: "	1414314	Kurnia Harisah	كرنيا حارسة	AHC2	ULA D	"},	
{item: "	1414315	Laily Nur Rahmawati	ليلى نور رحماواتى	AHC2	ULA D	"},	
{item: "	1414389	Lenny Ardina Dewantari	لينى اردنا ديوانتارا	HD	ULA D	"},	
{item: "	1414403	Liddiyah Agustiyaningrum	لدية اكوستيا نينروم	HK	ULA D	"},	
{item: "	1414316	Lulu Lubna Abharina	لؤلؤ لبنا ابحارنا	AHC2	ULA D	"},	
{item: "	1414318	Ma'rifatul Ulum	معرفة العلوم	AHC2	ULA D	"},	
{item: "	1414291	Nisa Ulin Nawa	نساء اولى النوى	AHC	ULA D	"},	
{item: "	1414428	Nunik Eka Febriani	نونيك ايكا فبريانى	NJ	ULA D	"},	
{item: "	1414429	Wafi Nikmah	وافى نعمة	NJ	ULA D	"},	
{item: "	1414447	Whentin	وينتين	NR	ULA D	"},	
{item: "		AnisahNovieMusyarofah		HDT	ULA D	"},	
{item: "		AnisahUmuZulfa		H5	ULA D	"},	
{item: "		AnnisaSholehatulJannah		NJ	ULA D	"},	
{item: "		Aria Yunita		HK	ULA D	"},	
{item: "		Arita Gustianti		AHC	ULA D	"},	
{item: "		Bunga Aulia Hasnan Dya		AHC	ULA D	"},	
{item: "		Diana Lailatus Sa'diyah		AHC	ULA D	"},	
{item: "		Elok Tri Novianingrum		AHC	ULA D	"},	
{item: "		FarihatulAtikah		T3	ULA D	"},	
{item: "		Hamasliko Mahdawati		AHC	ULA D	"},	
{item: "		Isnaini Putri Rosyida		HK	ULA D	"},	
{item: "		Khotimatun Nafisah		HK	ULA D	"},	
{item: "		Lasari Nurfitri Aningsih		HK	ULA D	"},	
{item: "		Layla RoyhatulJannah		NJ	ULA D	"},	
{item: "		Lulu Ramadhana		T2	ULA D	"},	
{item: "		Mutia Lestari		H5	ULA D	"},	
{item: "		Nadia QurrotaA'yuni		T3	ULA D	"},	
{item: "		Nadiya Chanana		AHC2	ULA D	"},	
{item: "		Nur Baiti		HD	ULA D	"},	
{item: "		Nur Wakhidah		HK	ULA D	"},	
{item: "		Nurul Fadillah		HD	ULA D	"},	
{item: "		Putri Iklilah		NR	ULA D	"},	
{item: "		Rani Putri Prihatin		NR	ULA D	"},	
{item: "		RiskiaAvifah		NJ	ULA D	"},	
{item: "		SilmiSyukriyahJuhdiAzhari		H5	ULA D	"},	
{item: "		SitiKhoiriyah		H5	ULA D	"},	
{item: "		Syafa'atun Nafidah		HK	ULA D	"},	
{item: "		Tanti Agustina		H5	ULA D	"},	
{item: "		Zulfa		HDT	ULA D	"},	

{item: "		Asmawati Eka Lestari	اسماواتى ايكا لستارى	HK	-	ULA C	"},
{item: "	1414437	Khusnul Khotimah	حسن الخاتمة	NJ	-	ULA C	"},
{item: "		Malikatun Nafidah	مالكة النافدة	HK	-	ULA C	"},
{item: "	1414527	Nur Alfiani	نور الفيانى	H5	-	ULA C	"},
{item: "	1414438	Siti Chodijah	سيتى خديجة	NJ	PERANGKO	ULA C	"},
{item: "	1414356	Thava Yuniantari	طافا يونيانترى	AHC2	-	ULA C	"},
{item: "	1414415	Ulfa Lutfiyana	الفى لطفيانا	HK	-	ULA C	"},
{item: "		Zunita Fahmi	زونيتا فهمى	HK	-	ULA C	"},
{item: "	1414457	Asmi Trisna Puspita	عزمى تريسنا فوسفيتا	NS	ULA C	"},	
{item: "	1414328	Dina Ayu Fadzila	دينا ايو فضيلة	AHC2	ULA C	"},	
{item: "	1414329	Dyah Ayu Sartika	دييةايو سرتيكا	AHC2	ULA C	"},	
{item: "	1414391	Ichlasul Amalia	اخلاص العمليّة	HD	ULA C	"},	
{item: "	1414526	Inka Melani Saputri Ningsih	انكا ميلانى سافوترى نينسيه	AHC2	ULA C	"},	
{item: "	1414335	Laras Asruri	لاراس اسرورى	AHC2	ULA C	"},	
{item: "	1414537	Nunung Luthfiyani	نونوغ لطفيانى	HK	ULA C	"},	
{item: "	1414338	Nur Kumalasari	نور كومالاسارى	AHC2	ULA C	"},	
{item: "	1414519	Rosa Nella Wahyu Ningrum	روسا نيلا وحيو نينروم	AHC2	ULA C	"},	
{item: "	1414434	Uchty Nurul Fadilah	اختى نور الفضيلة	NJ	ULA C	"},	
{item: "	1414531	Ulfa Taqiyyah	الفى تقيّة	AHC2	ULA C	"},	
{item: "	1414362	Umi Salamah	امّى سلامة	AHC2	ULA C	"},	
{item: "	1414435	Viki Alfi Izzaty	فيكى الفى عزّتى	NJ	ULA C	"},	
{item: "	1414384	Wardatul Millah	وردة الملة	H5	ULA C	"},	
{item: "	1414540	Yuhanidz Nurul Iftihamah	يهانذ نور الافتحامة	NJ	ULA C	"},	
{item: "		AlafniTakusina		T2	ULA C	"},	
{item: "		Ana  Muzayyanah		H5	ULA C	"},	
{item: "		EkaWulandari		NS	ULA C	"},	
{item: "		EnySholehah		NS	ULA C	"},	
{item: "		HafniFakhrina		T2	ULA C	"},	
{item: "		Hani Fildzah Rusydina		HK	ULA C	"},	
{item: "		Haniatus Syakila		HK	ULA C	"},	
{item: "		Harisma Mujiban A		AHC	ULA C	"},	
{item: "		HilmaLutfiana		NS	ULA C	"},	
{item: "		Humaidah		H5	ULA C	"},	
{item: "		Husna Fauziyah		AHC	ULA C	"},	
{item: "		Kartika Apriliana		T3	ULA C	"},	
{item: "		Khoerotun Ni'mah		AHC2	ULA C	"},	
{item: "		KurniaHandayani		H5	ULA C	"},	
{item: "		MawaDaturromah		NJ	ULA C	"},	
{item: "		Mi'rotul Hasanah		AHC	ULA C	"},	
{item: "		Nabila IkaSetyani		T3	ULA C	"},	
{item: "		NuhaFidaraini		T3	ULA C	"},	
{item: "		RofiqatunNajah		NS	ULA C	"},	
{item: "		RohmatulLaili		H5	ULA C	"},	
{item: "		ShofiNurulArifah		T3	ULA C	"},	
{item: "		Silviana Camelia Dewi		AHC	ULA C	"},	
{item: "		Tyas Purbaningrum		HK	ULA C	"},	
{item: "		Ulya Wafiyya		HK	ULA C	"},	
{item: "		WidayantiDwiPurnama		H5	ULA C	"},	
{item: "		ZahrotulMawaroh		NS	ULA C	"},	
{item: "		Zulfa Noor Hamidah		HK	ULA C	"},	
{item: "		ZulfaImroatulKhosiyah		NJ	ULA C	"},	
{item: "		Zulfatussoraya		AHC	ULA C	"},	

{item: "	1414507	Aisyah Maharani G	عائشه مهارانى ك	NP		I'DADIYAH D	"},
{item: "	1414441	Anisa Daris Setyawati	النساء دارس ستياواتى	NP	PERANGKO DAN NILAI UJIAN	I'DADIYAH D	"},
{item: "		Asmalina Rahayu	اسما لينا راحايو	H5		I'DADIYAH D	"},
{item: "	1414402	Eka Fitri Mulyani	ايكا فطرى مليانى	NP	NILAI UJIAN	I'DADIYAH D	"},
{item: "	1414427	Erlina Dwie Febiantini	ارلينا دوى فبيانتنى 	NJ		I'DADIYAH D	"},
{item: "	1414529	Firda Auliya Mahfudhoh			-	I'DADIYAH D	"},
{item: "						I'DADIYAH D	"},
{item: "	1414387	Gimanda Nahdiah Diana	كيماندا نهضية ديانا	HD		I'DADIYAH D	"},
{item: "	1414299	Imamah	امامة	AHC1	NILAI UJIAN	I'DADIYAH D	"},
{item: "	1414312	Inayatul Maghfiroh	اناية المغفرة	AHC2		I'DADIYAH D	"},
{item: "	1414456	Isma Nurun Najah	اسما نور النجاح	NS	NILAI UJIAN	I'DADIYAH D	"},
{item: "	1414511	Iza Nur Melia	عزة نور ميليا	NP		I'DADIYAH D	"},
{item: "	1414388	Kiptiyah	قبطيّة	HD	PERANGKO	I'DADIYAH D	"},
{item: "	1414512	Lailis Sa'adah	ليل السعادة	NP		I'DADIYAH D	"},
{item: "	1414319	Maulida Nurul Andini	مولدا نور الاندينى	AHC2	PERANGKO DAN NILAI UJIAN	I'DADIYAH D	"},
{item: "		Nur Wakhidah		H5	-	I'DADIYAH D	"},
{item: "	1414506	Rusti Aisyah	رستى عائشة ديليانا	NP		I'DADIYAH D	"},
{item: "	1414514	Siti Uswatun Hasanah	سيتي اسوة حسنة	NP		I'DADIYAH D	"},
{item: "	1414326	Usailatu Wardatinnisa	اسيلة وردة النساء	AHC2		I'DADIYAH D	"},
{item: "	1414327	Zunaida Farisa	زنيدة فارسة	AHC2	NILAI UJIAN	I'DADIYAH D	"},
{item: "		Ana Safitri		T3	I'DADIYAH D	"},	
{item: "		Anis Khansa Qanita		AHC	I'DADIYAH D	"},	
{item: "		Anis Maghfiroh		AHC	I'DADIYAH D	"},	
{item: "		AnisAfifah		NS	I'DADIYAH D	"},	
{item: "		AtsnaNidaAzkiya		NS	I'DADIYAH D	"},	
{item: "		Ayu Cahyanita		AHC	I'DADIYAH D	"},	
{item: "		AzzahratiAnnur		H5	I'DADIYAH D	"},	
{item: "		ChusnulAfifah		H5	I'DADIYAH D	"},	
{item: "		Diana Utami		T2	I'DADIYAH D	"},	
{item: "		Emira Salma		AHC	I'DADIYAH D	"},	
{item: "		Erna Novia Sari		HK	I'DADIYAH D	"},	
{item: "		Fatimah Nur I		NJ	I'DADIYAH D	"},	
{item: "		Heny Taslimah		H5	I'DADIYAH D	"},	
{item: "		LayyaRifqoh		NJ	I'DADIYAH D	"},	
{item: "		Lu'luJannahAssyifa		T3	I'DADIYAH D	"},	
{item: "		Maya Ulfatul Umami		NS	I'DADIYAH D	"},	
{item: "		Maynda Indri Putri		NR	I'DADIYAH D	"},	
{item: "		Naili Ziadatul Alawiyah		AHC2	I'DADIYAH D	"},	
{item: "		Nila Safitri		AHC2	I'DADIYAH D	"},	
{item: "		Nina Herlina		HK	I'DADIYAH D	"},	
{item: "		Novi Qomariyah		HK	I'DADIYAH D	"},	
{item: "		Nur Lailatul Hikmah		HK	I'DADIYAH D	"},	
{item: "		Shofa El Karera		HD	I'DADIYAH D	"},	
{item: "		Sintia Ainus Sofa		NR	I'DADIYAH D	"},	
{item: "		Siti Nurjanah		HK	I'DADIYAH D	"},	
{item: "		Siti Rohemah		NR	I'DADIYAH D	"},	
{item: "		Ummu Sa'adah		HK	I'DADIYAH D	"},	
{item: "		WiwiYuliyanah		HDT	I'DADIYAH D	"},	

{item: "	1414442	Ana Khoirun Nisa	انا خير النساء	NP	-	I'DADIYAH C	"},
{item: "	1414508	Atiqotur Rosyidah	عاتقة الرشيدة	NP		I'DADIYAH C	"},
{item: "	1414408	Farhatun	فرحة	HK		I'DADIYAH C	"},
{item: "		Gita Ayu Soraya S	كيتا ايو ثورايا	AHC2		I'DADIYAH C	"},
{item: "	1414331	Iis Istiqomah	ائس استقامة	AHC2	PERANGKO DAN NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414409	Imroatun Nafiah	امرأة النافعة	HK	NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414332	Irma Fitriyani 	ارما فطريانى	AHC2	NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414410	Karima Abidatul Lathifah	كريمة عابدة اللطيفة	HK	NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414301	Khubaila Yushi Rumana	حبيلة يوصى رومانا	AHC1	TULIS, PERANGKO DAN NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414334	Kurnia Alfiana Maghfiroh	كرنييا الفيانا مغفرة	AHC2	PERANGKO	I'DADIYAH C	"},
{item: "	1414521	Lailatul Fitriyani	ليلة الفطريانى	AHC2	-	I'DADIYAH C	"},
{item: "		Lupita Putri Ramadhani	لوفيتا فوترى رمضانى	NJ		I'DADIYAH C	"},
{item: "		Lutfi Nur Lestari	لطفى نور لستارى	AHC1	PERANGKO	I'DADIYAH C	"},
{item: "		Maftuhatul Ainiyah	مفتوحة العينية	AHC2		I'DADIYAH C	"},
{item: "	1414336	Naharin Nur Fadhilah	نهارين نور فضيلة	AHC2	NILAI UJIAN	I'DADIYAH C	"},
{item: "		Novi Fatkhiyatul Muyassaroh	نوفى فتحية الميشّرة	AHC	PERANGKO	I'DADIYAH C	"},
{item: "	1414533	Rifa Fatihatunnida	ريفا فاتحة النداء	NP		I'DADIYAH C	"},
{item: "		Samawati Eka Lestari	سماواتى ايكا لستارى			I'DADIYAH C	"},
{item: "	1414433	Siti Inganatut Thoyibah	سيتى اعانة الطيبة	NJ	NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414449	Tias Bekti Novisari	تياس بكتى نوفيسارى	NR	NILAI UJIAN	I'DADIYAH C	"},
{item: "	1414414	Ulinnuha Nabila	اولى النهى نبيلة	HK		I'DADIYAH C	"},
{item: "	1414436	Wahyu Chusnul Muna	وحيو حسن المنى	NJ		I'DADIYAH C	"},
{item: "	1414535	Windari	ويندارى	HK		I'DADIYAH C	"},
{item: "		Aina Azizah		T3	I'DADIYAH C	"},	
{item: "		AnidaHidayati		HK	I'DADIYAH C	"},	
{item: "		Anisah		NJ	I'DADIYAH C	"},	
{item: "		Ayu Rizki Febriasari		AHC2	I'DADIYAH C	"},	
{item: "		Ayuni Nur Azizah		AHC2	I'DADIYAH C	"},	
{item: "		Dasirah		T3	I'DADIYAH C	"},	
{item: "		Elza Mutiara Wardani		HK	I'DADIYAH C	"},	
{item: "		EstriPriabietyaMayasari		NJ	I'DADIYAH C	"},	
{item: "		Ezzah Nuranisa		AHC	I'DADIYAH C	"},	
{item: "		Farida Rahmawati		AHC	I'DADIYAH C	"},	
{item: "		Fenny Afifah		AHC2	I'DADIYAH C	"},	
{item: "		Fenny Afifah		AHC2	I'DADIYAH C	"},	
{item: "		Haanah Rahima		AHC	I'DADIYAH C	"},	
{item: "		HimmatinNurFadhilah		H5	I'DADIYAH C	"},	
{item: "		Ida Rahmawati		HK	I'DADIYAH C	"},	
{item: "		KholisnaZakiyatunNufus		NS	I'DADIYAH C	"},	
{item: "		LeniIndriani		NS	I'DADIYAH C	"},	
{item: "		Luluk Atul Mubriqon		HK	I'DADIYAH C	"},	
{item: "		LuviaDwiArianti		H5	I'DADIYAH C	"},	
{item: "		Mirza Zulfi Faizah		AHC	I'DADIYAH C	"},	
{item: "		Monica Elsa Iriyanti		T3	I'DADIYAH C	"},	
{item: "		Nafiatul Khasanah		AHC	I'DADIYAH C	"},	
{item: "		RestiArifiyanti		NJ	I'DADIYAH C	"},	
{item: "		Ria Wahidatun Ni'mah		AHC	I'DADIYAH C	"},	
{item: "		RinaTyasningrum		NS	I'DADIYAH C	"},	
{item: "		SitiAisyah		T3	I'DADIYAH C	"},	
{item: "		SitiAwandaNurHalimah		H5	I'DADIYAH C	"},	
{item: "		Suliha		HK	I'DADIYAH C	"},	
{item: "		UmniKhusniatiRofiqah		NS	I'DADIYAH C	"},	
{item: "		Veni Jumila Danin		AHC	I'DADIYAH C	"},	
{item: "		Ya Fathah Nur Azizah		HK	I'DADIYAH C	"},	

{item: "	1414367	Ahmad Khusaini	احمد حسين	FR	NILAI UJIAN	I'DADIYAH B	"},
{item: "	1414368	Amin Nur Achmad	امين نور احمد	FR		I'DADIYAH B	"},
{item: "	1414488	Annas Kukuh Jiwangga	الناس كوكوه جيوانكا	NP	-	I'DADIYAH B	"},
{item: "	1414421	Bahrul Mukhit	بحر المحيط	LY		I'DADIYAH B	"},
{item: "		Darul Ilham	دار الالهام		NILAI UJIAN	I'DADIYAH B	"},
{item: "	1414489	Hermanto Kurniawan	حرمنطا كرنياوان	NP	NILAI UJIAN	I'DADIYAH B	"},
{item: "		Irfan Fuady	عرفان فؤادى			I'DADIYAH B	"},
{item: "	1414490	Khoerul Anwar	خير الانوار	NP		I'DADIYAH B	"},
{item: "	1414370	M. Sabbiq Izzudin	محمد سابق عزّالدين	FR	NILAI UJIAN	I'DADIYAH B	"},
{item: "	1414423	M. Yusuf Efendi	محمد يوسف ايفندى	LY		I'DADIYAH B	"},
{item: "	1414376	Nurul Ikhwani	نور الاخوانى	GZ	NILAI UJIAN	I'DADIYAH B	"},
{item: "		Toyib Nur Hamid	طيّب نور حامد	GZ	NILAI UJIAN	I'DADIYAH B	"},
{item: "		A Lutfi Abdul Majid		UM	I'DADIYAH B	"},	
{item: "		AcengBahrudin		US	I'DADIYAH B	"},	
{item: "		Ahmad Faizfebry Putra Prayogi		FR	I'DADIYAH B	"},	
{item: "		Ahmad SofyanAlfi		GZ	I'DADIYAH B	"},	
{item: "		BeniSaputro		US	I'DADIYAH B	"},	
{item: "		Budi Sucahyo P		AB	I'DADIYAH B	"},	
{item: "		HasyfiRasdan Y.B		GZ	I'DADIYAH B	"},	
{item: "		IkhwanShoffah		AB	I'DADIYAH B	"},	
{item: "		Khalil Rahman		GZ	I'DADIYAH B	"},	
{item: "		KukuhPradipto		US	I'DADIYAH B	"},	
{item: "		M. Kemal Bengawan		UM	I'DADIYAH B	"},	
{item: "		M. SukronHasani		AB	I'DADIYAH B	"},	
{item: "		Mochammad Ludfi Firmansyah		FR	I'DADIYAH B	"},	
{item: "		NugrohoAmrul Hakim		US	I'DADIYAH B	"},	
{item: "		Raja BintangAbrori		ALY	I'DADIYAH B	"},	
{item: "		RizkiZidanulFarhan		AB	I'DADIYAH B	"},	
{item: "		Rofif Zainul Abidin		FR	I'DADIYAH B	"},	
{item: "		SoniAdiPrasetyo		AB	I'DADIYAH B	"},	
{item: "		SyahrulAlinNuaffa		UM	I'DADIYAH B	"},	
{item: "		ZulkarnaenIskarima		AB	I'DADIYAH B	"},	

{item: "	1414374	Ahmad Shofiyullah Fahmi	احمد صفى الله فهمى	GZ	NILAI UJIAN	I'DADIYAH A	"},
{item: "	1414420	Ampuh Sejati	امفوه سجاتى	LY		I'DADIYAH A	"},
{item: "	1414287	Bagas Eka Saputra	بكاس ايكا سافوترا	AB	-	I'DADIYAH A	"},
{item: "		Bubun Baehaqi	بوبون بيهقى	FR		I'DADIYAH A	"},
{item: "		Dwi Jatmika	دوى جتميكا	FR	NILAI UJIAN	I'DADIYAH A	"},
{item: "	1414422	Irfan Fachrudin	عرفان فحرالدين	LY	NILAI UJIAN	I'DADIYAH A	"},
{item: "		Jeni Dwi Prasetyo	جينى دوى فراسيطيا			I'DADIYAH A	"},
{item: "	1414369	M. Amirul Mu'minin	محمد امير المؤمنين	FR	-	I'DADIYAH A	"},
{item: "		M. Udzayir	محمد اذيّر			I'DADIYAH A	"},
{item: "	1414424	Nanang Ardhyansa	ناناغ ارضيانسا	LY	NILAI UJIAN	I'DADIYAH A	"},
{item: "	1414377	Rohmatulloh	رحمة الله	GZ		I'DADIYAH A	"},
{item: "		AbdurQodirJaelani		GZ	I'DADIYAH A	"},	
{item: "		Ade Sarwoko		GZ	I'DADIYAH A	"},	
{item: "		Ahmad FaizunNi'am		UM	I'DADIYAH A	"},	
{item: "		Baitullah Ramdhani		FR	I'DADIYAH A	"},	
{item: "		BieralyKasim		LY	I'DADIYAH A	"},	
{item: "		FiqiKurniRahman		GZ	I'DADIYAH A	"},	
{item: "		Hoky Ahmad Ansori		ALY	I'DADIYAH A	"},	
{item: "		Jodi Al-Anshari		AB	I'DADIYAH A	"},	
{item: "		KhusainiAlbab		GZ	I'DADIYAH A	"},	
{item: "		M HusniMubarok		GZ	I'DADIYAH A	"},	
{item: "		M. SidiqAulawi		MI	I'DADIYAH A	"},	
{item: "		M. Yahya Amin		AB	I'DADIYAH A	"},	
{item: "		MualifMuhya		AB	I'DADIYAH A	"},	
{item: "		RahmadMaulana		AB	I'DADIYAH A	"},	
{item: "		Rifki Wahyudin		FR	I'DADIYAH A	"},	
{item: "		Rizky A.B		LY	I'DADIYAH A	"},	
{item: "		Safiudin		FR	I'DADIYAH A	"},	
{item: "		Starrando S.V		GZ	I'DADIYAH A	"},	
{item: "		SyekhAbidinKhobar		AB	I'DADIYAH A	"},	


                ]
    });

tasks.initialize();
 
$('.typeahead').typeahead(null, {
  name: 'tasks',
  displayKey: 'item',
  source: tasks.ttAdapter()
});

    
/*---Models---*/
    app.Todo = Backbone.Model.extend({
      defaults: {
        title: '',
        completed: false
          },
       toggle: function(){
        this.save({ completed: !this.get('completed')});
        }
    });
  
 /*---Collections---*/
    app.TodoList = Backbone.Collection.extend({
      model: app.Todo,
     localStorage: new Store("backbone-todo"),
      completed: function() {
        return this.filter(function( todo ) {
          return todo.get('completed');
        });
      },
      remaining: function() {
        return this.without.apply( this, this.completed() );
      }      
    });

    // instance of the Collection
    app.todoList = new app.TodoList();
  
  /*---Views----*/
    // renders individual todo items list (li)
    app.TodoView = Backbone.View.extend({
      tagName: 'li',
      template: _.template($('#item-template').html()),
      render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        this.input = this.$('.edit');
        return this; // enable chained calls
      },
        initialize: function(){
        this.model.on('change', this.render, this);
          this.model.on('destroy', this.remove, this); 
      },
       events: {
        'dblclick label' : 'edit',
        'keypress .edit' : 'updateOnEnter',
        'blur .edit' : 'close',
        'click .toggle': 'toggleCompleted',
        'click .destroy': 'destroy'
      },
      edit: function(){
        this.$el.addClass('editing');
        this.input.focus();
      },
      close: function(){
        var value = this.input.val().trim();
        if(value) {
          this.model.save({title: value});
        }
        this.$el.removeClass('editing');
      },
      updateOnEnter: function(e){
        if(e.which == 13){
          this.close();
        }
        },
       toggleCompleted: function(){
         this.model.toggle();
      },
    destroy: function(){
        this.model.destroy();
     }    
    });

    // renders the full list of todo items calling TodoView for each one.
    app.AppView = Backbone.View.extend({
      el: '#todoapp',
      initialize: function () {
        this.input = this.$('#new-todo');
        app.todoList.on('add', this.addAll, this);
        app.todoList.on('reset', this.addAll, this);
        app.todoList.fetch(); // Loads list from local storage
      },
      events: {
        'keypress #new-todo': 'createTodoOnEnter'
      },
      createTodoOnEnter: function(e){
        if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
          return;
        }
        app.todoList.create(this.newAttributes());
        this.input.val(''); // clean input box
      },
      addOne: function(todo){
        var view = new app.TodoView({model: todo});
        $('#todo-list').append(view.render().el);
      },
      addAll: function(){
        this.$('#todo-list').html(''); // clean the todo list
    // filter todo item list
        switch(window.filter){
          case 'pending':
            _.each(app.todoList.remaining(), this.addOne);
            break;
          case 'completed':
           _.each(app.todoList.completed(),this.addOne);
           console.log(this);
            break;            
          default:
            app.todoList.each(this.addOne, this);
            break;
        }
        },
      
      
      newAttributes: function(){
        return {
          title: this.input.val().trim(),
          completed: false
        }
      }
    });

/*---Routers----*/
    app.Router = Backbone.Router.extend({
      routes: {
        '*filter' : 'setFilter'
      },
      setFilter: function(params) {
        console.log('app.router.params = ' + params);
        window.filter = params.trim() || '';
        app.todoList.trigger('reset');
      }
    }); 


/*-----Intializers---*/
    app.router = new app.Router();
    Backbone.history.start();    

    app.appView = new app.AppView();
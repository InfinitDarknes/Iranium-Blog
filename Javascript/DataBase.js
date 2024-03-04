const Tags = {
  Iran: { KeyValue: "Iran", DisplayName: "ایران", CountOfPosts: 0, Href: "" },
  USA: { KeyValue: "USA", DisplayName: "آمریکا", CountOfPosts: 0, Href: "" },
  Russia: { KeyValue: "Russia", DisplayName: "روسیه", CountOfPosts: 0, Href: "" },
  NorthKorea: { KeyValue: "NorthKorea", DisplayName: "کره شمالی", CountOfPosts: 0, Href: "" },
  Pakistan: { KeyValue: "Pakistan", DisplayName: "پاکستان", CountOfPosts: 0, Href: "" },
  France: { KeyValue: "France", DisplayName: "فرانسه", CountOfPosts: 0, Href: "" },
  England: { KeyValue: "England", DisplayName: "انگلیس", CountOfPosts: 0, Href: "" },
  Isreal: { KeyValue: "Isreal", DisplayName: "اسراییل", CountOfPosts: 0, Href: "" },
  Uranium: { KeyValue: "Uranium", DisplayName: "اورانیوم", CountOfPosts: 0, Href: "" },
  Plutnonium: { KeyValue: "Plutnonium", DisplayName: "پلوتونیوم", CountOfPosts: 0, Href: "" },
  GunType: { KeyValue: "GunType", DisplayName: "بمب تفنگی", CountOfPosts: 0, Href: "" },
  Nuclear: { KeyValue: "Nuclear", DisplayName: "هسته ای", CountOfPosts: 0, Href: "" },
  Fission: { KeyValue: "Fission", DisplayName: "شکافتی", CountOfPosts: 0, Href: "" },
  Fusion: { KeyValue: "Fusion", DisplayName: "همجوشی", CountOfPosts: 0, Href: "" },
  ThermoNuclear: { KeyValue: "ThermoNuclear", DisplayName: "گرماهسته ای", CountOfPosts: 0, Href: "" },
  DirtyNukes: { KeyValue: "DirtyNukes", DisplayName: "بمب کثیف", CountOfPosts: 0, Href: "" },
  ChemicalAgents: { KeyValue: "ChemicalAgents", DisplayName: "ایجنت های شیمیایی", CountOfPosts: 0, Href: "" },
  Airdefense: { KeyValue: "Airdefense", DisplayName: "پدافند", CountOfPosts: 0, Href: "" },
  Satellite: { KeyValue: "Satellite", DisplayName: "ماهواره", CountOfPosts: 0, Href: "" },
  Radar: { KeyValue: "Radar", DisplayName: "رادار", CountOfPosts: 0, Href: "" },
  Torpedo: { KeyValue: "Torpedo", DisplayName: "اژدر", CountOfPosts: 0, Href: "" },
  Missile: { KeyValue: "Missile", DisplayName: "موشک", CountOfPosts: 0, Href: "" },
  ICBM: { KeyValue: "ICBM", DisplayName: "قاره پیما", CountOfPosts: 0, Href: "" },
  Drones: { KeyValue: "Drones", DisplayName: "پهپاد", CountOfPosts: 0, Href: "" },
  Submarine: { KeyValue: "Submarine", DisplayName: "زیردریایی", CountOfPosts: 0, Href: "" },
  Reactor: { KeyValue: "Reactor", DisplayName: "راکتور", CountOfPosts: 0, Href: "" },
  Enrichment: { KeyValue: "Enrichment", DisplayName: "غنی سازی", CountOfPosts: 0, Href: "" },
  USV: { KeyValue: "USV", DisplayName: "زیردریایی بدون سرنشین", CountOfPosts: 0, Href: "" },
  UndergroundTest: { KeyValue: "UndergroundTest", DisplayName: "تست زیرزمینی", CountOfPosts: 0, Href: "" },
  WarmTest: { KeyValue: "WarmTest", DisplayName: "تست گرم", CountOfPosts: 0, Href: "" },
  ColdTest: { KeyValue: "ColdTest", DisplayName: "تست سرد", CountOfPosts: 0, Href: "" },
  ExplosiveLenses: { KeyValue: "ExplosiveLenses", DisplayName: "لنز های انفجاری", CountOfPosts: 0, Href: "" },
};
let Authors = {
  Arash: {
    DisplayName: "دهدشتی",
    Biography: "برنامه نویس جاوا اسکریپت،علاقمند به ایران و مسائل نظامی و هسته ای",
    ProfilePicture: "../Admins/ProfilePictures/Arash.jpg",
  },
};
let Posts = [
  {
    Path: "what-is-salty-bomb",
    Title: "بمب نمکی، کثیف ترین نوع سلاح هسته ای !",
    ThumbnailSrc: "../Images/FusionBombScheme.jpg",
    ThumbnailAlt: "بمب نمکی",
    ThumbnailTitle: "بمب نمکی",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear, Tags.Fusion, Tags.ThermoNuclear, Tags.DirtyNukes, Tags.Russia, Tags.England, Tags.WarmTest],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "بمب نمکی چیست ؟",
        Paragraphs: [
          "در راستای سری پست‌های پیشین در ارتباط با بمب‌های گرما هسته‌ای دو مرحله‌ای متداول و بمب‌های نوترونی، این بار به یک نوع دیگر از اثرگذار‌ترین بمب‌های هسته‌ای میپردازیم، و آن چیزی نیست جز بمب‌های گرما هسته‌ای نمکی یا بمب‌های هیدروژنی نمکی که قابلیت ایجاد عدم دسترسی‌ بشر به مناطق مد نظر و حتی فراتر از آن را برای دهه‌ها دارند. این بمب برای اولین بار توسط فیزیکدان مشهور لئو ژیلارد پیشنهاد داده شد. بمب نمکی از نظر قدرت تخریب، از تخریب کمتری نسبت به بمب‌های هیدروژنی معمول برخوردار است، اما این قابلیت سهمگین را دارد که محیط را برای سالیان طولانی آلوده به مواد رادیوکتیو و بدین روی غیر قابل سکونت کند. اگر همچین بمبی در ژاپن هیروشیما به کار گرفته می شد، به احتمال زیاد این کشور امروز به کل یا بخشی قابل توجه آن خالی‌ از سکنه میبود. اما این بمب چگونه کار می‌کند؟ ",
        ],
      },
      {
        SectionTitle: "ساختار بمب نمکی",
        Paragraphs: [
          "پیشتر اشاره شد که یک بخش مهم از یک بمب گرما هسته‌ای تمپر آن است، تمپر دو خاصیت دارد، یکی‌ این که نوترون‌های ایجاد شده از شکافت هسته‌ای را بازتاب میدهد (منعکس می‌کند) و بدین روی نمیگذارد نوترون‌های ارزشمند که برای ادامه بقا زنجیره شکافت هسته ای و تولید سوخت برای قسمت همجوشی بمب گرما هسته‌ای از اهمیت بالا برخوردار هستند، فرار کنند و از دست بروند و دوم اینکه بدلیل اینرت بودن تمپر، باعث جلوگیری از منفجر شدن و از هم گسیختن بمب هر چند برای مدتی‌ کوتاه میشود که این باز این امکان را به زنجیره هسته‌ای میدهد که نوترون‌ها چند نسل دیگه بتوانند هسته‌ها را بشکافند و همچنین همجوشی بتواند (برای هر چند مدت کوتاهی‌) ادامه پیدا کند. بیشترین انرژی یک بمب هسته‌ای در آخرین نسل‌های شکافت هسته‌ای تولید میشود، زیرا در نسل‌های آخر بیشترین تعداد نوترون‌ها برای شکافت هسته‌ای وجود دارند و در دسترس هستند. ",
        ],
      },
      {
        SectionTitle: "آلودگی حاصل از بمب نمکی",
        Paragraphs: [
          "در بمب‌های هیدروژنی معمول، تمپر که معمولاً از اورانیوم ۲۳۸ (اورانیوم تضعیف شده : در واقع پسماند مواد خارج شده از ماشین‌های سانتریفیوژ) استفاده میشود، توسط نوتروهای بسیار سریع (که انرژی جنبشی بالا دارند) شکافته میشوند، و بدین روی دست کم ۵۰ درصد بازده بمب هسته‌ای را تولید میکنند و آلودگی‌ زیادی هم به بار می‌‌آورند. اگر بمب تمیز یا پاک بخواهیم (به مانند بمب نوترونی) این تمپر با مواد دیگر غیر قابل شکافت جایگزین میشود. اما در بمب‌های هیدروژنی نمکی، به جای تمپر اورانیوم ۲۳۸، از تمپر کبالت ۵۹ بهره گرفته میشود که توسط شار عظیم نوترونی آزاد شده در پروسه همجوشی و شکافت بدلیل جذب نوترون‌ها کبالت ۵۹ به کبالت ۶۰ تغییر پیدا می‌کند که این ایزوتوپ کبالت بسیار رادیواکتیو بوده و پرتو خطرناک و نافذ گاما (با نیمه عمر ۵.۲۷ سال) برای بازده چند ده ساله در منطقه مد نظر باعث آلودگی‌ و تابش شدید می‌ شود که هر گونه تماس با این تابش منجر به مرگ خواهد شد. سایر ایزوتوپهای رادیواکتیو که برای تمپر بمب های نمکی پیشنهاد شده اند عبارتند از طلا ۱۹۸، تانتالوم ۱۸۲، روی ۶۵ و سدیم ۲۴. ",
          "لازم به ذکر است که تابش گاما تولید شده در یک بمب هیدروژنی معمول با تمپر اورانیوم ۲۳۸ در ابتدا بسیار بیشتر از بمب هیدروژنی نمکی با تمپر کبالت است، به صورت دقیق تر این تابش ۱۵۰۰۰ برابر در یک ساعت شدیدتر، ۳۵ بار شدیدتر در یک هفته، ۵ برابر شدیدتر در ۱ ماه و تقریباً برابر در عرض ۶ ماه است. پس از آن سطح تشعشعات ناشی از فرآیند شکافت به سرعت کاهش می یابد، به طوری که تابش گاما حاصل از تجزیه کبالت ۶۰ ، ۸ برابر شدید تر در عرض یک سال و ۱۵۰ برابر شدید تر در عرض ۵ سال از تابش گاما یک بمب هیدروژنی با تمپر ۲۳۸ است. پس از حدود ۷۵ سال تشعشعات حاصل از بمب هیدروژنی با تمپر ۲۳۸ دوباره از بمب کبالت ۶۰ پیشی‌ می‌گیرند. ",
        ],
      },
      {
        SectionTitle: "بمب های نمکی روسیه و بریتانیا",
        Paragraphs: [
          'بریتانیا به عنوان مثال در ۱۴ سپتامبر ۱۹۵۷ یک بمب ۱ کیلوتنی حاوی کبالت را در مکان آزمایشات هسته‌ای خود در Tadje در محدوده مارالینگا، استرالیا آزمایش کرد. همچنین گفته میشود که سر جنگ چند مگاتنی اژدر زیرآبی‌ با پیشران هسته‌ای روسیه معروف به پوسایدون یا "خدای دریاها" حامل تمپر کبالت است تا بتوان محدود حمله شده (که شامل بندر‌های نظامی دشمن است) را غیر قابل استفاده مجدد کرد. ',
        ],
      },
      {
        SectionTitle: "تفاوت بمب نمکی به بمب کثیف",
        Paragraphs: [
          "همچنین اضافه می‌کنم که دوستان بمب هسته‌ای نمکی را با بمب RDD یا کثیف اشتباه نگیرند. در بمب کثیف انفجار هسته‌ای در کار نیست و صرفا مواد رادیواکتیو از جمله همین کبالت ۶۰ که به صورت پودر درآمده ا‌ند، توسط مواد فوق انفجاری در فضا پخش میشوند و محیط را وابسته به شرایط آب و هوایی و نوع محل میتوانند به شرط اینکه از مقادیر قابله توجهی‌ استفاده شود، به صورت جدی آلوده کنند. این گونه بمب‌های کثیف میتوانند نسل خوبی‌ از سر جنگی‌ها برای موشک‌های بالستیک ایران را رقم بزنند زیرا که بسیار ساده قابل تولید هستند اما نگهداری و انبار کردن آن میتواند سخت باشد. ",
        ],
      },
    ],
  },
  {
    Path: "can-plutonium-be-used-in-gun-type-nuke?",
    Title: "استفاده از پلوتونیوم در بمب تفنگی",
    ThumbnailSrc: "../Images/GunTypeBombs.png",
    ThumbnailAlt: "ساختار بمب تفنگی",
    ThumbnailTitle: "ساختار بمب تفنگی",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear, Tags.Fission, Tags.GunType, Tags.Uranium, Tags.Plutnonium],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "بمب تفنگی چیست ؟",
        Paragraphs: [
          "دوستی‌ پرسیدند که آیا در بمب‌های هسته‌ای از نوع تفنگی میتوان از پلوتونیوم استفاده کرد؟ در نوع تفنگی سلاح هسته‌ای که آسان‌ترین نوع سلاح هسته‌ای است و بی‌ تردید کشوری مثل ایران یا کشور‌های منطقه ما با کمی‌ دانش مهندسی‌ آن را میتوانند عملیاتی کنند، مکانیزم به این صورت است که مواد هسته‌ای به دو تیکه زیر بحرانی‌ تقسیم می‌‌شوند، و یکی‌ از این تیکه‌ها به دیگری با انفجار خرجی کوچک (در پشت آن) شتاب داده می‌‌شود و در نقطه تصادف این دو تیکه با یکدیگر به جرم فوق بحرانی‌ دست پیدا می کنند که با نوترون‌های آزاد شده یک زنجیره شکافت ایجاد می‌‌شود. بمب هیروشیما نیز از این گونه بمب بود. این دست بمب‌ها مواد هسته‌ای زیادی هم مصرف میکنند و از بهره وری کمی‌ برخوردار هستند!",
        ],
      },
      {
        SectionTitle: "چرا نمیشود در بمب تفنگی از پلوتونیوم استفاده کرد؟",
        Paragraphs: [
          "اما در پاسخ به این سوال باید گفت که مکانیزم تفنگی تنها و تنها با اورانیوم کار می‌کند، استفاده از پلوتونیوم در این نوع سلاح هسته‌ای باعث پیش انفجار و متلاشی شدن بمب قبل از اینکه بمب به قدرت انفجاری برسد، می‌‌شود! چرا؟ هسته‌ای‌های اورانیوم و پلوتونیوم و دیگر ایزوتوپ‌های سنگین، مدام در حال واپاشی هسته‌ای هستند، به این صورت که همیشه هسته‌ به صورت خود به خودی شکافته و نوترون آزاد میکنند (بدون اینکه تحت تاثیر عامل خارجی‌ قرار بگیرند). چرا این هسته‌ ها واپاشی میکنند، بر میگردد به موضوع تونل کوانتومی که بخشی از هسته یک اتم این امکان را دارند که میدان کولومبی که در آن محبوس هستند را با استفاده از مکانیزم تونل زنی کوانتومی ترک کنند، و در این راستا نوترون‌هایی هم آزاد می‌‌شوند. نرخ آزاد سازی نوترون‌ها به هنگام واپاشی هسته‌ای بین اورانیوم و ایزوتوپ‌های پلوتونیوم بسیار متفاوت است. اورانیوم ۲۳۵ و پلوتونیوم ۲۳۹ از نرخ کمی‌ برخوردار هستند، اما پلوتونیوم ۲۴۰ به طور وحشتناکی از خود نوترون آزاد میکنند. بدین روی برای تولید پلوتونیوم درجه سلاح بسیار کلیدی خواهد بود که تا حد ممکن از سطح پلوتونیوم ۲۴۰ کاسته بشود، به عبارت دیگر برای یک سلاح هسته‌ای با مکانیزم رمبش (implosion: لنز‌های انفجاری) غنای پلوتونیوم ۲۳۹ باید به شدت بالا باشد. این غنا در حال حاضر در سلاح‌های هسته‌ای آمریکا تقریبا ۹۴ درصد است.",
        ],
      },
      {
        SectionTitle: "تفاوت مکانیزم رمبش با تفنگی",
        Paragraphs: [
          'فرق مکانیزم رمبش با مکانیزم تفنگی در این است که در مکانیزم رمبش مواد هسته‌ای در مقیاس میکرو ثانیه به جرم فوق بحرانی‌ میرسند، در حالیکه در مکانیزم تفنگی تا دو تیکه زیر بحرانی‌ به جرم فوق بحرانی‌ برسند، چند میلی‌ ثانیه زمان میبرد. زمانی‌ "طولانی" که اگر از پلوتونیوم که آغشته به پلوتونیوم ۲۴۰ ولو هر چند کم استفاده بشود، به دلیل تابش شدیدی نوترونی این ایزوتوپ کافی‌ خواهد بود که از رسیدن به جرم فوق بحرانی‌ جلوگیری کرده و بمب متلاشی بشود! به این دلیل پس از کشف پلوتونیوم، دانشمندان بسیار زود فهمیدند که باید روش دیگری را برای رسیدن به جرم فوق بحرانی‌ برای پلوتونیوم پیدا کنند که همان رمبش یا implosion بود! بدین روی در سلاح هسته‌ای و در هر نوعی میتوانید از اورانیوم استفاده کنید، اما در نوع تفنگی نمیتوانید از پلوتونیوم بهره ببرید!',
        ],
      },
    ],
  },
  {
    Path: "three-stage-thermonuclear-bombs",
    Title: "بمب های گرما هسته ای سه مرحله ای",
    ThumbnailSrc: "../Images/ThreeStageHBomb.jpg",
    ThumbnailAlt: "ساختار بمب گرما هسته ای سه مرحله ای",
    ThumbnailTitle: "ساختار بمب گرما هسته ای سه مرحله ای",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear, Tags.Fusion, Tags.ThermoNuclear, Tags.USA],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "بمب گرما هسته ای سه مرحله ای چیست ؟",
        Paragraphs: [
          "بمب‌های گرما هسته‌ای صرفا محدود به دو مرحله نمیشوند. قدرت انفجاری بمب را میتوان به صورت سریالی با افزودن مراحل دیگر و با استفاده از پدیده همجوشی با کمک دوترید لیتیوم به صورت چشمگیری تا بی‌ نهایت روی کاغذ افزایش داد. افزودن مراحل بیشتر البته باعث افزایش شدید وزن بمب شده و آن را غیر قابل تحویل دهی‌ می‌کند. از بمب‌های هسته‌ای آمریکا تنها یک بمب‌ به صورت سه مرحله‌ای طراحی‌ شده بود، بمبی به نام B41 که مرحله سوم آن البته آزمایش نشد و اگر میشد طبق تخمین‌ها توان تولید قدرت انفجاری بالغ بر ۲۵ مگاتن TNT را می‌‌داشت، که بسیار چشمگیر است، مخصوصا با توجه به اینکه همچین بمبی از بیشترین نسبت بازده به وزن و بدین روی از بالاترین بهروری برخوردار بود و با وجود همچین بازده‌ای بسیار قابل تحویل دهی‌ بود. وزن بمب تنها ۴.۸ تن و طول آن ۳.۷ متر بود! ۵۰۰ عدد از این دست بمب‌های سه مرحله‌ای در آمریکا ساخته شدند که بعد‌ها به مرور زمان از خدمت کنار گذاشته شدند. ",
        ],
      },
      {
        SectionTitle: "قسمت اولیه بمب",
        Paragraphs: [
          "در قسمت اولیه بمب، از یک بمب بوست شده شکافت هسته‌ای (با کمک دوتریوم و تریتیوم) با بازده ۴۰ تا ۱۰۰ کیلوتنی استفاده میشد که مرحله دوم را فشرده میکرد و در ادامه مرحله دوم مرحله سوم را فشرده و به وضعیت فوق بحرانی‌ می‌‌رساند. مرحله سوم در این بمب از طول بیشتری نسبت به مرحله دوم برخوردار بوده است! بدین روی میتوان انتظار داشت که عمده بازده بمب در مرحله سوم بمب در صورت آزمایش تولید میشده است! در تصاویر بالا روند‌های فشرده سازی را ملاحظه می‌کنید. ",
        ],
      },
      {
        SectionTitle: "معایب و محدودیت ها",
        Paragraphs: [
          "بنابرین در کل هیچ محدودیت فیزیکی‌ و مهندسی‌ موثری برای بازده بمب گرما هسته ای وجود ندارد. محدودیت ها تنها اقتصادی و عملیاتی هستند. یک بمب ۱۰۰ مگاتنی تقریباً بزرگترین بازدهی است که توسط بمب افکن می تواند تحویل داده شود. اما همان طور که در پستی پیشتر گفته شد، چند بمب کوچک تر با بازده کمتر قابلیت ایجاد تخریب بیشتر در سطح گسترده تری را دارند. در اینجا قابلیت کوچک سازی بمب‌ها برای تخریب گسترده تر کلیدی خواهد بود، بنابرین ساختن بزرگترین بمب اشتباه و ساختن کوچکترین بمب ممکن با بازده مناسب تعیین کننده خواهد بود. ",
          "انفجار یک اثر حجمی و یک اثر سطحی بر اهداف پخش شده بر روی زمین دارد. با افزایش بازده یک بمب، اثر حجمی به صورت خطی‌، در حالیکه اثر سطحی با ریشه مکعب (به توان ۱/۳) افزایش پیدا می‌کند، به عبارت دیگر، هر چه بازده بمب بیشتر شود، اثر سطحی بمب از رشد کمتری به نسبت برخوردار خواهد بود. بدین روی بهتر است از چندین بمب با بازده کمتر به جای یک بمب با بازده بسیار بالا برای تخریب گسترده استفاده بشود! یکی‌ از دلایلی که چرا در پروسه تکمیل سازی زرادخانه و تحویل دهی‌ کلاهک‌های هسته ای به فناوری میرو در موشک‌ها باید توجه ویژه بشود!",
        ],
      },
    ],
  },
  {
    Path: "uranium-vs-plutonium-yield",
    Title: "بازده بمب هسته ای با اورانیوم بیشتر است یا پلوتونیوم؟",
    ThumbnailSrc: "../Images/UraniumVsUranium.jpg",
    ThumbnailAlt: "اورانیوم و پلوتونیوم",
    ThumbnailTitle: "اورانیوم و پلوتونیوم",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear, Tags.Uranium, Tags.Plutnonium],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "ویژگی های پلوتونیوم",
        Paragraphs: [
          "پرسیدند بازده سلاح هسته‌ای آیا با پلوتونیوم یا با اورانیوم بیشتر خواهد بود؟ پلوتونیوم بسیار سریع تر شکافته و همچنین نوترون‌های بیشتری نسبت به اورانیوم تولید می‌کند که میتوانند هسته‌های بیشتری بشکافند. هسته پلوتونیوم شکافته شده همچنین کمی‌ بیشتر نسبت به اورانیوم انرژی آزاد می‌کند، اما پلوتونیوم یک مشکل حاد دارد و آن هم وجود مقداری ایزوتوپ ۲۴۰ قاطی‌ هسته پلوتونیومی ۲۳۹ است. ایزوتوپ ۲۴۰ بر اثر واپاشی هسته ای، بسیار و به شدت از خود نوترون آزاد می‌کند که میتواند بسیار دردسار ساز به عنوان مثال در ارتباط با پیش انفجاری در بمب باشد. بدین سبب به منظور جلوگیری از پیش انفجار هسته‌ای و همچنین جلوگیری از رسیدن به وضعیت بحرانی‌ در شرایط عادی در بمب، جرم کره هسته ای پلتونیومی باید همیشه کمتر از جرم بحرانی‌ باشد تا هم درصد ایزوتوپ ۲۴۰ پایین آمده و هم بمب از نظر ایمنی از شرایط قابل قبول برخوردار باشد، اما این باعث میشود که وقتی‌ که بمب پس از implosion که به وضعیت فوق بحرانی‌ می‌‌رسد، از مقدار مواد هسته‌ای کمتری برخوردار باشد و توان تولید قدرت انفجاری کمتری خواهد داشت. نقطه مقابل این وضعیت را در کره‌های هسته‌ای اورانیومی می‌بینید. اورانیوم جرم بحرانی‌ بس قابل توجه بیشتری نسبت به پلوتونیوم دارد و با توجه به اینکه شکافت هسته‌ای در اورانیوم به سرعت پلوتونیوم نیست و همچنین پس از هر شکافت تعداد نوترون‌های کمتری هم آزاد می‌‌شوند، اما به دلیل اینکه جرم اولیه کره اورانیومی بسیار بیشتر از جرم بحرانی‌ پلوتونیوم است، وقتی‌ اورانیوم بعد از implosion به وضعیت فوق بحرانی‌ (و آغاز شکافت هسته ای) می‌رسد، بسیار مواد هسته‌ای بیشتری در اختیار و بدین روی توان تولید انفجار عظیمی‌ با قدرت قابل توجهی‌ را خواهد داشت. تمام بمب‌های قدرتمند هسته‌ای (چند صد کیلوتنی) بر پایه صرفا شکافت هسته‌ای از فقط اورانیوم ۲۳۵ در غنای بالا بهره می‌ گرفتند! ",
        ],
      },
      {
        SectionTitle: "ویژگی های اورانیوم",
        Paragraphs: [
          "اورانیوم از آنجا که از نرخ واپاشی هسته‌ای بسیاری کمتری نسبت به پلوتونیوم برخوردار است میتواند دارای جرم اولیه چندین برابری جرم بحرانی‌ باشد و بدین روی مواد هسته‌ای بیشتری در وضعیت فوق بحرانی‌ در اختیار خواهند بود، البته این دست بمب‌ها فارغ از بازده چند صد کیلوتنی، بسیار از حجم و اندازه قابل توجهی‌ برخوردار هستند و به سختی قابل حمل خواهند بود. در آن سال‌ها برای صرفه جوی از پلوتونیوم و همچنین اورانیوم، از کره‌های هسته‌ای کامپوزیتی نیز استفاده میکردند، به عنوان مثال یک لایه پلوتونیوم (لایه درونی‌) و یک لایه اورانیوم (لایه بیرونی) به کار گرفته میشد، اینگونه میتوان به بازده‌های چند ده کیلوتنی دست یافت! ",
        ],
      },
      {
        SectionTitle: "اورانیوم بهتر است یا پلوتونیوم؟",
        Paragraphs: [
          'البته این "مشکل" پلوتونیوم در بازده کم به دلیل جرم اولیه کم با استفاده از تکنیک‌های مدرن، مثل استفاده از بوستینگ که در آن بر اثر همجوشی دوتریوم و تریتیوم در مرکز کره هسته‌ای شار عظیمی‌ از نوترون‌ها آزاد می‌‌شوند، حل شده است و امروزه میتوان با یک کره هسته‌ای پلوتونیومی کوچک، با کمک همجوشی، بازده‌ای در مقیاس چند ده کیلوتن TNT با یک بمب تک مرحله‌ای ایجاد کرد! از این بازده همچنین میتوان برای فشردن قسمت دوم بمب در یک بمب گرما هسته‌ای (بمب هیدروژنی) استفاده کرده که بازده بمب را به راحتی‌ تا چند صد کیلوتن و حتی مگاتن TNT افزایش خواهد داد! در مجموع و اگر از تکنیک بوستینگ استفاده نشود، از آنجا که بمب باید با موشک بالستیک قابل تحویل دهی‌ باشد، و به هر روی نمیتوان از اورانیوم زیادی به دلیل محدودیت فضا استفاده کرد، فرق چندانی از نظر بازده بین پلوتونیوم و اورانیوم با جرم‌های اولیه نه چندان زیاد متفاوت نخواهد بود (چه بسا پلوتونیوم عملکرد حتی بهتری هم داشته باشد، با اینکه از جرم اولیه کمتری نسبت به اورانیوم برخوردار است)، اما بهترین گزینه پلوتونیوم است زیرا که جرم بحرانی‌ کمتری دارد، و بدین روی فضای کمتری اشغال خواهد کرد و به مواد انفجاری کمتری هم برای implosion نیاز خواهد بود و بدین سبب بمب سبک تر و کوچک تر و ایده آل برای تحویل دهی‌ خواهد بود! به دلیل جرم بحرانی‌ کمتر پلوتونیوم طبیعتا تعداد بمب‌های بسیار بیشتری میتوان به نسبت اورانیوم تولید کرد. بدین روی ایران قطعا برای زرادخانه خود به پلوتونیوم نیاز شدید دارد و خواهد داشت و در این راستا باید قدم بر دارد! در تصویر بالا یکی‌ از دانشمندان پروژه منهتن آمریکا را میبنید که در جعبه‌ای هسته پلوتونیومی بمب هسته‌ای "مرد چاق" را حمل می‌کند. این بمب در اگوست ۱۹۴۵ بر فراز نگازاکی منفجر شد و بازده‌ای بالغ بر ۲۱ کیلوتن TNT ایجاد کرد که ضربه فوق مهلکی به ژاپن بود! ',
        ],
      },
    ],
  },
  {
    Path: "technical-questions-about-nukes",
    Title: "پرسش های فنی درباره تسلیحات هسته ای",
    ThumbnailSrc: "../Images/PrimaryPartsOfBoostedBomb.jpg",
    ThumbnailAlt: "اجزای اصلی بمب شکافتی بوست شده",
    ThumbnailTitle: "اجزای اصلی بمب شکافتی بوست شده",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear, Tags.Fusion, Tags.ThermoNuclear],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "چقدر میشه بمب شکافتی رو بوست کرد؟",
        Paragraphs: [
          "چقدر میشه بمب شکافتی رو بوست کرد؟ یعنی میشه به جای بمب دو مرحله ای همجوشی فقط یه هسته بزرگ ساخت که وسطش تریتیوم و دوترید باشه و بازدهی در حد w56 داشته باشه؟",
          "یک بمب هسته‌ای بر پایه فقط شکافت هسته‌ای را میتوان با بهره گیری از همجوشی تا ۱۰ برابر بوست کرد، اما این دست بمب‌های هسته ای، بمب‌های شبه گرما هسته‌ای هستند و بمب‌های گرما هسته‌ای دو مرحله‌ای (هیدروژنی) را جایگزین نمیکنند، اما با این حال میتوانند قدرت انفجاری تا کم و پیش نزدیک به ۱ مگاتن TNT را به دست آورند ... در اینجا باید توجه داشت که برای دستیابی به قدرت انفجاری چند صد کیلوتنی نیاز به بمب‌های بسیار بزرگ و لنز‌های انفجاری متعددی است که بتوانند عملیات فشرده سازی هسته (implosion) را به صورت تا حد امکان یکسان و یکنواخت انجام بدهند! این یک نکته کلیدی خواهد بود!   ",
        ],
      },
      {
        SectionTitle: "کم‌ترین جرم بحرانی که برای پلوتونیوم ۲۳۹ چقدره؟ ",
        Paragraphs: [
          "کم‌ترین جرم بحرانی که برای پلوتونیوم ۲۳۹ چقدره؟ یعنی اگه وسطش مقدار زیادی تریتیوم بذاریم تمپر اورانیوم ۲۳۸ هم استفاده کنیم و در مواد منفجره خیلی خیلی‌ زیاد هم استفاده کنیم چقدر پلوتونیوم کافیه؟ اونطور که خواندم حداقل یکی دو کیلو هست ولی هیچ فرمول و محاسبه ای ندیدم که بگه کمتر نمی‌شه.",
          "در تسلیحات هسته‌ای بوست شده از یک کیلوگرم پلوتونیوم هم استفاده کرده ا‌ند، اما توجه داشته باشید که جرم بحرانی‌ سلاح یک عدد ثابت نیست. بسته به طراحی‌ مد نظر، میزان مواد منفجره، تعداد لنز‌های انفجاری، استفاده از یک شکاف هوایی، تمپر و انعکاس دهنده و دیگر تمهیدات میتوان implosion را به قدری شدید و دقیق کرد که این میزان تا کمتر از یک کیلوگرم هم برسد، اما در اینجا هم حجم و هم جرم خود بمب شدیدا افزایش پیدا میکنند، که دیگر قابلیت سوار کردن بر موشک بالستیک را ندارند! اما به طور کلی‌ هر چه بیشتر بتوانید هسته کروی هسته‌ای را فشرده کنید، به جرم بحرانی‌ کمتری نیاز خواهید داشت، اما به هر ترتیبت از آنجا که فشردگی با مواد فوق انفجاری شیمیایی صورت می‌پذیرند، میزان فشردگی محدود خواهد بود و در نهایت یک حد معینی خواهد داشت! به همین دلیل با استفاده از تکنیک رمبش بر پایه مواد فوق انفجاری هیچگاه نمیتوان به یک بمب گرما هسته‌ای دست پیدا کرد و باید راه دیگری جستجو کرد که همان بمب‌های دو مرحله‌ای هستند. ",
        ],
      },
      {
        SectionTitle: "کلا توی بمب هسته‌ای از لحاظ زمانی روی چند واکنش زنجیره ای میشه حساب کرد؟ ",
        Paragraphs: [
          "بر مبنای تعداد واکنش زنجیره حساب نمی‌شود، بلکه بر مبنای تعداد نسل‌های واکنش زنجیره ای قدرت انفجاری در نظر گرفته می‌‌شود و این بستگی به میزان فشردگی مواد هسته‌ای دارند، هر چه هسته کروی فشرده تر و در شرایط فوق بحرانی‌ تر قرار بگیرد، نسل‌های شکافت بیشتری خواهید داشت، این تعداد بین ۵۰ تا ۹۰ نسل هستند. بیشترین انرژی در نسل‌های آخر زنجیره شکافت هسته‌ای آزاد می‌‌شوند، برای اینکه بیشترین فلاکس نوترونی را در نسل‌های آخر خواهید داشت! بدین جهت اگر بمبی نتواند نسل‌های بیشتری از شکافت را در خود تولید کند، بازده (بسیار) کمی‌ خواهد داشت! نسل‌های شکافت هسته‌ای بین ۱ تا ۲ میکرو ثانیه صورت می‌‌پذیرند، هر چه بیشتر بتوانید بمب را (حتی برای مدت زمان بسیار کوتاهی) پایدار نگهدارید، بازده بسیار بیشتری دریافت خواهید کرد. در اینجا تمپر بمب نقش مهمی‌ ایفا می‌کند.",
        ],
      },
      {
        SectionTitle: "چرا بازده سلاح هسته ای 100 درصد نیست ؟",
        Paragraphs: [
          "مثلاً با ۴.۸ گرم تریتیوم و ۲.۴ گرم دوتریوم میشه یه ضرب ۵۸۰ گرم پلوتونیوم رو شکافت بدیم که ۱۰ کیلوتن قدرت داشته باشه؟ یعنی میخواستم بدونم چرا بازده سلاح از ۴۰ درصد بالاتر نمیره چرا صد درصد نیست؟ ",
          "با ۴.۸ گرم تریتیوم و ۲.۴ گرم دوتریوم (بر فرض اینکه تمام این مقدار سوخت همجوشی کنند) ۳۴۴ گرم پلوتونیوم به طور مستقیم در نسل اول زنجیره شکافت، شکافته و سوخته خواهند شد، به عبارت دیگر یک ضرب انرژی تقریبا بالغ بر ۶.۹ کیلوتن TNT آزاد خواهد شد! این مقدار پلوتونیوم در نسل بعدی (دوم) ۶.۶۲۴ مول نوترون تولید خواهد کرد که ۱۵۸۳ گرم پلوتونیوم را خواهند شکافت، یعنی‌ در طی‌ دو نسل با سلاح هسته ای بوست شده ۱۹۲۷ گرم پلوتونیوم سوخته خواهند شد، به عبارت دیگر در این دو نسل تقریبا ۳۹ کیلوتن TNT انرژی آزاد می‌‌شود! بهره وری سلاح صد در صد نیست برای اینکه فشردگی هسته کروی بی‌ نهایت نیست و همه سوخت موجود بدین روی مصرف نمی‌شود! اگر رمبش بی‌ نهایت میبود، یعنی‌ چگالی‌ هسته کروی به بی‌ نهایت افزایش میافت (چیزی که به طور عملی‌ ممکن نیست) آن وقت همه سوخت مصرف شده و بهره وری صد در صد‌ می‌بود!",
        ],
      },
      {
        SectionTitle: "قرار گیری مواد انفجاری در میان گوی هسته ای",
        Paragraphs: [
          "شما تا حالا بمب اتمی دیدید که در وسط گوی هسته‌ای هم ماده منفجره برای implosion از بیرون و درون باشه؟",
          "خیر، اما همچین مکانیزمی در سلاح هسته‌ای دو مرحله‌ای استفاده می‌‌شود، در آنجا اما به جای مواد منفجره در درون، از یک چاشنی هسته‌ای استفاده می‌‌شود که به محض مشتعل شدن، عملیات فشردگی سوخت همجوشی هم از برون و هم از درون به صورت ساندیویچی صورت می‌‌گیرد. اما به طور کلی‌، خیر، هیچگاه مواد منفجره در درون کره هسته‌ای قرار نمیگیرند، زیرا اگر قرار بگیرند، مانع رسیدن به جرم فوق بحرانی‌ کره هسته‌ای می‌‌شود!",
        ],
      },
      {
        SectionTitle: "هر یه مول نوترون چقدر اورانیوم ۲۳۸ رو شکافت میده و چقدر انرژی میده؟",
        Paragraphs: [
          "هر یک مول نوترون، یعنی‌ 6.0221408e+23 نوترون ... بر فرض اینکه این تعداد نوترون از بمب خارج و همچنین توسط هسته جذب یا پراکنده نمیشوند و همه آن برای پروسه شکافت هسته‌ای مصرف می‌‌شود، میتوانید 6.0221408e+23 تعداد اتم پلوتونیوم بشکافید، در غیر این صورت تعداد هسته‌های پلوتونیومی شکافته شده، بسیار کمتر خواهند بود. هر شکافت هسته پلوتونیوم ۲۱۰ مگا الکترون ولت انرژی می‌‌دهد که با یک ضرب ساده تعداد هسته شکافته شده با انرژی آزاد شده برای هر هسته‌ای میتوانید انرژی کل آزاد شده را به دست آورید!",
        ],
      },
    ],
  },
  {
    Path: "taylor-instability",
    Title: "ناپایداری تیلور و بوجود آمدن قارچ پس از انفجار",
    ThumbnailSrc: "../Images/TaylorInStabilityChart.png",
    ThumbnailAlt: "نمودار ناپایداری تیلور",
    ThumbnailTitle: "نمودار ناپایداری تیلور",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "آیا قارچ پس از انفجار مختص به انفجار هسته ایست؟",
        Paragraphs: [
          "یک از باور‌های غلط جمعی که اغلب در فضای مجازی دیده می‌‌شود، این است که فکر میکنند قارچ فقط پس از انفجار یک بمب هسته‌ای به وجود می‌‌آید. همان طوری که در کلیپ بالا می‌بینید، یک انفجار ساده در پمپ بنزین هم میتواند این گونه قارچ ها را ایجاد کند. اما این قارچ چگونه به وجود می‌‌آید؟ در فیزیک ناپایداری‌های‌ گوناگونی وجود دارند که یک مورد مهم آن ناپایداری تیلور است. ناپایداری تیلور بر اساس برخورد سیلات به یکدیگر با چگالی‌‌های متفاوت پدیدار میشوند، به عبارت دیگر هر گاه سیالی با چگالی‌ کمتر اما سرعت بسیار بالا (سیال داغ) به سیال دیگری که چگالی‌ بیشتر و دمای سردی دارد، برخورد می‌کند، در مرز بین برخورد این دو سیال (بر اثر اختلالات بین سطحی) ناپایداری ایجاد میشود (به تصویر بالا توجه کنید) که سپس به مرور زمان رشد پیدا کرده و در نهایت باعث ایجاد Turbulence (تلاطم یا آشفتگی‌) میشود که در واقع در آنها انرژی سیال داغ به هدر میرود.",
        ],
      },
      {
        SectionTitle: "تشکیل قارچ در انفجار هسته ای",
        Paragraphs: [
          "در مورد انفجار هسته‌ای هم بدین گونه است، انفجار هسته‌ای باعث آزاد سازی مقادیر زیادی انرژی و ایجاد هوای بسیار داغ (به دلیل پرتو X ساطع شده در لحظه انفجار هسته ای) می‌‌شود که چگالی‌ کمتری نسبت به هوای سرد محیط پیرامون انفجار را دارد. این گاز داغ با سرعت بسیار بالا منبسط شده و به هوای سرد محیط برخورد می‌ کند. ناپایداری ایجاد شده در مرز برخورد به مرور زمان رشد پیدا می‌کند که در نهایت به ایجاد تلاطم‌هایی (گردابه‌ های متلاطمی) منجر میشوند، همان طور که در کلیپ انفجار پمب بنزین میتوانید ببینید. در این تلاطم ها هوای داغ انرژی خود را از دست می‌ دهد. از این تلاطم به عنوان قارچ هسته‌ای یاد میشود. اما ناپایداری تیلور تنها یک عامل است، عامل دیگر برای ایجاد شکل قارچ مانند این دست انفجارات به دلیل تاثیر گرانش زمین است، اگر گرانشی وجود نمیداشت، شکل انفجار به صورت کروی میبود و اگر اتمسفری وجود نمیداشت، انفجار اصلا شکلی‌ نمیداشت! هر انفجار دیگری که بتواند در مدت زمان کوتاهی‌ مقدار زیادی انرژی آزاد کند، قابلیت این را خواهد داشت تا یک ابر قارچی، مانند فوران‌های آتشفشانی یا بمب‌های GBU-43 یا سلاح‌های ترموباریک یا همین انفجار پمب بنزین ایجاد کند. بنابرین وجود گرانش + ناپایداری تیلور دو عامل ایجاد شکل قارچ مانند انفجارات هستند، طبیعتا هر چه انفجار قوی تر باشد، این شکل بزرگتر و ماندگارتر خواهد بود. ",
        ],
      },
      {
        SectionTitle: "عریض شدن قارچ پس از گذشت زمان",
        Paragraphs: [
          "نکته دیگری که به آن باید توجه شود این است که قارچ هسته‌ای پس از اینکه به مرور زمان پس از تشکیل، ارتفاع می‌گیرد، عریض و در واقع از شکل قارچی خود خارج می‌‌شود. این عریض شدن قارچ به این دلیل است که دمای درون قارچ با افزایش ارتفاع کاسته می‌‌شود و قارچ دیگر توان اوج و ارتفاع گرفتن ندارد. بدین روی شکل قارچی از بین میرود و در نهایت یک ابر بسیار عریضی ایجاد می‌‌شود! در واقت سر قارچ بعد از اوج گیری و از دست رفتن دما و توان قارچ (به دلیل برخورد با لایه‌های سرد جوی)، تخت و پخش می‌‌شود (به تصویر بالا توجه شود)! ",
        ],
      },
    ],
  },
  {
    Path: "nuclear-shadows",
    Title: "ایجاد سایه پس از انفجار هسته ای",
    ThumbnailSrc: "../Images/AfterNukeShadow1.jpg",
    ThumbnailAlt: "سایه یک نفر پس از انفجار هسته ای",
    ThumbnailTitle: "سایه یک نفر پس از انفجار هسته ای",
    ThumbnailGallery: null,
    Date: "۱۴۰۱/۱۲/۲۹",
    Tags: [Tags.Nuclear],
    Author: Authors.Arash,
    Comments: false,
    ArticleSections: [
      {
        SectionTitle: "سایه های ایجاد شده پس از هیروشیما",
        Paragraphs: [
          "دوستی‌ این عکس‌ها را که پس از انفجار هسته‌ای هیروشیما گرفته شده بودند را فرستادند و میپرسند که آیا این افراد در اثر این انفجار بخار شده ا‌ند؟ ببینید در یک انفجار هسته‌ای برای تبدیل به بخار شدن یا به عبارت دیگه برای تفکیک تمام ملکول‌های بدن شما و تبدیل به اتم، حتما باید در محدوده توپ آتشین انفجار باشید، تا بر اثر پرتو X و دمای وحشتناک بالا که حتی بیشتر از مرکز خورشید هم است، کاملا تبخیر بشوید. برای مثال توپ آتشین یک بمب هسته‌ای ۱ مگاتنی، شعاع بالغ بر ۱ کیلومتر دارد، اگر در این شعاع حضور داشته باشید، تبخیر خواهید شد، اما در این عکس‌ها که به سایه هسته‌ای معروف هستند، شما سایه افراد یا اجسام ثابت را خارج از این توپ آتشین می‌بینید. افرادی که خارج از این محدوده بودند، یا بر اثر سوختگی شدید (thermal radiation) میمرند یا بر اثر موج شدید انفجار (blast wave), اما تبخیر نمی شوند. در واقع این سایه دال بر همین است که هیچ کدام از این افراد تبخیر نشدند، زیرا با وجود خود به عنوان مانع از عبور نور جلوگیری کردند، به عبارت دیگر گذر نور را سد کردند و بدین گونه سایه‌ای بر زمین یا دیوار انداخته ا‌ند. مثل یک قاب عکس که شما بر دیوار آویزان می‌کنید، و پس از چند ماه یا سال قاب را بر میدارید، می‌بینید که زیر قاب سفید است، در حالیکه دور قاب تیر شده است، این عکس‌های سایه هسته‌ای هم به همین گونه هستند. در واقع فرد سایه انداخته بر زمین، تشعشات گرمایی ساطع شده از انفجار را جذب می‌کند که تبدیل به گرما و سوختگی در فرد میشود. این تشعشعات برای مدت کوتاهی‌ تابیده میشوند و آنقدر قوی نیستند که فردی را تبدیل به بخار کنند! بنابرین فردی بر روی زمین در هیروشیما تبخیر نشده است.",
        ],
      },
      {
        SectionTitle: "اثرات انفجار هسته ای بر انسان",
        Paragraphs: [
          "در انفجار هسته‌ای بسته به این که شما در کجا قرار دارید به طرق مختلفی‌ میتوانید کشته بشوید! یا تبخیر میشود، یا سوختگی شدید پیدا می‌کنید، یا موج انفجار شدید به شما برخورد خواهد کرد، یا اصلا ممکن است هیچ کدام این‌ها نباشد و صرفا بر اثر ریزش ساختمان کشته بشوید یا اگر جان سالم هم به در ببرید، بر اثر تاثیرات این انفجار از بین بروید. در انفجار هیروشیما چون شعاع توپ آتشین چیزی بالغ بر تقریبا ۱۷۰ تا ۲۰۰ متر بوده، و این بمب در هوا منفجر شده (برای دستیابی به قدرت بیشتر) و با زمین هیچ برخوردی نداشته است، پس بنابرین میشود گفت که به احتمال زیاد تقریبا هیچ کس در هیروشیما بخار نشده است (مگر اینکه کسی‌ در یک برجی یا یک ساختمان با ارتفاع بلند بوده باشه که به نحوی به توپ آتشین ورود پیدا کرده باشد) و اغلب باید یا بر اثر سوختگی شدید یا موج انفجار شدید یا تاثیرات مخرأب و ضد زیست محیطی‌ این انفجار مرگبار کشته شده باشند.",
        ],
      },
    ],
  },
];
let SocialMediasArray = [
  { Name: "تلگرام", Href: "", Icon: "../Icons/TelegramIcon.png" },
  { Name: "توییتر", Href: "", Icon: "../Icons/TwitterIcon.png" },
  { Name: "یوتیوب", Href: "", Icon: "../Icons/YoutubeIcon.png" },
  { Name: "گیتهاب", Href: "", Icon: "../Icons/GitHubIcon.png" },
];
function UpdateTags() {
  let AllTagsUsedInPosts = [];
  Posts.forEach((Post) => {
    Post.Tags.forEach((Tag) => {
      AllTagsUsedInPosts.push(Tag.KeyValue);
    });
  });
  AllTagsUsedInPosts.forEach((PostTags) => {
    for (n in Tags) {
      if (Tags[n].KeyValue === PostTags) Tags[n].CountOfPosts += 1;
    }
  });
}

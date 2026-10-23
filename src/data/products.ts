// Prices, names and notes come from the live UA/EN site (Oct 2026).
export type Lang = 'uk' | 'en';
export type Category = 'samohon' | 'distillate' | 'gin' | 'liqueur' | 'gift';
type T = Record<Lang, string>;

export interface Product {
  slug: string;
  cat: Category;
  name: T;
  kind: T;
  volume: T;
  abv: number;
  price: number;
  img: string;
  desc?: T;
  classic?: boolean;
}

const samohon: T = { uk: 'Самогон преміальний', en: 'Premium samohon' };
const l07: T = { uk: '0,7\u00a0л', en: '0.7\u00a0l' };
const l05: T = { uk: '0,5\u00a0л', en: '0.5\u00a0l' };

const elderRye: T = {
  uk: 'Тонке поєднання добірного зерна жита і натурального соку бузини надає йому м’якого смаку, легкого аромату ягід та запаху свіжого житнього хліба.',
  en: 'A delicate combination of selected rye grains and natural elderberry juice gives it a mild flavour, a light aroma of berries and the smell of fresh rye bread.',
};
const sevenGrains: T = {
  uk: 'Подвійна перегонка сусла, в якому купажовані сім злаків, що ростуть в Україні: жито, ячмінь, пшениця, кукурудза, овес, просо, рис. Смак: м’який, легкий, солодкуватий, ретроназально — степові квіти-медоноси. Аромат: зерновий, солодкуватий.',
  en: 'Double distillation of a wort blending seven grains grown in Ukraine: rye, barley, wheat, corn, oats, millet and rice. Taste: soft, light, sweetish, with steppe honey flowers on the finish. Aroma: cereal, sweetish.',
};
const ternopilDry: T = {
  uk: 'Потрійна дистиляція за класичною англійською технологією. Карпатський ялівець та подільська бузина роблять його бездоганним як для коктейлів, так і в чистому вигляді.',
  en: 'Triple distilled using classic English technology. Carpathian juniper and Podillia elderberry make Ternopil Dry perfect for cocktails and for drinking neat.',
};

export const products: Product[] = [
  { slug: 'elderberry-rye', cat: 'samohon', classic: true, name: { uk: 'Бузиново-житній', en: 'Elderberry-Rye' }, kind: samohon, volume: l07, abv: 45, price: 395, img: 'elderberry-rye', desc: elderRye },
  { slug: 'elderberry-barley', cat: 'samohon', classic: true, name: { uk: 'Бузиново-ячмінний', en: 'Elderberry-Barley' }, kind: samohon, volume: l07, abv: 45, price: 395, img: 'elderberry-barley',
    desc: { uk: 'Баланс добірних зерен ячменю і стовідсоткового соку бузини надає йому м’якого смаку та ледь вловимого ягідного аромату.', en: 'The balance of selected barley grains and pure elderberry juice gives it a mild flavour and a subtle berry aroma.' } },
  { slug: 'rakia', cat: 'samohon', classic: true, name: { uk: 'Ракія', en: 'Rakia' }, kind: samohon, volume: l07, abv: 45, price: 385, img: 'rakia',
    desc: { uk: 'В основі — мікс стовідсоткових фруктових соків. М’який смак і приємний аромат, у якому відчутно фруктові нотки.', en: 'Based on a mix of 100% fruit juices. A mild flavour and a pleasant aroma with noticeable fruity notes.' } },
  { slug: 'chacha', cat: 'samohon', classic: true, name: { uk: 'Чача', en: 'Chacha' }, kind: samohon, volume: l07, abv: 45, price: 385, img: 'chacha',
    desc: { uk: 'Виготовляється з натурального соку темних сортів винограду, що надає їй насиченого, гармонійного смаку і приємного аромату.', en: 'Made from the natural juice of dark grape varieties, which gives it a rich, harmonious taste and a pleasant aroma.' } },
  { slug: 'wheat', cat: 'samohon', name: { uk: 'Пшеничний', en: 'Wheat' }, kind: samohon, volume: l07, abv: 45, price: 395, img: 'wheat' },
  { slug: 'pumpkin', cat: 'samohon', name: { uk: 'Гарбузовий', en: 'Pumpkin' }, kind: samohon, volume: l07, abv: 45, price: 395, img: 'pumpkin',
    desc: { uk: 'Подвійна дистиляція. Аромат: пряний, спеції, гірко-терпко-солодкий аромат баштанних — гарбуз, диня. Смак: насичений, гарбузовий, солодкуватий, складний, з терпкувато-гірким післясмаком.', en: 'Double distilled. Aroma: spicy, gourds — pumpkin and melon — bitter-tart-sweet. Taste: rich, pumpkin, sweetish and complex, with a tart-bitter finish.' } },
  { slug: 'horseradish-honey', cat: 'samohon', name: { uk: 'Хріновуха на меді', en: 'Horseradish with Honey' }, kind: samohon, volume: l07, abv: 45, price: 420, img: 'horseradish-honey' },
  { slug: 'seven-peppers-honey', cat: 'samohon', name: { uk: '7 перців на меді', en: '7 Peppers with Honey' }, kind: samohon, volume: l07, abv: 45, price: 420, img: 'seven-peppers' },
  { slug: 'amber', cat: 'samohon', name: { uk: 'Бурштиновий', en: 'Amber' }, kind: samohon, volume: l07, abv: 45, price: 495, img: 'amber' },
  { slug: 'seven-grains', cat: 'distillate', name: { uk: '7 злаків', en: '7 Grains' }, kind: { uk: 'Дистилят преміальний', en: 'Premium distillate' }, volume: l07, abv: 45, price: 420, img: 'seven-grains', desc: sevenGrains },
  { slug: 'gin-ternopil-dry-38', cat: 'gin', name: { uk: 'Ternopil Dry 38%', en: 'Ternopil Dry 38%' }, kind: { uk: 'Джин', en: 'Gin' }, volume: l07, abv: 38, price: 470, img: 'gin-38', desc: ternopilDry },
  { slug: 'gin-ternopil-dry-45', cat: 'gin', name: { uk: 'Ternopil Dry 45%', en: 'Ternopil Dry 45%' }, kind: { uk: 'Джин', en: 'Gin' }, volume: l07, abv: 45, price: 495, img: 'gin-45', desc: ternopilDry },
  { slug: 'gin-invictus', cat: 'gin', name: { uk: 'INVICTUS', en: 'INVICTUS' }, kind: { uk: 'Джин', en: 'Gin' }, volume: l07, abv: 38, price: 600, img: 'invictus',
    desc: { uk: 'Потрійна дистиляція за класичною англійською технологією. Карпатський ялівець, цитрусові та пряні трави — для коктейлів і в чистому вигляді.', en: 'Triple distilled using classic English technology. Carpathian juniper, citrus and spicy herbs — for cocktails and for drinking neat.' } },
  { slug: 'liqueur-cherry', cat: 'liqueur', name: { uk: 'Вишня', en: 'Cherry' }, kind: { uk: 'Наливка', en: 'Liqueur' }, volume: l05, abv: 25, price: 275, img: 'cherry',
    desc: { uk: 'На основі ракії подвійної дистиляції, натуральних вишень, гвоздики та м’яти. Аромат: вишня, мигдаль, прянощі. Смак: в міру солодкуватий, з гірчинкою спецій.', en: 'Made on double-distilled rakia with natural cherries, cloves and mint. Aroma: cherry, almond, spices. Taste: moderately sweet with bitter spice.' } },
  { slug: 'liqueur-blackcurrant', cat: 'liqueur', name: { uk: 'Чорна смородина', en: 'Black Currant' }, kind: { uk: 'Наливка', en: 'Liqueur' }, volume: l05, abv: 25, price: 275, img: 'blackcurrant',
    desc: { uk: 'На основі ракії подвійної дистиляції, натуральних ягід смородини, кориці та дягелю. Аромат: чорна смородина, кориця, прянощі. Смак: в міру солодкуватий, з гірчинкою спецій.', en: 'Made on double-distilled rakia with natural currants, cinnamon and angelica. Aroma: black currant, cinnamon, spices. Taste: moderately sweet with bitter spice.' } },
  { slug: 'gift-set-four', cat: 'gift', name: { uk: 'Набір «Біла Гуральня»', en: '“Bila Huralnia” gift set' }, kind: { uk: 'Подарунковий набір · 4 пляшки', en: 'Gift set · 4 bottles' }, volume: { uk: '4\u00a0×\u00a00,7\u00a0л', en: '4\u00a0×\u00a00.7\u00a0l' }, abv: 45, price: 1540, img: 'gift-set-4',
    desc: { uk: 'Чотири класики: Чача, Ракія, Бузиново-житній та Бузиново-ячмінний самогони.', en: 'Four classics: Chacha, Rakia, Elderberry-Rye and Elderberry-Barley samohon.' } },
  { slug: 'glory-to-ukraine', cat: 'gift', name: { uk: 'Бузиново-житній «Слава Україні»', en: 'Elderberry-Rye “Glory to Ukraine”' }, kind: { uk: 'У подарунковому ящику-футлярі', en: 'In a gift case' }, volume: l07, abv: 45, price: 715, img: 'glory-box', desc: elderRye },
  { slug: 'seven-grains-oak-case', cat: 'gift', name: { uk: '7 злаків у дубовому футлярі', en: '7 Grains in an oak case' }, kind: { uk: 'Дистилят преміальний', en: 'Premium distillate' }, volume: l07, abv: 45, price: 750, img: 'oak-box', desc: sevenGrains },
  { slug: 'gift-set-twelve', cat: 'gift', name: { uk: 'Набір 12 пляшечок', en: 'Set of 12 miniatures' }, kind: { uk: 'Подарунковий набір', en: 'Gift set' }, volume: { uk: '12\u00a0×\u00a00,05\u00a0л', en: '12\u00a0×\u00a00.05\u00a0l' }, abv: 45, price: 930, img: 'set-12' },
  { slug: 'oak-case', cat: 'gift', name: { uk: 'Дубовий футляр', en: 'Oak gift case' }, kind: { uk: 'Без пляшки', en: 'Bottle not included' }, volume: { uk: 'під\u00a00,7\u00a0л', en: 'fits\u00a00.7\u00a0l' }, abv: 0, price: 330, img: 'oak-box' },
];

export const categories: Category[] = ['samohon', 'distillate', 'gin', 'liqueur', 'gift'];
export const bySlug = (slug: string) => products.find((p) => p.slug === slug);

import I18n from 'react-native-i18n';
let en = require('./i18n/en.json');
let ar = require('./i18n/ar.json');
let fr = require('./i18n/fr.json');
let zh = require('./i18n/zh.json');

I18n.fallbacks = true;
I18n.translations = {
     // Modification des langues

     // Nouvelle implémentation
     en,
     fr,
     ar,
     zh
}
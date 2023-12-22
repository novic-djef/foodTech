const dbname="foodtech"
//const dbmarker="ilinksmarkers"
var datastore =require('react-native-local-mongodb');
const items = {};

export const db = new datastore({ filename: dbname, autoload: true });
//export const dbmarkers = new datastore({ filename: dbmarkers, autoload: true });

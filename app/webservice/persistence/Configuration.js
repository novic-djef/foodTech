import {db} from './db';
import {AsyncStorage} from 'react-native';

export default class Configuration {

    constructor() {

    }

    async getCurrentLangue() {
        const da = await _getData()
        if (da) resolve(da)
        else reject(da)
    }

    async getCurrentPasValue() {
        const pasObject = await _getPasData()
        if (pasObject) {
            return pasObject.valeur_int;
        } else return pasObject;
    }

    async getCurrentPubValue() {
        const pasObject = await _getPubData()
        console.warn(pasObject)
        if (pasObject) {
            return pasObject.valeur_bool;
        } else return pasObject;
    }

    async setPubActive(data) {
        try {
            if (data.pub) {
                await AsyncStorage.setItem('pubObject', JSON.stringify(data.pub));
                db.update({"configuration.pub": {$exists: true}}, {configuration: {pub: data.pub}}, {upsert: true}, (err, num, upsert) => {
                    console.log([err, num, upsert])
                })
            }
        } catch (error) {
            console.warn(error)
        }

    }

    _getPubData() {
        return new Promise(async (resolve, reject) => {

            try {
                const ty = await AsyncStorage.getItem('pubObject')
                resolve(JSON.parse(ty))
            } catch (err) {
                reject(err)

            }

        })
    }

    setCurrentLangue(lang) {
        _storeData(lang)
        db.update({"configuration.lang": {$exists: true}}, {configuration: {lang: lang}}, {upsert: true}, (err, num, upsert) => {
            console.log([err, num, upsert])
        })
    }

    setCurrentPas = async (pas) => {
        try {
            await AsyncStorage.setItem('@config:pasObject', JSON.stringify(pas.pas));
        } catch (error) {
            console.warn(error)
        }
        db.update({"configuration.pas": {$exists: true}}, {configuration: {pas: pas.pas}}, {upsert: true}, (err, num, upsert) => {
            console.log([err, num, upsert])
        })
    }
    _getPasData = () => {
        return new Promise(async (resolve, reject) => {

            try {
                const ty = await AsyncStorage.getItem('@config:pasObject')
                resolve(JSON.parse(ty))
            } catch (err) {
                reject(err)

            }

        })
    }
    _storeData = async (lang) => {
        try {
            await AsyncStorage.setItem('@config:lang', lang.value);
        } catch (error) {
            console.warn(error)
        }
    };
    _getData = () => {
        return new Promise(async (resolve, reject) => {

            try {
                const ty = await AsyncStorage.getItem('@config:lang')
                resolve(ty)
            } catch (err) {
                reject(err)

            }

        })
    }
}
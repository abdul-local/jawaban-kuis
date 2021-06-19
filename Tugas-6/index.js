
const libFunc=require('./lib/funcLib');
const sapa=libFunc.sapa;
const convert=libFunc.convert;
const checkScore=libFunc.checkScore;
const filterData=libFunc.filterData;

const args=process.argv;

switch (args[2]) {
    case "sapa":
        let name=args[3];
        sapa(name);
        break;
    case "convert":
        let name1=args[3];
        let domisi=args[4];
        let umur=args[5];
        console.log(convert(name1,domisi,umur));
        break;
    case "checkScore":
        let inputan=args[3];
        console.log(checkScore(inputan));
        break;
    case "filterData":
        let inputan2=args[3];
        console.log(filterData(inputan2));
    break;

    default:
        break;
}
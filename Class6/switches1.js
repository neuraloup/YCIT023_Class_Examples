let x = "ON";
let province = "";

switch(x)
{
    case "QC":
        province = "Quebec";
        break;
    case "ON":
        province = "Ontario";
        break;
    case "BC":
        province = "British Columbia";
        break;
    // default:
    //     province = "Unknown"
}

console.log(province);
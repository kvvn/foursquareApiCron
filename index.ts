/**
 * Created by kvvn on 9/7/16.
 */
declare var require: any;
var needle = require('needle');


import {Group} from "./Group";
//need this data for auth
var Client_ID : string = '',
    Client_Secret: string = '',
    groups : Array<Group>,
    items : Array<any>,
    queries : Array<string> = ['soccer stadium'];

var API_BASE_URL : string = 'https://api.foursquare.com/v2/venues/explore?' +
    'oauth_token=&v=20160907';

needle.get(GetURL(), GetItems);

function GetURL(): string {
    return API_BASE_URL + '&near=Kyiv&query="stadium"';
}

function GetItems(err, res){
    if (err) throw err;
    groups = res.body.response.groups;

    for(var i = 0; i<groups.length; i++) {
        console.log(groups[i].items[0].venue.location.lat);
        //items = groups[i].items;
        //for(var k = 0; k<items.length; k++) {
        //    console.log(items[k].venue);
        //}
    }
}


/*
*
* http://www.geonames.org/advanced-search.html?q=&country=UA&featureClass=P&continentCode=EU&startRow=50
*
* */
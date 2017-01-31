/**
 * Created by kvvn on 9/8/16.
 */

import {Location} from "./Location";
import {Category} from "./Category";

export default class Venue {
    id: string;
    name: string;
    url: string;
    location: Location;
    categories: Array<Category>
}


// export {Venue};
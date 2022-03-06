import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer zSnFUoxqLtcflCc-jWDpF3Suv5Ay4PZhC8V3gJOzwF58VhL_YZ1W3mAu8Igz4JlPcw93FqDRMNgpUUAwJFfo-wAXbTLfxkiAh-tzeqSTTEvB6lphod1YDIMbvMr5YHYx'
    }
});